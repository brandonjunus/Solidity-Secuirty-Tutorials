import { HackReenterencyBank } from "../../../typechain-types/Reenterency/Step One- Hack/HackBank.sol/HackReenterencyBank";
import { ReenterencyBank } from "../../../typechain-types/Reenterency/Step One- Hack/ReenterencyBank";
import { Bank } from "../../../typechain-types/Reenterency/Bank";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");

let reenterencyBank: ReenterencyBank;
let hackingContract: HackReenterencyBank;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("Reenterency", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice, bob] = await ethers.getSigners();

    // deploy the bank contract
    const reenterencyBankFactory = await ethers.getContractFactory(
      "ReenterencyBank"
    );
    reenterencyBank = (await reenterencyBankFactory.deploy()) as Bank;

    // deploy the hackbank contract
    const HackBankFactory = await ethers.getContractFactory(
      "HackReenterencyBank"
    );
    hackingContract = (await HackBankFactory.deploy(reenterencyBank.address, {
      value: ONE_ETHER,
    })) as HackReenterencyBank;

    // deposit 5 ether from alice
    await reenterencyBank.connect(alice).deposit({ value: ONE_ETHER.mul(5) });
  });

  /*
   * Get this to pass!
   */
  it("Succesfully take all the ETH out of the contract", async () => {
    await hackingContract.hackContract();
    const provider = ethers.provider;
    const bankBalance = await provider.getBalance(reenterencyBank.address);
    // expect the bank to have no ETH remaining
    expect(bankBalance).to.equal(0);
    const hackBankBalance = await provider.getBalance(hackingContract.address);
    // expect the hacking contract have all the funds!
    expect(hackBankBalance).to.equal(ONE_ETHER.mul(6));
  });
});
