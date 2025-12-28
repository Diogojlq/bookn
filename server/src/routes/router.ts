import { Router } from "express";
const router = Router();

router.post('/bookings', (req, res) => {
  const { date, doctor } = req.body;
  res.status(201).send({ message: "Booking confirmed!" })
});

router.post('/user', (req, res) => {
  const { name, email } = req.body;
  res.status(201).send({ message: "User created!" })
});

export default router;
