/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DisableBad1 } from "../DisableBad1";

export class DisableBad1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DisableBad1> {
    return super.deploy(overrides || {}) as Promise<DisableBad1>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DisableBad1 {
    return super.attach(address) as DisableBad1;
  }
  connect(signer: Signer): DisableBad1__factory {
    return super.connect(signer) as DisableBad1__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DisableBad1 {
    return new Contract(address, _abi, signerOrProvider) as DisableBad1;
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001f61016260201b60201c565b60008060019054906101000a900460ff161590508080156100505750600160008054906101000a900460ff1660ff16105b8061008757506100693061022360201b6100091760201c565b1580156100865750600160008054906101000a900460ff1660ff16145b5b6100c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100bd906102c9565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610103576001600060016101000a81548160ff0219169083151502179055505b801561015c5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610153919061033b565b60405180910390a15b50610412565b600060019054906101000a900460ff16156101b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a9906103c8565b60405180910390fd5b60ff801660008054906101000a900460ff1660ff1610156102215760ff6000806101000a81548160ff021916908360ff1602179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860ff60405161021891906103f7565b60405180910390a15b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006102b3602e83610246565b91506102be82610257565b604082019050919050565b600060208201905081810360008301526102e2816102a6565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b600061032561032061031b846102e9565b610300565b6102f3565b9050919050565b6103358161030a565b82525050565b6000602082019050610350600083018461032c565b92915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320696e69746960008201527f616c697a696e6700000000000000000000000000000000000000000000000000602082015250565b60006103b2602783610246565b91506103bd82610356565b604082019050919050565b600060208201905081810360008301526103e1816103a5565b9050919050565b6103f1816102f3565b82525050565b600060208201905061040c60008301846103e8565b92915050565b6062806104206000396000f3fe6080604052600080fd5b6000808273ffffffffffffffffffffffffffffffffffffffff163b11905091905056fea2646970667358221220eb4751425668da20ccd46f0706475f6b4f78a924cc034ad8563d97d4379a1fcc64736f6c63430008090033";
