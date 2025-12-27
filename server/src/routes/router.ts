import { Router } from "express";

export default Router().get("/hello", (_req, res) =>
  res.json({ message: "Hello World!" })
);
