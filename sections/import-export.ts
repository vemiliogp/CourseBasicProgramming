import { addTwoNumbers, divideTwoNumbers, subtractTwoNumbers, timesTwoNumbers } from '../helpers/math-helpers';

// function greet(name: string = "Mundo") {
//   console.log("Hola " + name);
// }

// let firstName = "Juan";
// greet(firstName);

let num1 = 10;
let num2 = 20;

let total1: number = addTwoNumbers(num1, num2);
let total2: number = subtractTwoNumbers(num1, num2);
let total3: number = timesTwoNumbers(num1, num2);
let total4: number = divideTwoNumbers(num1, num2);

console.log("add", total1);
console.log("subtract", total2);
console.log("times", total3);
console.log("divide", total4);
