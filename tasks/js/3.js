// 3.1 : WAP to display total numbers without using Number()

let apple = "3";
let banana = "4";

console.log(+apple + +banana); // Used Unary operator here

// 3.2 : WAP to interchange 2 value, with third variable and without third variable

// With third Variable : 
let x = 5;
let y = 9;

let temp = x;
x = y;
y = temp;
console.log(x, y);

// Without using third variable
let a = 6;
let b = 8;

a = b + a;
b = a - b;
a = a - b;
// b,  = (b + a) - b;
console.log(a, b);