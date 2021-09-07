import mongoose from 'mongoose';

const RubroSchema=mongoose.Schema({
    nombre:{type:String, maxlength:42, required:true},
    descripcion:{type:String, maxlength:80},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('rubro',RubroSchema);