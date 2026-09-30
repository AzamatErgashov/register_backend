document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");
    const errorMessage = document.getElementById("errorMessage");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {


        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Clear previous error
        errorMessage.textContent = "";

        // Check username
        if (!username) {
            errorMessage.textContent = "Please enter your username.";
            return;
        }

        // Check email
        if (!email) {
            errorMessage.textContent = "Please enter your email.";
            return;
        }

        // Check password
        if (!password) {
            errorMessage.textContent = "Please enter your password.";
            return;
        }

        // Check password confirmation
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            return;
        }

        console.log("Username:", username);
        console.log("Email:", email);

        alert("Registration successful!");
    });
});