/**
 * representa usuario de sistema en registro logs. Se utiliza id de usuario de sistema
 */
class Usuario {

    constructor(){
        this.id = '';
        this.cuenta = '';
        this.correo = '';
        this.token = '';
        this.activado = '';
        this.roles = [];
    }
    
}

module.exports = Usuario;