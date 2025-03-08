import * as http from 'http';

const server = http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, TypeScript with Node.js!');
});

server.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
