require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC_TEST,
          `https://kovan.infura.io/v3/${process.env.API_KEY}`
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42,
      networkCheckTimeout: 10000000
    },
    main: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC_MAIN,
          `https://mainnet.infura.io/v3/${process.env.API_KEY}`
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 1,
      networkCheckTimeout: 10000000
    }
  },
  compilers: {
    solc: {
        version: "0.4.23",
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
  }
};