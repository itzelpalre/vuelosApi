import { Router } from "express";
import {
  createVuelo,
  getVuelos,
} from "../controllers/vuelos.controller.js";

const router = Router();

// GET all Employees
router.get("/rutavuelo", getVuelos);

// INSERT An Employee
router.post("/rutavuelo", createVuelo);

export default router;
