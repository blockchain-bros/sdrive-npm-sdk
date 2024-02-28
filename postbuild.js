import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cjsDir = path.join(__dirname, "dist", "cjs");
const oldPath = path.join(cjsDir, "index.js");
const newPath = path.join(cjsDir, "index.cjs");

//dist/cjs/cnft/create_collection.js dist/cjs/cnft/create_mint.js       dist/cjs/cnft/upload_meta.js
{
  const cjsDir = path.join(__dirname, "dist", "cjs", "cnft");
  const oldPath = path.join(cjsDir, "create_collection.js");
  const newPath = path.join(cjsDir, "create_collection.cjs");
  fs.rename(oldPath, newPath, (err) => {
    if (err) throw err;
    console.log("Rename complete!");
  });
}
{
  const cjsDir = path.join(__dirname, "dist", "cjs", "cnft");
  const oldPath = path.join(cjsDir, "create_mint.js");
  const newPath = path.join(cjsDir, "create_mint.cjs");
  fs.rename(oldPath, newPath, (err) => {
    if (err) throw err;
    console.log("Rename complete!");
  });
}

{
  const cjsDir = path.join(__dirname, "dist", "cjs", "cnft");
  const oldPath = path.join(cjsDir, "upload_meta.js");
  const newPath = path.join(cjsDir, "upload_meta.cjs");
  fs.rename(oldPath, newPath, (err) => {
    if (err) throw err;
    console.log("Rename complete!");
  });
}
