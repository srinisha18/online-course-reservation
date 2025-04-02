// Function to handle course reservation
function reserveCourse(courseName) {
    alert("You have successfully reserved: " + courseName);
}

// Function to validate login
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");

    if (username === "admin" && password === "admin123") {
        alert("Login Successful!");
        return true;
    } else {
        errorMsg.innerHTML = "Invalid Username or Password!";
        return false;
    }
}

// Show password toggle
document.getElementById("showPass").addEventListener("change", function () {
    var passField = document.getElementById("password");
    passField.type = this.checked ? "text" : "password";
});
