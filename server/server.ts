import express, { type Express } from "express";

const app: Express = express();

const PORT = 4444

app.get("/", (_req, res) => {
  res.send("Hello World!")
})

const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
