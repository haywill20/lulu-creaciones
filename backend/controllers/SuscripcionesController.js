//importamos el modelo
import SuscripcionesModel from "../models/SuscripcionModel.js";

//Metodo para crear un registro de suscripcion
export const createSuscripcion = async (req, res) => {
  try {
    await SuscripcionesModel.create(req.body);
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
