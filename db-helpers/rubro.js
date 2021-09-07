import Rubro from "../models/rubro.js";

const existeId=async(id)=>{
    const existe=await Rubro.findById(id)

    if (! existe) throw new Error (`No existe un Rubro para este Id ${id}`)
}

const existeNombre=async(nombre)=>{
    const existe=await Rubro.findOne({nombre})

    if (existe) throw new Error ('Ya existe un nombre de este rubro')
}


export {existeId, existeNombre};