// Michael part


function enterCabinet() {
    const enter = document.getElementById('loginBtn');
    const visitBtn = document.getElementById('createVisitBtn');
    const logout = document.getElementById('logout');
    const modalEnterWindow = document.querySelector('.modal-enter');
    const container = document.querySelector('.container-main');

    enter.classList.add('none');
    visitBtn.classList.add('show');
    logout.classList.add('show');
    modalEnterWindow.classList.remove('show');
    container.classList.add('changeTheme');

    // filtering();
    getAllCards();  // Load all created cards  (Vadym)
}

document.addEventListener('DOMContentLoaded', function () {
    const enter = document.getElementById('loginBtn');
    const modalEnterWindow = document.querySelector('.modal-enter');
    const logo = document.querySelector('.logo');
    const header = document.querySelector('.header');
    const emailField = document.getElementById("emailField");
    const passwordField = document.getElementById("passwordField");

    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        // User is logged in, perform necessary UI changes
        enterCabinet();

    }

    enter.addEventListener('click', enterSite);

    function enterSite() {
        modalEnterWindow.classList.add('show');
        emailField.value = ""; // Clear email field
        passwordField.value = ""; // Clear password field
        resetPlaceholders(); // Reset placeholders
    }

    logout.addEventListener('click', logMeOut);

    function logMeOut() {
        const enter = document.getElementById('loginBtn');
        const visitBtn = document.getElementById('createVisitBtn');
        const logout = document.getElementById('logout');
        const modalEnterWindow = document.querySelector('.modal-enter');
        const container = document.querySelector('.container-main');

        enter.classList.remove('none');
        visitBtn.classList.remove('show');
        logout.classList.remove('show');
        modalEnterWindow.classList.remove('show');
        container.classList.remove('changeTheme');
        // Clear the authentication status
        localStorage.removeItem("isLoggedIn");

        clearFind();
        clearTable(); // remove all cards from desktop (Vadym)

        // Clear input fields
        emailField.value = "";
        passwordField.value = "";

        // Reset placeholders
        resetPlaceholders();
    }

    // Logo animation
    setTimeout(() => {
        logo.classList.add('visible');
        header.classList.add('visible');
    }, 0.5);
});

// Email/Password validation
// Stored passwords
const credentials = [
    { email: "michael@gmail.com", password: "gorduz" },
    { email: "y@y.y", password: "y" },
    { email: "o.o@o.o", password: "o" }
];

document.getElementById("send").addEventListener("click", function () {
    let enteredEmail = emailField.value;
    let enteredPassword = passwordField.value;
    const modalEnterWindow = document.querySelector(".modal-enter");
    const errorMessage = document.getElementById("letMeIn");

    if (enteredEmail === "" || enteredPassword === "") {
        modalEnterWindow.style.border = "2px solid red"; // Add red border
        errorMessage.textContent = "Enter email and password";
        errorMessage.style.color = "rgb(188, 3, 98)";
        errorMessage.style.fontSize = "22px";
        setTimeout(function () {
            modalEnterWindow.style.border = "none";
            errorMessage.textContent = "Sign In";
            errorMessage.style.color = "#000";
        }, 2000);
    } else {
        const matchedCredential = credentials.find(
            credential =>
                credential.email === enteredEmail && credential.password === enteredPassword
        );

        if (matchedCredential) {
            enterCabinet();
            // Store the authentication status
            localStorage.setItem("isLoggedIn", "true");
        } else {
            modalEnterWindow.style.border = "2px solid red";
            errorMessage.textContent = "Incorrect Login/Password";
            errorMessage.style.color = "rgb(188, 3, 98)";
            errorMessage.style.fontSize = "22px";
            setTimeout(function () {
                modalEnterWindow.style.border = "none";
                errorMessage.textContent = "Sign In";
                errorMessage.style.color = "#000";
            }, 2000);
        }
    }
});

// Add listener for Enter key press
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission behavior
        document.getElementById("send").click(); // Trigger the button click
    }
});

function resetPlaceholders() {
    emailField.placeholder = "Email";
    passwordField.placeholder = "Password";
}

//---------------------  M A I N  vadym-------------------------

import { getAllCards } from "./API/api.js";
import { filtering } from "./classes/modal/filtering.js";
import initialModal from "./classes/modal/initialModal.js";
import { clearFind, clearTable } from "./helpers/visit_helpers.js";


initialModal();


// ---------------------  Viktoriya part  ----------------------------

