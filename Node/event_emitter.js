const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// myEmitter.on("greet", () =>{
//     console.log("Hello! Event triggered.");
    
// });

// myEmitter.once("greet", () =>{
//     console.log("Hello! Event triggered.");
    
// });

// myEmitter.emit("greet");
// myEmitter.emit("greet");
// myEmitter.emit("greet");


// myEmitter.removeListener('greet');

myEmitter.on("order", (id, amt) =>{
    console.log(`Order received! Order ID; ${id}, Amount: ${amt}`);
});

myEmitter.emit("order", 1, 6000);
