import Gasto from '../models/gasto.js'
const gastos = {
    gastoGet: async (req, res) => {
        const { value } = req.query;
        const gasto = await Gasto
            .find({
                $or: [
                    { descripcion: new RegExp(value, 'i') },
                ]
            })
            .populate('persona', 'tipoPersona')
            .populate('tipoGasto', 'nombreGasto')
            .sort({ 'createdAt': -1 })
        res.json({
            gasto
        })
    },

    gastoPost: async (req, res) => {
        console.log(req.body)
        const { tipoGasto, persona, valorGasto,  descripcion, estado } = req.body;
        const gasto = new Gasto({ tipoGasto, persona, valorGasto, descripcion, estado })

        await gasto.save();
        res.json({
            gasto
        })

    },
    gastoPut: async (req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;

        const gasto = await Gasto.findByIdAndUpdate(id, resto)

        res.json({
            gsto
        })
    },
    gastoActivar: async (req, res) => {
        const { id } = req.params;
        const gasto = await Gasto.findByIdAndUpdate(id, { estado: 1 })

        res.json({
            gasto
        })
    },
    gastoDesactivar: async (req, res) => {
        const { id } = req.params;
        const gasto = await Gasto.findByIdAndUpdate(id, { estado: 0 })

        res.json({
            gasto
        })
    },
    gastoDelete: async (req, res) => {
        const { id } = req.params;
        const gasto = await Gasto.findByIdAndDelete(id)

        res.json({
            gasto
        })
    }
}

export { gastos };