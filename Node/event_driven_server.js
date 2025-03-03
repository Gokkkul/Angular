const http = require('http');
const EventEmitter = require('events');

const server = new EventEmitter();


server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello, Event-Driven Server!");
});

http.createServer((req, res) => {
    server.emit('request', req, res);
}).listen(3000, () => console.log("Server running on port 3000"))