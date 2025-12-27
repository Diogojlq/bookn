import { app } from './server.ts'

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
})
