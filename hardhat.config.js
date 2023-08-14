require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

module.exports = {
  solidity: {
    version: "0.8.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
  },

  networks: {
    nebulastaging: {
      url: `https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird`,
      accounts: [process.env.PRIVATE_KEY,],
    },
    nebula: {
      url: 'https://mainnet.skalenodes.com/v1/' + 'green-giddy-denebola',
      accounts: [process.env.PRIVATE_KEY,]
    },
  },
  etherscan: {
    apiKey: {
      nebula: [process.env.NEBULA_API_KEY]
  },

 
  custom: {
    customChains: [
      {
        network: "nebulastaging",
        chainId: 503129905,
        urls: {
        apiURL: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com/api",
        browserURL: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com/"
        }
      },
      {
        network: "nebula",
        chainId: 1482601649,
        urls: {
          apiURL: process.env.NEBULA_API_URL,
          browserURL: process.env.NEBULA_BLOCKEXPLORER_URL,
        },
      }
    ]
  }
  },
  mocha: {
    timeout: 100000000
  },
};