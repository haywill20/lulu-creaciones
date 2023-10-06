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

//Metodo para mostrar solo un producto
export const getProducto = async (req, res) => {
  try {
    const producto = await ProductoModel.findAll({
      where: { id: req.params.id },
    });
    res.json(producto[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
