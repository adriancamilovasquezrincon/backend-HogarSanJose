import Rubro from '../models/rubro.js'
const rubros = {
    rubroGet: async (req, res) => {
        const { value } = req.query;
        const rubro = await Rubro
            .find({
                $or: [
                    { nombre: new RegExp(value, 'i') },
                    { descripcion: new RegExp(value, 'i') },
                ]
            })
            .sort({ 'createdAt': -1 })
        res.json({
            rubro
        })
    },

    rubroPost: async (req, res) => {
        console.log(req.body)
        const {nombre, descripcion, estado} = req.body;
        const rubro = new Rubro({ nombre, descripcion, estado })

        await rubro.save();
        res.json({
            rubro
        })

    },
    rubroPut: async (req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;

        const rubro = await Rubro.findByIdAndUpdate(id, resto)

        res.json({
            rubro
        })
    },
    rubroActivar: async (req, res) => {
        const { id } = req.params;
        const rubro = await Rubro.findByIdAndUpdate(id, { estado: 1 })

        res.json({
            rubro
        })
    },
    rubroDesactivar: async (req, res) => {
        const { id } = req.params;
        const rubro = await Rubro.findByIdAndUpdate(id, { estado: 0 })

        res.json({
            rubro
        })
    },
    rubroDelete: async (req, res) => {
        const { id } = req.params;
        const rubro = await Rubro.findByIdAndDelete(id)

        res.json({
            rubro
        })
    }
}

export { rubros };