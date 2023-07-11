/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC1820Implementer } from "../ERC1820Implementer";

export class ERC1820Implementer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC1820Implementer> {
    return super.deploy(overrides || {}) as Promise<ERC1820Implementer>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1820Implementer {
    return super.attach(address) as ERC1820Implementer;
  }
  connect(signer: Signer): ERC1820Implementer__factory {
    return super.connect(signer) as ERC1820Implementer__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1820Implementer {
    return new Contract(address, _abi, signerOrProvider) as ERC1820Implementer;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "canImplementInterfaceForAddress",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061022f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063249cb3fa14610030575b600080fd5b61004a6004803603810190610045919061018f565b610060565b60405161005791906101de565b60405180910390f35b600080600084815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166100cc576000801b6100ee565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b905092915050565b600080fd5b6000819050919050565b61010e816100fb565b811461011957600080fd5b50565b60008135905061012b81610105565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061015c82610131565b9050919050565b61016c81610151565b811461017757600080fd5b50565b60008135905061018981610163565b92915050565b600080604083850312156101a6576101a56100f6565b5b60006101b48582860161011c565b92505060206101c58582860161017a565b9150509250929050565b6101d8816100fb565b82525050565b60006020820190506101f360008301846101cf565b9291505056fea264697066735822122083532a07f5b2629b40a4d4db16c1411401e2f658d5448a369e9a8fdb05a7690864736f6c63430008090033";
