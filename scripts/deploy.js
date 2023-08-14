const hre = require("hardhat");

const main = async () => {
  const { ethers } = hre;

  let owner, europausdc;
  [owner] = await ethers.getSigners();

  const EuropaUSDC = await ethers.getContractFactory("EuropaUSDC");
  europausdc = await EuropaUSDC.deploy("EuropaUSDC", "USDC");

  console.log("EuropaUSDC contract deployed to:", europausdc.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exit(1); // Exit with an error code
});

