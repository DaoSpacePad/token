import { ethers, upgrades } from "hardhat";

async function main() {
  // 0xfD196f732EB9178cF7b5DA371a52dD9e8ec8bD0c testnet
  const factoryContract = await ethers.getContractFactory("DaoSpace");
  const proxyContract = await upgrades.upgradeProxy(
    "0xAf7c3e578621aABAB184c706BAD94fFb1a2e0179",
    factoryContract,
    { kind: "uups" }
  );

  console.log(`deployed to ${proxyContract.address}`);
  // get UUPS implementation address
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyContract.address
  );
  console.log(`implementation address: ${implementationAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
