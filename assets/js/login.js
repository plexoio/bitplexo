// General Variables
const closeLogin = document.getElementsByClassName('off-item');
const finalLogin = closeLogin[1];
const closeMeta = document.getElementsByClassName('on-item')
const finalMeta = closeMeta[1];
const confirm = document.getElementById('confirm-input');
const loginText = document.getElementsByClassName('login-text');
const finalText = loginText[2];

// User data

const username = 'carol';
const password = 'admin123.';

// Login VALIDATION

function submitListener(event) { // Validation Function
    event.preventDefault();
    let userInput = document.getElementById('username-input').value.slice(0, 49); // user input
    let passInput = document.getElementById('password-input').value.slice(0, 49); // user input
    let passwordClue = passInput.substring(4);

    if (userInput === username) { // Username comparison
        if (passInput === password) { // Password comparison and action to Hide page and elements
            finalLogin.style.display = "none";
            finalMeta.style.display = "none";
            finalText.style.display = "none";
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
}

// CTA to login Fiat & Crypto

let toFiat = document.getElementsByClassName('to-fiat'); // for FIAT nav connection
for (fiat = 0; fiat < toFiat.length; fiat++) {
    toFiat[fiat].addEventListener('click', submitListener);
}


let loginForm = document.getElementById('my-login'); // call element properties
loginForm.addEventListener('submit', submitListener); // add listener 'submit' and add function

loginForm.addEventListener('touchend', submitListener); // For Devices