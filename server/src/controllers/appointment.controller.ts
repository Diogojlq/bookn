import { Request, Response } from "express";
import { appointmentService } from "../services/appointment.service";

export class AppointmentController {
  async create(req: Request, res: Response) {
    const { userId, date, startTime, endTime } = req.body;

    const slot = await appointmentService.create({
      userId,
      date,
      startTime,
      endTime,
    });

    return res.status(201).json(slot);
  }

  async getByUserId(req: Request, res: Response) {
    const { userId } = req.params;

    const slots = await appointmentService.getByUserId(userId);

    return res.json(slots);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const slot = await appointmentService.getById(id);

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" });
    }

    return res.json(slot);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const updated = await appointmentService.update(id, req.body);

    return res.json(updated);
  }

  async cancel(req: Request, res: Response) {
    const { id } = req.params;

    await appointmentService.cancel(id);

    return res.status(204).send();
  }

  async getAvailable(req: Request, res: Response) {
    const { date } = req.query;

    if (!date || typeof date !== "string") {
      return res.status(400).json({ message: "Date is required" });
    }

    const slots = await appointmentService.getAvailable(date);

    return res.json(slots);
  }

  async markAsUnavailable(req: Request, res: Response) {
    const { id } = req.params;

    const updated = await appointmentService.markAsUnavailable(id);

    return res.json(updated);
  }
}

export const appointmentController = new AppointmentController();
