// Promise.all() and Promise.race()

// let p1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 Done'), 1000));
// let p2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 Done'), 1000));
// let p3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 Done'), 1000));
// let p4 = new Promise((resolve) => setTimeout(() => resolve('Promise 4 Done'), 500));

// This will execute all the promises
// Promise.all([p1, p2, p3, p4])
// .then((results) => console.log(("All completed:", results)))
// .catch((error) => console.log("Error:", error));

// This only excute the first occured promise
// Promise.race([p1, p2, p3, p4])
// .then((results) => console.log(("All completed:", results)))
// .catch((error) => console.log("Error:", error));

// async and await

// function getData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Fetched!")
//         }, 5000);
//     })

// }

// async function fetchData() {
//     console.log('Fetching data...');
//     let result = await getData();
//     console.log(result);
// }
// fetchData();

// user = [
//     {id: 1, name: 'John Doe'},
//     {id: 2, name: 'Tony Stark'}
// ]

// function fetchUserData(user_id) {
//   return new Promise((resolve,reject)=>{
//     setTimeout((  ))
//   })
// }


// function PizzaOrder(item, delay){

// }


// Promise.all()



function fetchData(url){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched!")
        }, 4000);
    })
}

function timeoutPromise(ms){
    return new Promise((reject) => {
        setTimeout(() => {
            reject()
        }, ms);
    })
}

fetchDataWithTimeout(url, timeout)