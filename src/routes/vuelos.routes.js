import { Router } from "express";
import {
  createVuelo,
  getVuelos,
  getRuta,
  updateVuelo,
  deleteVuelo,
} from "../controllers/vuelos.controller.js";

const router = Router();

// GET all Rutas
router.get("/rutavuelo", getVuelos);

// GET una Ruta
router.get("/rutavuelo/:id", getRuta);

// INSERT una Ruta
router.post("/rutavuelo", createVuelo);

// UPDATE una Ruta
router.patch("/rutavuelo/:id", updateVuelo);

// DELETE una Ruta
router.delete("/rutavuelo/:id", deleteVuelo);

export default router;
