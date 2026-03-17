## Handed UI - Demo

Demo de componentes de interfaz en React adaptables según la mano preferida del usuario (diestro o zurdo).
Permite cambiar la orientación de los elementos interactivos de manera dinámica para mejorar la accesibilidad y la experiencia de usuario.

# Características

Selección de mano: Botón fijo que permite alternar entre diestro y zurdo.

Toggle flotante tipo menú: Botón estilo hamburguesa, independiente del cambio de mano.

Cards adaptativas: Los botones dentro de cada card se alinean automáticamente según la mano seleccionada.

Botón flotante (FAB): Acciones rápidas flotantes que respetan la preferencia de mano.

Responsive: Funciona correctamente en dispositivos móviles y desktop.

# Capturas de pantalla

![Captura 1](./screenshots/demo1.png)  
![Captura 2](./screenshots/demo2.png)

_(Opcional: agregar imágenes si querés mostrar la demo)_

# Instalación

Cloná el repositorio:

```bash
git clone https://github.com/Diego-Mostro-Dev/handed-ui-demo.git
cd handed-ui-demo
```

Instalá las dependencias:

```bash
npm start

# o

yarn start

```

Ejecutá la demo en desarrollo:

```bash
npm start
# o
yarn start

```

Abre http://localhost:3000
en tu navegador para ver la demo.

# Uso

HandSelector: Cambia la mano preferida. Afecta la alineación de botones en las cards y el FAB.

FloatingToggle: Botón de menú independiente, no cambia la mano.

Las cards se adaptan automáticamente según la mano seleccionada.

# Tecnologías

React

CSS moderno (Flexbox)

Context API para manejo de la mano preferida (HandProvider)

Componente FAB flotante

# Contribución

Se aceptan pull requests y sugerencias para mejorar la demo o los componentes.
Antes de contribuir, asegurate de clonar el repositorio y probar los cambios localmente.

# Licencia

MIT License. Libre para uso personal y comercial.
