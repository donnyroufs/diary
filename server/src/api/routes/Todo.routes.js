import { Router } from "express";
import prisma from "../../db";
import TodoController from "../controllers/Todo.controller";

const router = Router();

const controller = new TodoController(prisma.todo);

router.get("/", controller.all);
router.post("/", controller.create);
router.put("/", controller.update);
router.delete("/", controller.delete);

router.get("/:id", controller.findById);

export default router;
