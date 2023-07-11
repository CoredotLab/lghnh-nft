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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DummyImplementationInterface extends ethers.utils.Interface {
  functions: {
    "get()": FunctionFragment;
    "initialize(uint256,string,uint256[])": FunctionFragment;
    "initializeNonPayable()": FunctionFragment;
    "initializeNonPayableWithValue(uint256)": FunctionFragment;
    "initializePayable()": FunctionFragment;
    "initializePayableWithValue(uint256)": FunctionFragment;
    "reverts()": FunctionFragment;
    "text()": FunctionFragment;
    "value()": FunctionFragment;
    "values(uint256)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "get", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeNonPayable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeNonPayableWithValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializePayable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializePayableWithValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "reverts", values?: undefined): string;
  encodeFunctionData(functionFragment: "text", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "values",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeNonPayable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeNonPayableWithValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePayable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePayableWithValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reverts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {};
}

export class DummyImplementation extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DummyImplementationInterface;

  functions: {
    get(overrides?: CallOverrides): Promise<[boolean]>;

    "get()"(overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(uint256,string,uint256[])"(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initializeNonPayable(overrides?: Overrides): Promise<ContractTransaction>;

    "initializeNonPayable()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initializeNonPayableWithValue(
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initializeNonPayableWithValue(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initializePayable(
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "initializePayable()"(
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    initializePayableWithValue(
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "initializePayableWithValue(uint256)"(
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    reverts(overrides?: CallOverrides): Promise<[void]>;

    "reverts()"(overrides?: CallOverrides): Promise<[void]>;

    text(overrides?: CallOverrides): Promise<[string]>;

    "text()"(overrides?: CallOverrides): Promise<[string]>;

    value(overrides?: CallOverrides): Promise<[BigNumber]>;

    "value()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    "values(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    version(overrides?: CallOverrides): Promise<[string]>;

    "version()"(overrides?: CallOverrides): Promise<[string]>;
  };

  get(overrides?: CallOverrides): Promise<boolean>;

  "get()"(overrides?: CallOverrides): Promise<boolean>;

  initialize(
    _value: BigNumberish,
    _text: string,
    _values: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(uint256,string,uint256[])"(
    _value: BigNumberish,
    _text: string,
    _values: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initializeNonPayable(overrides?: Overrides): Promise<ContractTransaction>;

  "initializeNonPayable()"(overrides?: Overrides): Promise<ContractTransaction>;

  initializeNonPayableWithValue(
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initializeNonPayableWithValue(uint256)"(
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initializePayable(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "initializePayable()"(
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  initializePayableWithValue(
    _value: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "initializePayableWithValue(uint256)"(
    _value: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  reverts(overrides?: CallOverrides): Promise<void>;

  "reverts()"(overrides?: CallOverrides): Promise<void>;

  text(overrides?: CallOverrides): Promise<string>;

  "text()"(overrides?: CallOverrides): Promise<string>;

  value(overrides?: CallOverrides): Promise<BigNumber>;

  "value()"(overrides?: CallOverrides): Promise<BigNumber>;

  values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "values(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  version(overrides?: CallOverrides): Promise<string>;

  "version()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    get(overrides?: CallOverrides): Promise<boolean>;

    "get()"(overrides?: CallOverrides): Promise<boolean>;

    initialize(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(uint256,string,uint256[])"(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    initializeNonPayable(overrides?: CallOverrides): Promise<void>;

    "initializeNonPayable()"(overrides?: CallOverrides): Promise<void>;

    initializeNonPayableWithValue(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initializeNonPayableWithValue(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initializePayable(overrides?: CallOverrides): Promise<void>;

    "initializePayable()"(overrides?: CallOverrides): Promise<void>;

    initializePayableWithValue(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initializePayableWithValue(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    reverts(overrides?: CallOverrides): Promise<void>;

    "reverts()"(overrides?: CallOverrides): Promise<void>;

    text(overrides?: CallOverrides): Promise<string>;

    "text()"(overrides?: CallOverrides): Promise<string>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    "value()"(overrides?: CallOverrides): Promise<BigNumber>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "values(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<string>;

    "version()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    get(overrides?: CallOverrides): Promise<BigNumber>;

    "get()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(uint256,string,uint256[])"(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    initializeNonPayable(overrides?: Overrides): Promise<BigNumber>;

    "initializeNonPayable()"(overrides?: Overrides): Promise<BigNumber>;

    initializeNonPayableWithValue(
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initializeNonPayableWithValue(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initializePayable(overrides?: PayableOverrides): Promise<BigNumber>;

    "initializePayable()"(overrides?: PayableOverrides): Promise<BigNumber>;

    initializePayableWithValue(
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "initializePayableWithValue(uint256)"(
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    reverts(overrides?: CallOverrides): Promise<BigNumber>;

    "reverts()"(overrides?: CallOverrides): Promise<BigNumber>;

    text(overrides?: CallOverrides): Promise<BigNumber>;

    "text()"(overrides?: CallOverrides): Promise<BigNumber>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    "value()"(overrides?: CallOverrides): Promise<BigNumber>;

    values(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "values(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    get(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "get()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(uint256,string,uint256[])"(
      _value: BigNumberish,
      _text: string,
      _values: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initializeNonPayable(overrides?: Overrides): Promise<PopulatedTransaction>;

    "initializeNonPayable()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initializeNonPayableWithValue(
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initializeNonPayableWithValue(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initializePayable(
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "initializePayable()"(
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    initializePayableWithValue(
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "initializePayableWithValue(uint256)"(
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    reverts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "reverts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    text(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "text()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    value(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "value()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    values(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "values(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "version()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
