import 'dotenv/config'
import { app } from './server';
import { prisma } from '../db/prisma';

const PORT = 7000;

async function startServer() {
  try {
    await prisma.$connect();
    console.log('>>> Database connected!');

    const server = app.listen(PORT, () => {
      console.log(`>>> Server running on http://localhost:${PORT}`);
    });

    server.on('error', (error) => {
      console.error('X Server failed to start:', error);
      process.exit(1);
    });

  } catch (error) {
    console.error('X Database connection failed:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

startServer();
