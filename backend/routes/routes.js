import express from "express";
import { createAyuda } from "../controllers/AyudaController.js";
import { getAllCategorias } from "../controllers/CategoriaController.js";
import { createContacto } from "../controllers/ContactoController.js";
import {
  createProducto,
  getAllProductos,
  getProducto,
} from "../controllers/ProductoController.js";
import { getAllSliders } from "../controllers/SliderControllers.js";
import { getAllSubCategorias } from "../controllers/SubCategoriaController.js";
import { createSuscripcion } from "../controllers/SuscripcionesController.js";

const router = express.Router();

//ruta para los sliders
router.get("/sliders", getAllSliders);

//ruta para las categorias
router.get("/categorias", getAllCategorias);

//ruta para las subcategorias
router.get("/subcategorias", getAllSubCategorias);

//ruta para los productos
router.get("/productos", getAllProductos);
router.post("/createproducto", createProducto);

//ruta para mostrar un unico producto
router.get("/productos/:id", getProducto);

//ruta para agregar un contacto
router.post("/contactos", createContacto);

//ruta para agregar una ayuda
router.post("/ayudas", createAyuda);

//ruta para agregar una suscripcion
router.post("/suscripciones", createSuscripcion);

export default router;
