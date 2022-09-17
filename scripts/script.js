require("dotenv").config();
const Web3 = require("web3");


const web3 = new Web3(process.env.INFURA_GOERLI_HTTPS_ENDPOINT);
const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);

(async ()=>{
    console.info(await web3.eth.getBlockNumber());
    console.info(account.address);
})();