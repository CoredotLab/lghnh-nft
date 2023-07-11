/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SampleFather } from "../SampleFather";

export class SampleFather__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SampleFather> {
    return super.deploy(overrides || {}) as Promise<SampleFather>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SampleFather {
    return super.attach(address) as SampleFather;
  }
  connect(signer: Signer): SampleFather__factory {
    return super.connect(signer) as SampleFather__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleFather {
    return new Contract(address, _abi, signerOrProvider) as SampleFather;
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
    name: "father",
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
    name: "gramps",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "string",
        name: "_gramps",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_father",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isHuman",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610de6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631c8aca3b146100675780634a6c9db6146100855780638129fc1c146100a35780638beaf7d7146100ad578063f62d1888146100c9578063fa39851f146100e5575b600080fd5b61006f610103565b60405161007c9190610898565b60405180910390f35b61008d610109565b60405161009a91906108ce565b60405180910390f35b6100ab61011c565b005b6100c760048036038101906100c29190610a6f565b61025a565b005b6100e360048036038101906100de9190610acb565b61039c565b005b6100ed6104dc565b6040516100fa9190610b9c565b60405180910390f35b60025481565b600060029054906101000a900460ff1681565b60008060019054906101000a900460ff1615905080801561014d5750600160008054906101000a900460ff1660ff16105b8061017a575061015c3061056a565b1580156101795750600160008054906101000a900460ff1660ff16145b5b6101b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b090610c30565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156101f6576001600060016101000a81548160ff0219169083151502179055505b6101fe61058d565b80156102575760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161024e9190610ca2565b60405180910390a15b50565b60008060019054906101000a900460ff1615905080801561028b5750600160008054906101000a900460ff1660ff16105b806102b8575061029a3061056a565b1580156102b75750600160008054906101000a900460ff1660ff16145b5b6102f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ee90610c30565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610334576001600060016101000a81548160ff0219169083151502179055505b61033e83836105e6565b80156103975760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161038e9190610ca2565b60405180910390a15b505050565b60008060019054906101000a900460ff161590508080156103cd5750600160008054906101000a900460ff1660ff16105b806103fa57506103dc3061056a565b1580156103f95750600160008054906101000a900460ff1660ff16145b5b610439576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043090610c30565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610476576001600060016101000a81548160ff0219169083151502179055505b61047f8261064b565b80156104d85760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516104cf9190610ca2565b60405180910390a15b5050565b600180546104e990610cec565b80601f016020809104026020016040519081016040528092919081815260200182805461051590610cec565b80156105625780601f1061053757610100808354040283529160200191610562565b820191906000526020600020905b81548152906001019060200180831161054557829003601f168201915b505050505081565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff166105dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d390610d90565b60405180910390fd5b6105e46106ae565b565b600060019054906101000a900460ff16610635576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062c90610d90565b60405180910390fd5b61063e8261064b565b6106478161071a565b5050565b600060019054906101000a900460ff1661069a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069190610d90565b60405180910390fd5b6106a261058d565b6106ab81610773565b50565b600060019054906101000a900460ff166106fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f490610d90565b60405180910390fd5b6001600060026101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff16610769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076090610d90565b60405180910390fd5b8060028190555050565b600060019054906101000a900460ff166107c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b990610d90565b60405180910390fd5b80600190805190602001906107d89291906107dc565b5050565b8280546107e890610cec565b90600052602060002090601f01602090048101928261080a5760008555610851565b82601f1061082357805160ff1916838001178555610851565b82800160010185558215610851579182015b82811115610850578251825591602001919060010190610835565b5b50905061085e9190610862565b5090565b5b8082111561087b576000816000905550600101610863565b5090565b6000819050919050565b6108928161087f565b82525050565b60006020820190506108ad6000830184610889565b92915050565b60008115159050919050565b6108c8816108b3565b82525050565b60006020820190506108e360008301846108bf565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61095082610907565b810181811067ffffffffffffffff8211171561096f5761096e610918565b5b80604052505050565b60006109826108e9565b905061098e8282610947565b919050565b600067ffffffffffffffff8211156109ae576109ad610918565b5b6109b782610907565b9050602081019050919050565b82818337600083830152505050565b60006109e66109e184610993565b610978565b905082815260208101848484011115610a0257610a01610902565b5b610a0d8482856109c4565b509392505050565b600082601f830112610a2a57610a296108fd565b5b8135610a3a8482602086016109d3565b91505092915050565b610a4c8161087f565b8114610a5757600080fd5b50565b600081359050610a6981610a43565b92915050565b60008060408385031215610a8657610a856108f3565b5b600083013567ffffffffffffffff811115610aa457610aa36108f8565b5b610ab085828601610a15565b9250506020610ac185828601610a5a565b9150509250929050565b600060208284031215610ae157610ae06108f3565b5b600082013567ffffffffffffffff811115610aff57610afe6108f8565b5b610b0b84828501610a15565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b4e578082015181840152602081019050610b33565b83811115610b5d576000848401525b50505050565b6000610b6e82610b14565b610b788185610b1f565b9350610b88818560208601610b30565b610b9181610907565b840191505092915050565b60006020820190508181036000830152610bb68184610b63565b905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000610c1a602e83610b1f565b9150610c2582610bbe565b604082019050919050565b60006020820190508181036000830152610c4981610c0d565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b6000610c8c610c87610c8284610c50565b610c67565b610c5a565b9050919050565b610c9c81610c71565b82525050565b6000602082019050610cb76000830184610c93565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d0457607f821691505b60208210811415610d1857610d17610cbd565b5b50919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000610d7a602b83610b1f565b9150610d8582610d1e565b604082019050919050565b60006020820190508181036000830152610da981610d6d565b905091905056fea26469706673582212206b72c1d73d4be23a15b30e63546f97e76b9657d5ddbbdaf5e656460e52d0acd764736f6c63430008090033";
