import { ReentrancyBank } from "./../../../typechain-types/Reenterency/Step One- Hack/ReentrancyBank";
import { HackReentrancyBank } from "./../../../typechain-types/Reenterency/Step One- Hack/HackReentrancyBank";
import { Bank } from "../../../typechain-types/Reenterency/Bank";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");

let reentrancyBank: ReentrancyBank;
let hackingContract: HackReentrancyBank;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("Reenterency", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice, bob] = await ethers.getSigners();

    // deploy the bank contract
    const reenterencyBankFactory = await ethers.getContractFactory(
      "ReentrancyBank"
    );
    reentrancyBank = (await reenterencyBankFactory.deploy()) as Bank;

    // deploy the hackbank contract
    const HackBankFactory = await ethers.getContractFactory(
      "HackReentrancyBank"
    );
    hackingContract = (await HackBankFactory.deploy(reentrancyBank.address, {
      value: ONE_ETHER,
    })) as HackReentrancyBank;

    // deposit 5 ether from alice
    await reentrancyBank.connect(alice).deposit({ value: ONE_ETHER.mul(5) });
  });

  /*
   * Get this to pass!
   */
  it("Succesfully take all the ETH out of the contract", async () => {
    await hackingContract.hackContract();
    const provider = ethers.provider;
    const bankBalance = await provider.getBalance(reentrancyBank.address);
    // expect the bank to have no ETH remaining
    expect(bankBalance).to.equal(0);
    const hackBankBalance = await provider.getBalance(hackingContract.address);
    // expect the hacking contract have all the funds!
    expect(hackBankBalance).to.equal(ONE_ETHER.mul(6));
  });
});
