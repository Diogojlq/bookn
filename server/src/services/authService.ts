import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma } from '../../db/prisma';

export class AuthService {
  private readonly JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";
  private readonly EXPIRES_IN = "24h";

  async register(email: string, name: string, password: string) {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Email already used");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return { id: user.id, email: user.email, name: user.name };
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      throw new Error("Invalid credentials");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid credentials");
    }

    const token = this.generateToken(user.id, user.email);

    return {
      user: { id: user.id, email: user.email, name: user.name },
      token,
    };
  }

  generateToken(userId: string, email: string) {
    return jwt.sign(
      { userId, email },
      this.JWT_SECRET,
      { expiresIn: this.EXPIRES_IN }
    );
  }
}

export const authService = new AuthService();
