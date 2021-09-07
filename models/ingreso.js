import mongoose from 'mongoose';

const IngresoSchema=mongoose.Schema({
    rubro:{type:mongoose.Schema.Types.ObjectId,ref:'rubro', required:true},
    persona:{type:mongoose.Schema.Types.ObjectId,ref:'persona'},
    nombreIngreso:{type:String, maxlength:25},
    valorIngreso:{type:Number, maxlength:45},
    descripcion:{type:String, maxlength:200},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('ingreso',IngresoSchema);