import { UpgradedDOSBank } from "./../../../typechain-types/Denial of Service/Step Two- Defend/UpgradedDOSBank.sol/UpgradedDOSBank";
import { HackDOSBank } from "../../../typechain-types/Denial of Service/Step One- Hack/HackDOSBank";
import { DOSBank } from "../../../typechain-types/Denial of Service/Step One- Hack/DOSBank";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");
const INTEREST: BigNumber = ethers.utils.parseEther(".001");

let upgradedBank: UpgradedDOSBank;
let hackBank: HackDOSBank;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("DOS Defense", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice, bob] = await ethers.getSigners();

    // deploy the bank contract
    const VictimBankFactory = await ethers.getContractFactory(
      "UpgradedDOSBank"
    );
    upgradedBank = (await VictimBankFactory.deploy()) as UpgradedDOSBank;

    // deploy the hackbank contract with one ether
    const HackBankFactory = await ethers.getContractFactory("HackDOSBank");
    hackBank = (await HackBankFactory.deploy(upgradedBank.address, {
      value: ONE_ETHER,
    })) as HackDOSBank;

    // deposit 5 ether from alice
    await upgradedBank.connect(alice).deposit({ value: ONE_ETHER });
  });

  // Get this to pass!
  it("Succesfully allow the bank to make interest payments", async () => {
    await hackBank.deposit();
    const provider = ethers.provider;
    const aliceBalanceBefore = await provider.getBalance(alice.getAddress());
    console.log("aliceBalanceBefore", aliceBalanceBefore);
    // expect payInterest function to fail
    await upgradedBank.payInterest();
    expect(await upgradedBank.interestAccrued(alice.getAddress())).to.equal(
      ONE_ETHER.div(1000)
    );
    // expect alice to not have received interest payment
    await upgradedBank.connect(alice).withdrawInterest();
    expect(await upgradedBank.interestAccrued(alice.getAddress())).to.equal(0);
    expect(await provider.getBalance(alice.getAddress())).to.be.closeTo(
      aliceBalanceBefore.add(INTEREST),
      ONE_ETHER.div(1000)
    );
  });
});
