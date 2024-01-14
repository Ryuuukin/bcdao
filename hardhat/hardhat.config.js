require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://omniscient-clean-pond.ethereum-sepolia.quiknode.pro/24bf355fb4a978179ea479064a3235581735c77d/",
      accounts: ["12aa9daa31feeadbafa3fe22fc31c500be45673c3f77ad954a0e6ca61d0cb9be"],
    },
  },
  etherscan: {
    apiKey: "867EB3VS2N2IA7EF3QRUMHAR46K4GSV5T2",
  },
};