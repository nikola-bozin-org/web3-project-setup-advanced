require("dotenv").config();
const Web3 = require("web3");
const hardhatConfig = require("../hardhat.config");

let endpoint;
let privateKey;


if(hardhatConfig.defaultNetwork==="ganache"){
    endpoint ="http://127.0.0.1:7545";
    privateKey = process.env.PRIVATE_KEY_GANACHE;
}

else if(hardhatConfig.defaultNetwork==="goerli"){
    endpoint ="https://goerli.infura.io/v3/ca671c43f773424da52a9d42c1bd3fc3";
    privateKey = process.env.PRIVATE_KEY_GOERLI;
}

const web3 = new Web3(endpoint);
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

module.exports = {
    web3,
    account,
    hardhatConfig,
}