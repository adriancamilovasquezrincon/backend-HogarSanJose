import {Router} from 'express';
import { check } from 'express-validator';
import {ingresos} from '../controllers/ingreso.js';

import { existeId, existeValorIngreso } from '../db-helpers/ingreso.js';
import {validarCampos} from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
const router=Router();
router.get('/',[
    validarCampos,
    validarJWT
],ingresos.ingresoGet);

router.post('/guardar',[
    check('valorIngreso', 'El valorIngreso es obligatorio para el rubro').not().isEmpty(),
    check('valorIngreso').custom(existeValorIngreso),
    validarCampos
],ingresos.ingresoPost);

router.put('/actualizar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],ingresos.ingresoPut);

router.put('/activar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],ingresos.ingresoActivar);

router.put('/desactivar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],ingresos.ingresoDesactivar);

router.delete('/borrar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],ingresos.ingresoDelete);

export default router;