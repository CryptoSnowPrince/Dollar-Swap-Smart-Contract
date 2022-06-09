// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const factory = "0xB0a39D8306b552B4E58b0a0174d817b8c5F2C91d";
  const WTRM = "0x238F5666A0f12c571B7B3fBd5b5a434146dFa0C5"
  // We get the contract to deploy
  const DollarswapRouter02 = await ethers.getContractFactory("DollarswapRouter02");
  const dollarswapRouter02 = await DollarswapRouter02.deploy(factory, WTRM);

  await dollarswapRouter02.deployed();

  console.log("DollarswapRouter02 deployed to:", dollarswapRouter02.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
