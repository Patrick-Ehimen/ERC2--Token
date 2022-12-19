require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MATIC_RPC_URL = process.env.MATIC_RPC_URL;
const BSC_RPC_URL = process.env.BSC_RPC_URL;
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
// const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;
// const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    mumbai: {
      url: MATIC_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },
    BSC: {
      url: BSC_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 97,
    },
  },
  solidity: "0.8.17",
  // etherscan: {
  //   apikey: ETHERSCAN_API_KEY,
  //   // bscTestnet: BSCSCAN_API_KEY,
  //   // mumbaiTestnet: POLYGONSCAN_API_KEY,
  //   // goerliTestnet: ETHERSCAN_API_KEY,
  //   // },
  // },
};
