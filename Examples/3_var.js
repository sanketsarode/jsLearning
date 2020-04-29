var myname = "Sanket Sarode";
console.log(myname);

var i = 1;
console.log("value of i: " + i);

var j = 0.23;
console.log("value of j: " + j);

var k = i + j;
console.log("value of k: " + k);

var l = null;
k = k + l;
console.log("value of k + null: " + k);

var m = NaN;
j = j + m;
console.log("value of j + NaN + : " + j);

//there are two more ways of defining the variables in javascript

//let has the scope limitation where it is defined i.e. within function or inside loops
let x = 12;
console.log("value of x defined using let: " + x);

//another way of defining the variable is using the const keywork in javascript whose value cannot be changes otherwise gives error
const pi = 3.1416;
console.log("value of pi defined using const: " + pi);

//lets update the pi value which is a const variable
//pi = 12;
//console.log("updated value of pi: " + pi);
/*
3_var.html:33 Uncaught TypeError: Assignment to constant variable.
at 3_var.html:33
*/

var a;
console.log("value of a after declaring: " + a);
//output: value of a after declaring: undefined

var b = 12;
b += a;
console.log("value of b(int) + a(undefined): " + b);
//output: value of b + a(undefined): NaN

var c = "Sanket Sarode ";
c += a;
console.log("value of c(String) + a(undefined): " + c);
//output: value of c(String) + a(undefined): Sanket Sarode undefined

var d = "Sanket";
d += i;
console.log("value of d(String) + i(int): " + d);
//output: value of d(String) + i(int): Sanket1

var e = "Sanket";
e = i + e;
console.log("value of i(int) + e(String): " + e);
//output: value of i(int) + e(String): 1Sanket

var z = 1012;
z = "Sanket" + z;
console.log("value of (String) + int: " + z);
//output: value of (String) + int: Sanket1012

var zero = 66;
zero /= 0;
console.log("Divide by Zero: " + zero);
//output: Divide by Zero: Infinity

zero += zero;
console.log("Infinity + Infinity: " + zero);
//output: Infinity + Infinity: Infinity

zero = 66;
zero = (zero /= 0) - (zero /= 0);
console.log("Infinity - Infinity: " + zero);
//output: Infinity - Infinity: NaN

zero /= zero;
console.log("Infinity / Infinity: " + zero);
//output: Infinity / Infinity: NaN

//console.log("value of undeclared variable: " + num4);
//output: Uncaught ReferenceError: num4 is not defined
//at 3_var.js:86

var xyz = null;
console.log("Type of variable 'xyz': " + typeof xyz);
//output:            Type of variable 'xyz': string
//["Sanket"]    ---> Type of variable 'xyz': object
//NaN           ---> Type of variable 'xyz': number
//false         ---> Type of variable 'xyz': boolean
//null          ---> Type of variable 'xyz': object