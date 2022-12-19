const { ethers, run, network } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const SithariErc = await ethers.getContractFactory("Sithari");
  console.log("Deploying contractr, please wait...");
  const sithari = await SithariErc.deploy();
  //the above lines of code deploys the contract
  await sithari.deployed();
  console.log("Deployed contract to:", sithari.address); // shows the address to which the contract is depoyed to

  // if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
  //   //the above line of code checks for the networkID and etherscan API and if true is runs the following code
  //   console.log("Waiting for block confirmations...");
  //   await sithari.deployTransaction.wait(4);
  //   await verify(sithari.address, []);
  // }
  // if (network.config.chainId === 80001 && process.env.POLYGONSCAN_API_KEY) {
  //   //the above line of code checks for the networkID and etherscan API and if true is runs the following code
  //   console.log("Waiting for block confirmations...");
  //   await sithari.deployTransaction.wait(4);
  //   await verify(sithari.address, []);
  // }
  // if (network.config.chainId === 97 && process.env.BSCSCAN_API_KEY) {
  //   //the above line of code checks for the networkID and etherscan API and if true is runs the following code
  //   console.log("Waiting for block confirmations...");
  //   await sithari.deployTransaction.wait(4);
  //   await verify(sithari.address, []);
  // }
}

// async function verify(contractAddress, args) {
// const verify = async (contractAddress, args) => {
//   console.log("Verifying contract...");
//   try {
//     await run("verify:verify", {
//       address: contractAddress,
//       constructorArguments: args,
//     });
//   } catch (e) {
//     if (e.message.toLowerCase().includes("already verified")) {
//       console.log("Already Verified!");
//     } else {
//       console.log(e);
//     }
//   }
// };

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
