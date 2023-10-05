//importamos el modelo
import SubCategoriaModel from "../models/SubcategoriaModel.js";

//**Metodos para el CRUD */

export const getAllSubCategorias = async (req, res) => {
  try {
    const subcategorias = await SubCategoriaModel.findAll();
    res.json(subcategorias);
  } catch (error) {
    res.json({ message: error.message });
  }
};
