# Handed UI - Demo

Demo de componentes de interfaz en React adaptables según la mano preferida del usuario (diestro o zurdo).  
Permite cambiar la orientación de los elementos interactivos de manera dinámica para mejorar la accesibilidad y la experiencia de usuario.

**Autor:** Diego Salvado  
**Repositorio:** [github.com/Diego-Mostro-Dev/handed-ui-demo](https://github.com/Diego-Mostro-Dev/handed-ui-demo)  
**LinkedIn:** [linkedin.com/in/diego-salvado](https://www.linkedin.com/in/diegosalvadodev/)

## Características

- **Selección de mano**: Botón fijo que permite alternar entre diestro y zurdo.
- **Toggle flotante tipo menú**: Botón estilo hamburguesa, independiente del cambio de mano.
- **Cards adaptativas**: Los botones dentro de cada card se alinean automáticamente según la mano seleccionada.
- **Botón flotante (FAB)**: Acciones rápidas flotantes que respetan la preferencia de mano.
- **Responsive**: Funciona correctamente en dispositivos móviles y desktop.

## Capturas de pantalla

![Captura 1](./screenshots/demo1.png)  
![Captura 2](./screenshots/demo2.png)

_(Opcional: agregar imágenes si querés mostrar la demo)_

## Instalación

Cloná el repositorio:

```bash
git clone https://github.com/Diego-Mostro-Dev/handed-ui-demo.git
cd handed-ui-demo

```

Instalá las dependencias:

```bash
npm install
# o
yarn install
```

Ejecutá la demo en desarrollo:

```bash
npm start
# o
yarn start
```

Abre http://localhost:3000
en tu navegador para ver la demo.

Uso

HandSelector: Cambia la mano preferida. Afecta la alineación de botones en las cards y el FAB.

FloatingToggle: Botón de menú independiente, no cambia la mano.

Las cards se adaptan automáticamente según la mano seleccionada.

Tecnologías

React

CSS moderno (Flexbox)

Context API para manejo de la mano preferida (HandProvider)

Componente FAB flotante

Personalización y clases

Los botones toggle y otros componentes usan clases CSS que permiten tanto su estilo base como la adaptación automática según la mano:

.toggle → Clase base de todos los toggles. Define estilos generales (color, padding, borde, sombra, flex).

.hand-start → Aplica al botón de selección de mano debajo del título.

.hand-end → Aplica al toggle flotante tipo menú. Posición fija y lado según [data-hand="right"] o [data-hand="left"].

.card-actions → Contenedor de botones dentro de las cards.

.hand-flex-start y .hand-flex-end → Alinean los botones según la mano seleccionada (start o end).

Personalización:

Se puede sobrescribir cualquier propiedad CSS para cambiar colores, tamaños, bordes o animaciones.

Se pueden reemplazar íconos (<Icon />) o contenido de los botones.

Se pueden añadir clases adicionales o usar styled-components / CSS Modules para estilos más avanzados.

Esto asegura total flexibilidad sin romper la funcionalidad de la demo.

Contribución

Se aceptan pull requests y sugerencias para mejorar la demo o los componentes.
Antes de contribuir, asegurate de clonar el repositorio y probar los cambios localmente.

Licencia

MIT License. Libre para uso personal y comercial.
