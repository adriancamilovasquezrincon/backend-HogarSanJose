import mongoose from 'mongoose';

const IngresoSchema=mongoose.Schema({
    persona:{type:mongoose.Schema.Types.ObjectId,ref:'persona'},
    rubro:{type:mongoose.Schema.Types.ObjectId,ref:'rubro'},
    valorIngreso:{type: Number, required: true},
    descripcion:{type:String, maxlength:200,required: true},
    estado:{type:Number, default:1},
    total:{type:Number, default:0},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('ingreso',IngresoSchema);