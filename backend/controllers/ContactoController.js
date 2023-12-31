//importamos el modelo
import ContactoModel from "../models/ContactoModel.js";

//**Metodos para el CRUD */

//Metodo para crear un registro
export const createContacto = async (req, res) => {
  try {
    await ContactoModel.create(req.body);
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
