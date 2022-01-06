const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { ValidarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//crear nuevo usuario
router.post( '/new',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength(6),
    ValidarCampos
], crearUsuario);

//login de usuario/
router.post( '/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength(6),
    ValidarCampos
] , loginUsuario);

//Vqalidar y revalidar token
router.get( '/renew',validarJWT, revalidarToken);








module.exports = router;