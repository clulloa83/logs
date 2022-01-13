const Sistema = require('../sistema');
/**
 * parametros para sistemas
 */
class ParamsSistema {
    constructor(){
        this.limite = '';
        this.desde = '';
        this.nombre = '';
        this.sistema = new Sistema();
    }
}

module.exports = ParamsSistema;