import {Router} from 'express';
import { check } from 'express-validator';
import {ingresos} from '../controllers/ingreso.js';

import { existeId, existeDescripcion } from '../db-helpers/ingreso.js';
import {validarCampos} from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
const router=Router();
router.get('/',[
    validarCampos,
    validarJWT
],ingresos.ingresoGet);

router.post('/guardar',[
    check('descripcion', 'El descripcion es obligatorio para el rubro').not().isEmpty(),
    check('descripcion').custom(existeDescripcion),
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

router.post('/ingresos/fechas', [], ingresos.ingresosByDate);

export default router;