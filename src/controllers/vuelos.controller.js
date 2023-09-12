import { pool } from "../db.js";

export const getVuelos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM rutas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getRuta = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM rutas WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Ruta no encontrada" });
    }

    res.json(rows[0]);
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
    return res.status(500).json({ message: "Something goes wrong_13" });
  }
};

export const updateVuelo = async (req, res) => {
  try {
    const { id } = req.params;
    const { salida, destino, fecha } = req.body;

    const [result] = await pool.query(
      "UPDATE rutas SET salida = IFNULL(?, salida), destino = IFNULL(?, destino), fecha = IFNULL(?, fecha), WHERE id = ?",
      [salida, destino, fecha]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Ruta no encontrada" });

    const [rows] = await pool.query("SELECT * FROM rutas WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteVuelo = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM rutas WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Ruta no encontrada" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

