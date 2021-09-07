import TipoGasto from '../models/tipoGasto.js'
const tipoGastos = {
    tipoGastoGet: async (req, res) => {
        const { value } = req.query;
        const tipoGasto = await TipoGasto
            .find({
                $or: [
                    { nombreGasto: new RegExp(value, 'i') },
                    { descripcion: new RegExp(value, 'i') },
                ]
            })
            .sort({ 'createdAt': -1 })
        res.json({
            tipoGasto
        })
    },

    tipoGastoPost: async (req, res) => {
        console.log(req.body)
        const {nombreGasto, descripcion, estado} = req.body;
        const gastado = new TipoGasto({ nombreGasto, descripcion, estado })

        await gastado.save();
        res.json({
            gastado
        })

    },
    tipoGastoPut: async (req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;

        const tipoGasto = await TipoGasto.findByIdAndUpdate(id, resto)

        res.json({
            tipoGasto
        })
    },
    tipoGastoActivar: async (req, res) => {
        const { id } = req.params;
        const tipoGasto = await TipoGasto.findByIdAndUpdate(id, { estado: 1 })

        res.json({
            tipoGasto
        })
    },
    tipoGastoDesactivar: async (req, res) => {
        const { id } = req.params;
        const tipoGasto = await TipoGasto.findByIdAndUpdate(id, { estado: 0 })

        res.json({
            tipoGasto
        })
    },
    tipoGastoDelete: async (req, res) => {
        const { id } = req.params;
        const tipoGasto = await TipoGasto.findByIdAndDelete(id)

        res.json({
            tipoGasto
        })
    }
}

export { tipoGastos };