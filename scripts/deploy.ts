import { ethers, upgrades } from "hardhat";

async function main() {
  const factoryContract = await ethers.getContractFactory("DaoSpace");
  const proxyContract = await upgrades.deployProxy(factoryContract, { kind: "uups" });

  await proxyContract.deployed();

  console.log(`deployed to ${proxyContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
