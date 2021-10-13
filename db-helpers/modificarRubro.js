import rubro from "../models/rubro.js";

const stock = {
  disminuirStock: async (_id, valor) => {
    let { stock } = await rubro.findById(_id);
    stock = parseInt(stock) - parseInt(valor);
    await rubro.findByIdAndUpdate({ _id }, { stock });
  },
  aumentarStock: async (_id, valor) => {
    let { stock } = await rubro.findById(_id);
    stock = parseInt(stock) + parseInt(valor);
    await rubro.findByIdAndUpdate({ _id }, { stock });
  },
};
export default stock;
