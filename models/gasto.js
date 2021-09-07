import mongoose from 'mongoose';

const GastoSchema=mongoose.Schema({
    tipoGasto:{type:mongoose.Schema.Types.ObjectId,ref:'tipoGasto', required:true},
    persona:{type:mongoose.Schema.Types.ObjectId,ref:'persona'},
    valorGasto:{type:Number, maxlength:45},
    descripcion:{type:String, maxlength:200},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('gasto',GastoSchema);