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

interface SafeERC20WrapperInterface extends ethers.utils.Interface {
  functions: {
    "allowance()": FunctionFragment;
    "approve(uint256)": FunctionFragment;
    "decreaseAllowance(uint256)": FunctionFragment;
    "increaseAllowance(uint256)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "setAllowance(uint256)": FunctionFragment;
    "transfer()": FunctionFragment;
    "transferFrom()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "allowance", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllowance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "transfer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {};
}

export class SafeERC20Wrapper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SafeERC20WrapperInterface;

  functions: {
    allowance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "allowance()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    decreaseAllowance(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseAllowance(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    increaseAllowance(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseAllowance(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAllowance(
      allowance_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAllowance(uint256)"(
      allowance_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transfer(overrides?: Overrides): Promise<ContractTransaction>;

    "transfer()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferFrom(overrides?: Overrides): Promise<ContractTransaction>;

    "transferFrom()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  allowance(overrides?: CallOverrides): Promise<BigNumber>;

  "allowance()"(overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  decreaseAllowance(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseAllowance(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  increaseAllowance(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseAllowance(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  permit(
    owner: string,
    spender: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
    owner: string,
    spender: string,
    value: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAllowance(
    allowance_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAllowance(uint256)"(
    allowance_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transfer(overrides?: Overrides): Promise<ContractTransaction>;

  "transfer()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferFrom(overrides?: Overrides): Promise<ContractTransaction>;

  "transferFrom()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    allowance(overrides?: CallOverrides): Promise<BigNumber>;

    "allowance()"(overrides?: CallOverrides): Promise<BigNumber>;

    approve(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "approve(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decreaseAllowance(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "decreaseAllowance(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseAllowance(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "increaseAllowance(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setAllowance(
      allowance_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAllowance(uint256)"(
      allowance_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transfer(overrides?: CallOverrides): Promise<void>;

    "transfer()"(overrides?: CallOverrides): Promise<void>;

    transferFrom(overrides?: CallOverrides): Promise<void>;

    "transferFrom()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    allowance(overrides?: CallOverrides): Promise<BigNumber>;

    "allowance()"(overrides?: CallOverrides): Promise<BigNumber>;

    approve(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "approve(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    decreaseAllowance(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseAllowance(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    increaseAllowance(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseAllowance(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAllowance(
      allowance_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAllowance(uint256)"(
      allowance_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transfer(overrides?: Overrides): Promise<BigNumber>;

    "transfer()"(overrides?: Overrides): Promise<BigNumber>;

    transferFrom(overrides?: Overrides): Promise<BigNumber>;

    "transferFrom()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "allowance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    decreaseAllowance(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseAllowance(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseAllowance(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
      owner: string,
      spender: string,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAllowance(
      allowance_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAllowance(uint256)"(
      allowance_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transfer(overrides?: Overrides): Promise<PopulatedTransaction>;

    "transfer()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferFrom(overrides?: Overrides): Promise<PopulatedTransaction>;

    "transferFrom()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
