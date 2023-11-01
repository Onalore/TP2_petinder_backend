import {Router} from "express";
import adoptanteRoutes from "./adoptanteRoutes"

const router = Router()

router.use("/adoptante", adoptanteRoutes)