//importamos el modelo
import ProductoModel from "../models/ProductoModel.js";

//**Metodos para el CRUD */

//Mostrar todos los productos

export const getAllProductos = async (req, res) => {
  try {
    const productos = await ProductoModel.findAll();
    res.json(productos);
  } catch (error) {
    res.json({ message: error.message });
  }
};
