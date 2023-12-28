const { ethers, network } = require("hardhat");

const deployContract = async () => {
  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  return transactions;
};

const main = async () => {
  try {
    const transactionsContract = await deployContract();
    console.log(
      "Transactions address on",
      network.name,
      ":",
      transactionsContract.address
    );
    console.log("Completed Successfully");
  } catch (error) {
    console.error("Error deploying contract:", error);
    process.exit(1);
  }
};

main();
