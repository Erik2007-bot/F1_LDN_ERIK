#F1 by Erik - Proyecto educativo IES El Rincón

Este proyecto es una página web sobre la Fórmula 1 creada como parte del Proyecto HTML de la asignatura LDN.  
La web presenta información sobre el mundial de constructores, los pilotos líderes y un formulario de contacto(que actualmente no lleva a ningún lado).

---

##Descripción del proyecto

F1 by Erik es una página responsive (adaptable a móvil, tablet y escritorio) que muestra:
-Una sección principal con el título y un botón de navegación suave.
-Una sección de equipos (constructores) con imágenes de las escuderías.
-Una galería de pilotos líderes del mundial.
-Un formulario de contacto para enviar sugerencias.

También incluye un menú de navegación responsive tipo “hamburguesa” que se activa en pantallas pequeñas.

---

## 🧩 Estructura del proyecto

```
f1-erik/
│
├── index.html          # Estructura principal del sitio
├── css/
│   └── styles.css      # Estilos base + media queries (responsive)
├── js/
│   └── main.js         # Funcionalidad del menú y scroll suave
└── img/
    ├── McLaren_Racing_logo.svg.png
    ├── Mercedes-F1-Logo-1-removebg-preview.png
    ├── Ferrari-logo.png
    ├── lando_norris.png
    ├── piastri.png
    ├── Max_Verstappen.png
    └── george_russell.png



Funcionalidades principales

1.Menú responsive que despliega una hamburguesa cuando el ancho es menor de 768 píxeles.

---------------------------------------------------------------------------------------------------------------------------------------------------------

Un código JavaScript que permite abrir o cerrar la hamburguesa al hacer clic cuando estamos en formato menor a 768 píxeles.

---------------------------------------------------------------------------------------------------------------------------------------------------------

Un Botón “Ver más” con desplazamiento suave con js

El botón en la sección principal permite bajar suavemente a la sección de equipos:

document.getElementById('learn-more-btn').addEventListener('click', () => {
  document.getElementById('teams').scrollIntoView({ behavior: 'smooth' });
});

---------------------------------------------------------------------------------------------------------------------------------------------------------

#Tecnologías 

-HTML→ estructura del contenido  
-CSS3→ estilos y diseño responsive 
Font Awesome→ iconos de bandera y menú  
JavaScript→ interacción del menú y desplazamiento suave

--------------------------------------------------------------------------------------------------------------------------------------------------------

#Autor
Mi nombre es Erik Nicolás García Reyes y esto es un proyecto educativo desarrollado para IES El Rincón.

---------------------------------------------------------------------------------------------------------------------------------------------------------

#Ayudas

Me han servido como ayuda: las clases de el Profesor de LDN Tiburcio Cruz y en ocasiones puntuales el uso de chagpt para corregir cosas y compañeros como Guillermo entre otros.

---------------------------------------------------------------------------------------------------------------------------------------------------------

#Dribble 

https://dribbble.com/shots/26048246-Playground-web-interaction - De este dribble sacaré el carrusel de imágenes que no he añadido en esta entrega
https://dribbble.com/shots/24674713-UI-UX-for-an-Automation-SaaS-Makelog - Al ver esta saqué la idea de poner las imagenes en columnas en ves de en fila
