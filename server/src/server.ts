import express, { type Express } from "express";
import router from './routes/router';
import cors from "cors";

const app: Express = express();
app.use(express.json())

app.use(cors({
  origin: "http://localhost:3001",
  credentials: true
}));
app.use(router)

export { app };
