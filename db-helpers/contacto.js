import Contacto from "../models/contacto.js";

const existeId=async(id)=>{
    const existe=await Contacto.findById(id)

    if (! existe) throw new Error (`No existe el contacto: Id ${id}`)
}

const existeTelefono=async(telefono)=>{
    const existe=await Contacto.findOne({telefono})

    if (existe) throw new Error ('Ya existe el telefono')
}

const existeCorreo=async(correo)=>{
    const existe=await Contacto.findOne({correo})

    if (existe) throw new Error ('Ya existe ese Correo')
}

const existeNombres=async(nombres)=>{
    const existe=await Contacto.findOne({nombres})

    if (existe) throw new Error ('Ya existen esos Nombres')
}

export {existeId, existeTelefono, existeCorreo,existeNombres};