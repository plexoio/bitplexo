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

// Variable and function to capture an event and react accordingly

function submitListener(event) { // function
    event.preventDefault();
    let userInput = document.getElementById('username-input').value; // user input
    let passInput = document.getElementById('password-input').value; // user input

    if (userInput === username) { // validation
        if (passInput === password) { // validation
            finalLogin.style.display = "none";
            finalMeta.style.display = "none";
            finalText.style.display = "none";
        } else {
            confirm.style.display = "inherit"
            confirm.innerHTML = `<p>Wrong <b><i>password</i></b>!</p>` // if wrong password
        }
    } else {
        confirm.style.display = "inherit"
        confirm.innerHTML = `<p>Wrong <b><i>username</i></b>!</p>` // if wrong username
    }
}
let loginForm = document.getElementById('my-login'); // call element properties
loginForm.addEventListener('submit', submitListener); // add listener 'submit' and add function

// Metamask Prelog

let openCrypto = document.getElementsByClassName('off-item'); // Fetch Crypto swap
let clickCount = 0;

function preLog(event){
    clickCount++;
    if (clickCount === 2) {
        finalLogin.style.display = "none";
        finalMeta.style.display = "none";
    }
}

finalMeta.addEventListener('click', preLog);