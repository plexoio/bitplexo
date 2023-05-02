// Fiat Swap Global Variables
let swapFiat = document.getElementById('fiat-swap'); // Whole form
let enterFiat = document.getElementById('fiat-enter'); // Enter amount
let receiveFiat = document.getElementById('fiat-receive'); // Receive amount
let selectFromFiat = document.getElementById('fiat-from'); // Select from
let selectToFiat = document.getElementById('fiat-to'); // Select to
let circleFiat = document.getElementById('circle-fiat');

// Currency pairs object as a 'const variable'
const currencyFiatPairs = {
    USD: 'EUR'
}

// start of PAIRs SELECTION

/**
 * Listens to the currency selection and execute pairs, 
 * it follows the const of 'currencyFiatPairs' mapping the key-value pairs
 * and acting accordingly.
 */
function currencyFiatPairsFiat(event) {
    let selectedKeyCurrencyFrom = selectFromFiat.value;
    let selectedKeyCurrencyto = selectToFiat.value;
    enterFiat.value = 0;
    receiveFiat.value = 0;

    if (currencyFiatPairs[selectedKeyCurrencyFrom]) {
        selectToFiat.value = currencyFiatPairs[selectedKeyCurrencyFrom];
    } else if (currencyFiatPairs[selectedKeyCurrencyto]) {
        selectFromFiat.value = currencyFiatPairs[selectedKeyCurrencyto];
    }
}
selectFromFiat.addEventListener('change', currencyFiatPairsFiat);
selectToFiat.addEventListener('change', currencyFiatPairsFiat);
circleFiat.addEventListener('click', currencyFiatPairsFiat);
circleFiat.addEventListener('touchend', currencyFiatPairsFiat);

// end of PAIRs SELECTION

// start of RATE CALCULATION

/**
 * RateFiatCalc to run a calculation based on a specific currency selection
 */

let calcMyNumber;
let selectedCurrency;
function rateFiatCalc(event) {
    selectedCurrency = selectFromFiat.value;
    calcMyNumber = Number(enterFiat.value);

    if (selectedCurrency === 'USD') {
        if (calcMyNumber >= 0) {
            eurRateFiatCalc(calcMyNumber);
        }
    }
}

/**
 * Targeted from RateFiatCalc for USD-EUR rate calculation
 */

let finalEUR;
function eurRateFiatCalc(amount) {
    let selectedToEUR = selectToFiat.value;
    if (selectedToEUR === 'EUR') {
        let receiveMyNumberEUR = amount - (amount * 8.75 / 100);
        receiveFiat.value = receiveMyNumberEUR.toFixed(3);
        finalEUR = receiveFiat.value;
        if (finalEUR < 0) {
            finalEUR = 0;
        }
    }
}
enterFiat.addEventListener('input', rateFiatCalc);

// end of RATE CALCULATION

// start of BALANCE UPDATE

function balanceUSD(value) {
    //
}

/**
 * Listen to 'Swap' button, then after swap 
 * it will update USD & EUR balances repectively
 */

function updateNumbersFiat(event) {
    event.preventDefault();

    // From USD to EUR

    //USD
    let totalConvertedAmountUSD = parseFloat(calcMyNumber);
    totalConvertedUSD += totalConvertedAmountUSD;
    let newBalanceUSD = usersAccount[0].fiatUSD - totalConvertedUSD; // Balance

    //EUR
    let totalConvertedAmountEUR = parseFloat(finalEUR);
    convertedEUR += totalConvertedAmountEUR;
    let newBalanceEUR = usersAccount[0].fiatEUR + convertedEUR; // Balance

    //From EUR to USD

    if (selectedCurrency === 'USD') {
        if (newBalanceUSD >= 0 && newBalanceEUR >= 0) {
            balanceFiat.children[1].innerHTML = `<li><b>USD</b> = ${newBalanceUSD.toFixed(3)}$</li>
        <li><b>EUR</b> = ${newBalanceEUR.toFixed(3)}€</li>`;
        } else {
            alert('Not enough balance, please refresh the page!!')
        }
    }
}

swapFiat.addEventListener('submit', updateNumbersFiat);


// end of BALANCE UPDATE