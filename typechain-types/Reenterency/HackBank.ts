/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface HackBankInterface extends utils.Interface {
  functions: {
    "contractAddress()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "contractAddress"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "contractAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "contractAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface HackBank extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HackBankInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    contractAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  contractAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    contractAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    contractAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    contractAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
