import { HackDOSKing } from "./../../../typechain-types/Denial of Service/Step One- Hack/HackDOSKing";
import { DOSKing } from "./../../../typechain-types/Denial of Service/Step One- Hack/DOSKing";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");

let dosKing: DOSKing;
let hackDOSKing: HackDOSKing;
let deployer: Signer;
let alice: Signer;

describe("Denial of Service", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice] = await ethers.getSigners();

    // deploy the DOSKing contract
    const DOSKingFactory = await ethers.getContractFactory("DOSKing");
    dosKing = (await DOSKingFactory.deploy()) as DOSKing;

    // deploy the HackDOSKing contract with one ether
    const HackBankFactory = await ethers.getContractFactory("HackDOSKing");
    hackDOSKing = (await HackBankFactory.deploy(
      dosKing.address
    )) as HackDOSKing;

    // deposit 5 ether from alice
    await dosKing.connect(alice).claimThrone({ value: ONE_ETHER });
  });

  // Get this to pass!
  it("Succesfully prevent others from becoming King", async () => {
    await hackDOSKing.becomeKing({ value: ONE_ETHER.mul(2) });

    // alice should be unable to reclaim the throne even when giving
    // more ETH than the previous King
    await expect(
      dosKing.connect(alice).claimThrone({ value: ONE_ETHER.mul(3) })
    ).to.be.reverted;
  });
});
