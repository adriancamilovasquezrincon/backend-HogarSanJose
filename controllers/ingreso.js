import Ingreso from '../models/ingreso.js'
const ingresos = {
    ingresoGet: async (req, res) => {
        const { value } = req.query;
        const ingreso = await Ingreso
            .find({
                $or: [
                    { nombreIngreso: new RegExp(value, 'i') },
                    { descripcion: new RegExp(value, 'i') },
                ]
            })
            .populate('rubro','nombre')
            .populate('persona','tipoPersona')
            .sort({ 'createdAt': -1 })
        res.json({
            ingreso
        })
    },

    ingresoPost: async (req, res) => {
        console.log(req.body)
        const { rubro, persona, nombreIngreso, valorIngreso,  descripcion, estado} = req.body;
        const ingreso = new Ingreso({  rubro, persona, nombreIngreso, valorIngreso, descripcion, estado })

        await ingreso.save();
        res.json({
            ingreso
        })

    },
    ingresoPut: async (req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, ...resto } = req.body;

        const ingreso = await Ingreso.findByIdAndUpdate(id, resto)

        res.json({
            ingreso
        })
    },
    ingresoActivar: async (req, res) => {
        const { id } = req.params;
        const ingreso = await Ingreso.findByIdAndUpdate(id, { estado: 1 })

        res.json({
            ingreso
        })
    },
    ingresoDesactivar: async (req, res) => {
        const { id } = req.params;
        const ingreso = await Ingreso.findByIdAndUpdate(id, { estado: 0 })

        res.json({
            ingreso
        })
    },
    ingresoDelete: async (req, res) => {
        const { id } = req.params;
        const ingreso = await Ingreso.findByIdAndDelete(id)

        res.json({
            ingreso
        })
    }
}

export { ingresos };