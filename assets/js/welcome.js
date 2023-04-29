// Main Variable
let onItem = document.getElementsByClassName('on-item');
let onMeta = onItem[1];
let offItem = document.getElementsByClassName('off-item');
let footerZ = document.getElementsByClassName('footer');
let mainFooter = footerZ[0];

// Captured Event for actions
function getMeIn(event) {

    let onItems;
    for (onItems of onItem) { // Hide elements
        onItems.style.display = 'none';
    }

    let offItems;
    for (offItems of offItem) { // Show elements
        offItems.style.display = 'inherit';
        onMeta.style.display = 'inline-block';
    }
    mainFooter.style.zIndex = '999';
}

// Add listener to titles and number of clicks to enter system
let titleEnter = document.getElementsByClassName('blue-text');

for (let clickTitle = 0; clickTitle < titleEnter.length; clickTitle++) {
    titleEnter[clickTitle].addEventListener('click', getMeIn);
}

// Welcome Button listener
let welcomeButton = document.getElementById('enter-page');
welcomeButton.addEventListener('click', getMeIn);