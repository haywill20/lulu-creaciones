import express from "express";
import { getAllCategorias } from "../controllers/CategoriaController.js";
import { getAllSliders } from "../controllers/SliderControllers.js";

const router = express.Router();

//ruta para los sliders
router.get("/sliders", getAllSliders);

//ruta para las categorias
router.get("/categorias", getAllCategorias);

export default router;
