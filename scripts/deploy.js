const hre = require("hardhat");
const mainContractNameProcessor = require("../main_scripts/mainContractNameProcessor.js");

(async ()=>{
  const contractName = mainContractNameProcessor.getMainContractName();
  console.info(contractName);

  const contractFactory = await hre.ethers.getContractFactory(contractName);
  const contract = await contractFactory.deploy();

  await contract.deployed();
  console.info("Deployed " + contractName + " at: " + contract.address);
})();


