//importamos el modelo
import CategoriaModel from "../models/CategoriaModel.js";

//**Metodos para el CRUD */

//Mostrar todas las categorias

export const getAllCategorias = async (req, res) => {
  try {
    const categorias = await CategoriaModel.findAll();
    res.json(categorias);
  } catch (error) {
    res.json({ message: error.message });
  }
};
