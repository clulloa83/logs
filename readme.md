# Título del Proyecto

_servicio con NodeJS, Express y mongoDB. Utiliza arquitectura de n capas. servicio de logs centralizado para sistemas._

## Comenzando 🚀

_clonar desde repositorio. inicializar gitFlow y crear desde develop feature con nombre corto y descriptivo._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

```
NodeJS https://nodejs.org/en/_
```

### Instalación 🔧

_puerto por defecto (.env) PORT = 3000_

_ejecutar siguiente comando para restaurar dependencias desde consola_

```
npm i
```

_ejecutar siguiente comando para levantar app_

```
npm start
```

_app.js instancia e inicializa el server_


## Ejecutando las pruebas ⚙️

_Postman (Ambiente local)_

### obtener registros logs

_obtiene todos los registros de logs_

```
metodo: GET
url: 'http://localhost:3000/api/log
```

_petición_

```
var config = {
  method: 'get',
  url: 'http://localhost:3000/api/log',
  headers: { }
};
```

### registrar log

_registra log_

```
metodo: POST
url: 'http://localhost:3000/api/log
```

_data log y petición_

```
var data = JSON.stringify({
  "sistemaId": "61bcf10bc7434dc339ed8545",
  "tipo": "insertar",
  "descripcion": "test de insertar 123",
  "disparador": "manual",
  "usuarioId": 123,
  "detalle": {
    "msg": "hola mundo 123"
  }
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/api/log',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};
```

## Despliegue 📦


## Construido con 🛠️

* [nodeJS](https://nodejs.org/en/) - El framework web usado

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://dev.azure.com/SubdepartamentoSolucionesTI/SIPEC/_wiki/wikis/SIPEC.wiki/557/SIPEC-MOVIL)

## Versionado 📌


## Autores ✒️

* **Claudio Ulloa Gamonal** - *Trabajo Inicial* - [claudio.ulloa](claudio.ulloa@sag.gob.cl)


## Licencia 📄

Este proyecto está bajo la Licencia SAG 