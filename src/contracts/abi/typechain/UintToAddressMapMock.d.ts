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

interface UintToAddressMapMockInterface extends ethers.utils.Interface {
  functions: {
    "at(uint256)": FunctionFragment;
    "contains(uint256)": FunctionFragment;
    "get(uint256)": FunctionFragment;
    "getWithMessage(uint256,string)": FunctionFragment;
    "length()": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "set(uint256,address)": FunctionFragment;
    "tryGet(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "contains",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "get", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getWithMessage",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "length", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "tryGet",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWithMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tryGet", data: BytesLike): Result;

  events: {
    "OperationResult(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperationResult"): EventFragment;
}

export class UintToAddressMapMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UintToAddressMapMockInterface;

  functions: {
    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { key: BigNumber; value: string }>;

    "at(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { key: BigNumber; value: string }>;

    contains(key: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    "contains(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    get(key: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "get(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getWithMessage(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getWithMessage(uint256,string)"(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    length(overrides?: CallOverrides): Promise<[BigNumber]>;

    "length()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    remove(
      key: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "remove(uint256)"(
      key: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    set(
      key: BigNumberish,
      value: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "set(uint256,address)"(
      key: BigNumberish,
      value: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tryGet(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    "tryGet(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;
  };

  at(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { key: BigNumber; value: string }>;

  "at(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { key: BigNumber; value: string }>;

  contains(key: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "contains(uint256)"(
    key: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  get(key: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "get(uint256)"(key: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getWithMessage(
    key: BigNumberish,
    errorMessage: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getWithMessage(uint256,string)"(
    key: BigNumberish,
    errorMessage: string,
    overrides?: CallOverrides
  ): Promise<string>;

  length(overrides?: CallOverrides): Promise<BigNumber>;

  "length()"(overrides?: CallOverrides): Promise<BigNumber>;

  remove(
    key: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "remove(uint256)"(
    key: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  set(
    key: BigNumberish,
    value: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "set(uint256,address)"(
    key: BigNumberish,
    value: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tryGet(
    key: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, string]>;

  "tryGet(uint256)"(
    key: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, string]>;

  callStatic: {
    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { key: BigNumber; value: string }>;

    "at(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { key: BigNumber; value: string }>;

    contains(key: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "contains(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    get(key: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "get(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getWithMessage(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getWithMessage(uint256,string)"(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<string>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    "length()"(overrides?: CallOverrides): Promise<BigNumber>;

    remove(key: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "remove(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    set(
      key: BigNumberish,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "set(uint256,address)"(
      key: BigNumberish,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tryGet(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;

    "tryGet(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;
  };

  filters: {
    OperationResult(result: null): EventFilter;
  };

  estimateGas: {
    at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "at(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contains(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "contains(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "get(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithMessage(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getWithMessage(uint256,string)"(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    "length()"(overrides?: CallOverrides): Promise<BigNumber>;

    remove(key: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "remove(uint256)"(
      key: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    set(
      key: BigNumberish,
      value: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "set(uint256,address)"(
      key: BigNumberish,
      value: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tryGet(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "tryGet(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "at(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contains(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "contains(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "get(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithMessage(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getWithMessage(uint256,string)"(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "length()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      key: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "remove(uint256)"(
      key: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    set(
      key: BigNumberish,
      value: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "set(uint256,address)"(
      key: BigNumberish,
      value: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tryGet(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tryGet(uint256)"(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
