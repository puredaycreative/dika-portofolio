import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Sajikan file statis (CSS, JS frontend, dll)
app.use(express.static(__dirname));

// Rute utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// PENTING: Untuk Vercel, jangan pakai app.listen()
export default app;