/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UpgradedDOSKing,
  UpgradedDOSKingInterface,
} from "../../../Denial of Service/Step Two- Defend/UpgradedDOSKing";

const _abi = [
  {
    inputs: [],
    name: "balance",
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
    name: "claimThrone",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "king",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
  "0x608060405234801561001057600080fd5b50610499806100206000396000f3fe60806040526004361061004a5760003560e01c806327e235e31461004f5780633ccfd60b1461008c57806369deb7b7146100a3578063b69ef8a8146100ad578063cc181ca8146100d8575b600080fd5b34801561005b57600080fd5b50610076600480360381019061007191906102b0565b610103565b60405161008391906102f6565b60405180910390f35b34801561009857600080fd5b506100a161011b565b005b6100ab61011d565b005b3480156100b957600080fd5b506100c2610223565b6040516100cf91906102f6565b60405180910390f35b3480156100e457600080fd5b506100ed610229565b6040516100fa9190610320565b60405180910390f35b60026020528060005260406000206000915090505481565b565b6001543411610161576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610158906103be565b60405180910390fd5b600154600260008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546101d3919061040d565b9250508190555034600181905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061027d82610252565b9050919050565b61028d81610272565b811461029857600080fd5b50565b6000813590506102aa81610284565b92915050565b6000602082840312156102c6576102c561024d565b5b60006102d48482850161029b565b91505092915050565b6000819050919050565b6102f0816102dd565b82525050565b600060208201905061030b60008301846102e7565b92915050565b61031a81610272565b82525050565b60006020820190506103356000830184610311565b92915050565b600082825260208201905092915050565b7f4e65656420746f20706179206d6f726520746f206265636f6d6520746865206b60008201527f696e670000000000000000000000000000000000000000000000000000000000602082015250565b60006103a860238361033b565b91506103b38261034c565b604082019050919050565b600060208201905081810360008301526103d78161039b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610418826102dd565b9150610423836102dd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610458576104576103de565b5b82820190509291505056fea26469706673582212203454738d2da273ffee6369a22eb7bd032e5e070321690a7174d8ce845fba566164736f6c634300080f0033";

type UpgradedDOSKingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradedDOSKingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradedDOSKing__factory extends ContractFactory {
  constructor(...args: UpgradedDOSKingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UpgradedDOSKing> {
    return super.deploy(overrides || {}) as Promise<UpgradedDOSKing>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UpgradedDOSKing {
    return super.attach(address) as UpgradedDOSKing;
  }
  override connect(signer: Signer): UpgradedDOSKing__factory {
    return super.connect(signer) as UpgradedDOSKing__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradedDOSKingInterface {
    return new utils.Interface(_abi) as UpgradedDOSKingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradedDOSKing {
    return new Contract(address, _abi, signerOrProvider) as UpgradedDOSKing;
  }
}
