/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Bank, BankInterface } from "../../Hack/Bank";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getValueOfContract",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061043d806100206000396000f3fe60806040526004361061003f5760003560e01c8063254e1d691461004457806327e235e31461006f5780633ccfd60b146100ac578063d0e30db0146100c3575b600080fd5b34801561005057600080fd5b506100596100cd565b6040516100669190610291565b60405180910390f35b34801561007b57600080fd5b506100966004803603810190610091919061030f565b6100d5565b6040516100a39190610291565b60405180910390f35b3480156100b857600080fd5b506100c16100ed565b005b6100cb610221565b005b600047905090565b60006020528060005260406000206000915090505481565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541061021f573373ffffffffffffffffffffffffffffffffffffffff166000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516101959061036d565b60006040518083038185875af1925050503d80600081146101d2576040519150601f19603f3d011682016040523d82523d6000602084013e6101d7565b606091505b50505060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461026f91906103b1565b92505081905550565b6000819050919050565b61028b81610278565b82525050565b60006020820190506102a66000830184610282565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102dc826102b1565b9050919050565b6102ec816102d1565b81146102f757600080fd5b50565b600081359050610309816102e3565b92915050565b600060208284031215610325576103246102ac565b5b6000610333848285016102fa565b91505092915050565b600081905092915050565b50565b600061035760008361033c565b915061036282610347565b600082019050919050565b60006103788261034a565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103bc82610278565b91506103c783610278565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156103fc576103fb610382565b5b82820190509291505056fea2646970667358221220b12bff6404086814ba112fa8fdb682ada7af235561307fb7671f5b994eb9e2ec64736f6c634300080f0033";

type BankConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BankConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bank__factory extends ContractFactory {
  constructor(...args: BankConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Bank> {
    return super.deploy(overrides || {}) as Promise<Bank>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bank {
    return super.attach(address) as Bank;
  }
  override connect(signer: Signer): Bank__factory {
    return super.connect(signer) as Bank__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BankInterface {
    return new utils.Interface(_abi) as BankInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bank {
    return new Contract(address, _abi, signerOrProvider) as Bank;
  }
}
