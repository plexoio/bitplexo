// Fiat Swap Global Variables
let swapFiat = document.getElementById('fiat-swap'); // Whole form
let enterFiat = document.getElementById('fiat-enter'); // Enter amount
let receiveFiat = document.getElementById('fiat-receive'); // Receive amount
let selectFromFiat = document.getElementById('fiat-from'); // Select from
let selectToFiat = document.getElementById('fiat-to'); // Select to

// Currency pairs object const variable

const currencyPairs = {
    USD: 'EUR',
    EUR: 'USD'
}

// start of PAIRs SELECTION

/**
 * Listens to the currency selection and execute pairs, 
 * it follows the const of 'currencyPairs' mapping the key-value pairs
 * and acting accordingly.
 */

function currencyPairsFiat (event) {
    let selectedKeyCurrencyFrom = selectFromFiat.value;
    let selectedKeyCurrencyto = selectToFiat.value;

    if (currencyPairs[selectedKeyCurrencyFrom]){
        selectToFiat.value = currencyPairs[selectedKeyCurrencyFrom];
    } else if (currencyPairs[selectedKeyCurrencyto]) {
        selectFromFiat.value = currencyPairs[selectedKeyCurrencyto];
    }
}
selectFromFiat.addEventListener('change', currencyPairsFiat);
selectToFiat.addEventListener('change', currencyPairsFiat);

// end of PAIRs SELECTION

// start of RATE CALCULATION

 /**
  * RateFiatCalc to run a calculation based on a specific currency selection
  */
function rateFiatCalc (event) {
    let selectedCurrency = selectFromFiat.value;
    let calcMyNumber = Number(enterFiat.value);

    if (selectedCurrency === 'USD'){
        usdRateFiatCalc(calcMyNumber);
    }
}

/**
 * Targeted from RateFiatCalc for USD-EUR rate calculation
 */
function usdRateFiatCalc (amount) {
    let receiveMyNumber = amount - (amount * 8.75 / 100);
    receiveFiat.value = receiveMyNumber;
}

enterFiat.addEventListener('input', rateFiatCalc);

// end of RATE CALCULATION

// start of BALANCE UPDATE

/**
 * 
 */
function updateNumbersFiat(event){

}

document.getElementById('get-fiat').addEventListener('click', updateNumbersFiat);