import { pool } from "../db.js";

export const getVuelos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM rutas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createVuelo = async (req, res) => {
  try {
    const { salida, destino, fecha } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO rutas (salida, destino, fecha) VALUES (?, ?, ?)",
      [salida, destino, fecha]
    );
    res.status(201).json({ id: rows.insertId, salida, destino, fecha });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

