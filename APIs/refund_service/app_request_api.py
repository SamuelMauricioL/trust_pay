# app_request_api.py (API del Servicio de Devoluciones)
from flask import Flask, request, jsonify
import time
import requests # Para llamar al Oráculo
from datetime import datetime

app = Flask(__name__)

# Base de datos simulada para solicitudes de devolución
# En producción, se usaría PostgreSQL, MongoDB, etc.
REFUNDS_DB = {}

# Dirección del Oráculo para notificar el inicio de la disputa
ORACLE_API_URL = "http://localhost:5001/dispute/start"

@app.route('/request-refund', methods=['POST'])
def handle_request_refund():
    data = request.json
    
    # Parámetros esperados
    purchase_id = data.get('purchase_id')
    buyer_starknet_addr = data.get('buyer_starknet_addr')
    refund_reason = data.get('refund_reason')
    
    # --- VALIDACIONES (Simulando la lógica de Starknet) ---
    
    # 1. Validación de existencia y pertenencia (Consulta al Smart Contract)
    # En un entorno real, la API CONSULTARÍA el estado del Smart Contract
    # para validar:
    #   a) Que el purchase_id exista.
    #   b) Que el buyer_starknet_addr sea el comprador registrado.
    #   c) Que el plazo de devolución (expiration_time) no haya vencido.
    
    # --- SIMULACIÓN DE VALIDACIÓN EXITOSA ---
    is_valid = True 
    if not is_valid:
        return jsonify({"status": "error", "message": "Validation failed: Purchase not found or expired."}), 400

    if purchase_id in REFUNDS_DB:
        return jsonify({"status": "error", "message": "Refund already requested."}), 400
        
    # 2. Almacenar la solicitud e iniciar la disputa
    REFUNDS_DB[purchase_id] = {
        "buyer_addr": buyer_starknet_addr,
        "reason": refund_reason,
        "status": "PENDING_OWNER_RESPONSE",
        "timestamp": time.time()
    }
    
    # 3. Notificar al Oráculo para que inicie el proceso de disputa por correo
    try:
        response = requests.post(ORACLE_API_URL, json={
            "purchase_id": purchase_id,
            "buyer_reason": refund_reason,
            # Se requiere el owner_email y buyer_email, obtenidos de tu BD interna
            "owner_email": "owner@example.com", 
            "buyer_email": "buyer@example.com",
            "owner_response_deadline_h": 48 # Plazo de respuesta variable (48h en este caso)
        })
        response.raise_for_status() # Lanza excepción para códigos 4xx/5xx
        
        return jsonify({
            "status": "success",
            "message": "Refund request accepted. Dispute process initiated."
        }), 200
        
    except requests.exceptions.RequestException as e:
        print(f"Error calling Oracle API: {e}")
        REFUNDS_DB.pop(purchase_id) # Eliminar la solicitud si el oráculo falla
        return jsonify({"status": "error", "message": "Failed to initiate dispute process (Oracle failure)."}), 500

if __name__ == '__main__':
    app.run(port=5000)