import Gasto from "../models/gasto.js";

const existeId=async(id)=>{
    const existe=await Gasto.findById(id)

    if (! existe) throw new Error (`No existe gasto para este Id ${id}`)
}

const existeTipoGasto=async(tipoGasto)=>{
    const existe=await Gasto.findOne({tipoGasto})

    if (existe) throw new Error ('Ya existe un tipo de Gasto')
}

const existePersona=async(persona)=>{
    const existe=await Gasto.findOne({persona})

    if (existe) throw new Error ('Ya existe una persona en ese Gasto')
}

export {existeId, existeTipoGasto, existePersona};