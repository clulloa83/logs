const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    id: {
        type: Number,
        required: [true, 'el id es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Usuario', UsuarioSchema);