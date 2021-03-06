import { UpgradedReenterencyBank } from "./../../../typechain-types/Reenterency/Step Two- Defend/UpgradedReenterencyBank";
import { HackReenterencyBank } from "./../../../typechain-types/Reenterency/Step One- Hack/HackBank.sol/HackReenterencyBank";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");

let upgradedBank: UpgradedReenterencyBank;
let hackingContract: HackReenterencyBank;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("Reenterency", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice, bob] = await ethers.getSigners();

    // deploy the Upgraded Bank contract
    const UpgradedBankFactory = await ethers.getContractFactory(
      "UpgradedReenterencyBank"
    );
    upgradedBank =
      (await UpgradedBankFactory.deploy()) as UpgradedReenterencyBank;

    // deploy the hackbank contract (same contract from step one)
    const HackBankFactory = await ethers.getContractFactory(
      "HackReenterencyBank"
    );
    hackingContract = (await HackBankFactory.deploy(upgradedBank.address, {
      value: ONE_ETHER,
    })) as HackReenterencyBank;

    // deposit 5 ether from alice
    await upgradedBank.connect(alice).deposit({ value: ONE_ETHER.mul(5) });
  });

  /*
   * Get this to pass!
   */
  it("Succesfully defends the bank from reenterency attacks", async () => {
    await hackingContract.hackContract();
    const provider = ethers.provider;
    const upgradedBankBalance = await provider.getBalance(upgradedBank.address);
    // expected the upgraded bank to have a proper balance AFTER the hack
    expect(Number(upgradedBankBalance)).to.greaterThanOrEqual(
      Number(ONE_ETHER.mul(5))
    );
  });
});
