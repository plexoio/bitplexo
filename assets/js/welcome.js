// Main Variables

let onItem = document.getElementsByClassName('on-item');
let onMeta = onItem[1];
let offItem = document.getElementsByClassName('off-item');
// Captured Event for actions

function getMeIn(event) {
    
    let onItems;
    for (onItems of onItem ) {
        onItems.style.display = 'none';
    }

    let offItems;
    for (offItems of offItem) {
        offItems.style.display = 'inherit';
        onMeta.style.display = 'inline-block';
    }
}

// Add listener to titles and button to enter system

let titleEnter = document.getElementsByClassName('blue-text');

for (let clickTitle = 0; clickTitle < titleEnter.length; clickTitle++) {
    titleEnter[clickTitle].addEventListener('click', getMeIn);
}

// Welcome Button listener

let welcomeButton = document.getElementById('enter-page');
welcomeButton.addEventListener('click', getMeIn);