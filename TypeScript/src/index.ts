// date - 20-01-2025

// console.log("Hello Gokul...");

// const arr:number[] = [1,2,3,4,5,6]
// console.log(arr);

// array
// let person: [string,number]= ["Alice",30];
// console.log(person);

// object
// let user: {id:number; userName:string}={id:101, userName:"Mohan"};
//     console.log(user);

// Union and Intersection
//
// Union - Can hold both the datatypes(number or string)
// let empId : number | string;
// empId = 101;
// empId = "EMP105";
// console.log(empId);

// Intersection - Can hold both, used to create own datatype
// Intersection
// interface Address{
//     city: string;
//     postalCode: number;
// }

// interface Coordinates{
//     latitude: number;
//     logitude: number;
// }

// type location = Address & Coordinates;
// let myLocation: location = {
//     city: "New York",
//     postalCode: 10001,
//     latitude: 40.7128,
//     logitude: -74.006,
// };

// console.log(myLocation);

// Type Alises

// type Id = number | string;
// let empID: Id;
// empID = 101;
// console.log(empID);
// empID = "emp101";
// console.log(empID);

// Restrict variable
// The value for direction datatype is restricted to up,down,left, right

// type direction = "up" | "down" | "left" | "right"
// let dir : direction;
// dir = "up"
// console.log(dir);

// Interface - provides structure to the object
// interface User{
//     id:number,
//     name: string,
//     email: string,
// }

// const user:User = {id:101,name:"abc", email:"abc@example.com"}
// console.log(user);

// Optional Properties - given using "?"

// interface User{
//     id:number,
//     name: string,
//     email?: string,
// }

// const user:User = {id:101,name:"abc"}
// console.log(user);

// Read-Only Properties - Cannot change

// interface User{
//     readonly id:number,
//     name: string,
//     email: string,
// }

// const user:User = {id:101,name:"abc", email:"abc@example.com"}

// user.id = 102; // This will throw error
// console.log(user);

// Extending Interfaces

// interface Person{
//     name: string;
// }

// interface Employee extends Person{
//     employeeId: number;
// }

// const employee: Employee = {name: "abc", employeeId: 101}

// Enums - Used to store constant values i.e. values that cannot be changed

// Numeric Enum
// enum Status{
//     Active,
//     Inactive,
//     Pending
// }
// const currentStatus: Status = Status.Active;
// console.log(currentStatus); // Output : 0
// console.log(Status[0]);  // Output : Active

// String Enum
// enum Role{
//     Admin = "Admin",
//     Guest = "Guest",
//     User = "User"
// }
// const userRole: Role = Role.Admin;
// console.log(userRole) //Output: Admin;

// functions

// function add(num1:number, num2:number): number{
//     return num1+num2;
// }
// console.log(add(5,6));

// Optional and Default parameter
// Default

// function add(num1:number = 0, num2:number = 10): number{
//     return num1+num2;
// }
// console.log(add(5));
// Note - You have to give default value as 0

// function add(num1:number = 0, num2:number = 10, num3:number) : number{
//         return num1+num2+num3;
//     }
//     console.log(add(5,undefined,10));
// Note - undefined will be overriden by default value which is 10 in this case.

// optional
// function emp(id:number = 0, name:string, email?:string) : void{
//     console.log(id,name,email);

// }
// console.log(emp(101,"abc"));

// arrow function
// const emp = (id:number, name:string, email:string): void => console.log(id,name,email);
// emp(101,"abc","abc@email.com")

// function overloading
// function combine(a: string, b: string): string;
// function combine(a:number,b:number,c:number): number;
// function combine(a: number, b: number): number;
// function combine(a: any, b:any): any {
//     return a + b;
// }

// console.log(combine(1,2));
// console.log(combine("a","b"));

// Generics Function - Reusability and type safety for functions, classes and interfaces.
// T - Generic DataType or generic type value

// function identity<T>(value: T): T{
//     return value;
// }

// console.log(identity<number>(10));
// console.log(identity<string>("Hello"));

// Generic Classes

// class Box<T>{
//     private content: T;
//     constructor(content: T){
//         this.content = content;
//     }
//     getContent(): T{
//         return this.content;
//     }
// }

// const stringBox = new Box<string>("TypeScript");
// console.log(stringBox.getContent());

// Generic Interfaces

// interface KeyValuePair<K, V>{
//     key: K;
//     value: V;
// }

// const pair : KeyValuePair<string, number> = {key: "age", value:22}

// Date - 21-01-2025
// Event Listerners

// Mouse click event
// const button = document.getElementById('btn-click')

// function handleClick(event: MouseEvent): void {
//     alert('Button was clicked!');
// }

// button?.addEventListener('click', handleClick);

// // Mouse over event
// const button1 = document.getElementById('btn-mouseover')
// button1?.addEventListener('mouseover', handleClick);

// const div = document.createElement('div')
// div.style.height="200px"
// div.style.width = "200px"

// function colorChange(event:MouseEvent):void {
//     div.style.backgroundColor = "red";
// }

// div.addEventListener('mouseenter',colorChange);

// Keyboard events

// document.addEventListener("keydown", (event: KeyboardEvent)=>{
//     alert(`Key pressed: ${event.key}`);

// })

// Form events

// const form = document.createElement('form');
// const input = document.createElement("input");
// const submitButton = document.createElement("button");

// submitButton.textContent = "submit";
// form.appendChild(input);
// form.appendChild(submitButton);
// document.body.appendChild(form);

// input.addEventListener("input", (event: Event)=>{
//     const target = event.target as HTMLInputElement;
//     console.log(`Current input value: {target.value}`);

// });

// form.addEventListener("submit", (even: Event) =>{
//     event?.preventDefault();
//     alert(`Form submitted with value: ${input.value}`);
// });

// Focus and Blur events

// const inputField = document.createElement("input");
// document.body.appendChild(inputField);

// inputField.addEventListener("focus",() =>{
//     inputField.style.border = "2px solid red";
// });

// inputField.addEventListener("blur", () =>{
//     inputField.style.border = "1px solid green";
// });

// Window events

// window.addEventListener("resize", ()=>{
//     console.log(`window size: ${window.innerWidth}x${window.innerHeight}`);

// });

// window.addEventListener("scroll",() =>{
//     console.log(`Scrolled to: {window.scrollY}`);

// });

// Classes and Object

// static - Memory is assigned only once

// class staticDemo{
//     static x: number = 10;
//     y: number;
//     constructor(a: number)
// }

// Utility Types - Used to create custom datatype

// Partial
// Pick
// Omit

// Type Assertions and Type Guards

// Type Assertions - Used to convert the datatype manually or forcefully

// any - not typesafe (not recomemded for type assertion)
// unknown - typesafe (recomended for type assertion)

// interface User {
//   salary: number | string;
//   name: string;
// }

// let userData = {
//   salary: 7000,
//   name: "John",
// };

// let variable: User = userData as User;

// let salary_variable: number = variable.salary as number;

// salary_variable += 10;
// console.log(salary_variable);

// let testSalary;

// interface User {
//   salary: number;
//   user_name: string;
// }

// let num: number = 100;



// Date - 23-01-2024
// Type Guard - Used to guard the type

// 1. typeof
// 2. instanceof
// 3. custom Type Guards
// 4. in


// Working with any, unkown and never

// Modules and Namespaces

// import { MathOperations } from "./namespaceExample";
// console.log(MathOperations.PI);


// Docorators in TypeScript    Date - 24-01-2025

// Works with only classes or properties of classes
// Executes only once


// Types of Decorators

// 1. Class Decorators
// 2. Method Decorators
// 3. Accessor Decorators
// 4. Property Decorators
// 5. Parameter Decorators


// Class Decorator

// function logClass(target: any, context: any){
//     console.log(target.name);
//     console.log(context);
// }

// @logClass
// class MyClass{

// }

// Method Decorator

// function LogMethod(
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor: PropertyDescriptor,
// ){
//     const originalMethod = descriptor.value;
//     descriptor.value = function(...args: any []){
//         console.log(`Calling ${String(propertyKey)} with args: ${args}`);
//         return originalMethod.apply(this, args)
//     };
// }


// class MyClass {
//     @LogMethod
//     greet(name: string): void {
//         console.log(name);
//     }
// }

// const myClassInstance = new MyClass();
// myClassInstance.greet("John Doe"); // This should work without errors


// Accessor decorator - It is applied to getter

// function LogMethod(
//     target: Object,
//     propertyKey: string | symbol,
//     descriptor: PropertyDescriptor,
// ){
//     console.log("Accessor Decorator:");

// }

// class MyClass{
//     private value = 10;

//     @LogMethod
//     get_value(){
//         console.log(`Value: ${this.value}`);
        
//     }
// }

// const obj = new MyClass();
// obj.get_value();


// Parameter Decorator

// target, propertyKey, parameterIndex, context(optional)

// Use Cases of Class Decorators

// 1. Add Metadata to a class
// 2. Dependency Injection
// 3. Replace class
// 4. Adding Metadata to a class'
// 5. Change class Behavior 
 


// import 'reflect-metadata';

// function Entity(tableName:string) {
//     return function(constructor:)
// }


// Replacing a class

// function ReplaceWithProxy<T extends {new (...args: any[]): {}
// }>(constructor: T){
//     return class extends constructor{
//         proxyEnabled = true;
//     };
// }

// @ReplaceWithProxy
// class Order{
//     constructor(public id: number, public amount: number){}
// }

// const order = new Order(1,500) as Order & {proxyEnabled: boolean}
// console.log(order.proxyEnabled);




