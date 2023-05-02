// Global Variables
let limits = 'No limits so far!';
let balanceFiat = document.getElementById('balance-fiat');
let limitFiat = document.getElementById('limit-fiat');
let balanceCrypto = document.getElementById('balance-crypto');
let limitCrypto = document.getElementById('limit-crypto');
// User data
let usersAccount = [
    {
      username: 'admin',
      password: 'admin123.',
      fiatUSD: 1000,
      fiatEUR: 500,
      cryptoETH: 1.5,
      cryptoBTC: 1.3
    },
    {
      username: 'carol',
      password: 'password123',
      fiatUSD: 500,
      fiatEUR: 1000,
      cryptoETH: 0.5,
      cryptoBTC: 2.0
    }
  ];

// Temporary storage For swapping, to increment or decrement
let totalConvertedUSD = 0;
let convertedEUR = 0;

let totalConvertedEUR = 0;
let convertedUSD = 0;
