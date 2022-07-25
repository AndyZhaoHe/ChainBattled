const { expect } = require("chai");
const hre  = require("hardhat");

describe("NFT", function () {
  it("Mint NFT", async function () {
    const [signer1] = await hre.ethers.getSigners();

    const Battle = await hre.ethers.getContractFactory("ChainBattles", signer1);
    const battleContract = await Battle.deploy();
    await battleContract.deployed();
    console.log("=======Mint 1st token:================");
    let transaction = await battleContract.connect(signer1).mint();
    transaction.wait();
    transaction = await battleContract.connect(signer1).train(1);
    transaction.wait();
    transaction = await battleContract.connect(signer1).train(1);
    transaction.wait();

  });
});
