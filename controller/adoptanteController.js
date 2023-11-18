import { Adoptante, Mascota } from "../models/index.js";

class AdoptanteController {
  // Crear un nuevo adoptante
  async crearAdoptante(req, res) {
    if (!req.body) {
      return res
        .status(400)
        .json({ error: "Datos del adoptante no proporcionados" });
    }
    try {
      const nuevoAdoptante = await Adoptante.create(req.body);
      res.status(200).json({ ok: true, message: "Adoptante creado" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  //Crear preferirMascota
  async preferirMascota(req, res) {
    try {
      const adoptante = await Adoptante.findByPk(req.params.idAdoptante);
      const mascota = await Mascota.findByPk(req.params.idMascota);
      if (!adoptante || !mascota) {
        return res
          .status(400)
          .json({ error: "Adoptante o mascota no encontrados" });
      }
      const adoptanteMascota = adoptante.addMascota(mascota);
      //mascota.addAdoptante(adoptante) es lo mismo
      res.status(200).json({ ok: true, adoptanteMascota: adoptanteMascota });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener la lista completa de adoptantes
  async obtenerAdoptantes(req, res) {
    try {
      const adoptantes = await Adoptante.findAll();
      res.status(200).json({ ok: true, adoptantes: adoptantes });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener un adoptante por ID
  async obtenerAdoptantePorId(req, res) {
    try {
      const adoptante = await Adoptante.findByPk(req.params.id);
      if (!adoptante) {
        return res.status(404).json({ error: "Adoptante no encontrado" });
      }
      res.status(200).json({ ok: true, adoptante: adoptante });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Actualizar un adoptante por ID
  async actualizarAdoptante(req, res) {
    try {
      const adoptante = await Adoptante.findByPk(req.params.id);
      if (!adoptante) {
        return res.status(404).json({ error: "Adoptante no encontrado" });
      }
      adoptante.set(req.body); // Actualiza los campos del adoptante.
      await adoptante.save();
      res.status(200).json({ ok: true, message: "Adoptante actualizado" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Eliminar un adoptante por ID
  async eliminarAdoptante(req, res) {
    try {
      const adoptante = await Adoptante.findByPk(req.params.id);
      if (!adoptante) {
        return res.status(404).json({ error: "Adoptante no encontrado" });
      }
      await adoptante.destroy();
      res.status(200).json({ ok: true, message: "Adoptante eliminado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new AdoptanteController();
