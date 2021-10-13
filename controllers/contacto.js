import Contacto from '../models/contacto.js'
const contactos = {
    contactoGet: async (req, res) => {
        const { value } = req.query;
        const contacto = await Contacto
            .find({
                $or: [
                    { correo: new RegExp(value, 'i') },
                    { nombres: new RegExp(value, 'i') },
                ]
            })
            .sort({ 'createdAt': -1 })
        res.json({
            contacto
        })
    },

    contactoPost: async (req, res) => {
        console.log(req.body)
        const { telefono, correo, nombres, estado } = req.body;
        const contacto = new Contacto({ telefono, correo, nombres, estado })

        await contacto.save();
        res.json({
            contacto
        })

    },
    contactoActivar: async (req, res) => {
        const { id } = req.params;
        const contacto = await Contacto.findByIdAndUpdate(id, { estado: 1 })

        res.json({
            contacto
        })
    },
    contactoDesactivar: async (req, res) => {
        const { id } = req.params;
        const contacto = await Contacto.findByIdAndUpdate(id, { estado: 0 })

        res.json({
            contacto
        })
    },
}

export { contactos };