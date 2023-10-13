let isValidUsername = false;
let isValidEmail = false;
let isValidPassword = false;
let isValidConfirmPassword = false;

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.querySelector("form");

username.addEventListener("change", function() {
    isValidUsername = true;
    let inputUsername = this.value; 
    const pUsername = username.nextElementSibling;
    
    if (inputUsername.length < 5 || inputUsername.length > 10 || /[A-Z]/.test(inputUsername)) {
        isValidUsername = false;
        pUsername.innerText = "Enter a valid username";
        pUsername.style.color = "red";
    } else {
        pUsername.innerText = "Valid username";
        pUsername.style.color = "green";
    }
});

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const pEmail = email.nextElementSibling;

email.addEventListener("change", function() {
    isValidEmail = emailRegex.test(this.value); 
    if (isValidEmail) {
        pEmail.innerText = "Valid email";
        pEmail.style.color = "green";
    } else {
        pEmail.innerText = "Enter a valid email";
        pEmail.style.color = "red";
    }
});

const pPassword = password.nextElementSibling;
const pConfirmPassword = confirmPassword.nextElementSibling;

password.addEventListener("change", function() {
    isValidPassword = password.value.length >= 8 && password.value.length <= 15;
    if (!isValidPassword) {
        pPassword.innerText = "Password must be between 8 and 15 characters";
        pPassword.style.color = "red";
    } else {
        pPassword.innerText = "Valid password length";
        pPassword.style.color = "green";
    }
});

confirmPassword.addEventListener("change", function() {
    isValidConfirmPassword = confirmPassword.value === password.value;
    if (!isValidConfirmPassword) {
        pConfirmPassword.innerText = "Passwords do not match";
        pConfirmPassword.style.color = "red";
    } else {
        pConfirmPassword.innerText = "Passwords match";
        pConfirmPassword.style.color = "green";
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (isValidUsername && isValidEmail && isValidPassword && isValidConfirmPassword) {
        console.log("Username:", username.value);
        console.log("Email:", email.value);
        console.log("Password:", password.value);
        console.log("Confirm Password:", confirmPassword.value);
    }
});
