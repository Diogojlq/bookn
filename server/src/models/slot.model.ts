export interface Slot {
  id: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  userId?: string;
  isAvailable: boolean;
}
