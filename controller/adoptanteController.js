import Adoptante from "../models/adoptante.js";

class AdoptanteController {
  // Crear un nuevo adoptante
  async crearAdoptante(req, res) {
    try {
      const nuevoAdoptante = await Adoptante.create(req.body);
      res.status(201).json(nuevoAdoptante);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Obtener la lista completa de adoptantes
  async obtenerAdoptantes(req, res) {
    try {
      const adoptantes = await Adoptante.findAll();
      res.status(200).json({ok: true, message: "Adoptante created"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener un adoptante por ID
  async obtenerAdoptantePorId(req, res) {
    try {
      const adoptante = await Adoptante.findByPk(req.params.id);
      if (!adoptante) {
        return res.status(404).json({ error: 'Adoptante no encontrado' });
      }
      res.status(200).json(adoptante);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Actualizar un adoptante por ID
  async actualizarAdoptante(req, res) {
    try {
      const adoptante = await Adoptante.findByPk(req.params.id);
      if (!adoptante) {
        return res.status(404).json({ error: 'Adoptante no encontrado' });
      }
      adoptante.set(req.body); // Actualiza los campos del adoptante.
      await adoptante.save();
      res.status(200).json(adoptante);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Eliminar un adoptante por ID
  async eliminarAdoptante(req, res) {
    try {
      const adoptante = await Adoptante.findByPk(req.params.id);
      if (!adoptante) {
        return res.status(404).json({ error: 'Adoptante no encontrado' });
      }
      await adoptante.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new AdoptanteController();