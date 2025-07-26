import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router()
router.post("/register", UserControllers.creatreUser)

export const UserRoutes = router