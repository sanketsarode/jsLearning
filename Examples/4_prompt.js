num1 = prompt("Enter num1: ");
num2 = prompt("Enter num2: ");
num3 = parseInt(num1) + parseInt(num2);
alert("The sum of numbers num1 & num2: " + num3);
console.log("The sum of numbers num1 & num2: " + num3);

console.log("value of undeclared variable: " + num4);
//output: Uncaught ReferenceError: num4 is not defined
//at 4_prompt.js:7