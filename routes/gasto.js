import {Router} from 'express';
import { check } from 'express-validator';
import {gastos} from '../controllers/gasto.js';

import {existeId, existeValorGasto} from '../db-helpers/gasto.js';
import { validarCampos } from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
const router=Router();
router.get('/',[
    validarJWT,
    validarCampos
],gastos.gastoGet);

// router.post('/',[
//     new Date().getDay(),
//     new Date()
// ],gastos.gastoFechas)

router.post('/guardar',[
    check('valorGasto', 'El valorGasto es obligatorio para el rubro').not().isEmpty(),
    check('valorGasto').custom(existeValorGasto),
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

router.delete('/borrar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],gastos.gastoDelete);

export default router;