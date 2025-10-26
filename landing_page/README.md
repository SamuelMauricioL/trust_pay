# TrustPay Landing Page

Landing page moderna para TrustPay - Plataforma de pagos seguros con blockchain, smart contracts de escrow y arbitraje con IA.

## 🎯 Características

- **Hero Section**: Propuesta de valor principal con ahorro del 99%
- **Tabla Comparativa**: Comparación de tarifas vs Stripe/PayPal
- **Calculadora de Ahorros**: Interactiva para cualquier monto
- **Características del Producto**: 6 características principales
- **Sección AI Arbitraje**: Explicación del oráculo de decisión con IA
- **Casos de Uso**: 6 industrias diferentes con ejemplos
- **CTA y Footer**: Llamados a la acción y navegación

## 📁 Estructura de Archivos

```
landing_page/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── sections.js         # Secciones HTML (pricing, features, use cases, AI)
├── calculator.js       # Calculadora de ahorros
└── README.md          # Esta documentación
```

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente

Simplemente abre `index.html` en tu navegador:

```bash
open index.html
```

### Opción 2: Servidor Local

Para desarrollo, usa un servidor HTTP simple:

```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Luego abre: http://localhost:8000

## 🎨 Personalización

### Colores

Los colores principales están definidos en `styles.css`:

```css
:root {
    --primary: #6366f1;    /* Indigo */
    --secondary: #8b5cf6;  /* Purple */
    --accent: #ec4899;     /* Pink */
}
```

### Tarifas

Las tarifas se calculan en `calculator.js`:

```javascript
// Actualizar aquí si cambian las tarifas
const stripeFee = (amount * 0.029) + 0.30;
const paypalFee = (amount * 0.03) + 0.49;
const trustpayFee = 0.05; // Promedio Starknet
```

### Contenido

Para editar el contenido de las secciones, modifica `sections.js`:

- `pricingSection`: Tabla comparativa de precios
- `featuresSection`: Características principales
- `loadAISection()`: Sección de IA
- `loadUseCasesSection()`: Casos de uso

## 📊 Datos Mostrados

### Comparativa de Tarifas

| Método | Tipo | Tarifa | Escala |
|--------|------|--------|--------|
| Stripe | Porcentual + Fija | 2.9% + $0.30 | ✅ Sí |
| PayPal | Porcentual + Fija | 3.0% + $0.49 | ✅ Sí |
| TrustPay | Fija (Gas) | $0.01 - $0.10 | ❌ No |

### Ejemplo de Ahorro

**Transacción de $100:**
- Stripe: $3.20 (2.9% + $0.30)
- PayPal: $3.49 (3.0% + $0.49)
- TrustPay: $0.05
- **Ahorro: $3.15 - $3.44 (98.4%)**

## 🤖 Características de IA

El sistema incluye un **Oráculo de Decisión con AI Agents** que:

- ✅ Toma decisiones imparciales sobre reembolsos
- ⚡ Resolución en segundos
- 🔍 Transparencia total (registrado en blockchain)
- 🎛️ Políticas personalizables por negocio

### Ejemplo de Caso

```
Caso #1234: Curso online
- Progreso: 15%
- Tiempo: 5 días
- Política: 30 días / 20% máximo progreso
➡️ Decisión: Aprobado - Reembolso 100%
```

## 📦 Casos de Uso Destacados

1. **Servicios Freelance** - Desarrollo, diseño, marketing
2. **Activos Digitales** - Software, licencias, NFTs
3. **Arrendamiento** - Propiedades, equipos
4. **Educación** - Cursos online, mentoreo
5. **Crowdfunding** - Financiamiento por hitos
6. **Servicios Profesionales** - Consultoría, asesoría

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework de estilos (vía CDN)
- **Font Awesome**: Iconos (vía CDN)
- **Vanilla JavaScript**: Interactividad sin dependencias
- **Google Fonts**: Tipografía Inter

## 🔗 Integraciones

La landing page está lista para integrarse con:

- Demo web de checkout (en `/demo_web`)
- Smart contract de escrow (en `/sc_trust_pay`)
- Sistema de IA para arbitraje (futuro)

## 📱 Responsive Design

La página es completamente responsive:

- **Mobile**: Navegación simplificada, layout en 1 columna
- **Tablet**: Layout en 2 columnas
- **Desktop**: Layout completo en 3 columnas

## 🎯 Llamados a Acción

1. **Hero**: "Comenzar Ahora" y "Ver Comparativa"
2. **Pricing**: Calculadora interactiva
3. **Features**: Énfasis en beneficios
4. **CTA Final**: "Probar Demo Gratis" y "Contactar Ventas"

## 🚀 Próximos Pasos

Para producción:

1. [ ] Optimizar imágenes y assets
2. [ ] Implementar analytics (Google Analytics, Mixpanel)
3. [ ] Agregar formulario de contacto funcional
4. [ ] Integrar con backend para demos
5. [ ] SEO: meta tags, sitemap, robots.txt
6. [ ] Agregar testimonios de clientes
7. [ ] Video explicativo del producto

## 📈 Métricas a Trackear

- Tasa de conversión en CTAs
- Tiempo en página
- Interacción con calculadora
- Scroll depth
- Clicks en "Probar Demo"

## 📄 Licencia

© 2025 TrustPay. Todos los derechos reservados.
