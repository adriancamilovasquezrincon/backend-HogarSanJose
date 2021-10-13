import mongoose from 'mongoose';

const ContactoSchema=mongoose.Schema({
    telefono:{type:Number, maxlength:45, required:true},
    correo:{type:String, maxlength:200, required:true},
    nombres:{type:String, maxlength:200, required:true},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('contacto',ContactoSchema);