// Main Variables

let welcomePage = document.getElementById('enter-system');
let navWakeUp = document.getElementById('nav-wakeup');

// Captured Event for actions

function getMeIn(event) {
    welcomePage.style.display = 'none';
    navWakeUp.style.display = 'inherit';
}

// Add listener to titles and button to enter system

let titleEnter = document.getElementsByClassName('blue-text');

for (let clickTitle = 0; clickTitle < titleEnter.length; clickTitle++) {
    titleEnter[clickTitle].addEventListener('click', getMeIn);
}

// Welcome Button listener

let welcomeButton = document.getElementById('enter-page');
welcomeButton.addEventListener('click', getMeIn);