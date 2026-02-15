import { prisma } from "../../db/prisma";

export class AppointmentService {
  async create(userId: string, date: Date, startTime: Date, endTime: Date) {
    const slot = await prisma.slot.create({
      data: {
        date,
        startTime,
        endTime,
        userId,
        isAvailable: false,
      },
    });
    return slot;
  }

  async getByUserId(userId: string) {
    const appointments = await prisma.slot.findMany({
      where: { userId },
      orderBy: { startTime: "asc" },
    });
    return appointments;
  }

  async getById(id: string) {
    const appointment = await prisma.slot.findUnique({
      where: { id },
    });
    return appointment;
  }

  async update(
    id: string,
    data: { startTime?: Date; endTime?: Date; isAvailable?: boolean }
  ) {
    const updated = await prisma.slot.update({
      where: { id },
      data,
    });
    return updated;
  }

  async cancel(id: string) {
    const cancelled = await prisma.slot.delete({
      where: { id },
    });
    return cancelled;
  }

  async getAvailable(date: Date) {
    const appointments = await prisma.slot.findMany({
      where: {
        date,
        isAvailable: true,
      },
      orderBy: { startTime: "asc" },
    });
    return appointments;
  }

  async markAsUnavailable(id: string) {
    const updated = await prisma.slot.update({
      where: { id },
      data: { isAvailable: false },
    });
    return updated;
  }
}

export const appointmentService = new AppointmentService();
