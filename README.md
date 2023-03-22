# AP_ProyectoFinal_CV
Proyecto final del curso "Primeros pasos del desarrollo frontend" de Argentina Programa 4.0

Según la consigna del proyecto se realizaron las siguientes tareas:

FASE 1

Etapa 1: utilicé la web https://randomuser.me/ para obtener datos personales de personas ficticias y la foto de perfil del cv.

Etapa 2: consideré el uso de una barra de navegación con links ancla, listas desordenadas y foto de perfil. También secciones y distintos tags de estilo como por ejemplo <h2> y <strong>.

Etapa 3: se utilizaron íconos de fontawesome y en el archivo estilos.css se cambió la tipografía a los títulos. Se aplicó un efecto de zoom mediante css a la imagen de perfil y a elementos con el tag <h3> al pasar el mouse por los mismos.
En la barra de menú, el botón de imprimir llama al evento de impresión de la página actual, y con css se ocultan el footer y el elemento que muestra la hora.  

FASE 2

En el archivo de javascript scripts.js se utilizó ajax para obtener la información de la api de la página https://randomuser.me/. Por tal motivo, al refrescar la ventana se actualizan los datos presentados.
Se agregó un evento a la imagen de perfil, al clickear sobre la misma se abre una ventana modal mostrando una imagen más grande. En este caso la api devuelve una imagen de mayor resolución pero sigue siendo pequeña y no se visualiza de forma nítida. Se utiliza una sóla llamada a la api para una mejor performance, ya que el modal no se muestra si no se realiza click sobre la imagen de perfil.
Se agregó un efecto de sonido a los elementos con la animación de zoom.
Se visualiza un reloj en pantalla con la hora actual.


Observaciones:
- Los archivos realizados son index.html, estilos.css y scripts.js, el resto son librerías que se mencionan en el curso, disponibles en internet y ampliamente utilizadas en el desarrollo IT. 
- Utilización de idioma español. 
- El código no presenta comentarios ya que se intenta seguir las pautas del libro Clean Code de Robert C. Martin.
 
