import { promises as fs } from 'fs';
import path from 'path';
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

const directoryPath = path.join(process.cwd(), "dist", "cjs");

async function updateImportPaths(directory) {
  let items;
  try {
    items = await fs.readdir(directory, { withFileTypes: true });
  } catch (err) {
    console.error(`Error reading directory ${directory}`, err);
    return;
  }

  for (const item of items) {
    const itemPath = path.join(directory, item.name);
    if (item.isDirectory()) {
      // Recurse into subdirectories
      await updateImportPaths(itemPath);
    } else if (item.isFile() && item.name.endsWith('.cjs')) {
      try {
        let fileContent = await fs.readFile(itemPath, 'utf8');
        // Replace .js with .cjs in import/export statements
        const updatedContent = fileContent.replace(/\.js(['"])/g, '.cjs$1');
        await fs.writeFile(itemPath, updatedContent, 'utf8');
        console.log(`Updated imports in: ${itemPath}`);
      } catch (err) {
        console.error(`Error processing file ${itemPath}`, err);
      }
    }
  }
}

updateImportPaths(directoryPath)
  .then(() => console.log('Import paths update complete.'))
  .catch((err) => console.error('An error occurred:', err));

