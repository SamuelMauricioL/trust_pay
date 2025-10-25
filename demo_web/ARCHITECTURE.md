# Arquitectura del Proyecto

## Estructura de Componentes

El proyecto ha sido refactorizado para seguir principios de componentes reutilizables y separación de responsabilidades.

### 📁 Organización de Carpetas

```
src/
├── components/
│   ├── checkout/          # Componentes específicos del checkout
│   │   └── PaymentMethodCard.jsx
│   ├── wallet/            # Componentes relacionados con wallets
│   │   ├── WalletModal.jsx
│   │   ├── WalletButton.jsx
│   │   └── WalletConnectionSection.jsx
│   ├── CheckoutForm.jsx   # Componente principal del formulario
│   ├── Header.jsx
│   └── OrderSummary.jsx
├── hooks/                 # Custom React Hooks
│   └── useWalletConnection.js
└── App.jsx
```

## 🧩 Componentes

### Checkout Components

#### `PaymentMethodCard`
Componente reutilizable para renderizar cualquier método de pago.

**Props:**
- `id` (string): Identificador único del método de pago
- `isSelected` (boolean): Si el método está seleccionado
- `onSelect` (function): Callback cuando se selecciona
- `icon` (ReactNode): Ícono del método de pago
- `title` (string): Título del método
- `statusBadge` (ReactNode, optional): Badge de estado (ej: iconos de tarjetas)
- `children` (ReactNode, optional): Contenido expandible cuando está seleccionado

**Uso:**
```jsx
<PaymentMethodCard
  id="wallet"
  isSelected={paymentMethod === 'wallet'}
  onSelect={setPaymentMethod}
  icon={<img src="..." />}
  title="Conectar a wallet"
  statusBadge={<span>✓ Conectada</span>}
>
  {/* Contenido expandible */}
</PaymentMethodCard>
```

### Wallet Components

#### `WalletModal`
Modal para seleccionar entre las wallets disponibles.

**Props:**
- `isOpen` (boolean): Controla la visibilidad del modal
- `onClose` (function): Callback para cerrar el modal
- `wallets` (array): Lista de wallets disponibles
- `onSelectWallet` (function): Callback cuando se selecciona una wallet

#### `WalletButton`
Botón individual para cada wallet en el modal.

**Props:**
- `wallet` (object): Objeto con datos de la wallet (id, name, icon, instance)
- `onClick` (function): Callback al hacer clic

#### `WalletConnectionSection`
Sección que muestra el estado de conexión de la wallet.

**Props:**
- `isConnecting` (boolean): Si está en proceso de conexión
- `walletConnected` (boolean): Si la wallet está conectada
- `walletAddress` (string): Dirección de la wallet conectada
- `error` (string): Mensaje de error si existe
- `onConnect` (function): Callback para iniciar conexión
- `onDisconnect` (function): Callback para desconectar
- `formatAddress` (function): Función para formatear la dirección

## 🎣 Custom Hooks

### `useWalletConnection`
Hook que encapsula toda la lógica de conexión con wallets Starknet.

**Retorna:**
```javascript
{
  isConnecting: boolean,
  walletConnected: boolean,
  walletAddress: string,
  error: string | null,
  starknetInstance: object | null,
  detectWallets: () => array,
  connectWallet: (wallet) => Promise<void>,
  disconnectWallet: () => void,
  formatAddress: (address) => string
}
```

**Uso:**
```jsx
const {
  isConnecting,
  walletConnected,
  walletAddress,
  error,
  connectWallet,
  disconnectWallet,
  formatAddress
} = useWalletConnection();
```

## 🔄 Flujo de Conexión de Wallet

1. Usuario hace clic en "Seleccionar Wallet"
2. `detectWallets()` escanea `window` buscando wallets instaladas
3. Se abre `WalletModal` mostrando opciones disponibles
4. Usuario selecciona una wallet
5. `connectWallet(wallet)` solicita conexión mediante `wallet.instance.enable()`
6. Si se conecta exitosamente, actualiza estados
7. `WalletConnectionSection` muestra la dirección conectada

## 🎨 Ventajas de la Refactorización

1. **Reutilizabilidad**: `PaymentMethodCard` se usa para todos los métodos de pago
2. **Separación de Responsabilidades**: Cada componente tiene una única responsabilidad
3. **Mantenibilidad**: Cambios en un componente no afectan a otros
4. **Testeable**: Componentes pequeños son más fáciles de testear
5. **Legibilidad**: Código más limpio y fácil de entender
6. **Custom Hook**: Lógica de wallet reutilizable en otros componentes

## 📝 Convenciones

- Componentes en `PascalCase`
- Hooks empiezan con `use`
- Props en `camelCase`
- Archivos JSX para componentes React
- Archivos JS para hooks y utilidades
