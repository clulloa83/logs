const Usuario = require('../usuario');

/**
 * parametros para logs
 */
class ParamsLog {
    constructor(){
        this.sistemaId = '';
        this.evento = {
            tipo: '', descripcion: '', disparador:'',
            usuario: new Usuario(), detalle: {}
        };
    }
}

module.exports = ParamsLog;