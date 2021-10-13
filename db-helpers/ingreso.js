import Ingreso from "../models/ingreso.js";

const existeId=async(id)=>{
    const existe=await Ingreso.findById(id)

    if (! existe) throw new Error (`No existe ingreso para este Id ${id}`)
}

const existeValorIngreso=async(valorIngreso)=>{
    const existe=await Ingreso.findOne({valorIngreso})

    if (existe) throw new Error ('Ya existe la valorIngreso...')
}

export {existeId, existeValorIngreso};