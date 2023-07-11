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

interface IERC3156FlashBorrowerInterface extends ethers.utils.Interface {
  functions: {
    "onFlashLoan(address,address,uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onFlashLoan",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "onFlashLoan",
    data: BytesLike
  ): Result;

  events: {};
}

export class IERC3156FlashBorrower extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IERC3156FlashBorrowerInterface;

  functions: {
    onFlashLoan(
      initiator: string,
      token: string,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onFlashLoan(address,address,uint256,uint256,bytes)"(
      initiator: string,
      token: string,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  onFlashLoan(
    initiator: string,
    token: string,
    amount: BigNumberish,
    fee: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onFlashLoan(address,address,uint256,uint256,bytes)"(
    initiator: string,
    token: string,
    amount: BigNumberish,
    fee: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    onFlashLoan(
      initiator: string,
      token: string,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onFlashLoan(address,address,uint256,uint256,bytes)"(
      initiator: string,
      token: string,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    onFlashLoan(
      initiator: string,
      token: string,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onFlashLoan(address,address,uint256,uint256,bytes)"(
      initiator: string,
      token: string,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onFlashLoan(
      initiator: string,
      token: string,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onFlashLoan(address,address,uint256,uint256,bytes)"(
      initiator: string,
      token: string,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}