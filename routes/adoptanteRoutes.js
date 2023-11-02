import { Router } from 'express';
import AdoptanteController from '../controller/adoptanteController.js';

const router = Router();
const adoptanteController = AdoptanteController
router.post('/adoptantes', adoptanteController.crearAdoptante);
router.get('/adoptantes', adoptanteController.obtenerAdoptantes);
router.get('/adoptantes/:id', adoptanteController.obtenerAdoptantePorId);
router.put('/adoptantes/:id', adoptanteController.actualizarAdoptante);
router.delete('/adoptantes/:id', adoptanteController.eliminarAdoptante);

export default router;
