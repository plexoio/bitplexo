// User data
const username = 'carol';
const password = 'admin123.';
let fiatUSD = 1000;
let fiatEUR = 500;
let cryptoETH = 1.5;
let cryptoBTC = 1.3;
let balanceFiat = document.getElementById('balance-fiat');
let limitFiat = document.getElementById('limit-fiat');
let balanceCrypto = document.getElementById('balance-crypto');
let limitCrypto = document.getElementById('limit-crypto');

// Fiat Balance Data

function loadBalanceFiat(event) {
    balanceFiat.children[1].innerHTML = `
    <li><b>USD</b> = ${fiatUSD}$</li>
    <li><b>EUR</b> = ${fiatEUR}€</li>
    `
}

balanceFiat.addEventListener('load', loadBalanceFiat);

// Crypto Balance Data
function loadBalanceCrypto(event) {
    balanceCrypto.children[1].innerHTML = `
    <li><b>ETH</b> = ${cryptoETH}Ξ</li>
    <li><b>BTC</b> = ${cryptoBTC}₿</li>
    `
}
balanceCrypto.addEventListener('load', loadBalanceCrypto);


// Fiat Litmits Data
document.addEventListener('DOMContentLoaded', function() {
    balanceCrypto.children[1].innerHTML = `
    <li><b>ETH</b> = ${cryptoETH}Ξ</li>
    <li><b>BTC</b> = ${cryptoBTC}₿</li>
    `
});

// Crypto Limits Data
function limitsCrypto (){
    
}

