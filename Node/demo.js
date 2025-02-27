// console.log("Hello World...!")
// function greet(name){
//     return "Hello, "+ name;
// }

// let greeting = greet("GG");
// console.log(greeting)

// let nm = "abc";

// if(nm === "GG"){
//     console.log("Hello Sir...")
// }else{
//     console.log("Hello...")
// }

// for(let i = 1; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
//     }

let promise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(() => {
      let success = true; // Change to false to simulate an error
      if (success) {
        resolve("Operation completed successfully!");
      } else {
        reject("Operation failed!");
      }
    }, 2000);
  });
  
  promise
    .then((message) => {
      console.log(message); // Output: Operation completed successfully!
    })
    .catch((error) => {
      console.error(error); // If success was false
    });
  
    