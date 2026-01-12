import { Router } from "express";
const router = Router();

const isValidEmail = (email: string) => email.includes("@");

router.post("/bookings", (req, res) => {
  const { date, doctor } = req.body;
  res.status(201).send({ message: "Booking confirmed!" });
});

router.post("/user", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email || !isValidEmail(email)) {
    return res.status(400).send({ message: "Invalid input" });
  }
  res.status(201).send({ message: "User created!" });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email && password && isValidEmail(email)) {
    res.status(200).send({ message: "Login successful!" });
  } else {
    res.status(401).send({ message: "Invalid credentials" });
  }
});

export default router;
