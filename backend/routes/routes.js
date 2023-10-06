import express from "express";
import { createAyuda } from "../controllers/AyudaController.js";
import { getAllCategorias } from "../controllers/CategoriaController.js";
import { createContacto } from "../controllers/ContactoController.js";
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

//ruta para mostrar un unico producto
router.get("/productos/:id", getProducto);

//Metodo para agregar un contacto
router.post("/contacto", createContacto);

//Metodo para agregar una ayuda
router.post("/ayuda", createAyuda);

export default router;
