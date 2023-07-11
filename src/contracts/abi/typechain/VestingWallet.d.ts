/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface VestingWalletInterface extends ethers.utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "duration()": FunctionFragment;
    "release(address)": FunctionFragment;
    "released()": FunctionFragment;
    "start()": FunctionFragment;
    "vestedAmount(uint64)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(functionFragment: "released", values?: undefined): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vestedAmount",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vestedAmount",
    data: BytesLike
  ): Result;

  events: {
    "ERC20Released(address,uint256)": EventFragment;
    "EtherReleased(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20Released"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EtherReleased"): EventFragment;
}

export class VestingWallet extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VestingWalletInterface;

  functions: {
    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    "beneficiary()"(overrides?: CallOverrides): Promise<[string]>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    "duration()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    "release(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "release()"(overrides?: Overrides): Promise<ContractTransaction>;

    "released()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    "released(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    start(overrides?: CallOverrides): Promise<[BigNumber]>;

    "start()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    "vestedAmount(uint64)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "vestedAmount(address,uint64)"(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  beneficiary(overrides?: CallOverrides): Promise<string>;

  "beneficiary()"(overrides?: CallOverrides): Promise<string>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

  "release(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "release()"(overrides?: Overrides): Promise<ContractTransaction>;

  "released()"(overrides?: CallOverrides): Promise<BigNumber>;

  "released(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  start(overrides?: CallOverrides): Promise<BigNumber>;

  "start()"(overrides?: CallOverrides): Promise<BigNumber>;

  "vestedAmount(uint64)"(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "vestedAmount(address,uint64)"(
    token: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    beneficiary(overrides?: CallOverrides): Promise<string>;

    "beneficiary()"(overrides?: CallOverrides): Promise<string>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    "release(address)"(token: string, overrides?: CallOverrides): Promise<void>;

    "release()"(overrides?: CallOverrides): Promise<void>;

    "released()"(overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "start()"(overrides?: CallOverrides): Promise<BigNumber>;

    "vestedAmount(uint64)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vestedAmount(address,uint64)"(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    ERC20Released(token: string | null, amount: null): EventFilter;

    EtherReleased(amount: null): EventFilter;
  };

  estimateGas: {
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    "beneficiary()"(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "duration()"(overrides?: CallOverrides): Promise<BigNumber>;

    "release(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "release()"(overrides?: Overrides): Promise<BigNumber>;

    "released()"(overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "start()"(overrides?: CallOverrides): Promise<BigNumber>;

    "vestedAmount(uint64)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vestedAmount(address,uint64)"(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "beneficiary()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "duration()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "release(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "release()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    "released()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "released(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    start(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "start()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vestedAmount(uint64)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vestedAmount(address,uint64)"(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
