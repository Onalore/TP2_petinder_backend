import { Router } from "express";
import adoptanteRoutes from "./adoptanteRoutes.js";
import mascotaRoutes from "./mascotaRoutes.js";
import refugioRoutes from "./refugioRoutes.js";

const router = Router();

router.use("/adoptantes", adoptanteRoutes);
router.use("/mascotas", mascotaRoutes);
router.use("/refugios", refugioRoutes);

export default router;
