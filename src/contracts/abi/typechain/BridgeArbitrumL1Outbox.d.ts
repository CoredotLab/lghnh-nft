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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BridgeArbitrumL1OutboxInterface extends ethers.utils.Interface {
  functions: {
    "bridge()": FunctionFragment;
    "l2ToL1Sender()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "l2ToL1Sender",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2ToL1Sender",
    data: BytesLike
  ): Result;

  events: {};
}

export class BridgeArbitrumL1Outbox extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BridgeArbitrumL1OutboxInterface;

  functions: {
    bridge(overrides?: CallOverrides): Promise<[string]>;

    "bridge()"(overrides?: CallOverrides): Promise<[string]>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<[string]>;

    "l2ToL1Sender()"(overrides?: CallOverrides): Promise<[string]>;
  };

  bridge(overrides?: CallOverrides): Promise<string>;

  "bridge()"(overrides?: CallOverrides): Promise<string>;

  l2ToL1Sender(overrides?: CallOverrides): Promise<string>;

  "l2ToL1Sender()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    bridge(overrides?: CallOverrides): Promise<string>;

    "bridge()"(overrides?: CallOverrides): Promise<string>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<string>;

    "l2ToL1Sender()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    "bridge()"(overrides?: CallOverrides): Promise<BigNumber>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<BigNumber>;

    "l2ToL1Sender()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bridge()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2ToL1Sender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "l2ToL1Sender()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
