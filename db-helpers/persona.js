import Persona from "../models/persona.js";

const existeId=async(id)=>{
    const existe=await Persona.findById(id)

    if (! existe) throw new Error (`No existe Persona para este Id ${id}`)
}

export {existeId};