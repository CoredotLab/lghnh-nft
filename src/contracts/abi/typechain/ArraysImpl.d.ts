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

interface ArraysImplInterface extends ethers.utils.Interface {
  functions: {
    "findUpperBound(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "findUpperBound",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "findUpperBound",
    data: BytesLike
  ): Result;

  events: {};
}

export class ArraysImpl extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ArraysImplInterface;

  functions: {
    findUpperBound(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "findUpperBound(uint256)"(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  findUpperBound(
    element: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "findUpperBound(uint256)"(
    element: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    findUpperBound(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "findUpperBound(uint256)"(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    findUpperBound(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "findUpperBound(uint256)"(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    findUpperBound(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "findUpperBound(uint256)"(
      element: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
