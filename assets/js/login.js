//let usernames = ['Jhon', 'Maria', 'Pan', 'Chris'];
const loginHide = document.getElementsByClassName('inline-block');
const loginItem = loginHide[0];
let username = 'carol';
let password = 'admin123.';

function submitListener(event) {
    event.preventDefault();
    const confirm = document.getElementById('confirm-input');
    let userInput = document.getElementById('username-input').value;
    let passInput = document.getElementById('password-input').value;

    if (userInput === username) {
        if (passInput === password) {
            loginItem.style.display = "none";
        } else {
            confirm.style.display = "inherit"
            confirm.innerHTML = `<p>Wrong password!</p>`
        }
    } else {
        confirm.style.display = "inherit"
        confirm.innerHTML = `<p>Wrong username!</p>`
    }
}
let loginForm = document.getElementById('my-login');
loginForm.addEventListener('submit', submitListener);