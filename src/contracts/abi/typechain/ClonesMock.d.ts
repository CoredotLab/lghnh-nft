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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ClonesMockInterface extends ethers.utils.Interface {
  functions: {
    "clone(address,bytes)": FunctionFragment;
    "cloneDeterministic(address,bytes32,bytes)": FunctionFragment;
    "predictDeterministicAddress(address,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "clone",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cloneDeterministic",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "predictDeterministicAddress",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "clone", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cloneDeterministic",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predictDeterministicAddress",
    data: BytesLike
  ): Result;

  events: {
    "NewInstance(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewInstance"): EventFragment;
}

export class ClonesMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ClonesMockInterface;

  functions: {
    clone(
      implementation: string,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "clone(address,bytes)"(
      implementation: string,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    cloneDeterministic(
      implementation: string,
      salt: BytesLike,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "cloneDeterministic(address,bytes32,bytes)"(
      implementation: string,
      salt: BytesLike,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    predictDeterministicAddress(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { predicted: string }>;

    "predictDeterministicAddress(address,bytes32)"(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { predicted: string }>;
  };

  clone(
    implementation: string,
    initdata: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "clone(address,bytes)"(
    implementation: string,
    initdata: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  cloneDeterministic(
    implementation: string,
    salt: BytesLike,
    initdata: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "cloneDeterministic(address,bytes32,bytes)"(
    implementation: string,
    salt: BytesLike,
    initdata: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  predictDeterministicAddress(
    implementation: string,
    salt: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "predictDeterministicAddress(address,bytes32)"(
    implementation: string,
    salt: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    clone(
      implementation: string,
      initdata: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "clone(address,bytes)"(
      implementation: string,
      initdata: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    cloneDeterministic(
      implementation: string,
      salt: BytesLike,
      initdata: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "cloneDeterministic(address,bytes32,bytes)"(
      implementation: string,
      salt: BytesLike,
      initdata: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    predictDeterministicAddress(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "predictDeterministicAddress(address,bytes32)"(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    NewInstance(instance: null): EventFilter;
  };

  estimateGas: {
    clone(
      implementation: string,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "clone(address,bytes)"(
      implementation: string,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    cloneDeterministic(
      implementation: string,
      salt: BytesLike,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "cloneDeterministic(address,bytes32,bytes)"(
      implementation: string,
      salt: BytesLike,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    predictDeterministicAddress(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "predictDeterministicAddress(address,bytes32)"(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    clone(
      implementation: string,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "clone(address,bytes)"(
      implementation: string,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    cloneDeterministic(
      implementation: string,
      salt: BytesLike,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "cloneDeterministic(address,bytes32,bytes)"(
      implementation: string,
      salt: BytesLike,
      initdata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    predictDeterministicAddress(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "predictDeterministicAddress(address,bytes32)"(
      implementation: string,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
