import { HackBank } from "../../../typechain-types/Reenterency/HackBank";
import { Bank } from "../../../typechain-types/Reenterency/Bank";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");

let bank: any;
let hackBank: any;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("Reenterency", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice, bob] = await ethers.getSigners();

    // deploy the bank contract
    const BankFactory = await ethers.getContractFactory("Bank");
    bank = (await BankFactory.deploy()) as Bank;

    // deploy the hackbank contract
    const HackBankFactory = await ethers.getContractFactory("HackBank");
    hackBank = (await HackBankFactory.deploy(bank.address, {
      value: ONE_ETHER,
    })) as HackBank;

    // deposit 5 ether from alice
    await bank.connect(alice).deposit({ value: ONE_ETHER.mul(5) });
  });

  // Get this to pass!
  it("Succesfully take all the ETH out of the contract", async () => {
    await hackBank.hackContract();
    const provider = ethers.provider;
    const balance = await provider.getBalance(bank.address);
    expect(balance).to.equal(0);
  });
});
