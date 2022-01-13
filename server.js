const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./db/mongo/config');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./default.yaml');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            log: '/log',
            swagger: '/swagger',
            sistema: '/sistema'
        };
        this.conectarDB();
        this.middleware();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middleware(){
        // CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.log, require('./routes/log'));
        this.app.use(this.paths.swagger, swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));
        this.app.use(this.paths.sistema, require('./routes/sistema'));
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`servidor corriendo en puerto ${ this.port }`);
        });
    }

}

module.exports = Server;