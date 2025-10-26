# Modelo de Costos de TrustPay en Starknet 🚀

## 📊 Contexto de Starknet

### Token STRK
- **Precio actual:** $0.1246 USD
- **Símbolo:** STRK
- **Red:** Starknet Layer 2
- **Precio promedio gas:** 4.5928 Gwei

### Cálculo de Gas

El gas en Starknet se cobra en token STRK, no depende del monto de la transacción.

**Fórmula:**
```
Gas Total = Unidades de Gas Requeridas × Precio de Gas
```

**Estimación para Smart Contract TrustPay:**
- Asumimos que la interacción con el contrato es ~3x más compleja que una transferencia simple
- Costo por operación básica: 0.119 STRK
- Costo por operación de contrato: 0.119 STRK × 3 = **0.357 STRK**

**En USD:**
- 0.357 STRK × $0.1246 = **$0.045 USD** (por operación)
- Promedio para 5 transacciones: 1.785 STRK ≈ **$0.22 USD**

**Rango Real según Congestión:**
- Mínimo (red normal): **$0.19 USD**
- Promedio: **$0.22 USD**
- Máximo (red congestionada): **$0.31 USD**

## 💰 Modelo de Tarifas TrustPay

### 1. Fee de Servicio (TrustPay)
```
1% del monto de la transacción
```

**Ejemplos:**
- $100 → $1.00
- $1,000 → $10.00
- $10,000 → $100.00

### 2. Costo de Gas (Validadores Starknet)
```
~$0.22 USD (fijo, no depende del monto)
```

**Convertido a STRK:**
- $0.22 / $0.1246 = **~1.77 STRK**

### 3. Costo Total (Sin Disputa)
```
Costo Total = (Monto × 1%) + $0.22
```

**Ejemplos:**

| Monto    | 1% Servicio | Gas STRK | Total   |
|----------|-------------|----------|---------|
| $100     | $1.00       | $0.22    | $1.22   |
| $1,000   | $10.00      | $0.22    | $10.22  |
| $10,000  | $100.00     | $0.22    | $100.22 |

### 4. Fee Adicional por Disputa
```
+1.5% del monto (solo si hay disputa con arbitraje IA)
```

**Ejemplos con Disputa:**

| Monto    | Base    | +Disputa | Total Con Disputa |
|----------|---------|----------|-------------------|
| $100     | $1.22   | $1.50    | $2.72             |
| $1,000   | $10.22  | $15.00   | $25.22            |
| $10,000  | $100.22 | $150.00  | $250.22           |

## 📈 Comparación con Competencia

### Stripe
```
2.9% + $0.30 (siempre)
```

### PayPal
```
3.0% + $0.49 (siempre)
```

### TrustPay
```
Sin disputa: 1% + $0.22 gas
Con disputa: 2.5% + $0.22 gas
```

## 💡 Ventajas del Modelo

### 1. Gas Fijo vs Porcentaje
**Ventaja en transacciones grandes:**
- Stripe $10,000: $290.30
- TrustPay $10,000: $100.22
- **Ahorro:** $190.08 (65%)

### 2. Incentivo a Resolver sin Disputa
- Transacción normal: 1% + $0.22
- Con disputa: 2.5% + $0.22
- Diferencia: +1.5% del monto

### 3. Transparencia On-Chain
- Todo registrado en Starknet
- Verificable públicamente
- Gas real cobrado en STRK

### 4. Predictibilidad
El gas no varía significativamente con el monto:
- $100: gas representa 18% del fee total
- $10,000: gas representa 0.2% del fee total

## 🔧 Implementación Técnica

### Smart Contract
Nuestro contrato realiza aproximadamente **5 operaciones**:
1. Depósito inicial
2. Verificación de condiciones
3. División de fondos
4. Transferencia a vendedor
5. Transferencia a comprador (si aplica)

**Costo estimado:**
```
5 operaciones × 0.357 STRK = 1.785 STRK ≈ $0.22
```

### Variables Dinámicas
```javascript
// Precio actualizado de STRK (debe integrarse con oracle)
const STRK_PRICE_USD = 0.1246;

// Gas promedio (puede variar con congestión)
const GAS_FEE_MIN = 0.19;
const GAS_FEE_AVG = 0.22;
const GAS_FEE_MAX = 0.31;

// Fee de servicio
const SERVICE_FEE_PERCENT = 0.01; // 1%

// Fee de disputa
const DISPUTE_FEE_PERCENT = 0.015; // 1.5%
```

## 📝 Notas Importantes

### Variabilidad del Gas
El costo de gas puede variar por:
1. **Congestión de red** (más demanda = más caro)
2. **Precio de STRK** (volatilidad del token)
3. **Complejidad real del contrato** (puede ser más/menos que estimado)

### Cálculo Real
**El gas real se calcula y cobra en tiempo de ejecución:**
```
Gas Real = Unidades Ejecutadas × Precio Gas Actual (en STRK)
```

### Actualización de Precios
Para producción, se recomienda integrar un **oracle de precios** (ej: Pragma Oracle) para:
- Precio STRK/USD en tiempo real
- Estimación precisa de gas
- Conversión USD ↔ STRK

## 🎯 Resumen Ejecutivo

**Para transacción de $1,000:**

| Concepto              | Monto    | En STRK  | Destinatario         |
|-----------------------|----------|----------|----------------------|
| Ingreso TrustPay      | $10.00   | 79.4     | TrustPay Inc.        |
| Costo Gas             | $0.22    | 1.77     | Validadores Starknet |
| **Total Cliente**     | **$10.22** | **81.17** | -                  |
| vs Stripe             | $29.30   | -        | -                    |
| **Ahorro**            | **$19.08** | **65%** | **Cliente**         |

---

**Última actualización:** Octubre 2025  
**Precio STRK referencia:** $0.1246 USD  
**Red:** Starknet Mainnet
