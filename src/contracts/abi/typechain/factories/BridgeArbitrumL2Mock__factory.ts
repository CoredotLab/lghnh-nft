/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BridgeArbitrumL2Mock } from "../BridgeArbitrumL2Mock";

export class BridgeArbitrumL2Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BridgeArbitrumL2Mock> {
    return super.deploy(overrides || {}) as Promise<BridgeArbitrumL2Mock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BridgeArbitrumL2Mock {
    return super.attach(address) as BridgeArbitrumL2Mock;
  }
  connect(signer: Signer): BridgeArbitrumL2Mock__factory {
    return super.connect(signer) as BridgeArbitrumL2Mock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeArbitrumL2Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BridgeArbitrumL2Mock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "expected",
        type: "address",
      },
    ],
    name: "InvalidCrossChainSender",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCrossChainCall",
    type: "error",
  },
  {
    inputs: [],
    name: "isTopLevelCall",
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
    name: "myCallersAddressWithoutAliasing",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "relayAs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wasMyCallersAddressAliased",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106f1806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806308bd624c14610051578063175a260b1461006f578063d74523b31461008d578063fb417a5b146100ab575b600080fd5b6100596100c7565b60405161006691906103b6565b60405180910390f35b61007761011e565b60405161008491906103b6565b60405180910390f35b610095610127565b6040516100a29190610412565b60405180910390f35b6100c560048036038101906100c091906104c8565b610150565b005b60008073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415905090565b60006001905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000808673ffffffffffffffffffffffffffffffffffffffff1686866040516101e092919061057b565b6000604051808303816000865af19150503d806000811461021d576040519150601f19603f3d011682016040523d82523d6000602084013e610222565b606091505b50915091506102688783836040518060400160405280601781526020017f6c6f772d6c6576656c2063616c6c2072657665727465640000000000000000008152506102b2565b50826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050565b606083156103155760008351141561030d576102cd85610328565b61030c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610303906105f1565b60405180910390fd5b5b829050610320565b61031f838361034b565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008251111561035e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103929190610699565b60405180910390fd5b60008115159050919050565b6103b08161039b565b82525050565b60006020820190506103cb60008301846103a7565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103fc826103d1565b9050919050565b61040c816103f1565b82525050565b60006020820190506104276000830184610403565b92915050565b600080fd5b600080fd5b610440816103f1565b811461044b57600080fd5b50565b60008135905061045d81610437565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261048857610487610463565b5b8235905067ffffffffffffffff8111156104a5576104a4610468565b5b6020830191508360018202830111156104c1576104c061046d565b5b9250929050565b600080600080606085870312156104e2576104e161042d565b5b60006104f08782880161044e565b945050602085013567ffffffffffffffff81111561051157610510610432565b5b61051d87828801610472565b935093505060406105308782880161044e565b91505092959194509250565b600081905092915050565b82818337600083830152505050565b6000610562838561053c565b935061056f838584610547565b82840190509392505050565b6000610588828486610556565b91508190509392505050565b600082825260208201905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006105db601d83610594565b91506105e6826105a5565b602082019050919050565b6000602082019050818103600083015261060a816105ce565b9050919050565b600081519050919050565b60005b8381101561063a57808201518184015260208101905061061f565b83811115610649576000848401525b50505050565b6000601f19601f8301169050919050565b600061066b82610611565b6106758185610594565b935061068581856020860161061c565b61068e8161064f565b840191505092915050565b600060208201905081810360008301526106b38184610660565b90509291505056fea2646970667358221220171c70faf1f1a2fb17907b08be59b31c9122087a049f912609732227e768b3d464736f6c63430008090033";
