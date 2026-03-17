document.getElementById("myForm").addEventListener("submit", function(e) {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if (name === "" || email === "" || password === "") {
alert("Please fill all fields");
e.preventDefault();
return;
}

let pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;

if (!pattern.test(email)) {
alert("Enter a valid email");
e.preventDefault();
return;
}

if (password.length < 6) {
alert("Password must be at least 6 characters");
e.preventDefault();
return;
}

alert("Form submitted successfully!");
});

// Forgot Password Feature
document.getElementById("forgotLink").addEventListener("click", function() {

let email = prompt("Enter your email to reset password:");

if (email === null || email === "") {
alert("Email is required!");
return;
}

alert("Password reset link sent to " + email);
});
