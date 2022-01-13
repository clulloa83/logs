const { Router } = require('express');
const { check } = require('express-validator');
const { listar, registrar } = require('../controllers/logs');
const { validarCampos } = require('../middlewares/validar-campos');
// const { esCorreoUsuario } = require('../helpers/db-validaciones');

const router = Router();

router.post('/',[
    check('sistemaId', 'el sistemaId es obligatorio').not().isEmpty(),
    validarCampos
], registrar);

router.get('/',[
    // check('cuenta', 'el cuenta es obligatorio').not().isEmpty(),
    // check('clave', 'el clave es obligatorio').not().isEmpty(),
    validarCampos
], listar);


module.exports = router;