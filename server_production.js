import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// 1. Prioritaskan folder khusus agar tidak tertutup rute lain
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images'))); // Jika ada folder gambar

// 2. Sajikan file statis umum dari root (seperti favicon.ico atau manifest)
app.use(express.static(__dirname));

// 3. Rute utama paling bawah
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Export untuk Vercel
export default app;