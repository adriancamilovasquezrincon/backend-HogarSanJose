import Gasto from "../models/gasto.js";

const existeId=async(id)=>{
    const existe=await Gasto.findById(id)

    if (! existe) throw new Error (`No existe gasto para este Id ${id}`)
}

const existeValorGasto=async(valorGasto)=>{
    const existe=await Gasto.findOne({valorGasto})

    if (existe) throw new Error ('Ya existe la valorGasto...')
}


export {existeId,existeValorGasto };