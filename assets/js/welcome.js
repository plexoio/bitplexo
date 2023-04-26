let welcomePage = document.getElementById('enter-system');

function getMeIn (event) {
    welcomePage.style.display = 'none';
}

let welcomeButton = document.getElementById('enter-page');
welcomeButton.addEventListener('click', getMeIn);