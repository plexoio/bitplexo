// Global Variables
const backToSleep = document.getElementsByClassName('off-item');
const navBackOnline = backToSleep[0];
const closeLoggedIn = document.getElementsByClassName('on-item')
const openFiat = document.getElementById('fiat-swap'); // Global const extended to other .js

/**
 * For User deep Validation, hide Crypto Swap & show Fiat Swap features
 */

function loginListener(event) { // Validation Function
    event.preventDefault();
    let userInput = document.getElementById('username-input').value.slice(0, 49); // limit user input
    let passInput = document.getElementById('password-input').value.slice(0, 49); // limit user input
    let passwordClue = passInput.substring(4);
    const confirm = document.getElementById('confirm-input');

    if (userInput === username) { // Username comparison see users.js for more
        if (passInput === password) { // Password comparison users.js for more
            openFiat.style.display = "inline-block";
            for (let backSleep of backToSleep) {
                backSleep.style.display = "none";
            }
            if (navBackOnline.style.display === "none") {
                navBackOnline.style.display = "inherit";
            }
            for (let closeRest of closeLoggedIn) {
                closeRest.style.display = "none"
            }
        } else if (passInput.length < 6) { // Error if pass is less tha 6 ch
            confirm.style.display = "inherit"
            confirm.innerHTML = `<p>The password <b><i>${passInput}</i></b> is less than 6 characters long!</p>`
        } else if (passInput.length === 49) { // Error if pass is more than tha 48 ch
            confirm.style.display = "inherit"
            confirm.innerHTML = `<p>The password ending in <b><i>${passwordClue}</i></b> is more than 48 characters long!</p>` // if wrong password
        } else { // Error if pass is 100% wrong
            confirm.style.display = "inherit"
            confirm.innerHTML = `<p>The password ending in <b><i>${passwordClue}</i></b> is wrong!</p>` // if wrong password
        }
    } else { // Error f username is wrong
        confirm.style.display = "inherit"
        confirm.innerHTML = `<p>The username <b><i>${userInput}</i></b> is wrong!</p>` // if wrong username
    }
    openCrypto.style.display = "none"; // Variable on switch.js
}

// Add event 'click' & 'touchend' listener to the Login form 'submit' button
let loginForm = document.getElementById('my-login'); // call element properties
loginForm.addEventListener('submit', loginListener); // add listener 'submit' and add function

loginForm.addEventListener('touchend', loginListener); // For Devices