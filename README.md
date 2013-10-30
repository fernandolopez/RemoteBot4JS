Interfaz web para controlar uno o más robots
============================================

Product Backlog
---------------

Desarrollar una página web que permita controlar los robots del proyecto [Programando con robots](http://robots.linti.unlp.edu.ar/) utilizando JavaScript.

Sprint Backlog: 1
-------------------

### Bugfix #1000: errores de tipeo en control.html

Verificar y corregir errores de tipeo en control.html.

Branch: bugfix-1001-html-typos

### Feature #1002: consola de comandos Javascript

Agregar a control.html un h1 con el título, una textarea y un botón "Ejecutar".

Cuando un usuario presione "Ejecutar" se deberá ejecutar el código Javascript ingresado en el formulario.

Los siguientes elementos deben tener los ids correspondientes:
- textarea -> code
- botón -> run

Branch: feature-1002-console

### Feature #1003: css básico

- Agregar una hoja de estilos css e incluirla desde control.html.
- El textarea del código debe tener un tamaño de 800x400 píxels.

Branch: feature-1003-basic-css

### Feature #1001: css con colores
- El texto y los bordes de las textareas deben tener el color: #14659d.
- El texto de las textareas debe tener el color negro.
- El resto de los elementos de fondo deben tener color blanco.

Branch: feature-1001-colors

Sprint Backlog: 2
-------------------

### Feature #1004: feature-controller-view

Crear una interfaz con botones que permita mover el robot a la velocidad ingresada y detenerlo. La interfaz debe ser algo parecido a:

!draws/controls.png!

Branch: feature-1003-controller

### Feature #1005: examples

- Crear en el directorio examples un ejemplo en JavaScript de la instanciación de un robot y que haga que el robot avance hasta encontrar un obstáculo, cuando encuentra el obstáculo debe detenerse y hacer beep.
- Crear en el directorio examples un ejemplo en JavaScript de un seguidor de línea simple.

Branch: feature-1005-examples

### Feature #1007: sensors-view

- Agregar a control.html una serie de inputs para ver la salida de los sensores y el código JavaScript necesario para que funcione.
- Los inputs deben actualizarse cada 1 segundo con la información de los sensores.

!draws/sensors.png!

Branch: feature-1007-sensors
