import { app } from './server.ts'

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
})
