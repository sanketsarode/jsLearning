var obj = { "name": "Sanket", "age": 28 };
console.log(typeof obj);
console.log(obj.name);
console.log(obj.age);

var user = JSON.stringify(obj);
console.log(typeof user);
console.log(user);

var obj2 = JSON.parse(user);
console.log(typeof obj);
console.log(obj.name);
console.log(obj.age);