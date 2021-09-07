import {Router} from 'express';
import { check } from 'express-validator';
import {personas} from '../controllers/persona.js';

import validarArchivoSubir from '../middlewares/validarArchivoSubir.js';
import { existeId } from '../db-helpers/persona.js';
import {validarCampos} from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
const router=Router();
router.get('/',[
    validarCampos,
    validarJWT
],personas.personaGet);

router.post('/guardar',[
    validarCampos
],personas.personaPost);

router.post('/upload/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
    validarCampos,
    validarArchivoSubir
],personas.personaCargarArchivo);

router.put('/actualizar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],personas.personaPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],personas.personaActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],personas.personaDesactivar);

router.put('/borrar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],personas.personaDelete);

export default router;