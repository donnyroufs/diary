import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import Controller from "../controllers/index";

const router = Router();
const prisma = new PrismaClient();

const controller = new Controller(prisma.user);

router.get("/", controller.all);
router.post("/", controller.create);
router.put("/", controller.update);
router.delete("/", controller.delete);

router.get("/:id", controller.findById);

export default router;
