import { Router } from "express";

import todoRoutes from "./Todo.routes";
import userRoutes from "./User.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/todo", todoRoutes);

export default router;
