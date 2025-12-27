import express, { type Express } from "express";
import router from './routes/router.ts';

const app: Express = express();

app.use(router)

export { app };
