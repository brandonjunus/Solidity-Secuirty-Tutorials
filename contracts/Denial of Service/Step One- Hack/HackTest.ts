import { HackDOSBank } from "./../../../typechain-types/Denial of Service/Step One- Hack/HackDOSBank";
import { DOSBank } from "./../../../typechain-types/Denial of Service/Step One- Hack/DOSBank";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");

let victimBank: DOSBank;
let hackBank: HackDOSBank;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("Reenterency", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice, bob] = await ethers.getSigners();

    // deploy the bank contract
    const VictimBankFactory = await ethers.getContractFactory("DOSBank");
    victimBank = (await VictimBankFactory.deploy()) as DOSBank;

    // deploy the hackbank contract with one ether
    const HackBankFactory = await ethers.getContractFactory("HackDOSBank");
    hackBank = (await HackBankFactory.deploy(victimBank.address, {
      value: ONE_ETHER,
    })) as HackDOSBank;

    // deposit 5 ether from alice
    await victimBank.connect(alice).deposit({ value: ONE_ETHER });
  });

  // Get this to pass!
  it("Succesfully deny the bank from making interest payments", async () => {
    await hackBank.deposit();
    const provider = ethers.provider;
    const aliceBalanceBefore = await provider.getBalance(alice.getAddress());
    // expect payInterest function to fail
    await expect(victimBank.payInterest()).to.be.reverted;
    // expect alice to not have received interest payment
    expect(await provider.getBalance(alice.getAddress())).to.equal(
      aliceBalanceBefore
    );
  });
});
