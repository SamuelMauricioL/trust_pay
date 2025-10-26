#!/bin/bash

# Script para desplegar CourseEscrow en Starknet Mainnet
# ⚠️ IMPORTANTE: Asegúrate de tener ETH en tu wallet para pagar gas fees

set -e  # Exit on error

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Deployment Script - CourseEscrow to Starknet Mainnet${NC}\n"

# Cargar variables de entorno
if [ -f .env.deployment ]; then
    source .env.deployment
    echo -e "${GREEN}✓ Variables cargadas de .env.deployment${NC}"
else
    echo -e "${RED}✗ Error: .env.deployment no encontrado${NC}"
    echo "Crea el archivo .env.deployment con las configuraciones necesarias"
    exit 1
fi

# Verificar que las variables estén configuradas
if [ -z "$ACCOUNT_PRIVATE_KEY" ]; then
    echo -e "${RED}✗ Error: ACCOUNT_PRIVATE_KEY no está configurada en .env.deployment${NC}"
    echo "Agrega tu private key en el archivo .env.deployment"
    exit 1
fi

echo -e "\n${YELLOW}📋 Configuración:${NC}"
echo "  RPC URL: $STARKNET_RPC_URL"
echo "  Account: $ACCOUNT_ADDRESS"
echo "  ETH Token: $ETH_TOKEN_ADDRESS"
echo "  Oracle Address: $ORACLE_ADDRESS"

echo -e "\n${YELLOW}⚠️  ATENCIÓN: Estás desplegando en MAINNET${NC}"
echo "Esto consumirá ETH real para gas fees (~0.001-0.01 ETH)"
read -p "¿Continuar? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelado"
    exit 0
fi

# Compilar el contrato
echo -e "\n${YELLOW}📦 Compilando contrato...${NC}"
scarb build
echo -e "${GREEN}✓ Contrato compilado${NC}"

# Archivo del contrato compilado
CONTRACT_FILE="target/dev/sc_trust_pay_CourseEscrow.contract_class.json"

if [ ! -f "$CONTRACT_FILE" ]; then
    echo -e "${RED}✗ Error: Contrato compilado no encontrado en $CONTRACT_FILE${NC}"
    exit 1
fi

echo -e "\n${YELLOW}🔍 Declarando contrato en Starknet...${NC}"

# Declare el contrato (esto registra la clase del contrato)
DECLARE_OUTPUT=$(sncast \
    --url "$STARKNET_RPC_URL" \
    --account-address "$ACCOUNT_ADDRESS" \
    --private-key "$ACCOUNT_PRIVATE_KEY" \
    declare \
    --contract-name CourseEscrow \
    --fee-token eth 2>&1)

echo "$DECLARE_OUTPUT"

# Extraer class hash del output
CLASS_HASH=$(echo "$DECLARE_OUTPUT" | grep -o "class_hash: 0x[0-9a-fA-F]*" | cut -d' ' -f2)

if [ -z "$CLASS_HASH" ]; then
    # Intentar con formato alternativo
    CLASS_HASH=$(echo "$DECLARE_OUTPUT" | grep -o "0x[0-9a-fA-F]\{64\}" | head -1)
fi

if [ -z "$CLASS_HASH" ]; then
    echo -e "${RED}✗ Error: No se pudo obtener el class_hash${NC}"
    echo "Verifica el output arriba para más detalles"
    exit 1
fi

echo -e "${GREEN}✓ Contrato declarado${NC}"
echo -e "  Class Hash: ${CLASS_HASH}"

echo -e "\n${YELLOW}🚀 Desplegando contrato...${NC}"

# Deploy el contrato con los parámetros del constructor
DEPLOY_OUTPUT=$(sncast \
    --url "$STARKNET_RPC_URL" \
    --account-address "$ACCOUNT_ADDRESS" \
    --private-key "$ACCOUNT_PRIVATE_KEY" \
    deploy \
    --class-hash "$CLASS_HASH" \
    --constructor-calldata "$ETH_TOKEN_ADDRESS" "$ORACLE_ADDRESS" \
    --fee-token eth 2>&1)

echo "$DEPLOY_OUTPUT"

# Extraer contract address del output
CONTRACT_ADDRESS=$(echo "$DEPLOY_OUTPUT" | grep -o "contract_address: 0x[0-9a-fA-F]*" | cut -d' ' -f2)

if [ -z "$CONTRACT_ADDRESS" ]; then
    CONTRACT_ADDRESS=$(echo "$DEPLOY_OUTPUT" | grep -o "0x[0-9a-fA-F]\{64\}" | head -1)
fi

if [ -z "$CONTRACT_ADDRESS" ]; then
    echo -e "${RED}✗ Error: No se pudo obtener la dirección del contrato${NC}"
    exit 1
fi

echo -e "\n${GREEN}✅ ¡Deployment exitoso!${NC}\n"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}📍 Contract Address:${NC} $CONTRACT_ADDRESS"
echo -e "${GREEN}🔗 Class Hash:${NC} $CLASS_HASH"
echo -e "${GREEN}🌐 Explorador:${NC} https://starkscan.co/contract/$CONTRACT_ADDRESS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Guardar información del deployment
echo "$CONTRACT_ADDRESS" > .deployed_contract_address
echo "$CLASS_HASH" > .deployed_class_hash

echo -e "\n${YELLOW}💡 Próximos pasos:${NC}"
echo "1. Verifica el contrato en Starkscan"
echo "2. Actualiza ESCROW_CONTRACT_ADDRESS en tu frontend"
echo "3. Prueba las funciones del contrato"
