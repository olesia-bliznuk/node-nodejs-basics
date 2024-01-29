import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const decompress = async () => {
    const inputFilePath = 'archive.gz';
    const outputFilePath = 'files/fileToCompress.txt'; 

    try {
        await fs.promises.access(inputFilePath);
        const readStream = fs.createReadStream(inputFilePath);
        const gunzipStream = zlib.createGunzip();
        const writeStream = fs.createWriteStream(outputFilePath);
        await pipelineAsync(readStream, gunzipStream, writeStream);

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await decompress();