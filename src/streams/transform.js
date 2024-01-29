import { Transform } from 'stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      callback(null, reversedChunk);
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);

  return new Promise((resolve) => {
    process.stdin.on('end', () => {
      resolve();
    });
  });
};

await transform();
