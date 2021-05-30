require("@nomiclabs/hardhat-waffle");

const INFURA_PROJECT_ID = "KEY";

const ROPSTEN_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.6",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
