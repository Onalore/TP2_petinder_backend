import { Router } from 'express';
import AdoptanteController from '../controller/adoptanteController.js';
import { Adoptante } from './models/adoptante';
const router = Router();
const adoptanteController = new AdoptanteController()
// Alta: Crear un nuevo adoptante
router.post('/adoptantes',adoptanteController.createAdoptante);

// Baja: Eliminar un adoptante por ID
router.delete('/adoptantes/:id', async (req, res) => {
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
});

// Modificación: Actualizar un adoptante por ID
router.put('/adoptantes/:id', async (req, res) => {
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
});

// Ruta para obtener la lista completa de adoptantes
router.get('/adoptantes', async (req, res) => {
  try {
    console.log("adoptantes");
    const adoptantes = await Adoptante.findAll();
    res.status(200).json(adoptantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
