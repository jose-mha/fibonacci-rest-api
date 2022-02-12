
# `Fibonacci Rest API`
API Creada Con Node.js y express

# Instalación
Instalamos las dependencias necesarias para poder iniciar el proyecto
```bash
npm install
```

# Scripts
## Iniciar Projecto
Con el siguiente comando compilamos y ejecutamos nuestro proyecto
```bash
npm start
```
Una vez termine de compilar podrás ver el proyecto en 
- http://localhost:5000
- Saldra el Mensaje de Mi server, podrás acceder al API así como también al endpoint principal
- http://localhost:5000/api/v1/fibonacci/numero

## Retrospectiva
----
- En primer lugar se empezó por estructurar las carpetas y empezar un pequeño server básico.
- Se agregaron las rutas que estarán disponibles
- Se agregó un manejador de errores y un esquema para las validaciones en las rutas. 
- Se usaron las librerías express, cors, hapi/boom, joi
- En la funcionalidad principal se hizo uso del ciclo while, para este caso decidí hacer uso de un arreglo, y así poder enviar la posición directamente del número de la secuencia.
- Para reautorizar el código podría separar la función que genera los numero de la secuencia de Fibonacci y también evitar hacer el uso de los arreglos ya que se pude resolver sin hacer uso de ellos
