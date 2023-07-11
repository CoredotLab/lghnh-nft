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

interface RefundEscrowInterface extends ethers.utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "beneficiaryWithdraw()": FunctionFragment;
    "close()": FunctionFragment;
    "deposit(address)": FunctionFragment;
    "depositsOf(address)": FunctionFragment;
    "enableRefunds()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "state()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "withdrawalAllowed(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiaryWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "close", values?: undefined): string;
  encodeFunctionData(functionFragment: "deposit", values: [string]): string;
  encodeFunctionData(functionFragment: "depositsOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "enableRefunds",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "withdrawalAllowed",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beneficiaryWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositsOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enableRefunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalAllowed",
    data: BytesLike
  ): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RefundsClosed()": EventFragment;
    "RefundsEnabled()": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundsClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RefundsEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class RefundEscrow extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RefundEscrowInterface;

  functions: {
    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    "beneficiary()"(overrides?: CallOverrides): Promise<[string]>;

    beneficiaryWithdraw(overrides?: Overrides): Promise<ContractTransaction>;

    "beneficiaryWithdraw()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    close(overrides?: Overrides): Promise<ContractTransaction>;

    "close()"(overrides?: Overrides): Promise<ContractTransaction>;

    deposit(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "deposit(address)"(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    enableRefunds(overrides?: Overrides): Promise<ContractTransaction>;

    "enableRefunds()"(overrides?: Overrides): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    state(overrides?: CallOverrides): Promise<[number]>;

    "state()"(overrides?: CallOverrides): Promise<[number]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      payee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawalAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "withdrawalAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  beneficiary(overrides?: CallOverrides): Promise<string>;

  "beneficiary()"(overrides?: CallOverrides): Promise<string>;

  beneficiaryWithdraw(overrides?: Overrides): Promise<ContractTransaction>;

  "beneficiaryWithdraw()"(overrides?: Overrides): Promise<ContractTransaction>;

  close(overrides?: Overrides): Promise<ContractTransaction>;

  "close()"(overrides?: Overrides): Promise<ContractTransaction>;

  deposit(
    refundee: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "deposit(address)"(
    refundee: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

  "depositsOf(address)"(
    payee: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  enableRefunds(overrides?: Overrides): Promise<ContractTransaction>;

  "enableRefunds()"(overrides?: Overrides): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  state(overrides?: CallOverrides): Promise<number>;

  "state()"(overrides?: CallOverrides): Promise<number>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(payee: string, overrides?: Overrides): Promise<ContractTransaction>;

  "withdraw(address)"(
    payee: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawalAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "withdrawalAllowed(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    beneficiary(overrides?: CallOverrides): Promise<string>;

    "beneficiary()"(overrides?: CallOverrides): Promise<string>;

    beneficiaryWithdraw(overrides?: CallOverrides): Promise<void>;

    "beneficiaryWithdraw()"(overrides?: CallOverrides): Promise<void>;

    close(overrides?: CallOverrides): Promise<void>;

    "close()"(overrides?: CallOverrides): Promise<void>;

    deposit(refundee: string, overrides?: CallOverrides): Promise<void>;

    "deposit(address)"(
      refundee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enableRefunds(overrides?: CallOverrides): Promise<void>;

    "enableRefunds()"(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    state(overrides?: CallOverrides): Promise<number>;

    "state()"(overrides?: CallOverrides): Promise<number>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(payee: string, overrides?: CallOverrides): Promise<void>;

    "withdraw(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawalAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "withdrawalAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Deposited(payee: string | null, weiAmount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    RefundsClosed(): EventFilter;

    RefundsEnabled(): EventFilter;

    Withdrawn(payee: string | null, weiAmount: null): EventFilter;
  };

  estimateGas: {
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    "beneficiary()"(overrides?: CallOverrides): Promise<BigNumber>;

    beneficiaryWithdraw(overrides?: Overrides): Promise<BigNumber>;

    "beneficiaryWithdraw()"(overrides?: Overrides): Promise<BigNumber>;

    close(overrides?: Overrides): Promise<BigNumber>;

    "close()"(overrides?: Overrides): Promise<BigNumber>;

    deposit(refundee: string, overrides?: PayableOverrides): Promise<BigNumber>;

    "deposit(address)"(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enableRefunds(overrides?: Overrides): Promise<BigNumber>;

    "enableRefunds()"(overrides?: Overrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    "state()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(payee: string, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawalAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdrawalAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "beneficiary()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beneficiaryWithdraw(overrides?: Overrides): Promise<PopulatedTransaction>;

    "beneficiaryWithdraw()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    close(overrides?: Overrides): Promise<PopulatedTransaction>;

    "close()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    deposit(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "deposit(address)"(
      refundee: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    depositsOf(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enableRefunds(overrides?: Overrides): Promise<PopulatedTransaction>;

    "enableRefunds()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "state()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      payee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawalAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "withdrawalAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
