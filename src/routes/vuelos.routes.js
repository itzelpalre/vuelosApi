import { Router } from "express";
import {
  createVuelo,
  getVuelos,
  deleteVuelo,
} from "../controllers/vuelos.controller.js";

const router = Router();

// GET all Employees
router.get("/rutavuelo", getVuelos);

// INSERT An Employee
router.post("/rutavuelo", createVuelo);

// DELETE una Ruta
router.delete("/rutavuelo", deleteVuelo);

export default router;
