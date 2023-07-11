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

interface ERC777Interface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "authorizeOperator(address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256,bytes)": FunctionFragment;
    "decimals()": FunctionFragment;
    "defaultOperators()": FunctionFragment;
    "granularity()": FunctionFragment;
    "isOperatorFor(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "operatorBurn(address,uint256,bytes,bytes)": FunctionFragment;
    "operatorSend(address,address,uint256,bytes,bytes)": FunctionFragment;
    "revokeOperator(address)": FunctionFragment;
    "send(address,uint256,bytes)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
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
    functionFragment: "authorizeOperator",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "defaultOperators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "granularity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isOperatorFor",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "operatorBurn",
    values: [string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorSend",
    values: [string, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
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
  decodeFunctionResult(
    functionFragment: "authorizeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "defaultOperators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "granularity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperatorFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operatorBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "AuthorizedOperator(address,address)": EventFragment;
    "Burned(address,address,uint256,bytes,bytes)": EventFragment;
    "Minted(address,address,uint256,bytes,bytes)": EventFragment;
    "RevokedOperator(address,address)": EventFragment;
    "Sent(address,address,address,uint256,bytes,bytes)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuthorizedOperator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokedOperator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class ERC777 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC777Interface;

  functions: {
    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    authorizeOperator(
      operator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "authorizeOperator(address)"(
      operator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address)"(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(uint256,bytes)"(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    defaultOperators(overrides?: CallOverrides): Promise<[string[]]>;

    "defaultOperators()"(overrides?: CallOverrides): Promise<[string[]]>;

    granularity(overrides?: CallOverrides): Promise<[BigNumber]>;

    "granularity()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isOperatorFor(address,address)"(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "operatorBurn(address,uint256,bytes,bytes)"(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "operatorSend(address,address,uint256,bytes,bytes)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    revokeOperator(
      operator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "revokeOperator(address)"(
      operator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "send(address,uint256,bytes)"(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  allowance(
    holder: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    holder: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  authorizeOperator(
    operator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "authorizeOperator(address)"(
    operator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(tokenHolder: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    tokenHolder: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(uint256,bytes)"(
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  defaultOperators(overrides?: CallOverrides): Promise<string[]>;

  "defaultOperators()"(overrides?: CallOverrides): Promise<string[]>;

  granularity(overrides?: CallOverrides): Promise<BigNumber>;

  "granularity()"(overrides?: CallOverrides): Promise<BigNumber>;

  isOperatorFor(
    operator: string,
    tokenHolder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isOperatorFor(address,address)"(
    operator: string,
    tokenHolder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  operatorBurn(
    account: string,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "operatorBurn(address,uint256,bytes,bytes)"(
    account: string,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  operatorSend(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "operatorSend(address,address,uint256,bytes,bytes)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  revokeOperator(
    operator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "revokeOperator(address)"(
    operator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  send(
    recipient: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "send(address,uint256,bytes)"(
    recipient: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    holder: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    holder: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    authorizeOperator(
      operator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "authorizeOperator(address)"(
      operator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "burn(uint256,bytes)"(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    defaultOperators(overrides?: CallOverrides): Promise<string[]>;

    "defaultOperators()"(overrides?: CallOverrides): Promise<string[]>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    "granularity()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isOperatorFor(address,address)"(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "operatorBurn(address,uint256,bytes,bytes)"(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "operatorSend(address,address,uint256,bytes,bytes)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeOperator(operator: string, overrides?: CallOverrides): Promise<void>;

    "revokeOperator(address)"(
      operator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "send(address,uint256,bytes)"(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    AuthorizedOperator(
      operator: string | null,
      tokenHolder: string | null
    ): EventFilter;

    Burned(
      operator: string | null,
      from: string | null,
      amount: null,
      data: null,
      operatorData: null
    ): EventFilter;

    Minted(
      operator: string | null,
      to: string | null,
      amount: null,
      data: null,
      operatorData: null
    ): EventFilter;

    RevokedOperator(
      operator: string | null,
      tokenHolder: string | null
    ): EventFilter;

    Sent(
      operator: string | null,
      from: string | null,
      to: string | null,
      amount: null,
      data: null,
      operatorData: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    authorizeOperator(
      operator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "authorizeOperator(address)"(
      operator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(uint256,bytes)"(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    defaultOperators(overrides?: CallOverrides): Promise<BigNumber>;

    "defaultOperators()"(overrides?: CallOverrides): Promise<BigNumber>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    "granularity()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isOperatorFor(address,address)"(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "operatorBurn(address,uint256,bytes,bytes)"(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "operatorSend(address,address,uint256,bytes,bytes)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    revokeOperator(operator: string, overrides?: Overrides): Promise<BigNumber>;

    "revokeOperator(address)"(
      operator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "send(address,uint256,bytes)"(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    authorizeOperator(
      operator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "authorizeOperator(address)"(
      operator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(uint256,bytes)"(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultOperators(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "defaultOperators()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "granularity()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isOperatorFor(address,address)"(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "operatorBurn(address,uint256,bytes,bytes)"(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "operatorSend(address,address,uint256,bytes,bytes)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    revokeOperator(
      operator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "revokeOperator(address)"(
      operator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "send(address,uint256,bytes)"(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
