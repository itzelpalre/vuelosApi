import express from "express";
import morgan from "morgan";
import cors from "cors";

import employeesRoutes from "./routes/employees.routes.js";
import vuelosRoutes from "./routes/vuelos.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
app.use(cors());

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", employeesRoutes);
app.use("/apivuelos", vuelosRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
