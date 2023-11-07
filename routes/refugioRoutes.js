import { Router } from "express";
import RefugioController from "../controller/refugioController.js";

const router = Router();
const refugioController = RefugioController;

router.post("/", refugioController.crearRefugio);
router.get("/", refugioController.obtenerRefugios);
router.get("/:id", refugioController.obtenerRefugioPorId);
router.put("/:id", refugioController.actualizarRefugio);
router.delete("/:id", refugioController.eliminarRefugio);

export default router;
