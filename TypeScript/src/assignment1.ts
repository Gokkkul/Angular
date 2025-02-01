// Question 1
// function returnLastElement(arr:number[]):void{
//     console.log(arr[arr.length - 1]);

// }
// const arr: number[] = [1,2,3,4,5,6];
// returnLastElement(arr)

// function returnLastElement<T>(arr: T[]): T{
//   return arr[arr.length - 1];
// }
// const numberArray: number[] = [1, 2, 3, 4, 5, 6];
// const characterArray: string[] = ["Apple", "Banana", "Watermelon", "Orange"]

// console.log(returnLastElement(numberArray));
// console.log(returnLastElement(characterArray));

// Question 2
// interface product{
//     id: number,
//     name: string,
//     price: number
// }

// const p: product = {id:101,name:"Mobile",price:90000}

// function dispProduct(p):void{
//     console.log(p.id);
//     console.log(p.name);
//     console.log(p.price);
// }

// dispProduct(p)

// Question 3
// enum OrderStatus{
//     Pending="Pending",
//     Shipped = "Shipped",
//     Delivered = "Delivered"
// }

// function returnOrderStatus(value:OrderStatus): void {
//     if (value == "Pending") {
//         console.log("Your order is Pending");

//     }
//     if (value == "Shipped") {
//         console.log("Your order is Shipped");

//     }
//     if (value == "Delivered") {
//         console.log("Your order is Delivered");

//     }
// }

// returnOrderStatus(OrderStatus.Delivered)
