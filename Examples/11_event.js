function mouseOver() {
    document.getElementById("abc").innerHTML = "Mouse is Over This Text";
}

function mouseOut() {
    document.getElementById("abc").innerHTML = "Mouse is Out Of This Text";
}

document.getElementById("abc").addEventListener("mouseover", mouseOver);
document.getElementById("abc").addEventListener("mouseout", mouseOut);