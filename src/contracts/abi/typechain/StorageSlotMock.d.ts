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

interface StorageSlotMockInterface extends ethers.utils.Interface {
  functions: {
    "getAddress(bytes32)": FunctionFragment;
    "getBoolean(bytes32)": FunctionFragment;
    "getBytes32(bytes32)": FunctionFragment;
    "getUint256(bytes32)": FunctionFragment;
    "setAddress(bytes32,address)": FunctionFragment;
    "setBoolean(bytes32,bool)": FunctionFragment;
    "setBytes32(bytes32,bytes32)": FunctionFragment;
    "setUint256(bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBoolean",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBytes32",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUint256",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddress",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBoolean",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setBytes32",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setUint256",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBoolean", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBytes32", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getUint256", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBoolean", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBytes32", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUint256", data: BytesLike): Result;

  events: {};
}

export class StorageSlotMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StorageSlotMockInterface;

  functions: {
    getAddress(slot: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "getAddress(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getBoolean(slot: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    "getBoolean(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getBytes32(slot: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "getBytes32(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getUint256(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getUint256(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setAddress(
      slot: BytesLike,
      value: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAddress(bytes32,address)"(
      slot: BytesLike,
      value: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setBoolean(
      slot: BytesLike,
      value: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBoolean(bytes32,bool)"(
      slot: BytesLike,
      value: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setBytes32(
      slot: BytesLike,
      value: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setBytes32(bytes32,bytes32)"(
      slot: BytesLike,
      value: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setUint256(
      slot: BytesLike,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setUint256(bytes32,uint256)"(
      slot: BytesLike,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getAddress(slot: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getAddress(bytes32)"(
    slot: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getBoolean(slot: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "getBoolean(bytes32)"(
    slot: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getBytes32(slot: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getBytes32(bytes32)"(
    slot: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getUint256(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "getUint256(bytes32)"(
    slot: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setAddress(
    slot: BytesLike,
    value: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAddress(bytes32,address)"(
    slot: BytesLike,
    value: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setBoolean(
    slot: BytesLike,
    value: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBoolean(bytes32,bool)"(
    slot: BytesLike,
    value: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setBytes32(
    slot: BytesLike,
    value: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setBytes32(bytes32,bytes32)"(
    slot: BytesLike,
    value: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setUint256(
    slot: BytesLike,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setUint256(bytes32,uint256)"(
    slot: BytesLike,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getAddress(slot: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getAddress(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getBoolean(slot: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "getBoolean(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getBytes32(slot: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getBytes32(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getUint256(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getUint256(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAddress(
      slot: BytesLike,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAddress(bytes32,address)"(
      slot: BytesLike,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBoolean(
      slot: BytesLike,
      value: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBoolean(bytes32,bool)"(
      slot: BytesLike,
      value: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBytes32(
      slot: BytesLike,
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBytes32(bytes32,bytes32)"(
      slot: BytesLike,
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setUint256(
      slot: BytesLike,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUint256(bytes32,uint256)"(
      slot: BytesLike,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getAddress(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getAddress(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBoolean(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getBoolean(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBytes32(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getBytes32(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUint256(slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "getUint256(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAddress(
      slot: BytesLike,
      value: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAddress(bytes32,address)"(
      slot: BytesLike,
      value: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setBoolean(
      slot: BytesLike,
      value: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBoolean(bytes32,bool)"(
      slot: BytesLike,
      value: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setBytes32(
      slot: BytesLike,
      value: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setBytes32(bytes32,bytes32)"(
      slot: BytesLike,
      value: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setUint256(
      slot: BytesLike,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setUint256(bytes32,uint256)"(
      slot: BytesLike,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddress(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAddress(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBoolean(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBoolean(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBytes32(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBytes32(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUint256(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUint256(bytes32)"(
      slot: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAddress(
      slot: BytesLike,
      value: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAddress(bytes32,address)"(
      slot: BytesLike,
      value: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setBoolean(
      slot: BytesLike,
      value: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBoolean(bytes32,bool)"(
      slot: BytesLike,
      value: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setBytes32(
      slot: BytesLike,
      value: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setBytes32(bytes32,bytes32)"(
      slot: BytesLike,
      value: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setUint256(
      slot: BytesLike,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setUint256(bytes32,uint256)"(
      slot: BytesLike,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
