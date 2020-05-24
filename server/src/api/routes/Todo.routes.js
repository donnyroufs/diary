import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import TodoController from "../controllers/Todo.controller";

const router = Router();
const prisma = new PrismaClient();

const controller = new TodoController(prisma.todo);

router.get("/", controller.all);
router.post("/", controller.create);
router.put("/", controller.update);
router.delete("/", controller.delete);

router.get("/:id", controller.findById);

export default router;
