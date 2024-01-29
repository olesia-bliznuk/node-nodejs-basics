import fs from 'fs/promises';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);


const read = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        console.log(fileContent);
      } catch (error) {
        console.error('Error reading the file:', error.message);
      }
};

await read();