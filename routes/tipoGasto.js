import {Router} from 'express';
import { check } from 'express-validator';
import {tipoGastos} from '../controllers/tipoGasto.js';

import { existeId } from '../db-helpers/rubro.js';
import { existeNombreGasto } from '../db-helpers/tipoGasto.js';
import {validarCampos} from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
const router=Router();
router.get('/',[
    validarCampos,
    validarJWT
],tipoGastos.tipoGastoGet);

router.post('/guardar',[
    check('nombreGasto', 'El nombre del gasto es obligatorio para el rubro').not().isEmpty(),
    check('nombreGasto').custom(existeNombreGasto),
    validarCampos
],tipoGastos.tipoGastoPost);

router.put('/actualizar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],tipoGastos.tipoGastoPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],tipoGastos.tipoGastoActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],tipoGastos.tipoGastoDesactivar);

router.put('/borrar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],tipoGastos.tipoGastoDelete);

export default router;