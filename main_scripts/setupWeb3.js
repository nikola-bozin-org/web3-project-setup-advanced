require("dotenv").config();
const Web3 = require("web3");
const hardhatConfig = require("../hardhat.config");

let endpointWss;
let endpointHttps;
let privateKey;
let network=hardhatConfig.defaultNetwork;

if(network==="ganache"){
    endpointWss = process.env.GANACHE_WS_ENDPOINT;
    endpointHttps =process.env.GANACHE_HTTP_ENDPOINT;
    privateKey = process.env.PRIVATE_KEY_GANACHE;
}

else if(network==="goerli"){
    endpointWss = process.env.INFURA_GOERLI_WSS_ENDPOINT;
    endpointHttps = INFURA_GOERLI_HTTPS_ENDPOINT;
    privateKey = process.env.PRIVATE_KEY_GOERLI;
}

const web3 = new Web3(endpointHttps);
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

module.exports = {
    web3,
    account,
    hardhatConfig,
    network,
}