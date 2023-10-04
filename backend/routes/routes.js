import express from "express";
import { getAllSliders } from "../controllers/SliderControllers.js";

const router = express.Router();

//ruta para los sliders
router.get("/", getAllSliders);

export default router;
