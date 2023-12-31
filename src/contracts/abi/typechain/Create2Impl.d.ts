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

interface Create2ImplInterface extends ethers.utils.Interface {
  functions: {
    "computeAddress(bytes32,bytes32)": FunctionFragment;
    "computeAddressWithDeployer(bytes32,bytes32,address)": FunctionFragment;
    "deploy(uint256,bytes32,bytes)": FunctionFragment;
    "deployERC1820Implementer(uint256,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "computeAddress",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "computeAddressWithDeployer",
    values: [BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deployERC1820Implementer",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAddressWithDeployer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployERC1820Implementer",
    data: BytesLike
  ): Result;

  events: {};
}

export class Create2Impl extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Create2ImplInterface;

  functions: {
    computeAddress(
      salt: BytesLike,
      codeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "computeAddress(bytes32,bytes32)"(
      salt: BytesLike,
      codeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    computeAddressWithDeployer(
      salt: BytesLike,
      codeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "computeAddressWithDeployer(bytes32,bytes32,address)"(
      salt: BytesLike,
      codeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    deploy(
      value: BigNumberish,
      salt: BytesLike,
      code: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deploy(uint256,bytes32,bytes)"(
      value: BigNumberish,
      salt: BytesLike,
      code: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    deployERC1820Implementer(
      value: BigNumberish,
      salt: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deployERC1820Implementer(uint256,bytes32)"(
      value: BigNumberish,
      salt: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  computeAddress(
    salt: BytesLike,
    codeHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "computeAddress(bytes32,bytes32)"(
    salt: BytesLike,
    codeHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  computeAddressWithDeployer(
    salt: BytesLike,
    codeHash: BytesLike,
    deployer: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "computeAddressWithDeployer(bytes32,bytes32,address)"(
    salt: BytesLike,
    codeHash: BytesLike,
    deployer: string,
    overrides?: CallOverrides
  ): Promise<string>;

  deploy(
    value: BigNumberish,
    salt: BytesLike,
    code: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deploy(uint256,bytes32,bytes)"(
    value: BigNumberish,
    salt: BytesLike,
    code: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  deployERC1820Implementer(
    value: BigNumberish,
    salt: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deployERC1820Implementer(uint256,bytes32)"(
    value: BigNumberish,
    salt: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    computeAddress(
      salt: BytesLike,
      codeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "computeAddress(bytes32,bytes32)"(
      salt: BytesLike,
      codeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    computeAddressWithDeployer(
      salt: BytesLike,
      codeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "computeAddressWithDeployer(bytes32,bytes32,address)"(
      salt: BytesLike,
      codeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<string>;

    deploy(
      value: BigNumberish,
      salt: BytesLike,
      code: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "deploy(uint256,bytes32,bytes)"(
      value: BigNumberish,
      salt: BytesLike,
      code: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    deployERC1820Implementer(
      value: BigNumberish,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "deployERC1820Implementer(uint256,bytes32)"(
      value: BigNumberish,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    computeAddress(
      salt: BytesLike,
      codeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "computeAddress(bytes32,bytes32)"(
      salt: BytesLike,
      codeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeAddressWithDeployer(
      salt: BytesLike,
      codeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "computeAddressWithDeployer(bytes32,bytes32,address)"(
      salt: BytesLike,
      codeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deploy(
      value: BigNumberish,
      salt: BytesLike,
      code: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deploy(uint256,bytes32,bytes)"(
      value: BigNumberish,
      salt: BytesLike,
      code: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    deployERC1820Implementer(
      value: BigNumberish,
      salt: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deployERC1820Implementer(uint256,bytes32)"(
      value: BigNumberish,
      salt: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    computeAddress(
      salt: BytesLike,
      codeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "computeAddress(bytes32,bytes32)"(
      salt: BytesLike,
      codeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeAddressWithDeployer(
      salt: BytesLike,
      codeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "computeAddressWithDeployer(bytes32,bytes32,address)"(
      salt: BytesLike,
      codeHash: BytesLike,
      deployer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deploy(
      value: BigNumberish,
      salt: BytesLike,
      code: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deploy(uint256,bytes32,bytes)"(
      value: BigNumberish,
      salt: BytesLike,
      code: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    deployERC1820Implementer(
      value: BigNumberish,
      salt: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deployERC1820Implementer(uint256,bytes32)"(
      value: BigNumberish,
      salt: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
