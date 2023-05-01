const openCrypto = document.getElementById('crypto-swap'); // Global const extended to other .js

function innerSwitching(event) {
    if (openFiat.style.display === "inline-block") { // If fiat is ON
        openFiat.style.display = "none";
        openCrypto.style.display = "inline-block";
    } else if (openCrypto.style.display === "inline-block") {     // If crypto is ON
        openCrypto.style.display = "none";
        openFiat.style.display = "inline-block";
        innerSwitcher.addEventListener('click', (event) => { // Trigger Metamask login
            event.preventDefault();
            connect()
        });
        innerSwitcher.addEventListener('touchend', (event) => { // Trigger Metamask login device
            event.preventDefault();
            connect()
        });
    }
}

// Event listener to title 'Switch to Crypto'
const innerSwitch = document.getElementsByClassName('switch-crypto');
const innerSwitcher = innerSwitch[0];
innerSwitcher.addEventListener('click', innerSwitching);
innerSwitcher.addEventListener('touchend', innerSwitching);

// Event listener to title 'Switch to Fiat'
const innerSwitchFiat = document.getElementsByClassName('switch-fiat');
const innerSwitcherFiat = innerSwitchFiat[0];
innerSwitcherFiat.addEventListener('click', innerSwitching);
innerSwitcherFiat.addEventListener('touchend', innerSwitching);

// for FIAT nav connection
let toFiat = document.getElementsByClassName('to-fiat');
for (fiat = 0; fiat < toFiat.length; fiat++) {
    toFiat[fiat].addEventListener('click', loginListener);
    toFiat[fiat].addEventListener('touchend', loginListener);
}