//named funtion
function sum(a, b) {
    return a + b;
}
console.log("Named Function: " + sum(5, 6));

//SelfInvoking Function
(function () {
    alert("Self Invoking Function 1");
}());
(function () {
    alert("Self Invoking Function 2");
})();
(function (a, b) {
    alert("Self Invoking Function with Args: " + (parseInt(a) + parseInt(b)));
}(5, 6));

//Anonymous Function
var a = function (a, b) {
    return a + b;
}
console.log("Anonymous Function: " + a(2, 3));

//Constructor Functions
var sum = new Function("a", "b", "console.log('within const function'); return a+b;");
console.log(sum(5, 6));