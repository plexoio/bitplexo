// Crypto Swap
let swapCrypto = document.getElementById('crypto-swap'); // Whole form
let selectFromCrypto = document.getElementById('crypto-from'); // Select from
let selectToCrypto = document.getElementById('crypto-to'); // Select to
let enterCrypto = document.getElementById('crypto-enter'); // Enter amount
let receiveCrypto = document.getElementById('crypto-receive'); // Receive amount

// Functions

// Currency pairs object as a 'const variable'
const currencyCryptoPairs = {
    ETH: 'BTC'
}

// start of PAIRs SELECTION

/**
 * Listens to the currency selection and execute pairs, 
 * it follows the const of 'currencyCryptoPairs' mapping the key-value pairs
 * and acting accordingly.
 */
function currencyCryptoPairsCrypto(event) {
    let selectedKeyCurrencyFrom = selectFromCrypto.value;
    let selectedKeyCurrencyto = selectToCrypto.value;
    enterCrypto.value = 0;
    receiveCrypto.value = 0;

    if (currencyCryptoPairs[selectedKeyCurrencyFrom]) {
        selectToCrypto.value = currencyCryptoPairs[selectedKeyCurrencyFrom];
    } else if (currencyCryptoPairs[selectedKeyCurrencyto]) {
        selectFromCrypto.value = currencyCryptoPairs[selectedKeyCurrencyto];
    }
}
selectFromCrypto.addEventListener('change', currencyCryptoPairsCrypto);
selectToCrypto.addEventListener('change', currencyCryptoPairsCrypto);

// end of PAIRs SELECTION

// start of RATE CALCULATION

/**
 * RateCryptoCalc to run a calculation based on a specific currency selection
 */

let calcMyNumberCrypto;
let selectedCurrencyCrypto;
function rateCryptoCalc(event) {
    selectedCurrencyCrypto = selectFromCrypto.value;
    calcMyNumberCrypto = Number(enterCrypto.value);

    if (selectedCurrencyCrypto === 'ETH') {
        if (calcMyNumberCrypto >= 0) {
            BTCRateCryptoCalc(calcMyNumberCrypto);
        }
    } 
}

/**
 * Targeted from RateCryptoCalc for ETH-BTC rate calculation
 */

let finalBTC;
function BTCRateCryptoCalc(amount) {
    let selectedToBTC = selectToCrypto.value;
    if (selectedToBTC === 'BTC') {
        let receiveMyNumberBTC = amount - (amount * 8.75 / 100);
        receiveCrypto.value = receiveMyNumberBTC.toFixed(3);
        finalBTC = receiveCrypto.value;
        if (finalBTC < 0) {
            finalBTC = 0;
        }
    }
}
enterCrypto.addEventListener('input', rateCryptoCalc);

// end of RATE CALCULATION

/**
 * Listen to 'Swap' button, then after swap 
 * it will update ETH & BTC balances repectively
 */

function updateNumbersCrypto(event) {
    event.preventDefault();

    // From ETH to BTC

    //ETH
    let totalConvertedAmountETH = parseFloat(calcMyNumberCrypto);
    totalConvertedETH += totalConvertedAmountETH;
    let newBalanceETH = usersAccount[0].fiatBalanceETH - totalConvertedETH; // Balance

    //BTC
    let totalConvertedAmountBTC = parseFloat(finalBTC);
    convertedBTC += totalConvertedAmountBTC;
    let newBalanceBTC = usersAccount[0].fiatBalanceBTC + convertedBTC; // Balance

    //From BTC to ETH

    if (selectedCurrencyCrypto === 'ETH') {
        if (newBalanceETH >= 0 && newBalanceBTC >= 0) {
            balanceCrypto.children[1].innerHTML = `<li><b>ETH</b> = ${newBalanceETH.toFixed(3)}$</li>
        <li><b>BTC</b> = ${newBalanceBTC.toFixed(3)}€</li>`
        }else {
            alert('No balance!')
        }
    } 
}

swapCrypto.addEventListener('submit', updateNumbersCrypto);

// end of BALANCE UPDATE