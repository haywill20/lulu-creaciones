import express from "express";
import { createAyuda, getAllAyudas } from "../controllers/AyudaController.js";
import { getAllCategorias } from "../controllers/CategoriaController.js";
import {
  createContacto,
  getAllContactos,
} from "../controllers/ContactoController.js";
import {
  createProducto,
  deleteProducto,
  getAllProductos,
  getProducto,
  updateProducto,
} from "../controllers/ProductoController.js";
import {
  createSlider,
  deleteSlider,
  getAllSliders,
  getSlider,
  updateSlider,
} from "../controllers/SliderControllers.js";
import { getAllSubCategorias } from "../controllers/SubCategoriaController.js";
import {
  createSuscripcion,
  getAllSuscripciones,
} from "../controllers/SuscripcionesController.js";
import multer from "multer";

const router = express.Router();

// Configurar multer (inicializar)

// Configuración de multer (Productos)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/productos");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Configuración de multer (Slider)
const storageSlider = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/sliders");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadSlider = multer({ storage: storageSlider });

//ruta para los sliders
router.get("/sliders", getAllSliders);
router.get("/slider/:id", getSlider);
router.post("/createslider", uploadSlider.single("imagen"), createSlider);
router.put("/updateslider/:id", updateSlider);
router.delete("/deleteslider/:id", deleteSlider);

//ruta para las categorias
router.get("/categorias", getAllCategorias);

//ruta para las subcategorias
router.get("/subcategorias", getAllSubCategorias);

//ruta para los productos
router.get("/productos", getAllProductos);
router.get("/productos/:id", getProducto);
router.put("/updateproducto/:id", updateProducto);
router.post("/createproducto", upload.single("imagen"), createProducto);
router.delete("/deleteproducto/:id", deleteProducto);

//ruta para contactos
router.get("/contactos", getAllContactos);
router.post("/contactocreate", createContacto);

//ruta para ayudas
router.get("/ayudas", getAllAyudas);
router.post("/createayudas", createAyuda);

//ruta para agregar una suscripcion
router.get("/suscripciones", getAllSuscripciones);
router.post("/createsuscripciones", createSuscripcion);

export default router;
