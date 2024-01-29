import fs from 'fs/promises';
import { join as pathJoin, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const folderName = 'files';
const folderPath = pathJoin(__dirname, folderName);

const list = async () => {
  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);
    console.log('Files in folder:', files);
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('FS operation failed');
  }
};

await list();