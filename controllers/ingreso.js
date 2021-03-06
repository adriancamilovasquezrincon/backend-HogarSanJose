import Ingreso from '../models/ingreso.js'
// import modificarRubro from '../db-helpers/modificarRubro.js'
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
            .populate('persona','tipoPersona')
            .populate('rubro','nombre')
            .sort({ 'createdAt': -1 })
        res.json({
            ingreso
        })
    },
    ingresoPost : async (req, res) => {
        const { persona, rubro, valorIngreso,  descripcion, estado } = req.body;
        const ingreso = new Ingreso({
             persona, rubro, valorIngreso,  descripcion,  estado
        });
        await ingreso.save();
        res.json({
          ingreso,
        });
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
    },
    ingresosByDate: async (req, res) => {
        const { dateFrom, dateTo } = req.body;
        const ingresosByDate = await Ingreso.find({
            createdAt: {
                '$gte': new Date(dateFrom+' 00:00:00:00'), 
                '$lt': new Date(dateTo+' 11:59:59:59')
            }
        }).populate('persona', 'tipoPersona')
        .populate('rubro', 'nombre')

        res.json({
            ingresosByDate
        })
    }
}

export { ingresos };