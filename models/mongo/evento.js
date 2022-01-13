const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    tipo:{
        type: String,
        enum: ['error','insertar', 'actualizar', 'leer', 'borrar','info'],
        default: 'info'
    },
    descripcion: {
        type: String
    },
    disparador:{
        type: String,
        enum: ['automatico','manual'],
        default: 'automatico'
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    detalle: {
        type: Object
    }
});

module.exports = model('Evento', EventoSchema);