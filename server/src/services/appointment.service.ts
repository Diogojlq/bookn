import { prisma } from "../../db/prisma";

type CreateSlotInput = {
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
};

export class AppointmentService {
  async create({ userId, date, startTime, endTime }: CreateSlotInput) {
    const slotDate = new Date(date);
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (start >= end) {
      throw new Error("Start time must be before end time");
    }

    const slot = await prisma.slot.create({
      data: {
        date: slotDate,
        startTime: start,
        endTime: end,
        userId,
        isAvailable: false,
      },
    });

    return slot;
  }

  async getByUserId(userId: string) {
    return prisma.slot.findMany({
      where: { userId },
      orderBy: { startTime: "asc" },
    });
  }

  async getById(id: string) {
    return prisma.slot.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    data: {
      startTime?: string;
      endTime?: string;
      isAvailable?: boolean;
    }
  ) {
    return prisma.slot.update({
      where: { id },
      data: {
        ...(data.startTime && { startTime: new Date(data.startTime) }),
        ...(data.endTime && { endTime: new Date(data.endTime) }),
        isAvailable: data.isAvailable,
      },
    });
  }

  async cancel(id: string) {
    return prisma.slot.delete({
      where: { id },
    });
  }

  async getAvailable(date: string) {
    return prisma.slot.findMany({
      where: {
        date: new Date(date),
        isAvailable: true,
      },
      orderBy: { startTime: "asc" },
    });
  }

  async markAsUnavailable(id: string) {
    return prisma.slot.update({
      where: { id },
      data: { isAvailable: false },
    });
  }
}

export const appointmentService = new AppointmentService();
