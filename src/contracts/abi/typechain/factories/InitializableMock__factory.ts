/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { InitializableMock } from "../InitializableMock";

export class InitializableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<InitializableMock> {
    return super.deploy(overrides || {}) as Promise<InitializableMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InitializableMock {
    return super.attach(address) as InitializableMock;
  }
  connect(signer: Signer): InitializableMock__factory {
    return super.connect(signer) as InitializableMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InitializableMock {
    return new Contract(address, _abi, signerOrProvider) as InitializableMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "fail",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializeOnlyInitializing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
    ],
    name: "initializeWithX",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializerNested",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initializerRan",
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
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
    ],
    name: "nonInitializable",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyInitializingNested",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "onlyInitializingRan",
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
    inputs: [],
    name: "x",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ae0806100206000396000f3fe6080604052600436106100905760003560e01c80637cffe97a116100595780637cffe97a146101215780638129fc1c1461014c578063a9cc471814610163578063c3b8ef2a1461017a578063e955c9ec146101a557610090565b806218eaa8146100955780630c55699c146100b157806310065ed2146100dc57806368449d1b146100f357806376268ae81461010a575b600080fd5b6100af60048036038101906100aa919061080f565b6101c1565b005b3480156100bd57600080fd5b506100c66102ff565b6040516100d3919061084b565b60405180910390f35b3480156100e857600080fd5b506100f1610305565b005b3480156100ff57600080fd5b50610108610371565b005b34801561011657600080fd5b5061011f6104af565b005b34801561012d57600080fd5b506101366105ed565b6040516101439190610881565b60405180910390f35b34801561015857600080fd5b50610161610600565b005b34801561016f57600080fd5b50610178610751565b005b34801561018657600080fd5b5061018f610794565b60405161019c9190610881565b60405180910390f35b6101bf60048036038101906101ba919061080f565b6107a7565b005b60008060019054906101000a900460ff161590508080156101f25750600160008054906101000a900460ff1660ff16105b8061021f5750610201306107b1565b15801561021e5750600160008054906101000a900460ff1660ff16145b5b61025e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102559061091f565b60405180910390fd5b60016000806101000a81548160ff021916908360ff160217905550801561029b576001600060016101000a81548160ff0219169083151502179055505b8160018190555080156102fb5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516102f29190610991565b60405180910390a15b5050565b60015481565b600060019054906101000a900460ff16610354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034b90610a1e565b60405180910390fd5b6001600060036101000a81548160ff021916908315150217905550565b60008060019054906101000a900460ff161590508080156103a25750600160008054906101000a900460ff1660ff16105b806103cf57506103b1306107b1565b1580156103ce5750600160008054906101000a900460ff1660ff16145b5b61040e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104059061091f565b60405180910390fd5b60016000806101000a81548160ff021916908360ff160217905550801561044b576001600060016101000a81548160ff0219169083151502179055505b610453610305565b80156104ac5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516104a39190610991565b60405180910390a15b50565b60008060019054906101000a900460ff161590508080156104e05750600160008054906101000a900460ff1660ff16105b8061050d57506104ef306107b1565b15801561050c5750600160008054906101000a900460ff1660ff16145b5b61054c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105439061091f565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610589576001600060016101000a81548160ff0219169083151502179055505b610591610600565b80156105ea5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516105e19190610991565b60405180910390a15b50565b600060039054906101000a900460ff1681565b60008060019054906101000a900460ff161590508080156106315750600160008054906101000a900460ff1660ff16105b8061065e5750610640306107b1565b15801561065d5750600160008054906101000a900460ff1660ff16145b5b61069d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106949061091f565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156106da576001600060016101000a81548160ff0219169083151502179055505b6001600060026101000a81548160ff021916908315150217905550801561074e5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516107459190610991565b60405180910390a15b50565b6000610792576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078990610a8a565b60405180910390fd5b565b600060029054906101000a900460ff1681565b8060018190555050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080fd5b6000819050919050565b6107ec816107d9565b81146107f757600080fd5b50565b600081359050610809816107e3565b92915050565b600060208284031215610825576108246107d4565b5b6000610833848285016107fa565b91505092915050565b610845816107d9565b82525050565b6000602082019050610860600083018461083c565b92915050565b60008115159050919050565b61087b81610866565b82525050565b60006020820190506108966000830184610872565b92915050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000610909602e8361089c565b9150610914826108ad565b604082019050919050565b60006020820190508181036000830152610938816108fc565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b600061097b6109766109718461093f565b610956565b610949565b9050919050565b61098b81610960565b82525050565b60006020820190506109a66000830184610982565b92915050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000610a08602b8361089c565b9150610a13826109ac565b604082019050919050565b60006020820190508181036000830152610a37816109fb565b9050919050565b7f496e697469616c697a61626c654d6f636b20666f72636564206661696c757265600082015250565b6000610a7460208361089c565b9150610a7f82610a3e565b602082019050919050565b60006020820190508181036000830152610aa381610a67565b905091905056fea264697066735822122033023efcc62eb4cc341ded9f33887de4622a3bb1230013763d15685df61bd08a64736f6c63430008090033";
