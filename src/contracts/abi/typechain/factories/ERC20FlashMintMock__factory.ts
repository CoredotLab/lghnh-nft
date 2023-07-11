/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC20FlashMintMock } from "../ERC20FlashMintMock";

export class ERC20FlashMintMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: Overrides
  ): Promise<ERC20FlashMintMock> {
    return super.deploy(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<ERC20FlashMintMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  attach(address: string): ERC20FlashMintMock {
    return super.attach(address) as ERC20FlashMintMock;
  }
  connect(signer: Signer): ERC20FlashMintMock__factory {
    return super.connect(signer) as ERC20FlashMintMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20FlashMintMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20FlashMintMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
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
    name: "flashFeeReceiver",
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
        internalType: "contract IERC3156FlashBorrower",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setFlashFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "setFlashFeeReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620027c4380380620027c48339818101604052810190620000379190620004ee565b838381600390805190602001906200005192919062000201565b5080600490805190602001906200006a92919062000201565b5050506200007f82826200008960201b60201c565b5050505062000740565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f390620005ff565b60405180910390fd5b6200011060008383620001f760201b60201c565b806002600082825462000124919062000650565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001d79190620006be565b60405180910390a3620001f360008383620001fc60201b60201c565b5050565b505050565b505050565b8280546200020f906200070a565b90600052602060002090601f0160209004810192826200023357600085556200027f565b82601f106200024e57805160ff19168380011785556200027f565b828001600101855582156200027f579182015b828111156200027e57825182559160200191906001019062000261565b5b5090506200028e919062000292565b5090565b5b80821115620002ad57600081600090555060010162000293565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200031a82620002cf565b810181811067ffffffffffffffff821117156200033c576200033b620002e0565b5b80604052505050565b600062000351620002b1565b90506200035f82826200030f565b919050565b600067ffffffffffffffff821115620003825762000381620002e0565b5b6200038d82620002cf565b9050602081019050919050565b60005b83811015620003ba5780820151818401526020810190506200039d565b83811115620003ca576000848401525b50505050565b6000620003e7620003e18462000364565b62000345565b905082815260208101848484011115620004065762000405620002ca565b5b620004138482856200039a565b509392505050565b600082601f830112620004335762000432620002c5565b5b815162000445848260208601620003d0565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200047b826200044e565b9050919050565b6200048d816200046e565b81146200049957600080fd5b50565b600081519050620004ad8162000482565b92915050565b6000819050919050565b620004c881620004b3565b8114620004d457600080fd5b50565b600081519050620004e881620004bd565b92915050565b600080600080608085870312156200050b576200050a620002bb565b5b600085015167ffffffffffffffff8111156200052c576200052b620002c0565b5b6200053a878288016200041b565b945050602085015167ffffffffffffffff8111156200055e576200055d620002c0565b5b6200056c878288016200041b565b93505060406200057f878288016200049c565b92505060606200059287828801620004d7565b91505092959194509250565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620005e7601f836200059e565b9150620005f482620005af565b602082019050919050565b600060208201905081810360008301526200061a81620005d8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200065d82620004b3565b91506200066a83620004b3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620006a257620006a162000621565b5b828201905092915050565b620006b881620004b3565b82525050565b6000602082019050620006d56000830184620006ad565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200072357607f821691505b602082108114156200073a5762000739620006db565b5b50919050565b61207480620007506000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063613255ab116100a2578063a457c2d711610071578063a457c2d714610307578063a8b24f9a14610337578063a9059cbb14610355578063d9d98ce414610385578063dd62ed3e146103b557610116565b8063613255ab1461026d57806370a082311461029d578063907a267b146102cd57806395d89b41146102e957610116565b8063313ce567116100e9578063313ce567146101b757806339509351146101d557806340c10f191461020557806352741a40146102215780635cffe9de1461023d57610116565b806306fdde031461011b578063095ea7b31461013957806318160ddd1461016957806323b872dd14610187575b600080fd5b6101236103e5565b6040516101309190611347565b60405180910390f35b610153600480360381019061014e9190611407565b610477565b6040516101609190611462565b60405180910390f35b61017161049a565b60405161017e919061148c565b60405180910390f35b6101a1600480360381019061019c91906114a7565b6104a4565b6040516101ae9190611462565b60405180910390f35b6101bf6104d3565b6040516101cc9190611516565b60405180910390f35b6101ef60048036038101906101ea9190611407565b6104dc565b6040516101fc9190611462565b60405180910390f35b61021f600480360381019061021a9190611407565b610513565b005b61023b60048036038101906102369190611531565b610521565b005b61025760048036038101906102529190611601565b610565565b6040516102649190611462565b60405180910390f35b61028760048036038101906102829190611531565b610761565b604051610294919061148c565b60405180910390f35b6102b760048036038101906102b29190611531565b6107d8565b6040516102c4919061148c565b60405180910390f35b6102e760048036038101906102e29190611689565b610820565b005b6102f161082a565b6040516102fe9190611347565b60405180910390f35b610321600480360381019061031c9190611407565b6108bc565b60405161032e9190611462565b60405180910390f35b61033f610933565b60405161034c91906116c5565b60405180910390f35b61036f600480360381019061036a9190611407565b610942565b60405161037c9190611462565b60405180910390f35b61039f600480360381019061039a9190611407565b610965565b6040516103ac919061148c565b60405180910390f35b6103cf60048036038101906103ca91906116e0565b61097d565b6040516103dc919061148c565b60405180910390f35b6060600380546103f49061174f565b80601f01602080910402602001604051908101604052809291908181526020018280546104209061174f565b801561046d5780601f106104425761010080835404028352916020019161046d565b820191906000526020600020905b81548152906001019060200180831161045057829003601f168201915b5050505050905090565b600080610482610a04565b905061048f818585610a0c565b600191505092915050565b6000600254905090565b6000806104af610a04565b90506104bc858285610bd7565b6104c7858585610c63565b60019150509392505050565b60006012905090565b6000806104e7610a04565b90506105088185856104f9858961097d565b61050391906117b0565b610a0c565b600191505092915050565b61051d8282610edb565b5050565b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061057085610761565b8411156105b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a990611878565b60405180910390fd5b60006105be8686610965565b90506105ca8786610edb565b7f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd98773ffffffffffffffffffffffffffffffffffffffff166323e30c8b338989868a8a6040518763ffffffff1660e01b815260040161062e969594939291906118e5565b602060405180830381600087803b15801561064857600080fd5b505af115801561065c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106809190611977565b146106c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b790611a16565b60405180910390fd5b60006106ca611032565b90506106e2883084896106dd91906117b0565b610bd7565b600082148061071d5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b1561073c5761073788838861073291906117b0565b61105c565b610752565b610746888761105c565b610751888284610c63565b5b60019250505095945050505050565b60003073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461079d5760006107d1565b6107a561049a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6107d09190611a36565b5b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8060058190555050565b6060600480546108399061174f565b80601f01602080910402602001604051908101604052809291908181526020018280546108659061174f565b80156108b25780601f10610887576101008083540402835291602001916108b2565b820191906000526020600020905b81548152906001019060200180831161089557829003601f168201915b5050505050905090565b6000806108c7610a04565b905060006108d5828661097d565b90508381101561091a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091190611adc565b60405180910390fd5b6109278286868403610a0c565b60019250505092915050565b600061093d611032565b905090565b60008061094d610a04565b905061095a818585610c63565b600191505092915050565b6000610971838361122a565b50600554905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7390611b6e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610aec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae390611c00565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610bca919061148c565b60405180910390a3505050565b6000610be3848461097d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c5d5781811015610c4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4690611c6c565b60405180910390fd5b610c5c8484848403610a0c565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cca90611cfe565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3a90611d90565b60405180910390fd5b610d4e8383836112a4565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610dd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcb90611e22565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ec2919061148c565b60405180910390a3610ed58484846112a9565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4290611e8e565b60405180910390fd5b610f57600083836112a4565b8060026000828254610f6991906117b0565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161101a919061148c565b60405180910390a361102e600083836112a9565b5050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c390611f20565b60405180910390fd5b6110d8826000836112a4565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561115e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115590611fb2565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611211919061148c565b60405180910390a3611225836000846112a9565b505050565b60003073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461129a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112919061201e565b60405180910390fd5b6000905092915050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156112e85780820151818401526020810190506112cd565b838111156112f7576000848401525b50505050565b6000601f19601f8301169050919050565b6000611319826112ae565b61132381856112b9565b93506113338185602086016112ca565b61133c816112fd565b840191505092915050565b60006020820190508181036000830152611361818461130e565b905092915050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061139e82611373565b9050919050565b6113ae81611393565b81146113b957600080fd5b50565b6000813590506113cb816113a5565b92915050565b6000819050919050565b6113e4816113d1565b81146113ef57600080fd5b50565b600081359050611401816113db565b92915050565b6000806040838503121561141e5761141d611369565b5b600061142c858286016113bc565b925050602061143d858286016113f2565b9150509250929050565b60008115159050919050565b61145c81611447565b82525050565b60006020820190506114776000830184611453565b92915050565b611486816113d1565b82525050565b60006020820190506114a1600083018461147d565b92915050565b6000806000606084860312156114c0576114bf611369565b5b60006114ce868287016113bc565b93505060206114df868287016113bc565b92505060406114f0868287016113f2565b9150509250925092565b600060ff82169050919050565b611510816114fa565b82525050565b600060208201905061152b6000830184611507565b92915050565b60006020828403121561154757611546611369565b5b6000611555848285016113bc565b91505092915050565b600061156982611393565b9050919050565b6115798161155e565b811461158457600080fd5b50565b60008135905061159681611570565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126115c1576115c061159c565b5b8235905067ffffffffffffffff8111156115de576115dd6115a1565b5b6020830191508360018202830111156115fa576115f96115a6565b5b9250929050565b60008060008060006080868803121561161d5761161c611369565b5b600061162b88828901611587565b955050602061163c888289016113bc565b945050604061164d888289016113f2565b935050606086013567ffffffffffffffff81111561166e5761166d61136e565b5b61167a888289016115ab565b92509250509295509295909350565b60006020828403121561169f5761169e611369565b5b60006116ad848285016113f2565b91505092915050565b6116bf81611393565b82525050565b60006020820190506116da60008301846116b6565b92915050565b600080604083850312156116f7576116f6611369565b5b6000611705858286016113bc565b9250506020611716858286016113bc565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061176757607f821691505b6020821081141561177b5761177a611720565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117bb826113d1565b91506117c6836113d1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156117fb576117fa611781565b5b828201905092915050565b7f4552433230466c6173684d696e743a20616d6f756e742065786365656473206d60008201527f6178466c6173684c6f616e000000000000000000000000000000000000000000602082015250565b6000611862602b836112b9565b915061186d82611806565b604082019050919050565b6000602082019050818103600083015261189181611855565b9050919050565b600082825260208201905092915050565b82818337600083830152505050565b60006118c48385611898565b93506118d18385846118a9565b6118da836112fd565b840190509392505050565b600060a0820190506118fa60008301896116b6565b61190760208301886116b6565b611914604083018761147d565b611921606083018661147d565b81810360808301526119348184866118b8565b9050979650505050505050565b6000819050919050565b61195481611941565b811461195f57600080fd5b50565b6000815190506119718161194b565b92915050565b60006020828403121561198d5761198c611369565b5b600061199b84828501611962565b91505092915050565b7f4552433230466c6173684d696e743a20696e76616c69642072657475726e207660008201527f616c756500000000000000000000000000000000000000000000000000000000602082015250565b6000611a006024836112b9565b9150611a0b826119a4565b604082019050919050565b60006020820190508181036000830152611a2f816119f3565b9050919050565b6000611a41826113d1565b9150611a4c836113d1565b925082821015611a5f57611a5e611781565b5b828203905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611ac66025836112b9565b9150611ad182611a6a565b604082019050919050565b60006020820190508181036000830152611af581611ab9565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611b586024836112b9565b9150611b6382611afc565b604082019050919050565b60006020820190508181036000830152611b8781611b4b565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611bea6022836112b9565b9150611bf582611b8e565b604082019050919050565b60006020820190508181036000830152611c1981611bdd565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611c56601d836112b9565b9150611c6182611c20565b602082019050919050565b60006020820190508181036000830152611c8581611c49565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611ce86025836112b9565b9150611cf382611c8c565b604082019050919050565b60006020820190508181036000830152611d1781611cdb565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611d7a6023836112b9565b9150611d8582611d1e565b604082019050919050565b60006020820190508181036000830152611da981611d6d565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611e0c6026836112b9565b9150611e1782611db0565b604082019050919050565b60006020820190508181036000830152611e3b81611dff565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611e78601f836112b9565b9150611e8382611e42565b602082019050919050565b60006020820190508181036000830152611ea781611e6b565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f0a6021836112b9565b9150611f1582611eae565b604082019050919050565b60006020820190508181036000830152611f3981611efd565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f9c6022836112b9565b9150611fa782611f40565b604082019050919050565b60006020820190508181036000830152611fcb81611f8f565b9050919050565b7f4552433230466c6173684d696e743a2077726f6e6720746f6b656e0000000000600082015250565b6000612008601b836112b9565b915061201382611fd2565b602082019050919050565b6000602082019050818103600083015261203781611ffb565b905091905056fea264697066735822122069ac109fd7392f0efde9746322c8a2f77f338befb8d4cf381c3bd4b724e938d564736f6c63430008090033";
