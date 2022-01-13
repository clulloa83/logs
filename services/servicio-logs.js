const Usuario = require('../models/mongo/usuario');
const Log = require('../models/mongo/log');
const Evento = require('../models/mongo/evento');

/**
 * servicio que registra en mongoDB el log
 * @param { parametros de registro de log } params 
 * @returns 
 */
const registrar = async(params) => {

    const usuario = await registraObtieneUsuario(params);

    const eventoData = {
        tipo: params.evento.tipo,
        descripcion: params.evento.descripcion,
        disparador: params.evento.disparador,
        usuario: usuario._id,
        detalle: params.evento.detalle
    };
    
    try {

        const evento = new Evento(eventoData);
        const eventoDB = await evento.save();
        const data = {
            evento: eventoDB._id,
            sistema: params.sistemaId
        };

        const log = new Log(data);
        return await log.save();
    } 
    catch (error) {
        console.log('error registrar', error)
        throw new Error(error)
    };
};

/**
 * obtiene usuario, en caso de no existir se registra
 * @param {*} params 
 * @returns 
 */
const registraObtieneUsuario = async(params) => {

    try {
        const usuarioDB = await Usuario.findOne({ id: params.evento.usuario.id });
        let usuario;
        if( !usuarioDB ){
            const dataUsuario = {
                id: params.evento.usuario.id,
            };
            usuario = new Usuario( dataUsuario );
            await usuario.save();
        }
        else{
            usuario = usuarioDB;
        };
        return usuario;
        
    } catch (error) {
        console.log('error registraObtieneUsuario', error);
        throw new Error(error);
    }
}

/**
 * servicio que lista los registros en mongoDB de log
 * @param { parametros de listado de registros de log } params 
 * @returns 
 */
const listar = async(params) => {

    const evento = { 
        tipo: params.evento.tipo, 
        disparador: params.evento.disparador 
    };
    
    let query;

    (evento.tipo && evento.disparador && params.sistemaId) 
    ? query = { estado: true, sistema: params.sistemaId, evento }
    : query = { estado: true };

    try {
        return Log.find(query).populate('evento');
    } 
    catch (error) {
        console.log('error listar servicio', error);
        throw new Error(error);
    };
};

module.exports = {
    registrar,
    listar,
};