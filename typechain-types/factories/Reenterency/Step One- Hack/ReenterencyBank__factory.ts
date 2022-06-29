/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ReenterencyBank,
  ReenterencyBankInterface,
} from "../../../Reenterency/Step One- Hack/ReenterencyBank";

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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103ff806100206000396000f3fe6080604052600436106100345760003560e01c806327e235e3146100395780633ccfd60b14610076578063d0e30db01461008d575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b919061029d565b610097565b60405161006d91906102e3565b60405180910390f35b34801561008257600080fd5b5061008b6100af565b005b6100956101e3565b005b60006020528060005260406000206000915090505481565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054106101e1573373ffffffffffffffffffffffffffffffffffffffff166000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516101579061032f565b60006040518083038185875af1925050503d8060008114610194576040519150601f19603f3d011682016040523d82523d6000602084013e610199565b606091505b50505060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102319190610373565b92505081905550565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061026a8261023f565b9050919050565b61027a8161025f565b811461028557600080fd5b50565b60008135905061029781610271565b92915050565b6000602082840312156102b3576102b261023a565b5b60006102c184828501610288565b91505092915050565b6000819050919050565b6102dd816102ca565b82525050565b60006020820190506102f860008301846102d4565b92915050565b600081905092915050565b50565b60006103196000836102fe565b915061032482610309565b600082019050919050565b600061033a8261030c565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061037e826102ca565b9150610389836102ca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156103be576103bd610344565b5b82820190509291505056fea2646970667358221220c91c05006f586824023e925c1ae4557b07f3437e0baec0da84bc87a66e89d35b64736f6c634300080f0033";

type ReenterencyBankConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReenterencyBankConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReenterencyBank__factory extends ContractFactory {
  constructor(...args: ReenterencyBankConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReenterencyBank> {
    return super.deploy(overrides || {}) as Promise<ReenterencyBank>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReenterencyBank {
    return super.attach(address) as ReenterencyBank;
  }
  override connect(signer: Signer): ReenterencyBank__factory {
    return super.connect(signer) as ReenterencyBank__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReenterencyBankInterface {
    return new utils.Interface(_abi) as ReenterencyBankInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReenterencyBank {
    return new Contract(address, _abi, signerOrProvider) as ReenterencyBank;
  }
}