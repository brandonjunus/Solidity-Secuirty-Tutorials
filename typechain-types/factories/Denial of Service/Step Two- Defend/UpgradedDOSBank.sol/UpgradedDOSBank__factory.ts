/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UpgradedDOSBank,
  UpgradedDOSBankInterface,
} from "../../../../Denial of Service/Step Two- Defend/UpgradedDOSBank.sol/UpgradedDOSBank";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
    name: "interestAccrued",
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
    name: "payInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505060805161033d61005d6000396000505061033d6000f3fe6080604052600436106100495760003560e01c806263750c1461004e57806327e235e3146100655780633abb7a49146100a2578063a15a211c146100df578063d0e30db0146100f6575b600080fd5b34801561005a57600080fd5b50610063610100565b005b34801561007157600080fd5b5061008c600480360381019061008791906102a6565b610102565b60405161009991906102ec565b60405180910390f35b3480156100ae57600080fd5b506100c960048036038101906100c491906102a6565b61011a565b6040516100d691906102ec565b60405180910390f35b3480156100eb57600080fd5b506100f4610132565b005b6100fe610134565b005b565b60006020528060005260406000206000915090505481565b60016020528060005260406000206000915090505481565b565b670de0b6b3a7640000341461014857600080fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461019357600080fd5b670de0b6b3a76400006000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506002339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061027382610248565b9050919050565b61028381610268565b811461028e57600080fd5b50565b6000813590506102a08161027a565b92915050565b6000602082840312156102bc576102bb610243565b5b60006102ca84828501610291565b91505092915050565b6000819050919050565b6102e6816102d3565b82525050565b600060208201905061030160008301846102dd565b9291505056fea264697066735822122081a377527e9e8bb5c3a4db2cae2284efc38ee60599d256c8161466746e0772d864736f6c634300080f0033";

type UpgradedDOSBankConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradedDOSBankConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradedDOSBank__factory extends ContractFactory {
  constructor(...args: UpgradedDOSBankConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UpgradedDOSBank> {
    return super.deploy(overrides || {}) as Promise<UpgradedDOSBank>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UpgradedDOSBank {
    return super.attach(address) as UpgradedDOSBank;
  }
  override connect(signer: Signer): UpgradedDOSBank__factory {
    return super.connect(signer) as UpgradedDOSBank__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradedDOSBankInterface {
    return new utils.Interface(_abi) as UpgradedDOSBankInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradedDOSBank {
    return new Contract(address, _abi, signerOrProvider) as UpgradedDOSBank;
  }
}