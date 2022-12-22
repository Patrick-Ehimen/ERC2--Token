const { ethers, run, network } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const SithariErc = await ethers.getContractFactory("Sithari");
  console.log("Deploying contracts, please wait...");
  const sithari = await SithariErc.deploy();
  //the above lines of code deploys the contract
  await sithari.deployed();
  console.log("Deployed contract to:", sithari.address); // shows the address to which the contract is depoyed to
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
