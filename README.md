# TrustPay 🚀

<div align="center">

![TrustPay Logo](https://img.shields.io/badge/TrustPay-Blockchain_Escrow-6366f1?style=for-the-badge)
![Starknet](https://img.shields.io/badge/Starknet-L2-ec796b?style=for-the-badge)
![Cairo](https://img.shields.io/badge/Cairo-1.0-orange?style=for-the-badge)
![AI Powered](https://img.shields.io/badge/AI-Powered-00d4ff?style=for-the-badge)

**Plataforma de pagos seguros con blockchain, smart contracts de escrow y arbitraje con IA**

[Demo en Vivo](https://trust-pay-7vyx.vercel.app/) • [Landing Page](https://samuelauriciol.github.io/trust_pay/) • [Documentación](#documentación)

</div>

---

## 📋 Tabla de Contenidos

- [¿Qué es TrustPay?](#qué-es-trustpay)
- [Características Principales](#características-principales)
- [Modelo de Monetización](#modelo-de-monetización)
- [Arquitectura](#arquitectura)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Smart Contract](#smart-contract)
- [Demo Web](#demo-web)
- [APIs y Servicios](#apis-y-servicios)
- [Tecnologías](#tecnologías)
- [Roadmap](#roadmap)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## 🎯 ¿Qué es TrustPay?

**TrustPay** es una plataforma innovadora de pagos seguros que combina la tecnología blockchain de **Starknet** con inteligencia artificial para resolver el problema de confianza en transacciones digitales.

### 🔥 Problema que Resuelve

En transacciones digitales (freelancing, cursos online, productos digitales, etc.), existe un **problema de confianza**:
- 😰 **Compradores**: Temen pagar y no recibir el producto/servicio
- 😤 **Vendedores**: Temen entregar y no recibir el pago
- 💸 **Plataformas tradicionales**: Cobran entre 2.9% - 3% + tarifas fijas

### ✨ Solución TrustPay

TrustPay actúa como **intermediario neutral** usando smart contracts que:
1. **Retienen fondos** hasta que se cumplen las condiciones
2. **Liberan automáticamente** al vendedor si todo está bien
3. **Arbitran con IA** en caso de disputa
4. **Cobran hasta 67% menos** que plataformas tradicionales

---

## 🌟 Características Principales

### 🔐 Smart Contract Escrow
- Depósito seguro de fondos en blockchain
- Liberación automática por tiempo o condiciones
- Inmutable y verificable on-chain

### 🤖 Arbitraje con IA
- Oráculo de decisión basado en IA (GPT-4)
- Análisis imparcial de evidencias
- Resolución justa de disputas en minutos

### ⚡ Starknet L2
- Tarifas de red ultra-bajas ($0.01 - $0.10)
- Transacciones instantáneas
- Escalabilidad masiva

### 💰 Gas Fee de Arbitraje
- Solo ~1% + fee de red (sin disputa)
- +1.5% adicional solo si hay disputa
- Hasta 67% más barato que Stripe/PayPal

### 🌐 Web3 Native
- Conexión con wallets de Starknet
- Sin necesidad de registro centralizado
- Control total de tus fondos

### 🛡️ Seguridad Garantizada
- Código auditado (próximamente)
- Sin puntos únicos de falla
- Transparencia total on-chain

---

## 💰 Modelo de Monetización

### Tarifa Base (Sin Disputa)
```
~1% Gas Fee de Arbitraje + $0.05 fee de red
```

**Rango:** 0.5% - 1.5% (promedio ~1%)

### Fee Adicional por Disputa
```
+1.5% adicional (solo si hay disputa y se activa IA)
```

### Comparación con Competencia

| Plataforma | Transacción $100 | Transacción $1,000 | Transacción $10,000 |
|-----------|------------------|--------------------|--------------------|
| **Stripe** | $3.20 (2.9% + $0.30) | $29.30 | $290.30 |
| **PayPal** | $3.49 (3.0% + $0.49) | $30.49 | $300.49 |
| **TrustPay (sin disputa)** | $1.05 ✅ | $10.05 ✅ | $100.05 ✅ |
| **TrustPay (con disputa)** | $2.55 | $25.05 | $250.05 |
| **Ahorro** | 67% / 20% | 66% / 15% | 66% / 14% |

### 🎯 Ventajas del Modelo

1. **Incentiva buenas prácticas**: Las transacciones sin disputa son mucho más baratas
2. **Sostenible**: El 1% base cubre operación + infraestructura
3. **Justo**: Solo se cobra extra cuando hay arbitraje real
4. **Competitivo**: Aún 66% más barato que Stripe/PayPal sin disputas
5. **Transparente**: Los usuarios saben exactamente cuándo pagarán más

---

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                             │
│  ┌────────────────┐              ┌────────────────┐         │
│  │  Landing Page  │              │   Demo Web     │         │
│  │  (Marketing)   │              │   (dApp)       │         │
│  └────────────────┘              └────────────────┘         │
└────────────────────────┬───────────────────┬────────────────┘
                         │                   │
         ┌───────────────┴───────────────────┴──────────────┐
         │                                                   │
┌────────▼────────┐                           ┌─────────────▼──────┐
│  Smart Contract │◄──────────────────────────│   Starknet Node    │
│   (Cairo 1.0)   │                           │    (Sepolia)       │
└────────┬────────┘                           └────────────────────┘
         │
         │ Events & State
         │
┌────────▼────────────────────────────────────────────────────┐
│                     Backend Services                         │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐      │
│  │ Oracle Mock  │  │ Oracle       │  │  Refund     │      │
│  │ (Testing)    │  │ Service (IA) │  │  Service    │      │
│  └──────────────┘  └──────────────┘  └─────────────┘      │
└──────────────────────────────────────────────────────────────┘
```

### Flujo de Transacción

```
1. 🧑‍💼 Comprador deposita fondos → Smart Contract
2. 📦 Vendedor entrega producto/servicio
3. ⏱️ Período de revisión (ej: 7 días)

   ┌─ Sin problemas ────────────────────────┐
   │  ✅ Auto-liberación al vendedor        │
   │  💰 Comprador: -$100 | Vendedor: +$99  │
   └────────────────────────────────────────┘
   
   ┌─ Con disputa ──────────────────────────┐
   │  🤖 Oracle IA analiza evidencias       │
   │  ⚖️ Decide porcentaje de reembolso     │
   │  💰 Distribución según veredicto       │
   └────────────────────────────────────────┘
```

---

## 📁 Estructura del Proyecto

```
trust_pay/
├── 📄 README.md                    # Este archivo
├── 📋 requirements.txt             # Dependencias Python (backend)
│
├── 🎨 landing_page/                # Marketing & Landing Page
│   ├── index.html                  # Página principal
│   ├── styles.css                  # Estilos modernos con animaciones
│   ├── sections.js                 # Secciones HTML (pricing, features)
│   ├── calculator.js               # Calculadora interactiva de ahorros
│   ├── animations.js               # Efectos JavaScript modernos
│   └── README.md                   # Documentación del landing
│
├── 🎮 demo_web/                    # Aplicación Web (dApp)
│   ├── src/
│   │   ├── components/             # Componentes React
│   │   ├── config/                 # Configuración Starknet
│   │   └── App.jsx                 # Aplicación principal
│   ├── package.json                # Dependencies (React, Starknet.js)
│   └── vite.config.js              # Config Vite
│
├── 📜 sc_trust_pay/                # Smart Contract (Cairo)
│   ├── src/
│   │   └── lib.cairo               # Contrato de Escrow principal
│   ├── Scarb.toml                  # Config Cairo
│   └── deploy_mainnet.sh           # Script de deploy
│
└── 🔌 APIs/                        # Backend Services
    ├── oracle_mock/                # Oracle de prueba
    ├── oracle_service/             # Oracle IA real (GPT-4)
    └── refund_service/             # Servicio de reembolsos
```

---

## 🚀 Instalación

### Requisitos Previos

- **Node.js** >= 18.x
- **Python** >= 3.8
- **Scarb** >= 2.x (para Cairo)
- **Wallet** de Starknet (Argent X o Braavos)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/SamuelMauricioL/trust_pay.git
cd trust_pay
```

### 2. Instalar Dependencias

#### Landing Page (Estático)
```bash
cd landing_page
# No requiere instalación, abrir index.html en navegador
# O usar servidor local:
python3 -m http.server 8000
```

#### Demo Web (React + Vite)
```bash
cd demo_web
npm install
npm run dev
# Abrir http://localhost:5173
```

#### Backend Services (Python)
```bash
pip install -r requirements.txt
```

### 3. Configurar Variables de Entorno

Crear archivo `.env` en la raíz:

```bash
# Starknet
STARKNET_RPC_URL=https://starknet-sepolia.public.blastapi.io
CONTRACT_ADDRESS=0x...
ORACLE_PRIVATE_KEY=0x...

# OpenAI (para Oracle IA)
OPENAI_API_KEY=sk-...

# Configuración
ETH_PRICE_USD=3950
NETWORK=sepolia
```

---

## 💻 Uso

### Demo Web (dApp)

1. **Conectar Wallet**
   ```
   - Instalar Argent X o Braavos
   - Conectar a Starknet Sepolia
   - Obtener fondos de prueba: https://faucet.goerli.starknet.io/
   ```

2. **Crear Transacción**
   ```
   - Ingresar monto en USD
   - Especificar dirección del vendedor
   - Definir período de garantía
   - Confirmar depósito
   ```

3. **Monitorear Estado**
   ```
   - Ver transacción en el contrato
   - Esperar período de revisión
   - Solicitar reembolso si hay problema
   ```

### Smart Contract

#### Deploy a Sepolia

```bash
cd sc_trust_pay
scarb build
./deploy_mainnet.sh
```

#### Interactuar con el Contrato

```bash
# Depositar fondos
starkli invoke <CONTRACT_ADDRESS> deposit \
  --purchase-id 1 \
  --course-owner <SELLER_ADDRESS> \
  --refund-duration 604800 \
  --amount 1000000000000000000

# Liberar fondos (después de expiración)
starkli invoke <CONTRACT_ADDRESS> release_funds \
  --purchase-id 1
```

---

## 📜 Smart Contract

### Funciones Principales

#### `deposit()`
Deposita fondos en el contrato de escrow.

**Parámetros:**
- `purchase_id`: ID único de la transacción
- `course_owner`: Dirección del vendedor
- `refund_duration_seconds`: Duración del período de garantía
- `amount`: Monto en wei

#### `fulfill_refund()`
Ejecuta el reembolso según decisión del oráculo (solo callable por oracle).

**Parámetros:**
- `purchase_id`: ID de la transacción
- `refund_percentage`: 0-100 (porcentaje de reembolso)

#### `release_funds()`
Libera fondos al vendedor automáticamente tras expiración.

**Parámetros:**
- `purchase_id`: ID de la transacción

### Eventos

```cairo
// Al depositar
event Deposited {
    purchase_id: u128,
    buyer: ContractAddress,
    amount: u256
}

// Al liquidar
event Settled {
    purchase_id: u128,
    refund_percentage: u8
}
```

---

## 🎮 Demo Web

Aplicación React con Starknet.js para interactuar con el contrato.

### Características

- 🔗 Conexión con wallets (Argent X, Braavos)
- 💰 Conversión USD → ETH en tiempo real
- 📊 Visualización de transacciones
- ⚡ Estimación de gas fees
- 🎨 UI moderna con Tailwind CSS

### Componentes Principales

```jsx
// Conectar wallet
<ConnectWallet />

// Crear escrow
<CreateEscrow 
  amount={100}
  seller="0x..."
  duration={7 * 24 * 3600}
/>

// Monitorear estado
<TransactionStatus purchaseId={1} />
```

---

## 🔌 APIs y Servicios

### Oracle Service (IA)

Servicio de arbitraje basado en GPT-4 que analiza evidencias y decide disputas.

**Endpoint:**
```
POST /api/oracle/decide
```

**Body:**
```json
{
  "purchase_id": 1,
  "buyer_evidence": "No recibí el curso completo",
  "seller_evidence": "Entregué todos los módulos",
  "transaction_data": {...}
}
```

**Response:**
```json
{
  "decision": "partial_refund",
  "refund_percentage": 50,
  "reasoning": "Ambas partes tienen argumentos válidos..."
}
```

### Refund Service

Servicio automatizado que monitorea transacciones y ejecuta reembolsos.

### Oracle Mock

Versión de prueba del oracle para testing local.

---

## 🛠️ Tecnologías

### Frontend
- **React** 18.3 - UI library
- **Vite** 5.4 - Build tool
- **Tailwind CSS** 3.4 - Styling
- **Starknet.js** 7.6 - Blockchain interaction
- **Lucide React** - Icons

### Smart Contract
- **Cairo** 1.0 - Smart contract language
- **Scarb** - Cairo package manager
- **Starknet** - Layer 2 blockchain

### Backend
- **Python** 3.8+ - Backend services
- **FastAPI** - API framework
- **OpenAI API** - GPT-4 for arbitration
- **Web3.py** - Blockchain interaction

### Infrastructure
- **Vercel** - Frontend hosting
- **GitHub Pages** - Landing page
- **Starknet Sepolia** - Testnet

---

## 🗺️ Roadmap

### ✅ Fase 1: MVP (Completado)
- [x] Smart contract de escrow básico
- [x] Demo web funcional
- [x] Landing page moderna
- [x] Oracle mock para testing

### 🚧 Fase 2: En Desarrollo
- [ ] Oracle IA real con GPT-4
- [ ] Integración con Pragma Oracle (precios)
- [ ] Sistema de reputación
- [ ] Multi-token support (USDC, USDT)

### 🔮 Fase 3: Futuro
- [ ] Mainnet deployment
- [ ] Mobile app (React Native)
- [ ] Marketplace integrado
- [ ] Programa de afiliados
- [ ] SDK para desarrolladores
- [ ] Auditoría de seguridad

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guidelines

- Sigue los estándares de código del proyecto
- Escribe tests para nuevas features
- Actualiza la documentación
- Usa conventional commits

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👥 Equipo

**Samuel Mauricio** - Co-Creator & Lead Developer
- GitHub: [@SamuelMauricioL](https://github.com/SamuelMauricioL)
- Twitter: [@SamuelMauricioL](https://twitter.com/SamuelMauricioL)

**Oskar Mauricio** - Co-Creator & Lead Director
- GitHub: [@AcheZetaa](https://github.com/AcheZetaa)

---

## 🙏 Agradecimientos

- [Starknet](https://www.starknet.io/) - Layer 2 solution
- [StarkWare](https://starkware.co/) - Cairo & tooling
- Comunidad de Starknet Español

---

## 📞 Contacto

- **Demo:** [https://trust-pay-7vyx.vercel.app/](https://trust-pay-7vyx.vercel.app/)
- **Landing:** [https://samuelmauriciol.github.io/trust_pay/](https://samuelmauriciol.github.io/trust_pay/)
- **Email:** samuelmauriciodev@gmail.com
- **GitHub:** [github.com/SamuelMauricioL/trust_pay](https://github.com/SamuelMauricioL/trust_pay)

---

<div align="center">

**Hecho con ❤️ y ☕ por el equipo de TrustPay**

⭐ Si te gusta el proyecto, dale una estrella en GitHub!

</div>
