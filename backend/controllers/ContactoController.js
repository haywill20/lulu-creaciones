//importamos el modelo
import ContactoModel from "../models/ContactoModel.js";

//**Metodos para el CRUD */

//Metodo para mostrar todos los contactos
export const getAllContactos = async (req, res) => {
  try {
    const contactos = await ContactoModel.findAll();
    res.json(contactos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Metodo para crear un registro
export const createContacto = async (req, res) => {
  try {
    await ContactoModel.create(req.body);
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
