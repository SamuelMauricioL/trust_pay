# Componentes del Curso 📚

Pantalla de curso inspirada en Udemy que se muestra después de completar el pago exitosamente.

**Idioma:** Español 🇪🇸

## 🎯 Características

### ✅ Seguimiento de Progreso
- Checkbox para marcar cada lección como completada
- Barra de progreso global en el header
- Progreso por sección

### 🎬 Reproductor de Video
- Interfaz limpia estilo Udemy
- Placeholder de video con play button
- Overlay con título de la lección

### 📋 Sidebar de Contenido
- Lista de secciones expandibles/colapsables
- Indicadores de progreso por sección
- Duración de cada lección
- Scroll personalizado

### ⚖️ Modal de Calificación
- Se activa automáticamente al 30% de progreso
- Sistema de estrellas interactivo
- Mensajes dinámicos según la calificación
- Animación de éxito al enviar

## 📦 Componentes

### `CoursePage.jsx`
Componente principal que maneja:
- Estado de lecciones completadas
- Lógica del modal de calificación
- Datos del curso
- Layout general

### `CourseContent.jsx`
Sidebar con:
- Lista de secciones y lecciones
- Checkboxes de completado
- Expansión/colapso de secciones
- Click para reproducir video

### `VideoPlayer.jsx`
Reproductor que:
- Muestra placeholder del video
- Play button centrado
- Marca lección como completada al terminar

### `RatingModal.jsx`
Modal de calificación con:
- 5 estrellas interactivas
- Mensajes personalizados
- Animación de confirmación
- Diseño moderno

## 🎨 Diseño

Fiel a la imagen de referencia (Udemy):
- Header oscuro con progreso
- Video player a la izquierda
- Sidebar blanco a la derecha (400px)
- Tabs de navegación
- Colores: Negro (#1c1d1f), Blanco, Purple (#6366f1)

## 🚀 Flujo de Usuario

1. Usuario completa pago en `/checkout`
2. Redirección automática a `/course` (1.5s delay)
3. Usuario ve la primera sección expandida
4. Click en checkboxes para marcar completado
5. Click en lección para reproducir video
6. Al 30% de progreso → Modal de calificación
7. Continúa aprendiendo

## 📊 Estado del Progreso

```javascript
// Cálculo de progreso
const progressPercentage = (completedLessons.length / totalLessonsCount) * 100;

// Trigger de modal al 30%
useEffect(() => {
  if (progressPercentage >= 30 && !hasShownRatingPrompt) {
    setShowRatingModal(true);
  }
}, [progressPercentage]);
```

## 🎯 Próximas Mejoras

- [ ] Integrar reproductor de video real (YouTube, Vimeo, etc.)
- [ ] Persistir progreso en localStorage o backend
- [ ] Agregar notas y marcadores
- [ ] Sistema de Q&A
- [ ] Certificado de finalización
- [ ] Modo oscuro
