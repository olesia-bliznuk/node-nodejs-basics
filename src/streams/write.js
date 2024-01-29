import fs from 'fs';
import { createWriteStream } from 'fs';
import readline from 'readline';

const write = async () => {
  const outputFilePath = 'files/fileToWrite.txt';
  const writeStream = createWriteStream(outputFilePath);
  const rl = readline.createInterface({
    input: process.stdin,
    output: writeStream, 
    terminal: false, 
  });
  writeStream.on('close', () => {
    console.log(`Data has been written to ${outputFilePath}`);
  });

  rl.on('line', (line) => {
    writeStream.write(`${line}\n`);
  });
  rl.on('close', () => {
    writeStream.end();
  });
};

await write();
