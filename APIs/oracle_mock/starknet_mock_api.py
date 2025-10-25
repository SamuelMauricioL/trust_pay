# APIs/starknet_mock/starknet_mock_api.py
from flask import Flask, request, jsonify

app = Flask(__name__)

# Base de datos simulada para registrar transacciones on-chain
ON_CHAIN_TX_LOG = {}

@app.route('/starknet/invoke', methods=['POST'])
def invoke_starknet_contract():
    data = request.json
    purchase_id = data.get('purchase_id')
    percentage = data.get('percentage')
    
    if not all([purchase_id, percentage is not None]):
        return jsonify({"status": "error", "message": "Missing purchase_id or percentage."}), 400

    # Simula la confirmación de la transacción en la red Starknet
    tx_hash = f"0xSTARK_TX_{int(time.time() * 1000)}"
    
    ON_CHAIN_TX_LOG[purchase_id] = {
        "tx_hash": tx_hash,
        "refund_percentage": percentage,
        "status": "ACCEPTED"
    }

    print(f"\n⛓️ [STARKNET MOCK (5002)]: Transacción simulada aceptada.")
    print(f"   Purchase ID: {purchase_id} | Porcentaje: {percentage}%")
    print(f"   Hash de Tx: {tx_hash}\n")

    return jsonify({"status": "success", "tx_hash": tx_hash}), 200

if __name__ == '__main__':
    # Ejecutando el Mock de Starknet en el puerto 5002
    print("⛓️ MOCK DE STARKNET (Contract) corriendo en http://localhost:5002")
    app.run(port=5002, debug=True)