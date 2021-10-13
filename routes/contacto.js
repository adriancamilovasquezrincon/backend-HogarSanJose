import {Router} from 'express';
import { check } from 'express-validator';
import {contactos} from '../controllers/contacto.js';

import {existeId} from '../db-helpers/contacto.js';
import {existeTelefono} from '../db-helpers/contacto.js';
import {existeCorreo} from '../db-helpers/contacto.js';
import {existeNombres} from '../db-helpers/contacto.js';

import { validarCampos } from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
const router=Router();

router.get('/',[
    validarJWT,
    validarCampos
],contactos.contactoGet);

router.post('/guardar',[
    check('telefono', 'El telefono  es obligatorio').not().isEmpty(),
    check('telefono').custom(existeTelefono),
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo').custom(existeCorreo),
    check('nombres', 'Los nombres son obligatorio').not().isEmpty(),
    check('nombres').custom(existeNombres),
    validarCampos
],contactos.contactoPost);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],contactos.contactoActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],contactos.contactoDesactivar);

export default router;