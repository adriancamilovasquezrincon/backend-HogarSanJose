import Usuario from "../models/usuario.js";

const existeId=async(id)=>{
    const existe=await Usuario.findById(id)

    if (! existe) throw new Error (`No existe un Usuario para este Id ${id}`)
}

const existeNombre=async(nombre)=>{
    const existe=await Usuario.findOne({nombre})

    if (existe) throw new Error ('Ya existe un nombre de Usuario')
}

const existeEmail=async(email)=>{
    const existe=await Usuario.findOne({email})

    if (existe) throw new Error ('Ya existe correo para ese usuario')
}

const existePassword=async(password)=>{
    const existe=await Usuario.findOne({password})

    if (existe) throw new Error ('Ya existe una contraseña para ese usuario')
}

export {existeId, existeNombre, existeEmail, existePassword};