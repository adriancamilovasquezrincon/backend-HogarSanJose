import mongoose from 'mongoose';

const TipogastoSchema=mongoose.Schema({
    nombreGasto:{type:String, maxlength:45, required:true},
    descripcion:{type:String, maxlength:200},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('tipoGasto',TipogastoSchema);