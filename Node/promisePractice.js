const fs = require('fs');

const readStream = fs.createReadStream('example.txt', {highWaterMark: 5, encoding: 'utf-8'});

readStream.on('data', (chunk) => {
    console.log(chunk);
})

const writeStream = fs.createWriteStream('example.txt');

writeStream.write("This is demo file...!");
