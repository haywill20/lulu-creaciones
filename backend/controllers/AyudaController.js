//importamos el modelo
import AyudaModel from "../models/AyudaModel.js";

//**Metodos para el CRUD */

//Metodo para mostrar todas las ayudas
export const getAllAyudas = async (req, res) => {
  try {
    const ayudas = await AyudaModel.findAll();
    res.json(ayudas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Metodo para crear un registro
export const createAyuda = async (req, res) => {
  try {
    await AyudaModel.create(req.body);
    res.json({ message: "El mensaje de ayuda se registró correctamente" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
