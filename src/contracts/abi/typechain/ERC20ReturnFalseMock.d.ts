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

interface ERC20ReturnFalseMockInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {};
}

export class ERC20ReturnFalseMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC20ReturnFalseMockInterface;

  functions: {
    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  allowance(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transfer(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transfer(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
