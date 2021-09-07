import {Router} from 'express';
import { check } from 'express-validator';
import {usuarios} from '../controllers/usuario.js';

import { existeId } from '../db-helpers/usuario.js';
import {existeNombre} from '../db-helpers/usuario.js';
import { existeEmail} from '../db-helpers/usuario.js';
import {existePassword} from '../db-helpers/usuario.js';
import {validarCampos} from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
const router=Router();
router.get('/',[
    validarCampos,
    validarJWT
],usuarios.usuarioGet);

router.post('/guardar',[
    check('nombre', 'El nombre del usuario es obligatorio').not().isEmpty(),
    check('nombre').custom(existeNombre),
    check('email', 'El email del usuario es obligatorio').not().isEmpty(),
    check('email').custom(existeEmail),
    check('password', 'El password del usuario es obligatorio').not().isEmpty(),
    check('password').custom(existePassword),
    validarCampos
],usuarios.usuarioPost);

router.post('/login',usuarios.login);

router.put('/actualizar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('nombre').custom(existeNombre),
    check('id').custom(existeId)
],usuarios.usuarioPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],usuarios.usuarioActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],usuarios.usuarioDesactivar);

router.delete('/borrar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],usuarios.usuarioDelete);

export default router;