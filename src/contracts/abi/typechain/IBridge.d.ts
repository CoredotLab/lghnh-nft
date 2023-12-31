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

interface IBridgeInterface extends ethers.utils.Interface {
  functions: {
    "activeOutbox()": FunctionFragment;
    "allowedInboxes(address)": FunctionFragment;
    "allowedOutboxes(address)": FunctionFragment;
    "deliverMessageToInbox(uint8,address,bytes32)": FunctionFragment;
    "executeCall(address,uint256,bytes)": FunctionFragment;
    "inboxAccs(uint256)": FunctionFragment;
    "messageCount()": FunctionFragment;
    "setInbox(address,bool)": FunctionFragment;
    "setOutbox(address,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "activeOutbox",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowedInboxes",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedOutboxes",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deliverMessageToInbox",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeCall",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "inboxAccs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "messageCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setInbox",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setOutbox",
    values: [string, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeOutbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedInboxes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedOutboxes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deliverMessageToInbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inboxAccs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "messageCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setInbox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOutbox", data: BytesLike): Result;

  events: {
    "BridgeCallTriggered(address,address,uint256,bytes)": EventFragment;
    "InboxToggle(address,bool)": EventFragment;
    "MessageDelivered(uint256,bytes32,address,uint8,address,bytes32)": EventFragment;
    "OutboxToggle(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BridgeCallTriggered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InboxToggle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageDelivered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OutboxToggle"): EventFragment;
}

export class IBridge extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IBridgeInterface;

  functions: {
    activeOutbox(overrides?: CallOverrides): Promise<[string]>;

    "activeOutbox()"(overrides?: CallOverrides): Promise<[string]>;

    allowedInboxes(
      inbox: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "allowedInboxes(address)"(
      inbox: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    allowedOutboxes(
      outbox: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "allowedOutboxes(address)"(
      outbox: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    deliverMessageToInbox(
      kind: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "deliverMessageToInbox(uint8,address,bytes32)"(
      kind: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    executeCall(
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeCall(address,uint256,bytes)"(
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    inboxAccs(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "inboxAccs(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    messageCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "messageCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setInbox(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setInbox(address,bool)"(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setOutbox(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOutbox(address,bool)"(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  activeOutbox(overrides?: CallOverrides): Promise<string>;

  "activeOutbox()"(overrides?: CallOverrides): Promise<string>;

  allowedInboxes(inbox: string, overrides?: CallOverrides): Promise<boolean>;

  "allowedInboxes(address)"(
    inbox: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  allowedOutboxes(outbox: string, overrides?: CallOverrides): Promise<boolean>;

  "allowedOutboxes(address)"(
    outbox: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  deliverMessageToInbox(
    kind: BigNumberish,
    sender: string,
    messageDataHash: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "deliverMessageToInbox(uint8,address,bytes32)"(
    kind: BigNumberish,
    sender: string,
    messageDataHash: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  executeCall(
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeCall(address,uint256,bytes)"(
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  inboxAccs(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "inboxAccs(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  messageCount(overrides?: CallOverrides): Promise<BigNumber>;

  "messageCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  setInbox(
    inbox: string,
    enabled: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setInbox(address,bool)"(
    inbox: string,
    enabled: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setOutbox(
    inbox: string,
    enabled: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOutbox(address,bool)"(
    inbox: string,
    enabled: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    activeOutbox(overrides?: CallOverrides): Promise<string>;

    "activeOutbox()"(overrides?: CallOverrides): Promise<string>;

    allowedInboxes(inbox: string, overrides?: CallOverrides): Promise<boolean>;

    "allowedInboxes(address)"(
      inbox: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    allowedOutboxes(
      outbox: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "allowedOutboxes(address)"(
      outbox: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deliverMessageToInbox(
      kind: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deliverMessageToInbox(uint8,address,bytes32)"(
      kind: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeCall(
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { success: boolean; returnData: string }>;

    "executeCall(address,uint256,bytes)"(
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { success: boolean; returnData: string }>;

    inboxAccs(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "inboxAccs(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    messageCount(overrides?: CallOverrides): Promise<BigNumber>;

    "messageCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    setInbox(
      inbox: string,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setInbox(address,bool)"(
      inbox: string,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setOutbox(
      inbox: string,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setOutbox(address,bool)"(
      inbox: string,
      enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    BridgeCallTriggered(
      outbox: string | null,
      destAddr: string | null,
      amount: null,
      data: null
    ): EventFilter;

    InboxToggle(inbox: string | null, enabled: null): EventFilter;

    MessageDelivered(
      messageIndex: BigNumberish | null,
      beforeInboxAcc: BytesLike | null,
      inbox: null,
      kind: null,
      sender: null,
      messageDataHash: null
    ): EventFilter;

    OutboxToggle(outbox: string | null, enabled: null): EventFilter;
  };

  estimateGas: {
    activeOutbox(overrides?: CallOverrides): Promise<BigNumber>;

    "activeOutbox()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowedInboxes(
      inbox: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowedInboxes(address)"(
      inbox: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedOutboxes(
      outbox: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowedOutboxes(address)"(
      outbox: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deliverMessageToInbox(
      kind: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "deliverMessageToInbox(uint8,address,bytes32)"(
      kind: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    executeCall(
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeCall(address,uint256,bytes)"(
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    inboxAccs(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "inboxAccs(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    messageCount(overrides?: CallOverrides): Promise<BigNumber>;

    "messageCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    setInbox(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setInbox(address,bool)"(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setOutbox(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setOutbox(address,bool)"(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activeOutbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "activeOutbox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowedInboxes(
      inbox: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowedInboxes(address)"(
      inbox: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedOutboxes(
      outbox: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowedOutboxes(address)"(
      outbox: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deliverMessageToInbox(
      kind: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "deliverMessageToInbox(uint8,address,bytes32)"(
      kind: BigNumberish,
      sender: string,
      messageDataHash: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    executeCall(
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeCall(address,uint256,bytes)"(
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    inboxAccs(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "inboxAccs(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "messageCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setInbox(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setInbox(address,bool)"(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setOutbox(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOutbox(address,bool)"(
      inbox: string,
      enabled: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
