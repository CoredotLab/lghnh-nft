/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IOutbox } from "../IOutbox";

export class IOutbox__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOutbox {
    return new Contract(address, _abi, signerOrProvider) as IOutbox;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "destAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "outboxEntryIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "transactionIndex",
        type: "uint256",
      },
    ],
    name: "OutBoxTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchNum",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outboxEntryIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "outputRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numInBatch",
        type: "uint256",
      },
    ],
    name: "OutboxEntryCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "l2ToL1BatchNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2ToL1Block",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2ToL1EthBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2ToL1OutputId",
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
  {
    inputs: [],
    name: "l2ToL1Sender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2ToL1Timestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batchNum",
        type: "uint256",
      },
    ],
    name: "outboxEntryExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sendsData",
        type: "bytes",
      },
      {
        internalType: "uint256[]",
        name: "sendLengths",
        type: "uint256[]",
      },
    ],
    name: "processOutgoingMessages",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
