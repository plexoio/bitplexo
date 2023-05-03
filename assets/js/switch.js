// Global const extended to other .js
const openCrypto = document.getElementById('crypto-swap');

/** 
 * When clicking the switching section then hide or show Crypto & Fiat swap
 * and it displays as well some balances as well as for
 * triggering the Metamask Login
*/
function innerSwitching(event) {
    if (openFiat.style.display === "inline-block") { // If fiat is ON
        openFiat.style.display = "none";
        openCrypto.style.display = "inline-block";
        balanceFiat.children[1].innerHTML = `<li><b>USD</b> = ${fiatBalanceUSD.toFixed(2)}$</li>
        <li><b>EUR</b> = ${fiatBalanceEUR.toFixed(2)}€</li>`;
    } else if (openCrypto.style.display === "inline-block") {     // If crypto is ON
        openCrypto.style.display = "none";
        openFiat.style.display = "inline-block";
        innerSwitcherCryto.addEventListener('click', (event) => { // Trigger Vendor Metamask login
            event.preventDefault();
            connect()
        });
        innerSwitcherCryto.addEventListener('touchend', (event) => { // Trigger Vendor Metamask login device
            event.preventDefault();
            connect()
        });
    }
}

// Event listener to title 'Fiat'
let toFiat = document.getElementsByClassName('to-fiat');
for (fiat = 0; fiat < toFiat.length; fiat++) {
    toFiat[fiat].addEventListener('click', loginListener);
    toFiat[fiat].addEventListener('touchend', loginListener);
}

// Event listener to title 'Switch to Crypto'
const innerSwitchCrypto = document.getElementsByClassName('switch-crypto');
const innerSwitcherCryto = innerSwitchCrypto[0];
innerSwitcherCryto.addEventListener('click', innerSwitching);
innerSwitcherCryto.addEventListener('touchend', innerSwitching); // device

// Event listener to title 'Switch to Fiat'
const innerSwitchFiat = document.getElementsByClassName('switch-fiat');
const innerSwitcherFiat = innerSwitchFiat[0];
innerSwitcherFiat.addEventListener('click', innerSwitching);
innerSwitcherFiat.addEventListener('touchend', innerSwitching); // device