const Sistema = require('../models/mongo/sistema');

const sistemasGet = async(params) => {

    let query;
    const nombre = params?.nombre;
    nombre ?
        query = { estado: true, nombre: nombre }
        : query = { estado: true }

    const [total, sistemas] = await Promise.all([
        Sistema.countDocuments(query),
        Sistema.find(query)
            .skip(Number(params.desde))
            .limit(Number(params.limite))
    ]);

    return { total, sistemas};

};

const sistemasPost = async(params) => {
    
    const data = { 
        nombre: params.nombre 
    };
    const sistema = new Sistema( data );
    return await sistema.save();

};

const sistemasDelete = async(params) => {
    
    const data = {
        id: params.sistema.id,
        estado: false
    };
    return await Sistema.findByIdAndUpdate(data);
};

module.exports = {
    sistemasGet,
    sistemasPost,
    sistemasDelete
}