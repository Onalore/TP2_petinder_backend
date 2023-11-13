import { Mascota } from "../models/index.js";

class MascotaController {
  async crearMascota(req, res) {
    try {
      const nuevaMascota = await Mascota.create(req.body);
      res.status(201).json({ ok: true, message: "Mascota creada" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async obtenerMascotas(req, res) {
    try {
      const mascotas = await Mascota.findAll();
      res.status(200).json({ ok: true, mascotas: mascotas });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerMascotaPorId(req, res) {
    try {
      const mascota = await Mascota.findByPk(req.params.id);
      if (!mascota) {
        return res.status(404).json({ error: "Mascota no encontrada" });
      }
      res.status(200).json({ ok: true, mascota: mascota });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async actualizarMascota(req, res) {
    try {
      const mascota = await Mascota.findByPk(req.params.id);
      if (!mascota) {
        return res.status(404).json({ error: "Mascota no encontrada" });
      }
      mascota.set(req.body);
      await mascota.save();
      res.status(200).json({ ok: true, message: "Mascota actualizada" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async eliminarMascota(req, res) {
    try {
      const mascota = await Mascota.findByPk(req.params.id);
      if (!mascota) {
        return res.status(404).json({ error: "Mascota no encontrada" });
      }
      await mascota.destroy();
      res.status(200).json({ ok: true, message: "Mascota eliminada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new MascotaController();
