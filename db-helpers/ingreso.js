import Ingreso from "../models/ingreso.js";

const existeId=async(id)=>{
    const existe=await Ingreso.findById(id)

    if (! existe) throw new Error (`No existe ingreso para este Id ${id}`)
}

const existeDescripcion=async(descripcion)=>{
    const existe=await Ingreso.findOne({descripcion})

    if (existe) throw new Error ('Ya existe la Descripcion...')
}

export {existeId, existeDescripcion};