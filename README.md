Interfaz web para controlar uno o más robots
============================================

Product Backlog
---------------

Desarrollar una página web que permita controlar los robots del proyecto [Programando con robots](http://robots.linti.unlp.edu.ar/) utilizando JavaScript.

Sprint Backlog: 1
-------------------

### Bugfix #1000: errores de tipeo en HTML

Verificar y corregir errores de tipeo en control.html.
Branch: feature-01-html-typos

### Bugfix #1001: errores en el código JavaScript

Verificar y corregir errores de tipeo en duinobot.js.

### Feature #1002: consola de comandos Javascript

Agregar a control.html un h1 con el título, una textarea y un botón "Ejecutar".

Cuando un usuario presione "Ejecutar" se deberá ejecutar el código Javascript ingresado en el formulario.

Los siguientes elementos deben tener los ids correspondientes:
- textarea -> code
- botón -> run

### Feature #1003: css

- Agregar la webfont [Comfortaa](http://www.dafont.com/comfortaa.font).
- Agregar una hoja de estilos css e incluirla desde control.html.
- El texto y los bordes de las textareas deben tener el color: #14659d.
- El texto de las textareas debe tener el color negro.
- El resto de los elementos de fondo deben tener color blanco.
- La poner Comfortaa como fuente de los h1.

Sprint Backlog: 2
-------------------

### Feature: feature-controller-view

Crear una interfaz con botones que permita mover el robot a la velocidad ingresada y detenerlo. La interfaz debe ser algo parecido a:

!draws/controls.png!
### Feature: examples

- Crear en el directorio examples un ejemplo en JavaScript de la instanciación de un robot y que haga que el robot avance hasta encontrar un obstáculo, cuando encuentra el obstáculo debe detenerse y hacer beep.
- Crear en el directorio examples un ejemplo en JavaScript de un seguidor de línea simple.
### Feature: sensors-view

- Agregar a control.html una serie de inputs para ver la salida de los sensores y el código JavaScript necesario para que funcione.

!draws/sensors.png!

