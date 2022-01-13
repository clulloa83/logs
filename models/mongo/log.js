const { Schema, model } = require('mongoose');

const LogSchema = Schema({
    evento: {
        type: Schema.Types.ObjectId,
        ref: 'Evento',
        required: [true, 'el evento es obligatorio']
    },
    sistema: {
        type: Schema.Types.ObjectId,
        ref: 'Sistema',
        required: [true, 'el Sistema es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model('Log', LogSchema);