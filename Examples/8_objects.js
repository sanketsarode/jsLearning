function createPerson() {
    var person = new Object();
    person.name = "Sanket";
    person.design = "Student";
    person.mobile = 9930186298;
    return person;
}

var sanket = createPerson();

//-------------------------------------------------------------------------------

function createPerson2() {
    var person = {};
    person.name = "Sarode";
    person.design = "Student";
    person.mobile = 9930186298;
    return person;
}

var sanket2 = createPerson2();

//-------------------------------------------------------------------------------

function createPerson3() {
    var person = {};
    person['name'] = "Renuka";
    person['design'] = "Student";
    person['mobile'] = 9930186298;
    return person;
}

var renuka = createPerson3();

alert("Result3: " + renuka.name + " " + renuka.mobile + " " + renuka.design);

//-------------------------------------------------------------------------------

function createPerson4() {

    var person = {
        name: "Rajendra",
        design: "Student",
        mobile: 9930186298
    };

    return person;
}

var rajendra = createPerson4();

//-------------------------------------------------------------------------------

function Person() {
    this.name = "Lalita";
    this.design = "Student";
    this.mobile = "9930186298";
}

var person1 = new Person();

//-------------------------------------------------------------------------------

var Person1 = {
    name: "Sanket",
    displaName: function () {
        alert("Name is: " + this.name);
    }
}

var person2 = Object.create(Person1);
person2.displaName();
person2.name = "something else";
person2.displaName();

//-------------------------------------------------------------------------------

var Trainer = {
    name: "ABC",
    subjects: ["Math", "Physics", "Chemistry"],
    teaches: ["F", "S"],
    age: 60
}
var property = "";
for (p in Trainer)
    property += p + " ";
console.log(property);

delete Trainer.age;

//-------------------------------------------------------------------------------