import mongoose from 'mongoose';

const UsuarioSchema=mongoose.Schema({
    nombre:{type:String, maxlength:60, required:true},
    email:{type:String, required:true, maxlength:45},
    password:{type:String, required:true},
    rol:{type:String, maxlength:15},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('usuario',UsuarioSchema);