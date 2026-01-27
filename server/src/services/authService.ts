import prisma from '../../prisma/prisma';
import bcrypt from 'bcrypt';

export class authService {
  async register(email: string, name: string, password: string) {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Email already used")
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
}
