import { Router } from "express";
import MascotaController from "../controller/mascotaController.js";

const router = Router();
const mascotaController = MascotaController;

router.post("/", mascotaController.crearMascota);
router.get("/", mascotaController.obtenerMascotas);
router.get("/:id", mascotaController.obtenerMascotaPorId);
router.put("/:id", mascotaController.actualizarMascota);
router.delete("/:id", mascotaController.eliminarMascota);

export default router;
