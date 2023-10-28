//importamos el modelo
import SuscripcionesModel from "../models/SuscripcionModel.js";

//Metodo para mostrar todas las suscripciones
export const getAllSuscripciones = async (req, res) => {
  try {
    const suscripciones = await SuscripcionesModel.findAll();
    res.json(suscripciones);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Metodo para crear un registro de suscripcion
export const createSuscripcion = async (req, res) => {
  try {
    await SuscripcionesModel.create(req.body);
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
