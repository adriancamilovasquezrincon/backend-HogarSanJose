import gasto from "../models/gasto.js";

const stock = {
  disminuirStock: async (_id, valorGasto) => {
    let { stock } = await gasto.findById(_id);
    stock = parseInt(stock) - parseInt(valorGasto);
    await gasto.findByIdAndUpdate({ _id }, { stock });
  },
  aumentarStock: async (_id, valorGasto) => {
    let { stock } = await gasto.findById(_id);
    stock = parseInt(stock) + parseInt(valorGasto);
    await gasto.findByIdAndUpdate({ _id }, { stock });
  },
};
export default stock;
