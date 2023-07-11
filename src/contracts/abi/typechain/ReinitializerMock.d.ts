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

interface ReinitializerMockInterface extends ethers.utils.Interface {
  functions: {
    "chainReinitialize(uint8,uint8)": FunctionFragment;
    "counter()": FunctionFragment;
    "disableInitializers()": FunctionFragment;
    "doStuff()": FunctionFragment;
    "initialize()": FunctionFragment;
    "nestedReinitialize(uint8,uint8)": FunctionFragment;
    "reinitialize(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "chainReinitialize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "counter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "disableInitializers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "doStuff", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nestedReinitialize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "reinitialize",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "chainReinitialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disableInitializers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "doStuff", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nestedReinitialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reinitialize",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export class ReinitializerMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ReinitializerMockInterface;

  functions: {
    chainReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "chainReinitialize(uint8,uint8)"(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    "counter()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    disableInitializers(overrides?: Overrides): Promise<ContractTransaction>;

    "disableInitializers()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    doStuff(overrides?: Overrides): Promise<ContractTransaction>;

    "doStuff()"(overrides?: Overrides): Promise<ContractTransaction>;

    initialize(overrides?: Overrides): Promise<ContractTransaction>;

    "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

    nestedReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "nestedReinitialize(uint8,uint8)"(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    reinitialize(
      i: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "reinitialize(uint8)"(
      i: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  chainReinitialize(
    i: BigNumberish,
    j: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "chainReinitialize(uint8,uint8)"(
    i: BigNumberish,
    j: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  counter(overrides?: CallOverrides): Promise<BigNumber>;

  "counter()"(overrides?: CallOverrides): Promise<BigNumber>;

  disableInitializers(overrides?: Overrides): Promise<ContractTransaction>;

  "disableInitializers()"(overrides?: Overrides): Promise<ContractTransaction>;

  doStuff(overrides?: Overrides): Promise<ContractTransaction>;

  "doStuff()"(overrides?: Overrides): Promise<ContractTransaction>;

  initialize(overrides?: Overrides): Promise<ContractTransaction>;

  "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

  nestedReinitialize(
    i: BigNumberish,
    j: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "nestedReinitialize(uint8,uint8)"(
    i: BigNumberish,
    j: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  reinitialize(
    i: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "reinitialize(uint8)"(
    i: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    chainReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "chainReinitialize(uint8,uint8)"(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    "counter()"(overrides?: CallOverrides): Promise<BigNumber>;

    disableInitializers(overrides?: CallOverrides): Promise<void>;

    "disableInitializers()"(overrides?: CallOverrides): Promise<void>;

    doStuff(overrides?: CallOverrides): Promise<void>;

    "doStuff()"(overrides?: CallOverrides): Promise<void>;

    initialize(overrides?: CallOverrides): Promise<void>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    nestedReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "nestedReinitialize(uint8,uint8)"(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    reinitialize(i: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "reinitialize(uint8)"(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Initialized(version: null): EventFilter;
  };

  estimateGas: {
    chainReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "chainReinitialize(uint8,uint8)"(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    "counter()"(overrides?: CallOverrides): Promise<BigNumber>;

    disableInitializers(overrides?: Overrides): Promise<BigNumber>;

    "disableInitializers()"(overrides?: Overrides): Promise<BigNumber>;

    doStuff(overrides?: Overrides): Promise<BigNumber>;

    "doStuff()"(overrides?: Overrides): Promise<BigNumber>;

    initialize(overrides?: Overrides): Promise<BigNumber>;

    "initialize()"(overrides?: Overrides): Promise<BigNumber>;

    nestedReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "nestedReinitialize(uint8,uint8)"(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    reinitialize(i: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "reinitialize(uint8)"(
      i: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    chainReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "chainReinitialize(uint8,uint8)"(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "counter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disableInitializers(overrides?: Overrides): Promise<PopulatedTransaction>;

    "disableInitializers()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    doStuff(overrides?: Overrides): Promise<PopulatedTransaction>;

    "doStuff()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    initialize(overrides?: Overrides): Promise<PopulatedTransaction>;

    "initialize()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    nestedReinitialize(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "nestedReinitialize(uint8,uint8)"(
      i: BigNumberish,
      j: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    reinitialize(
      i: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "reinitialize(uint8)"(
      i: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
