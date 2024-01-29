import fs from 'fs';
import { fileURLToPath } from 'node:url';
import path from 'path';

const copy = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const sourcePath = path.join(__dirname, 'files');
  const destinationPath = path.join(__dirname, 'files_copy');

  try {
    const sourceExists = fs.existsSync(sourcePath);
    const destinationExists = fs.existsSync(destinationPath);
    if (!sourceExists || destinationExists) {
      throw new Error('Error: FS operation failed.');
    }
    copyDirectoryRecursive(sourcePath, destinationPath);
  } catch (error) {
    console.error(error.message);
  }
};

const copyDirectoryRecursive = (source, destination) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourceFilePath = path.join(source, file);
    const destinationFilePath = path.join(destination, file);

    if (fs.lstatSync(sourceFilePath).isDirectory()) {
      copyDirectoryRecursive(sourceFilePath, destinationFilePath);
    } else {
      fs.copyFileSync(sourceFilePath, destinationFilePath);
    }
  });
};

await copy();
