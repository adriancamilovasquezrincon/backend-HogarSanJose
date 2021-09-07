import Persona from '../models/persona.js';
import { response, request } from 'express';
import { subirArchivo } from '../db-helpers/subirArchivo.js';
import path from 'path/posix';
import * as fs from 'fs'
const personas = {
    personaGet: async (req, res = response) => {
        const { value } = req.query;
        const persona = await Persona
            .find({
                $or: [
                    { tipoPersona: new RegExp(value, 'i') },
                    { nombres: new RegExp(value, 'i') },
                    { apellidos: new RegExp(value, 'i') },
                    { correo: new RegExp(value, 'i') },
                    { cargo: new RegExp(value, 'i') },
                    { lugarNacimiento: new RegExp(value, 'i') },
                ]
            })
            .sort({ 'createdAt': -1 })
        res.json({
            persona
        })
    },

    personaPost: async (req, res = response) => {
        console.log(req.body)
        const {tipoPersona, nit, nroDocumento, nombres, apellidos, telefono, correo, cargo, lugarNacimiento, estado} = req.body;
        const persona = new Persona({ tipoPersona, nit, nroDocumento, nombres, apellidos, telefono, correo, cargo, lugarNacimiento, estado })

        await persona.save();
        res.json({
            persona
        })

    },
    personaCargarArchivo: async (req, res = response)=>{
        const {id} =req.params;
        try {
            const nombre=await subirArchivo(req.files,undefined)

            let persona=await Persona.findById(id);
            if(persona.foto){
                const __dirname=path.dirname(url.fileURLToPath(import.meta.url));
                const pathImage=path.join(__dirname, '../uploads/', persona.foto)
                if(fs.existsSync(pathImage)){
                    fs.unlinkSync(pathImage)
                }
            }
            persona=await Persona.findByIdAndUpdate(id,{foto:nombre,})
            // Devolver el nombre
            res.json({nombre})

        } catch (error) {
            res.status(400).json({error})
        }
    },
    personaActivar: async (req, res) => {
        const { id } = req.params;
        const persona = await Persona.findByIdAndUpdate(id, { estado: 1 })

        res.json({
            persona
        })
    },
    personaDesactivar: async (req, res) => {
        const { id } = req.params;
        const persona = await Persona.findByIdAndUpdate(id, { estado: 0 })

        res.json({
            persona
        })
    },
    personaPut: async (req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;

        const persona = await Persona.findByIdAndUpdate(id, resto)

        res.json({
            persona
        })
    },
    personaDelete: async (req, res) => {
        const { id } = req.params;
        const persona = await Persona.findByIdAndDelete(id)

        res.json({
            persona
        })
    }
}

export { personas };