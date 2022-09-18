require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity:
  {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    }
  },
  defaultNetwork: "ganache",
  networks:
  {
    goerli:
    {
      url:process.env.INFURA_GOERLI_HTTPS_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY_GOERLI],
    },
    ganache:
    {
      url: process.env.GANACHE_HTTP_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY_GANACHE],
    },
  },
  etherscan:{
    apiKey: process.env.ETHERSCAN_API_KEY
  }
  
};
