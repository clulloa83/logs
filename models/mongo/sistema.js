const { Schema, model } = require('mongoose');

const SistemaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Sistema', SistemaSchema);