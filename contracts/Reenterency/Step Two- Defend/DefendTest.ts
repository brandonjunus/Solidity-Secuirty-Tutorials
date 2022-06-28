import { UpgradedBank } from "./../../../typechain-types/Step Two- Defend/UpgradedBank.sol/UpgradedBank";
import { HackBank } from "../../../typechain-types/Reenterency/HackBank";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");

let upgradedBank: UpgradedBank;
let hackBank: HackBank;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("Reenterency", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice, bob] = await ethers.getSigners();

    // deploy the Upgraded Bank contract
    const UpgradedBankFactory = await ethers.getContractFactory("UpgradedBank");
    upgradedBank = (await UpgradedBankFactory.deploy()) as UpgradedBank;

    // deploy the hackbank contract (same contract from step one)
    const HackBankFactory = await ethers.getContractFactory("HackBank");
    hackBank = (await HackBankFactory.deploy(upgradedBank.address, {
      value: ONE_ETHER,
    })) as HackBank;

    // deposit 5 ether from alice
    await upgradedBank.connect(alice).deposit({ value: ONE_ETHER.mul(5) });
  });

  // Get this to pass!
  it("Succesfully defends the bank from reenterency attacks", async () => {
    const provider = ethers.provider;
    await hackBank.hackContract();
    const upgradedBankBalance = await provider.getBalance(upgradedBank.address);
    expect(Number(upgradedBankBalance)).to.greaterThanOrEqual(
      Number(ONE_ETHER.mul(5))
    );
  });
});
