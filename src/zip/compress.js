import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const compress = async () => {
    const inputFilePath = 'files/fileToCompress.txt';
    const outputFilePath = 'archive.gz';
    const readStream = fs.createReadStream(inputFilePath);
    const gzipStream = zlib.createGzip();
    const writeStream = fs.createWriteStream(outputFilePath);
    await pipelineAsync(readStream, gzipStream, writeStream);
};

await compress();