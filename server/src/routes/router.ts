import { Router } from "express";
import { authService } from "../services/authService";
import appointmentRoutes from './appointment.routes';

const router = Router();

const isValidEmail = (email: string): boolean => {
  const trimmedEmail = email.trim();
  const parts = trimmedEmail.split("@");

  if (parts.length !== 2) return false;

  const [localPart, domain] = parts;

  if (!localPart || localPart.length === 0) return false;
  if (!domain || domain.length === 0) return false;
  if (!domain.includes(".")) return false;
  if (trimmedEmail.includes(" ")) return false;

  return true;
};

const isValidPassword = (password: string): boolean => {
  return !!(password && password.length >= 6);
};

router.post("/bookings", (req, res) => {
  const { date, doctor } = req.body;
  res.status(201).send({ message: "Booking confirmed!" });
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        error: "Name, email and password are mandatory.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Invalid email.",
      });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({
        error: "Passwords must have at least 6 characters.",
      });
    }

    const newUser = await authService.register(email, name, password);
    res.status(201).json({
      message: "User created successfully!",
      user: newUser,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are mandatory.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: "Invalid email.",
      });
    }

    const { user, token } = await authService.login(email, password);
    res.status(200).json({
      message: "Login successfull!",
      user,
      token,
    });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
});

router.use("/appointments", appointmentRoutes);

export default router;
