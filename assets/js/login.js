//let usernames = ['Jhon', 'Maria', 'Pan', 'Chris'];
const closeLogin = document.getElementsByClassName('off-item');
const finalClose = closeLogin[1];
const username = 'carol';
const password = 'admin123.';

function submitListener(event) {
    event.preventDefault();
    const confirm = document.getElementById('confirm-input');
    let userInput = document.getElementById('username-input').value;
    let passInput = document.getElementById('password-input').value;

    if (userInput === username) {
        if (passInput === password) {
            finalClose.style.display = "none";
        } else {
            confirm.style.display = "inherit"
            confirm.innerHTML = `<p>Wrong <b><i>password</i></b>!</p>`
        }
    } else {
        confirm.style.display = "inherit"
        confirm.innerHTML = `<p>Wrong <b><i>username</i></b>!</p>`
    }
}
let loginForm = document.getElementById('my-login');
loginForm.addEventListener('submit', submitListener);