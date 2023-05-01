// Welcome Page related variables
let onItem = document.getElementsByClassName('welcome');
let titleEnter = document.getElementsByClassName('blue-text');
let welcomeButton = document.getElementById('enter-page');

// Login Page,  Nav & Footer related variables
let offItem = document.getElementsByClassName('off-item');
let footerZ = document.getElementsByClassName('footer');


/**
 * Allow access on Welcome Page with 'click' & 'touchend' listener
 * only when DOM content fully Loaded
 */
document.addEventListener('DOMContentLoaded', function () {
    // Click listener to Welcome Page's titles
    for (let clickTitle = 0; clickTitle < titleEnter.length; clickTitle++) {
        titleEnter[clickTitle].addEventListener('click', getMeIn);
    }
    // Welcome Page 'Click' & 'Touchend' listener
    welcomeButton.addEventListener('click', getMeIn);
    welcomeButton.addEventListener('touchend', getMeIn); // for devices
})

/**
 * Disable Welcome Page and Open Login section
 * & Following the Global variables
 */
function getMeIn(event) {
    for (let onItems of onItem) { // Hide Welcome Page
        onItems.style.display = 'none';
    }

    for (let offItems of offItem) { // Open navbar and login page + options
        offItems.style.display = 'inherit';
    }
    let mainFooter = footerZ[0]; // Bring footer to the front, it's been always active
    mainFooter.style.zIndex = '999';
}
