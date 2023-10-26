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

//Metodo para agregar un slider
export const createSlider = async (req, res) => {
  try {
    await SliderModel.create(req.body);
    res.json({
      message: "¡Slider agregado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Metodo para eliminar un slider
export const deleteSlider = async (req, res) => {
  try {
    await SliderModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Slider eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
