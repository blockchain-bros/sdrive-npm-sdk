import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cjsDir = path.join(__dirname, 'dist', 'cjs');
const oldPath = path.join(cjsDir, 'index.js');
const newPath = path.join(cjsDir, 'index.cjs');

fs.rename(oldPath, newPath, (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});

