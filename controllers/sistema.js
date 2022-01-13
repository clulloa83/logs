const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioSistemas = require('../services/servicio-sistemas');
const ParamsSistemas = require('../models/params/sistemas-params');

/**
 * obtiene los sistemas registados en bd
 * @param {*} req 
 * @param {*} res 
 */
const sistemasGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0, nombre } = req.query;

    let params = new ParamsSistemas();
    params.limite = limite;
    params.desde = desde;
    params.nombre = nombre ? nombre : null;

    try {

        let result = await servicioSistemas.sistemasGet(params);
        res.status(StatusCode.SuccessOK).json({ result })
        
    } catch (error) {
        console.log('error sistemasGet', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    };
}

/**
 * registra sistema en bd
 * @param {*} req 
 * @param {*} res 
 */
const sistemasPost = async(req = request, res = response) => {
    
    const { nombre } = req.body;

    let params = new ParamsSistemas();
    params.nombre = nombre;

    try {
        
        let result = await servicioSistemas.sistemasPost(params);
        res.status(StatusCode.SuccessCreated).json({ result })

    } catch (error) {
        console.log('error sistemasPost', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    }
}

/**
 * eliminación logica de sistema
 * @param {*} req 
 * @param {*} res 
 */
const sistemasDelete = async(req = request, res = response) => {
    const { id } = req.params;

    let params = new ParamsSistemas();
    params.sistema.id = id;

    try {
        
        let result = await servicioSistemas.sistemasDelete(params);
        res.status(StatusCode.SuccessOK).json({ result })

    } catch (error) {
        console.log('error sistemasPost', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    }
}

module.exports = {
    sistemasGet,
    sistemasPost,
    sistemasDelete
}