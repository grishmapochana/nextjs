require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const fs = require("fs");
const privatekey = fs.readFileSync(".secret").toString();
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
    },
    goerli: {
      url: "https://goerli.infura.io/v3/e05b36ccf76349e195fa29291ecadd7f",
      accounts: [privatekey],
    },
  },
  solidity: "0.8.1",
};
