import { promises as fsPromises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'path';

const create = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  const content = 'I am fresh and young';

  try {
    await fsPromises.writeFile(filePath, content, { flag: 'wx' });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();