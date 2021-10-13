import mongoose from 'mongoose';

const PersonaSchema=mongoose.Schema({
    tipoPersona:{type:String, maxlength:25},
    nit:{type:Number},
    numDocumento:{type:Number,maxlength:25, required:true},
    nombres:{type:String, maxlength:25},
    apellidos:{type:String, maxlength:25},
    telefono:{type:Number, maxlength:12},
    correo:{type:String, maxlength:60},
    lugarNacimiento:{type:String, maxlength:60},
    foto:{type:String},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('persona',PersonaSchema);