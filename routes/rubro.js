import {Router} from 'express';
import { check } from 'express-validator';
import {rubros} from '../controllers/rubro.js';

import { existeId } from '../db-helpers/rubro.js';
import { existeNombre } from '../db-helpers/rubro.js';
import {validarCampos} from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
const router=Router();
router.get('/',[
    validarCampos,
    validarJWT
],rubros.rubroGet);

router.post('/guardar',[
    check('nombre', 'El nombre es obligatorio para el rubro').not().isEmpty(),
    check('nombre').custom(existeNombre),
    validarCampos
],rubros.rubroPost);

router.put('/actualizar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],rubros.rubroPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],rubros.rubroActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],rubros.rubroDesactivar);

router.put('/borrar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],rubros.rubroDelete);

export default router;