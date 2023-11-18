import { Router } from "express";
import AdoptanteController from "../controller/adoptanteController.js";

const router = Router();
const adoptanteController = AdoptanteController;

router.post("/", adoptanteController.crearAdoptante);
//router.post("/preferirMascota/:idAdoptante/:idMascota", adoptanteController.preferirMascota);
router.get("/", adoptanteController.obtenerAdoptantes);
router.get("/:id", adoptanteController.obtenerAdoptantePorId);
router.put("/:id", adoptanteController.actualizarAdoptante);
router.delete("/:id", adoptanteController.eliminarAdoptante);

export default router;
