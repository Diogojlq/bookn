import { Router } from "express";
const router = Router();

router.post('/bookings', (req, res) => {
  const { date, doctor } = req.body;
  res.status(201).send({ message: "Booking confirmed!" })
});

export default router;
