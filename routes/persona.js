import {Router} from 'express';
import { check } from 'express-validator';
import {personas} from '../controllers/persona.js';

import {existenumDocumento} from '../db-helpers/persona.js'
import validarArchivoSubir from '../middlewares/validarArchivoSubir.js';
import { existeId } from '../db-helpers/persona.js';
import {validarCampos} from '../middlewares/validarCampos.js';
import { validarJWT } from '../middlewares/validar-JWT.js';
// import cloudinary from 'cloudinary'
// cloudinary.config({
//     CLOUDINARY_CLOUD_NAME=process.env.CLOUDINARY_CLOUD_NAME,
//     CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY,
//     CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET,
//     CLOUDINARY_URL=process.env.CLOUDINARY_URL
// })
const router=Router();
router.get('/',[
    validarCampos,
    validarJWT
],personas.personaGet);

router.post('/guardar',[
    check('numDocumento', 'El numDocumento es obligatorio para la Persona').not().isEmpty(),
    check('numDocumento').custom(existenumDocumento),
    validarCampos
],personas.personaPost);

router.post('/upload/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
    validarArchivoSubir,
    validarCampos,
    // console.log(req.file)
    // cloudinary.v2.uploader.upload(req.file.path)
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

router.delete('/borrar/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
],personas.personaDelete);

export default router;