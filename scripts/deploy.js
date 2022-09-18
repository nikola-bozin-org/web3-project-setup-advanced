const hre = require("hardhat");

async function main() {
  const SimpleContractFactory = await hre.ethers.getContractFactory("SimpleContract");
  const simpleContract = await SimpleContractFactory.deploy("0x6a04fac827DF78F652306cD547c6D90118F150CF");

  await simpleContract.deployed();
  console.info("Deployed SimpleContract at: " + simpleContract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
