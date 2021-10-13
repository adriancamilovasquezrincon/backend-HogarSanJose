import Persona from "../models/persona.js";

const existeId=async(id)=>{
    const existe=await Persona.findById(id)

    if (! existe) throw new Error (`No existe Persona para este Id ${id}`)
}

const existenumDocumento=async(numDocumento)=>{
    const existe=await Persona.findOne({numDocumento})

    if (existe) throw new Error ('Ya existe el número de Documento...')
}

export {existeId,existenumDocumento};