// // console.log("Hello World...!")
// // function greet(name){
// //     return "Hello, "+ name;
// // }

// // let greeting = greet("GG");
// // console.log(greeting)

// // let nm = "abc";

// // if(nm === "GG"){
// //     console.log("Hello Sir...")
// // }else{
// //     console.log("Hello...")
// // }

// // for(let i = 1; i <= 10; i++){
// //     if(i % 2 == 0){
// //         console.log(i);
// //     }
// //     }

// let promise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation using setTimeout
//     setTimeout(() => {
//       let success = true; // Change to false to simulate an error
//       if (success) {
//         resolve("Operation completed successfully!");
//       } else {
//         reject("Operation failed!");
//       }
//     }, 2000);
//   });

//   promise
//     .then((message) => {
//       console.log(message); // Output: Operation completed successfully!
//     })
//     .catch((error) => {
//       console.error(error); // If success was false
//     });

// let checkEven = new Promise((resolve, reject) => {
//   let number = 6;
//   if(number % 2 === 0){resolve('number is even')}
//   else{reject('number is odd')}
// })

// checkEven
// .then((message) => console.log(message))
// .catch((error) => console.log(error)
// )

// Promise with async and await

// const promiseOne = new Promise((resolve, reject) => {
//   let error = true;
//   if(!error){
//     resolve({username: 'abc', password: 123})
//   }
//   else{
//     reject("Error: Something went wrong");
//   }
// })

// async function getData() {
//   try {
//     const res = await promiseOne;
//     console.log(res);

//   }
//   catch (error) {
//     console.log(error);
//   }

// }

// getData()

//  Node.js Global Objects

// console.log(process.pid);      // Prints the process ID
// console.log(process.version);  // Node.js version
// console.log(process.platform); // OS platform
// console.log(process.cwd());    // Currennt working directory
// console.log(__filename);
// console.log(__dirname);
// setInterval()
// setTimeout()
// setImmediate()

// Modules

// Stream

const fs = require("fs");
// const readStream = fs.createReadStream('example.txt', {highWaterMark:5, encoding:'utf-8'});
// highWateMark - number of characters per chunk
// const readStream = fs.createReadStream('example.txt', {encoding: 'utf-8'});

//LIsten for data events

// readStream.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// readStream.on('error', (err) => {
//   console.log('Error in reading file: ', err);
// });

// readStream.on('end', () => {
//   console.log('File reading complete...!');

// })

// const writeStream = fs.createWriteStream('output.txt');

// //Write data to the stream

// writeStream.write("Hello, this is a stream example.\n");
// writeStream.write('Data is written in chunks.\n');

// // End the stream

// writeStream.end(() => {
//   console.log('Data successfully written to output.txt');
// } );

// // Handle errors

// writeStream.on('error', (err) => {
//   console.error("Error in writing file:", err);
// })

// const readStream = fs.createReadStream('input.txt');
// const writeStream = fs.createWriteStream('output.txt');

// readStream.pipe(writeStream);

// console.log('File copied successfully using pipe');

// Creating zip file

// const zlib = require('zlib'); // compression library

// const readStream = fs.createReadStream('example.txt');
// const writeStream = fs.createWriteStream('example.zip');

// const gzip = zlib.createGzip();

// readStream.pipe(gzip).pipe(writeStream);

// console.log("File zipped successfully...");

// Streaming Large file via HTTP

// const http = require("http");

// http
//   .createServer((req, res) => {
//     const readStream = fs.createReadStream("example.txt");
//     res.writeHead(200, { "Contnt-Type": "text/plain" });
//     readStream.pipe(res);
//   })
//   .listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
//   });



// Appending and Writing into the file

// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//   if(err) throw err;
//   console.log('File written successfully');
// });

// fs.appendFile('example.txt', '\nNew Line', (err) =>{
//   if(err) throw err;
//   console.log(('Content appended'));
  
// })


// fs.truncate('example.txt',5, (err) => {
//   if(err) throw err;
//   console.log('File truncated to 5 bytes');
// })

// fs.unlink('example.txt', (err) => {
//   if(err) throw err;
//   console.log('File deleted');
  
// })

// fs.readFile('example.txt', 'utf8', (err,data) => {
//   if(err) throw err;
//   console.log(data);
// })

// File Upload

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) =>{
    cb(null, file.filename + '-' + Date.now()+
    path.extname(file.originalname));
  }
});

const upload = multer ({storage: storage});

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file){
    return res.status(400).send('No file uploaded...');
  }
  res.send(`File uploaded: ${req.file.filename}`);
});

app.listen(3000, () => {
  console.log('Server is running on https://localhost:3000');
});

