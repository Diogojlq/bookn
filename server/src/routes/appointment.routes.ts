import { Router } from "express";
import { appointmentController } from "../controllers/appointment.controller";

const router = Router();

router.post("/", appointmentController.create);
router.get("/user/:userId", appointmentController.getByUserId);
router.get("/available", appointmentController.getAvailable);
router.get("/:id", appointmentController.getById);
router.put("/:id", appointmentController.update);
router.delete("/:id", appointmentController.cancel);
router.patch("/:id/unavailable", appointmentController.markAsUnavailable);

export default router;
