import TipoGasto from "../models/tipoGasto.js";

const existeId=async(id)=>{
    const existe=await TipoGasto.findById(id)

    if (! existe) throw new Error (`No existe un Tipo de Gasto para este Id ${id}`)
}

const existeNombreGasto=async(nombreGasto)=>{
    const existe=await TipoGasto.findOne({nombreGasto})

    if (existe) throw new Error ('Ya existe un nombre del tipo de Gasto')
}


export {existeId, existeNombreGasto};