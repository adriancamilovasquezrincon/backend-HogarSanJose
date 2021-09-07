import Ingreso from "../models/ingreso.js";

const existeId=async(id)=>{
    const existe=await Ingreso.findById(id)

    if (! existe) throw new Error (`No existe ingreso para este Id ${id}`)
}


const existeRubro=async(rubro)=>{
    const existe=await Ingreso.findOne({rubro})

    if (existe) throw new Error ('Ya existe un rubro en este ingreso')
}

const existePersona=async(persona)=>{
    const existe=await Ingreso.findOne({persona})

    if (existe) throw new Error ('Ya existe una persona con ese ingreso')
}

export {existeId, existeRubro, existePersona};