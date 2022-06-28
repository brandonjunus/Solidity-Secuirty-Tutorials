import { Bank } from "./../../typechain-types/Reenterency/Bank";
import { HackBank } from "./../../typechain-types/Reenterency/HackBank";
import { Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";
let bank: any;
let hackBank: any;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("Reenterency", function () {
  beforeEach(async () => {
    [deployer, alice, bob] = await ethers.getSigners();
    const BankFactory = await ethers.getContractFactory("Bank");
    bank = (await BankFactory.deploy()) as Bank;
    const HackBankFactory = await ethers.getContractFactory("HackBank");
    hackBank = (await HackBankFactory.deploy(bank.address)) as HackBank;
  });

  // Get this to pass!
  it("Succesfully take all the ETH out of the contract", async () => {
    // await attacker.hackContract();
    // const provider = waffle.provider;
    // const balance = await provider.getBalance(victim.address);
    // expect(balance).to.equal(0);
  });

  // it("Should return the new greeting once it's changed", async function () {
  //   const Greeter = await ethers.getContractFactory("Bank");
  //   const greeter = await Greeter.deploy("Hello, world!");
  //   await greeter.deployed();

  //   expect(await greeter.greet()).to.equal("Hello, world!");

  //   const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();

  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  // });
});
