// General Variables

const closeLogin = document.getElementsByClassName('off-item');
const finalClose = closeLogin[1];
const confirm = document.getElementById('confirm-input');

// User data

const username = 'carol';
const password = 'admin123.';

// Variable and function to capture event and react accordingly

function submitListener(event) { // function
    event.preventDefault();
    let userInput = document.getElementById('username-input').value; // user input
    let passInput = document.getElementById('password-input').value; // user input

    if (userInput === username) { // validation
        if (passInput === password) { // validation
            finalClose.style.display = "none";
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