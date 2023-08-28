# Angular CRUD

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0. Se utilizó Reactive Forms, Validators, servicios reutilizables y HttpClient para consumir la API.

## Server

Ejecuta el comando `ng serve` para inicializar un servidor. Navega hasta `http://localhost:4200/`.

## RESTful API

Se utilizó JSON Server para simular una [RESTful API](https://github.com/ramonpdm/crud-php-api) que desarrollé en PHP. Ambas funcionan adecuadamente.

Para instalar JSON Server, ejecutar el comando `npm install -g json-server`.

Luego, ejecutar el comando `json-server --watch database.json` para inicializar la API simulada en la dirección `http://localhost:3000/` tomando como base de datos el archivo `database.json`.
