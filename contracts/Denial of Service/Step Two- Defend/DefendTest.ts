import { UpgradedDOSKing } from "./../../../typechain-types/Denial of Service/Step Two- Defend/UpgradedDOSKing";
import { HackDOSKing } from "./../../../typechain-types/Denial of Service/Step One- Hack/HackDOSKing";
import { DOSKing } from "./../../../typechain-types/Denial of Service/Step One- Hack/DOSKing";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");

let upgradedDOSKing: UpgradedDOSKing;
let hackDOSKing: HackDOSKing;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("Denial of Service", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice, bob] = await ethers.getSigners();

    // deploy the DOSKing contract
    const UpgradedDOSKingFactory = await ethers.getContractFactory(
      "UpgradedDOSKing"
    );
    upgradedDOSKing =
      (await UpgradedDOSKingFactory.deploy()) as UpgradedDOSKing;

    // deploy the HackDOSKing contract with one ether
    const HackBankFactory = await ethers.getContractFactory("HackDOSKing");
    hackDOSKing = (await HackBankFactory.deploy(
      upgradedDOSKing.address
    )) as HackDOSKing;

    // deposit 5 ether from alice
    await upgradedDOSKing.connect(alice).claimThrone({ value: ONE_ETHER });
  });

  // Get this to pass!
  it("Succesfully allow others to become king", async () => {
    await hackDOSKing.becomeKing({ value: ONE_ETHER.mul(2) });

    // bob should be able to reclaim the throne
    await expect(
      upgradedDOSKing.connect(bob).claimThrone({ value: ONE_ETHER.mul(3) })
    ).to.not.be.reverted;

    const provider = ethers.provider;
    const aliceBalanceBefore = await provider.getBalance(alice.getAddress());
    // expect alice to be able to withdraw after being overthrown as king
    await upgradedDOSKing.connect(alice).withdraw();
    // expect alice to have a balance of 0
    expect(await upgradedDOSKing.balances(alice.getAddress())).to.equal(0);
    // expect alice's account to have increased by (approximately) one ether
    expect(await provider.getBalance(alice.getAddress())).closeTo(
      aliceBalanceBefore.add(ONE_ETHER),
      ONE_ETHER.div(1000)
    );
  });
});
