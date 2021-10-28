import Gasto from "../models/gasto.js";

const existeId=async(id)=>{
    const existe=await Gasto.findById(id)

    if (! existe) throw new Error (`No existe gasto para este Id ${id}`)
}

const existeDescripcion=async(descripcion)=>{
    const existe=await Gasto.findOne({descripcion})

    if (existe) throw new Error ('Ya existe la descripcion...')
}


export {existeId, existeDescripcion };