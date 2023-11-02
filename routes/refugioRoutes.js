import { Router } from 'express';
import RefugioController from '../controller/refugioController.js';

const router = Router();
const refugioController = RefugioController

router.post('/refugios', refugioController.crearRefugio);
router.get('/refugios', refugioController.obtenerRefugios);
router.get('/refugios/:id', refugioController.obtenerRefugioPorId);
router.put('/refugios/:id', refugioController.actualizarRefugio);
router.delete('/refugios/:id', refugioController.eliminarRefugio);

export default router;