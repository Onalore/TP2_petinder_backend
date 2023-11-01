// Rutas para el Modelo de Mascota
import { Router } from 'express';
const router = Router();
import { Mascota } from './models';

// Alta: Crear una nueva mascota
router.post('/mascotas', async (req, res) => {
  try {
    const nuevaMascota = await Mascota.create(req.body);
    res.status(201).json(nuevaMascota);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Baja: Eliminar una mascota por ID
router.delete('/mascotas/:id', async (req, res) => {
  try {
    const mascota = await Mascota.findByPk(req.params.id);
    if (!mascota) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }
    await mascota.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Modificación: Actualizar una mascota por ID
router.put('/mascotas/:id', async (req, res) => {
  try {
    const mascota = await Mascota.findByPk(req.params.id);
    if (!mascota) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }
    mascota.set(req.body); // Actualiza los campos de la mascota.
    await mascota.save();
    res.status(200).json(mascota);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
