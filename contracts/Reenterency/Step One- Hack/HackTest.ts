import { VulerableBank } from "./../../../typechain-types/Step One- Hack/VulerableBank";
import { HackBank } from "../../../typechain-types/Reenterency/HackBank";
import { Bank } from "../../../typechain-types/Reenterency/Bank";
import { BigNumber, Signer } from "ethers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_ETHER: BigNumber = ethers.utils.parseEther("1");

let vulerableBank: VulerableBank;
let hackBank: HackBank;
let deployer: Signer;
let alice: Signer;
let bob: Signer;

describe("Reenterency", function () {
  beforeEach(async () => {
    // gets different users from ethers
    [deployer, alice, bob] = await ethers.getSigners();

    // deploy the bank contract
    const VulerableBankFactory = await ethers.getContractFactory(
      "VulerableBank"
    );
    vulerableBank = (await VulerableBankFactory.deploy()) as Bank;

    // deploy the hackbank contract
    const HackBankFactory = await ethers.getContractFactory("HackBank");
    hackBank = (await HackBankFactory.deploy(vulerableBank.address, {
      value: ONE_ETHER,
    })) as HackBank;

    // deposit 5 ether from alice
    await vulerableBank.connect(alice).deposit({ value: ONE_ETHER.mul(5) });
  });

  // Get this to pass!
  it("Succesfully take all the ETH out of the contract", async () => {
    await hackBank.hackContract();
    const provider = ethers.provider;
    const bankBalance = await provider.getBalance(vulerableBank.address);
    expect(bankBalance).to.equal(0);
    const hackBankBalance = await provider.getBalance(hackBank.address);
    expect(hackBankBalance).to.equal(ONE_ETHER.mul(6));
  });
});
