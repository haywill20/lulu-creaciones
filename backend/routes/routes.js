import express from "express";
import { createAyuda } from "../controllers/AyudaController.js";
import { getAllCategorias } from "../controllers/CategoriaController.js";
import { createContacto } from "../controllers/ContactoController.js";
import {
  createProducto,
  deleteProducto,
  getAllProductos,
  getProducto,
} from "../controllers/ProductoController.js";
import {
  createSlider,
  deleteSlider,
  getAllSliders,
} from "../controllers/SliderControllers.js";
import { getAllSubCategorias } from "../controllers/SubCategoriaController.js";
import { createSuscripcion } from "../controllers/SuscripcionesController.js";
import multer from "multer";

const router = express.Router();

// Configurar multer (inicializar)
// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/productos");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//ruta para los sliders
router.get("/sliders", getAllSliders);
router.post("/createslider", createSlider);
router.delete("/deleteslider/:id", deleteSlider);

//ruta para las categorias
router.get("/categorias", getAllCategorias);

//ruta para las subcategorias
router.get("/subcategorias", getAllSubCategorias);

//ruta para los productos
router.get("/productos", getAllProductos);
router.post("/createproducto", upload.single("imagen"), createProducto);
router.delete("/deleteproducto/:id", deleteProducto);

//ruta para mostrar un unico producto
router.get("/productos/:id", getProducto);

//ruta para agregar un contacto
router.post("/contactos", createContacto);

//ruta para agregar una ayuda
router.post("/ayudas", createAyuda);

//ruta para agregar una suscripcion
router.post("/suscripciones", createSuscripcion);

export default router;
