//importamos el modelo
import SliderModel from "../models/SliderModel.js";

//**Metodos para el crud */

//Mostrar todos los registros
export const getAllSliders = async (req, res) => {
  try {
    const sliders = await SliderModel.findAll();
    res.json(sliders);
  } catch (error) {
    res.json({ message: error.message });
  }
};
