import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import fs from 'fs';

const app = express();

// Konfigurasi path untuk ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS
app.use(cors({
  origin: [
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

// Sajikan file statis (agar CSS/JS di root terbaca)
app.use(express.static(__dirname));

// Rute utama untuk menjalankan index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Export app untuk Vercel (Tanpa app.listen)
export default app;