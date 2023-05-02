// START of ChatGPT4 code for Metamask login
/**
 * Define the connect() function to handle Metamask login
 */
async function connect() {
  // Check if Metamask is installed in the user's browser
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Add the Polygon network to Metamask (you can replace this with another network if desired)
      await addPolygonNetwork();
      // Request access to the user's Metamask account
      await requestAccountAccess();
      // Get the current account from Metamask and display an alert message with the account address
      const currentAccount = await getCurrentAccount();
      alert(`Logged in as ${currentAccount}`);

      // START of Author's owned code
      for (let i = 0; i < usersAccount.length; i++) {
        limitFiat.children[1].innerHTML = `<li>${limits}</li>`;
        limitCrypto.children[1].innerHTML = `<li>${limits}</li>`;
        // load balances
        fiatBalanceUSD = usersAccount[i].fiatUSD;
        fiatBalanceEUR = usersAccount[i].fiatEUR;
        fiatBalanceETH = usersAccount[i].cryptoETH;
        fiatBalanceBTC = usersAccount[i].cryptoBTC;
      }
      balanceFiat.children[1].innerHTML = `<li><b>USD</b> = ${fiatBalanceUSD.toFixed(2)}$</li>
      <li><b>EUR</b> = ${fiatBalanceEUR.toFixed(2)}€</li>`;
      balanceCrypto.children[1].innerHTML = `<li><b>ETH</b> = ${fiatBalanceETH.toFixed(6)}$</li>
      <li><b>BTC</b> = ${fiatBalanceBTC.toFixed(6)}€</li>`;
      for (let backSleep of backToSleep) {
        backSleep.style.display = "none";
      }
      if (navBackOnline.style.display === "none") {
        navBackOnline.style.display = "inherit";
      }
      for (let closeRest of closeLoggedIn) {
        closeRest.style.display = "none"
      }
      openCrypto.style.display = "inline-block"; // on switch.js
      openFiat.style.display = "none"; // on switch.js

      // END of Author's code
    } catch (error) {
      // If an error occurs, display a custom error message in the console or on the webpage
      displayError(error);
    }
  } else {
    // If Metamask is not installed, display an alert message telling the user to install it
    alert('Metamask is not installed');
  }
}

// Define the addPolygonNetwork() function to add the Polygon network to Metamask
async function addPolygonNetwork() {
  // You can replace the network details below with those of your desired network
  await window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{
      chainId: '0x89',
      chainName: 'Polygon Mainnet',
      rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
      blockExplorerUrls: ['https://polygonscan.com/']
    }]
  });
}

// Define the requestAccountAccess() function to request access to the user's Metamask account
async function requestAccountAccess() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

// Define the getCurrentAccount() function to get the current account from Metamask
async function getCurrentAccount() {
  const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  return accounts[0];
}

// Define the displayError() function to display an error message
function displayError(error) {
  console.error(error);
  alert(`Error: ${error.message}`);
}

// Author's adapted code

let toCrypto = document.getElementsByClassName('to-crypto'); // for CRYPTO nav connection
for (fiat = 0; fiat < toCrypto.length; fiat++) {
  toCrypto[fiat].addEventListener('click', (event) => {
    event.preventDefault();
    connect();
  })
  toCrypto[fiat].addEventListener('touchend', (event) => {
    event.preventDefault();
    connect();
  })
}

// Attach event listeners to the Metamask link to trigger the connect() function on click or touch
document.getElementById('metamask-login').addEventListener('click', (event) => {
  event.preventDefault();
  connect();
});

document.getElementById('metamask-login').addEventListener('touchend', (event) => {
  event.preventDefault();
  connect();
});

// END of ChatGPT4 code for Metamask login