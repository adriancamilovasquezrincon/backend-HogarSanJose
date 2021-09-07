import {Router} from 'express';
import { check } from 'express-validator';
import {gastos} from '../controllers/gasto.js';

import {existeId} from '../db-helpers/gasto.js';
import {existeTipoGasto} from '../db-helpers/gasto.js';
import {existePersona} from '../db-helpers/gasto.js';
import { validarCampos } from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
const router=Router();
router.get('/',[
    validarJWT,
    validarCampos
],gastos.gastoGet);

router.post('/guardar',[
    check('tipoGasto', 'El tipoGasto  es obligatorio en el gasto').not().isEmpty(),
    check('tipoGasto').custom(existeTipoGasto),
    check('persona', 'El tipo de persona es obligatorio').not().isEmpty(),
    check('persona').custom(existePersona),
    validarCampos
],gastos.gastoPost);

router.put('/actualizar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],gastos.gastoPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],gastos.gastoActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],gastos.gastoDesactivar);

router.put('/borrar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],gastos.gastoDelete);

export default router;