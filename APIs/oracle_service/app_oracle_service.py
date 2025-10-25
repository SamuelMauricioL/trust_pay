# APIs/oracle_service/app_oracle_service.py

from flask import Flask, request, jsonify
import time
import requests
import random
from datetime import datetime, timedelta

# Corrección: Uso de __name__
app = Flask(__name__)

# Base de datos simulada para disputas
DISPUTES_DB = {}

# Dirección del Smart Contract de Starknet (Mock)
STARKNET_CONTRACT_API = "http://localhost:5002/starknet/invoke" 

# --- FUNCIONES SIMULADAS ---

def send_email(recipient, subject, body):
    """Simula el envío de correo electrónico."""
    print(f"\n📧 [EMAIL]: Enviado a {recipient}. Asunto: {subject}")
    # Nota: En un entorno real, aquí se usaría un servicio como SendGrid o Mailgun

def llm_dispute_resolution(buyer_reason, owner_objection):
    """
    SIMULACIÓN: LLM analiza la disputa y da un veredicto.
    Retorna el porcentaje de devolución (0, 25, 50, 75, 100).
    """
    print("🧠 [LLM]: Analizando disputa para veredicto...")
    # Lógica de decisión simplificada
    if "curso malo" in buyer_reason.lower() and "no objeta" in owner_objection.lower():
        return 100 
    elif "funcionalidad" in buyer_reason.lower() and "parcialmente funcional" in owner_objection.lower():
        return 50 
    else:
        return random.choice([0, 25, 75]) 

# --- ENDPOINTS DEL ORÁCULO ---

@app.route('/dispute/start', methods=['POST'])
def start_dispute():
    data = request.json
    purchase_id = data.get('purchase_id')
    buyer_reason = data.get('buyer_reason')
    owner_email = data.get('owner_email')
    buyer_email = data.get('buyer_email')
    deadline_hours = data.get('owner_response_deadline_h', 48)
    
    if purchase_id in DISPUTES_DB:
        return jsonify({"status": "error", "message": "Dispute already exists."}), 400
    
    # 1. Almacenar disputa y establecer plazo
    deadline = datetime.now() + timedelta(hours=deadline_hours)
    
    DISPUTES_DB[purchase_id] = {
        "buyer_reason": buyer_reason,
        "owner_objection": "No objeta (aún)", # Estado inicial
        "owner_email": owner_email,
        "buyer_email": buyer_email,
        "deadline": deadline.isoformat(),
        "status": "WAITING_OWNER",
        "deadline_hours": deadline_hours
    }
    
    # 2. Notificar al dueño para la objeción
    send_email(
        owner_email,
        f"🚨 Aviso de Devolución para Compra #{purchase_id}",
        f"Un comprador ha solicitado la devolución. Motivo: {buyer_reason}. Tienes {deadline_hours} horas para objetar. Plazo: {deadline.strftime('%Y-%m-%d %H:%M')}"
    )
    
    return jsonify({"status": "success", "message": "Dispute initiated, owner notified."}), 200

@app.route('/dispute/owner-objection', methods=['POST'])
def receive_owner_objection():
    """Endpoint simulado: Un propietario envía su objeción por un formulario web/email."""
    data = request.json
    purchase_id = data.get('purchase_id')
    objection = data.get('objection')
    
    if purchase_id not in DISPUTES_DB or DISPUTES_DB[purchase_id]['status'] != "WAITING_OWNER":
        return jsonify({"status": "error", "message": "Dispute not found or already closed."}), 400

    dispute = DISPUTES_DB[purchase_id]
    dispute['owner_objection'] = objection
    dispute['status'] = "READY_FOR_LLM"
    
    print(f"✅ [ORACLE]: Objeción recibida para {purchase_id}. Iniciando resolución LLM...")
    
    # 3. Ejecutar LLM inmediatamente
    return resolve_dispute(purchase_id)

# --- LÓGICA DE RESOLUCIÓN CENTRAL ---

@app.route('/dispute/resolve-dispute/<string:purchase_id>', methods=['POST'])
def api_resolve_dispute(purchase_id):
    """Wrapper para la resolución, útil para pruebas o CRON manual."""
    return resolve_dispute(purchase_id)

def resolve_dispute(purchase_id):
    """Ejecuta el LLM, notifica y llama al Smart Contract."""
    dispute = DISPUTES_DB.get(purchase_id)
    if not dispute:
        return jsonify({"status": "error", "message": "Dispute not found."}), 404

    # 1. LLM toma la decisión
    refund_percentage = llm_dispute_resolution(
        dispute['buyer_reason'],
        dispute['owner_objection']
    )
    
    # 2. Notificar a ambas partes el veredicto
    result_message = f"Veredicto Final: Se aprueba {refund_percentage}% de devolución."
    send_email(dispute['buyer_email'], f"✅ Veredicto Final Devolución #{purchase_id}", result_message)
    send_email(dispute['owner_email'], f"✅ Liquidación de Devolución #{purchase_id}", result_message)

    # 3. Llamada final al Smart Contract
    try:
        starknet_payload = {
            "purchase_id": purchase_id,
            "percentage": refund_percentage,
            "timestamp": time.time()
        }
        
        response = requests.post(STARKNET_CONTRACT_API, json=starknet_payload)
        response.raise_for_status()

        dispute['status'] = "SETTLED_ON_CHAIN"
        print(f"💰 [STARKNET]: Transacción enviada y confirmada por Mock para {purchase_id}.")
        return jsonify({"status": "settled", "percentage": refund_percentage, "on_chain": True}), 200

    except requests.exceptions.RequestException as e:
        print(f"Error al llamar al Smart Contract Mock: {e}")
        dispute['status'] = "SETTLEMENT_FAILED"
        return jsonify({"status": "error", "message": "Failed to call Smart Contract Mock."}), 500

if __name__ == '__main__':
    # Ejecutando el Oráculo en el puerto 5001
    print("🔮 SERVICIO ORÁCULO (LLM Manager) corriendo en http://localhost:5001")
    app.run(port=5001, debug=True)