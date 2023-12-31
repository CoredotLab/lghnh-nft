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

interface BridgeArbitrumL1MockInterface extends ethers.utils.Interface {
  functions: {
    "activeOutbox()": FunctionFragment;
    "currentSender()": FunctionFragment;
    "inbox()": FunctionFragment;
    "outbox()": FunctionFragment;
    "relayAs(address,bytes,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "activeOutbox",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentSender",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
  encodeFunctionData(functionFragment: "outbox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "relayAs",
    values: [string, BytesLike, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeOutbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "outbox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "relayAs", data: BytesLike): Result;

  events: {};
}

export class BridgeArbitrumL1Mock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BridgeArbitrumL1MockInterface;

  functions: {
    activeOutbox(overrides?: CallOverrides): Promise<[string]>;

    "activeOutbox()"(overrides?: CallOverrides): Promise<[string]>;

    currentSender(overrides?: CallOverrides): Promise<[string]>;

    "currentSender()"(overrides?: CallOverrides): Promise<[string]>;

    inbox(overrides?: CallOverrides): Promise<[string]>;

    "inbox()"(overrides?: CallOverrides): Promise<[string]>;

    outbox(overrides?: CallOverrides): Promise<[string]>;

    "outbox()"(overrides?: CallOverrides): Promise<[string]>;

    relayAs(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "relayAs(address,bytes,address)"(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  activeOutbox(overrides?: CallOverrides): Promise<string>;

  "activeOutbox()"(overrides?: CallOverrides): Promise<string>;

  currentSender(overrides?: CallOverrides): Promise<string>;

  "currentSender()"(overrides?: CallOverrides): Promise<string>;

  inbox(overrides?: CallOverrides): Promise<string>;

  "inbox()"(overrides?: CallOverrides): Promise<string>;

  outbox(overrides?: CallOverrides): Promise<string>;

  "outbox()"(overrides?: CallOverrides): Promise<string>;

  relayAs(
    target: string,
    data: BytesLike,
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "relayAs(address,bytes,address)"(
    target: string,
    data: BytesLike,
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    activeOutbox(overrides?: CallOverrides): Promise<string>;

    "activeOutbox()"(overrides?: CallOverrides): Promise<string>;

    currentSender(overrides?: CallOverrides): Promise<string>;

    "currentSender()"(overrides?: CallOverrides): Promise<string>;

    inbox(overrides?: CallOverrides): Promise<string>;

    "inbox()"(overrides?: CallOverrides): Promise<string>;

    outbox(overrides?: CallOverrides): Promise<string>;

    "outbox()"(overrides?: CallOverrides): Promise<string>;

    relayAs(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "relayAs(address,bytes,address)"(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    activeOutbox(overrides?: CallOverrides): Promise<BigNumber>;

    "activeOutbox()"(overrides?: CallOverrides): Promise<BigNumber>;

    currentSender(overrides?: CallOverrides): Promise<BigNumber>;

    "currentSender()"(overrides?: CallOverrides): Promise<BigNumber>;

    inbox(overrides?: CallOverrides): Promise<BigNumber>;

    "inbox()"(overrides?: CallOverrides): Promise<BigNumber>;

    outbox(overrides?: CallOverrides): Promise<BigNumber>;

    "outbox()"(overrides?: CallOverrides): Promise<BigNumber>;

    relayAs(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "relayAs(address,bytes,address)"(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activeOutbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "activeOutbox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentSender()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "inbox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    outbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "outbox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    relayAs(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "relayAs(address,bytes,address)"(
      target: string,
      data: BytesLike,
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
