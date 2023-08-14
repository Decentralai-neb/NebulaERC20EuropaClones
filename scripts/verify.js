const hre = require("hardhat");

const main = async () => {
  const { ethers, upgrades, run } = hre;

  // contract addresses
  const contractAddresses = {
    europausdc: "0xA7d345228AE3C4b5388c8B5EF18794dAc4b6cc5a",

  };

  // Loop through the contract addresses and verify each contract
  for (const contractName in contractAddresses) {
    console.log(`Verifying ${contractName} EuropaUSDC`);
    await run("verify:verify", {
      address: contractAddresses[contractName],
    });
    console.log(`${contractName} contract verified.`);
  }
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exit(1); // Exit with an error code
});
