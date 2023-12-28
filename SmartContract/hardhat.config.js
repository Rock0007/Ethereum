require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/a1u4xYaH3pNyOAIZT1jLXqRTHZl_2RGV",
      chainId: 5,
      accounts: [
        "49ab750677461c42d2c4d43d1e97d27705151670e5d517fb692e97a79930b2b9",
      ],
    },
  },
};
