const { StatusCode } = require('status-code-enum');
const servicioLogs = require('../services/servicio-logs');
const ParamsLogs = require('../models/params/logs-params');

/**
 * registra log
 * @param {*} req 
 * @param {*} res 
 */
const registrar = async(req, res) => {

    const {
        sistemaId, tipo, descripcion, disparador, usuarioId, detalle
    } = req.body;

    let params = new ParamsLogs();
    params.sistemaId = sistemaId;
    params.evento.tipo = tipo;
    params.evento.descripcion = descripcion;
    params.evento.disparador = disparador;
    params.evento.usuario.id = usuarioId;
    params.evento.detalle = detalle;

    try {
        let result = await servicioLogs.registrar(params);
        res.status(StatusCode.SuccessCreated).json({ result })
    } 
    catch (error) {
        console.log('error registrar', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    };
};

/**
 * lista logs coincidentes con filtros
 * @param {*} req 
 * @param {*} res 
 */
const listar = async(req, res) => {

    const {
        sistemaId, tipo, disparador
    } = req.query;
    // } = req.body;

    let params = new ParamsLogs();
    params.sistemaId = sistemaId;
    params.evento.tipo = tipo;
    params.evento.disparador = disparador;

    try {
        let result = await servicioLogs.listar(params);
        res.status(StatusCode.SuccessOK).json({ result })
    } 
    catch (error) {
        console.log('error listar', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    };
};

module.exports = {
    registrar,
    listar,
};