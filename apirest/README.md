Proyecto API REST 

Precondiciones:

1. Tener instalado nodejs en el sistema operativo
2. Tener instalado mongodb

Instalacion:

1. Ejecutar node app en la raiz del proyecto, esto generar el directorio node_modules con las dependencias
2. Actualmente la app se ejecuta en el puerto 5001, por lo cual desde un cliente http se puede consumir los servicios restful

Restul service contract:

1. Obteniendo todos los item:

GET http://localhost:5001/seriestv

2. Obteniendo un item por id:

GET http://localhost:5001/seriestv/54550e90bcc5aabd65000001

3. Creando un item:

POST http://localhost:5001/seriestv

{
"titulo": "Harry Potter y las reliquias de la muerte parte 2",
"temporadas": 2,
"pais": "EEUU",
"genero": "Drama"
}

4. Actualizando un item

PUT http://localhost:5001/seriestv/54550e90bcc5aabd65000001

{
"titulo": "Harry Potter y la piedra filosofal",
"temporadas": 2,
"pais": "EEUU",
"genero": "Drama"
}

5. Eliminando un item

DELETE http://localhost:5001/seriestv/545515f9d9b2cd5067000003
