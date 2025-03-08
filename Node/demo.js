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

