import { expect } from "chai";
import { ethers } from "hardhat";

import factoryABI from "../artifacts/contracts/SendNativeAndERC20.sol/SendNativeAndERC20.json"

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { Contract } from "ethers";

let accountList: SignerWithAddress[];
let factory: Contract;

before(async function () {
    accountList = await ethers.getSigners();
    const provider = ethers.provider
    factory = new ethers.Contract("0xDe7ab60427914b4d240CE33F200eb17FE6d0B9AA", factoryABI.abi, this.provider)
})

describe("Factory", function () {
    it("Factory pair length", async function() {
        const         
    });

    // it("RBA Transfer", async function () {
    //     console.log("RBA Transfer start");
    //     // expect(await sendNativeAndERC20.connect(accountList[0]).distributeETH(list, { value: ethers.utils.parseEther("2") }))
    //     //     .to.emit(sendNativeAndERC20, "LogDistributeETH")

    //     console.log("RBA Transfer end");
    // });

    // it("ERC20 Transfer", async function () {
    //     console.log("ERC20 Transfer start");

    //     console.log("ERC20 Transfer end");
    // });


    // it("withdrawETH Test1", async function () {
    //     console.log("withdrawETH start");
    //     const tx = await sendNativeAndERC20.connect(accountList[0]).withdrawETH(accountList[0].address, 1);
    //     console.log("tx: ", tx);
    //     const ret = await tx.wait();
    //     console.log("ret: ", ret);

    //     expect(ret).to.emit(sendNativeAndERC20, "adafds").withArgs(accountList[0].address, 100);

    //     console.log("withdrawETH end");
    // });

    it("withdrawETH Test1", async function () {
        console.log("withdrawETH start");
        this.SendNativeAndERC20 = await ethers.getContractFactory("SendNativeAndERC20");
        sendNativeAndERC20 = await this.SendNativeAndERC20.deploy();
        await sendNativeAndERC20.deployed();
        // const tx = await sendNativeAndERC20.connect(accountList[0]).withdrawETH(accountList[0].address, 0);
        // console.log("tx: ", tx);
        // const ret = await tx.wait();
        // console.log("ret: ", ret);

        // expect(ret).to.emit(sendNativeAndERC20, "adafds").withArgs(accountList[0].address, 100);

        await expect(sendNativeAndERC20.connect(accountList[0]).withdrawETH(accountList[0].address, 0))
            .to.emit(sendNativeAndERC20, "LogDistributeETH")


        console.log("withdrawETH end");
    });
});
