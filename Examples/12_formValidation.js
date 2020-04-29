function submitOnClick() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if (username.value == "")
        alert("Username cannot be empty!");
    if (password.value.length <= 6)
        alert("Password length should be more than 6");
}

document.getElementById("submit").addEventListener("click", submitOnClick);