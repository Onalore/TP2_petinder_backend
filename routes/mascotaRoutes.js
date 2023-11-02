import { Router } from 'express';
import MascotaController from '../controller/mascotaController.js';

const router = Router();
const mascotaController = MascotaController

router.post('/mascotas', mascotaController.crearMascota);
router.get('/mascotas', mascotaController.obtenerMascotas);
router.get('/mascotas/:id', mascotaController.obtenerMascotaPorId);
router.put('/mascotas/:id', mascotaController.actualizarMascota);
router.delete('/mascotas/:id', mascotaController.eliminarMascota);

export default router;
