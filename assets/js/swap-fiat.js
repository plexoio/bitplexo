// Fiat Swap Global Variables
let swapFiat = document.getElementById('fiat-swap'); // Whole form
let enterFiat = document.getElementById('fiat-enter'); // Enter amount
let receiveFiat = document.getElementById('fiat-receive'); // Receive amount
let selectFromFiat = document.getElementById('fiat-from'); // Select from
let selectToFiat = document.getElementById('fiat-to'); // Select to
let circleSwap = document.getElementsByClassName('circle-swap');
let circleSwapOne = circleSwap[0];

// Currency pairs object as a 'const variable'
const currencyPairs = {
    USD: 'EUR',
    EUR: 'USD',
}

// start of PAIRs SELECTION

/**
 * Listens to the currency selection and execute pairs, 
 * it follows the const of 'currencyPairs' mapping the key-value pairs
 * and acting accordingly.
 */
function currencyPairsFiat(event) {
    let selectedKeyCurrencyFrom = selectFromFiat.value;
    let selectedKeyCurrencyto = selectToFiat.value;
    enterFiat.value = 0;
    receiveFiat.value = 0;

    if (currencyPairs[selectedKeyCurrencyFrom]) {
        selectToFiat.value = currencyPairs[selectedKeyCurrencyFrom];
    } else if (currencyPairs[selectedKeyCurrencyto]) {
        selectFromFiat.value = currencyPairs[selectedKeyCurrencyto];
    }
}
selectFromFiat.addEventListener('change', currencyPairsFiat);
selectToFiat.addEventListener('change', currencyPairsFiat);
circleSwapOne.addEventListener('click', currencyPairsFiat);

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
    } else if (selectedCurrency === 'EUR') {
        if (calcMyNumber >= 0) {
            usdRateFiatCalc(calcMyNumber);
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
let finalUSD;
function usdRateFiatCalc(amount) {
    let selectedToUSD = selectToFiat.value;
    if (selectedToUSD === 'USD') {
        let receiveMyNumberUSD = amount + (amount * 8.75 / 100);
        receiveFiat.value = receiveMyNumberUSD.toFixed(3);
        finalUSD = receiveFiat.value;
        if (finalUSD.value < 0) {
            finalUSD.value = 0;
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
 * 
 */

function updateNumbersFiat(event) {
    event.preventDefault();

    let totalConvertedAmountUSD = parseInt(calcMyNumber);
    totalConvertedUSD += totalConvertedAmountUSD;
    let newBalanceUSD = usersAccount[0].fiatUSD - totalConvertedUSD;

    let totalConvertedAmountEUR = parseInt(finalEUR);
    convertedEUR += totalConvertedAmountEUR;
    let newBalanceEUR = usersAccount[0].fiatEUR + convertedEUR;

    //NEw

    let totalConvertedAmountEUR2 = parseInt(calcMyNumber);
    totalConvertedEUR += totalConvertedAmountEUR2;
    let newBalanceEUR2 = usersAccount[0].fiatEUR - totalConvertedEUR;


    if (selectedCurrency === 'USD'){
        balanceFiat.children[1].innerHTML = `<li><b>USD</b> = ${newBalanceUSD}$</li>
        <li><b>EUR</b> = ${newBalanceEUR}€</li>`
    }else {
        balanceFiat.children[1].innerHTML = `<li><b>USD</b> = ${newBalanceEUR2}$</li>
        <li><b>EUR</b> = ${newBalanceEUR2}€</li>`
    }
}

swapFiat.addEventListener('submit', updateNumbersFiat);

// end of BALANCE UPDATE