//DOM: Document Object Model

function changePText() {
    document.getElementById("abc").innerHTML = "New Text";
}

changePText();

function changeBText() {
    document.getElementById("submit").innerHTML = "New Button";
}

changeBText();

function changeAttributeP() {
    document.getElementById("abc").setAttribute("style", "color:blue");
}

changeAttributeP();