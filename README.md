# Landing de Portafolio Personal

Proyecto PFO1 para la asignatura **Desarrollo de Sistemas Web (Front End)**. Landing diseñada para presentar mi perfil profesional, habilidades tecnológicas, proyectos destacados (ecosistema móvil y juegos de rol) y vías de contacto.

## Enlaces del Proyecto
- **URL publicada (Vercel):** https://landing-web-personal.vercel.app
- **Perfil de GitHub:** https://github.com/Strashoy

## Tecnologías y Arquitectura
- **HTML5 Semántico:** Uso riguroso de etiquetas estructurales (`header`, `nav`, `main`, `section`, `article`, `footer`).
- **CSS3:** Maquetación principal con Flexbox para lograr un diseño fluido en tarjetas y columnas. Unidades relativas (`rem`) y variables globales (`:root`).
- **JavaScript (Vanilla):** Lógica de interacción para el menú hamburguesa, ventana modal (lightbox) de imágenes y prevención de envío por defecto en el formulario.

## Diseño e Identidad Visual (Rolesencia)
Como creador de la experiencia, definí toda la identidad visual basándome en mi propia guía de marca para garantizar coherencia:
- **Paleta de Colores:** Aplicación de la regla de proporciones 60/30/10 para mantener el equilibrio visual. 
  - *Dominante (60%):* Orange Blood (`#E8471F`).
  - *Secundario (30%):* DeepSkyBlue (`#01BAEF`).
  - *Acento (10%):* Dark Orchid (`#733E9F`).
  - *Fondos/Neutros:* DarkBlue (`#2E4087`) e Ivory.
- **Tipografía:** Inter para garantizar jerarquía y una identidad moderna en los títulos, combinada con Poppins para legibilidad en el cuerpo de texto y leyendas.
- **Experiencia de Usuario (UX):** 
  - Navegación fluida (smooth scroll) implementada mediante anclas hacia las secciones estratégicas.
  - El botón de búsqueda (`.zoom-btn`) se mantiene con opacidad completa siempre visible para mejorar la usabilidad.
  - Tarjetas de proyectos interactivas y modales de previsualización que no deforman la relación de aspecto de las imágenes.

## Decisiones de Estructura y Contenido
Definí la jerarquía de la información distribuyéndola en secciones clave:
1. **Hero/Presentación:** Gradiente radial adaptado para convivir con el navbar fijo (z-index ajustado), destacando los Call to Action (CTA).
2. **Sobre mí & Mis Redes:** Iconografía con efectos de escala y filtros de color naranja en hover.
3. **Habilidades:** Cuadrícula que envuelve las tarjetas de manera natural en dispositivos móviles.
4. **Proyectos:** Priorización de "Lanzador Legendario" en la sección de desarrollo mobile. Integración de iframes para los videos de YouTube en la sección de Juegos de Rol, haciéndolos responsive para evitar el desbordamiento horizontal en celulares.
5. **Contacto:** Formulario validado con comportamiento interceptado vía JS para mostrar un mensaje alternativo con enlaces internos.

## Documentación de uso de IA
Para este proyecto, actué como **arquitecto y diseñador** de la solución (definiendo la estructura, la lógica, el branding y el comportamiento), utilizando la inteligencia artificial exclusivamente como herramienta de mecanografiado, implementación técnica y consultoría.

- **Herramientas utilizadas:** OpenCode (modelo Big Pickle) (Gratuito) y Gemini Pro.
- **Experiencia previa:** 
  - *Gemini Pro:* Consultas puntuales de código, empresa y marketing.
  - *OpenCode:* Modificación por prompt del código.
- **Uso específico:**
  - *Gemini Pro:* Consultoría para redactar mi perfil profesional, resolución de problemas de renderizado (debugging) e instrucciones para adaptar los iframes de YouTube al viewport móvil. Análisis de viabilidad de componentes basándose en mis bocetos y en la documentación teórica de la materia.
  - *OpenCode:* Implementación del código boilerplate (HTML y CSS) bajo mis especificaciones exactas (estructura semántica, Flexbox). Redacción de la lógica base en JavaScript (lightbox, menús).
- **Revisión y adaptación:** Todo el código fue auditado y refactorizado manualmente. Corregí inconsistencias semánticas (como cierres incorrectos de `</article>`), eliminé estilos en línea, unifiqué la paleta de colores según mi marca, reordené la prioridad de las tarjetas e implementé mejoras de accesibilidad (atributos `alt`, `aria-label`, `for`, `action` y `method` en el formulario). Las modificaciones de usabilidad fina (hover de iconos, compensación de z-index del hero, unificación de botones del footer) fueron indicaciones de diseño estrictamente mías.