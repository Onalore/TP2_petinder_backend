// Rutas para el Modelo de Refugio
import { Router } from 'express';
const router = Router();
import { Refugio } from './models';

// Alta: Crear un nuevo refugio
router.post('/refugios', async (req, res) => {
  try {
    const nuevoRefugio = await Refugio.create(req.body);
    res.status(201).json(nuevoRefugio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Baja: Eliminar un refugio por ID
router.delete('/refugios/:id', async (req, res) => {
  try {
    const refugio = await Refugio.findByPk(req.params.id);
    if (!refugio) {
      return res.status(404).json({ error: 'Refugio no encontrado' });
    }
    await refugio.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Modificación: Actualizar un refugio por ID
router.put('/refugios/:id', async (req, res) => {
  try {
    const refugio = await Refugio.findByPk(req.params.id);
    if (!refugio) {
      return res.status(404).json({ error: 'Refugio no encontrado' });
    }
    refugio.set(req.body); // Actualiza los campos del refugio.
    await refugio.save();
    res.status(200).json(refugio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;