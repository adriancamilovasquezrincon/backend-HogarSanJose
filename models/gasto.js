import mongoose from 'mongoose';

const GastoSchema = mongoose.Schema({
    persona: { type: mongoose.Schema.Types.ObjectId, ref: 'persona' },
    nombreGasto:{type:String, maxlength:45},
    valorGasto: { type: Number, required: true},
    descripcion: { type: String, maxlength: 200},
    estado: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('gasto', GastoSchema);