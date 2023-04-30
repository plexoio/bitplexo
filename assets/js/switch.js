const openFiat = document.getElementById('fiat-swap'); // Global const extended to other .js
const cryptoSwitch = document.getElementById('crypto-swap'); // Global const extended to other .js

function innerSwitching(event) {
    if (openFiat.style.display === "inline-block") { // If fiat is ON
        openFiat.style.display = "none";
        cryptoSwitch.style.display = "inline-block";
    } else if (cryptoSwitch.style.display === "inline-block") { // If crypto is ON
        innerSwitcher.addEventListener('click', (event) => { // Trigger Metamask login
            event.preventDefault();
            connect()
        });
        cryptoSwitch.style.display = "none";
        openFiat.style.display = "inline-block";
    }
}

// Event listener to title 'Switch to Crypto'
const innerSwitch = document.getElementsByClassName('switch-crypto');
const innerSwitcher = innerSwitch[0];
innerSwitcher.addEventListener('click', innerSwitching);

// Event listener to title 'Switch to Fiat'
const innerSwitchFiat = document.getElementsByClassName('switch-fiat');
const innerSwitcherFiat = innerSwitchFiat[0];
innerSwitcherFiat.addEventListener('click', innerSwitching);

// for FIAT nav connection
let toFiat = document.getElementsByClassName('to-fiat');
for (fiat = 0; fiat < toFiat.length; fiat++) {
    toFiat[fiat].addEventListener('click', submitListener);
}