import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import fs from 'fs';

const app = express();

// Konfigurasi __dirname untuk ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS
app.use(cors({
  origin: [
    "https://dika-portofolio-ashy.vercel.app/",
    "http://127.0.0.1:8000",
    "http://localhost:8000",
    "http://localhost:3000",
    "https://pureday-invitation.vercel.app",
    "https://www.puredayinvitation.my.id",
    "https://www.puredayinvitation.com",
    "https://puredayinvitation.my.id",
    "https://res.cloudinary.com",
    "https://template-pureday-invitation.vercel.app"
  ]
}));

app.use(express.json());

// 1. Sajikan file statis (CSS, JS, Gambar) dari folder root
app.use(express.static(__dirname));

// 2. Kirim index.html saat akses rute utama "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});