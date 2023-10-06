import express from "express";
import { getAllCategorias } from "../controllers/CategoriaController.js";
import {
  getAllProductos,
  getProducto,
} from "../controllers/ProductoController.js";
import { getAllSliders } from "../controllers/SliderControllers.js";
import { getAllSubCategorias } from "../controllers/SubCategoriaController.js";

const router = express.Router();

//ruta para los sliders
router.get("/sliders", getAllSliders);

//ruta para las categorias
router.get("/categorias", getAllCategorias);

//ruta para las subcategorias
router.get("/subcategorias", getAllSubCategorias);

//ruta para los productos
router.get("/productos", getAllProductos);

router.get("/productos/:id", getProducto);

export default router;
