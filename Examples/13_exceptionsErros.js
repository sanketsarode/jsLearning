function validateInput() {
    var num = document.getElementById("inputText").value;
    console.log("Number Entered: " + num);
    document.getElementById("error_message").innerHTML = "";
    try {
        if ((isNaN(num))) throw "Not a Number";
        if (num == "") throw "Text cannot be empty";
        if (!(num > 0)) throw "Number should be grater than zero";
        if (!(num % 2 == 0)) throw "Number should be even number";
        if (!((num * num) < 100)) throw "Square of the number should be less than 100";
        document.getElementById("error_message").innerHTML = "Hurray! All Requirements Match";
    }
    catch (error) {
        console.log("Error: " + error);
        document.getElementById("error_message").innerHTML = error;
    }
    finally {
        document.getElementById("inputText").value = "";
    }
}
document.getElementById("button").addEventListener("click", validateInput);