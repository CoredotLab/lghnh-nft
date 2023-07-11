/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721PausableMock } from "../ERC721PausableMock";

export class ERC721PausableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<ERC721PausableMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721PausableMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721PausableMock {
    return super.attach(address) as ERC721PausableMock;
  }
  connect(signer: Signer): ERC721PausableMock__factory {
    return super.connect(signer) as ERC721PausableMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721PausableMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721PausableMock;
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002f4438038062002f448339818101604052810190620000379190620002dd565b818181600090805190602001906200005192919062000090565b5080600190805190602001906200006a92919062000090565b5050506000600660006101000a81548160ff0219169083151502179055505050620003c7565b8280546200009e9062000391565b90600052602060002090601f016020900481019282620000c257600085556200010e565b82601f10620000dd57805160ff19168380011785556200010e565b828001600101855582156200010e579182015b828111156200010d578251825591602001919060010190620000f0565b5b5090506200011d919062000121565b5090565b5b808211156200013c57600081600090555060010162000122565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001a9826200015e565b810181811067ffffffffffffffff82111715620001cb57620001ca6200016f565b5b80604052505050565b6000620001e062000140565b9050620001ee82826200019e565b919050565b600067ffffffffffffffff8211156200021157620002106200016f565b5b6200021c826200015e565b9050602081019050919050565b60005b83811015620002495780820151818401526020810190506200022c565b8381111562000259576000848401525b50505050565b6000620002766200027084620001f3565b620001d4565b90508281526020810184848401111562000295576200029462000159565b5b620002a284828562000229565b509392505050565b600082601f830112620002c257620002c162000154565b5b8151620002d48482602086016200025f565b91505092915050565b60008060408385031215620002f757620002f66200014a565b5b600083015167ffffffffffffffff8111156200031857620003176200014f565b5b6200032685828601620002aa565b925050602083015167ffffffffffffffff8111156200034a57620003496200014f565b5b6200035885828601620002aa565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003aa57607f821691505b60208210811415620003c157620003c062000362565b5b50919050565b612b6d80620003d76000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80635c975abb116100b857806395d89b411161007c57806395d89b4114610324578063a144819414610342578063a22cb4651461035e578063b88d4fde1461037a578063c87b56dd14610396578063e985e9c5146103c657610137565b80635c975abb146102805780636352211e1461029e57806370a08231146102ce5780638456cb59146102fe5780638832e6e31461030857610137565b80633f4ba83a116100ff5780633f4ba83a146101f257806340c10f19146101fc57806342842e0e1461021857806342966c68146102345780634f558e791461025057610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba57806323b872dd146101d6575b600080fd5b61015660048036038101906101519190611af3565b6103f6565b6040516101639190611b3b565b60405180910390f35b6101746104d8565b6040516101819190611bef565b60405180910390f35b6101a4600480360381019061019f9190611c47565b61056a565b6040516101b19190611cb5565b60405180910390f35b6101d460048036038101906101cf9190611cfc565b6105b0565b005b6101f060048036038101906101eb9190611d3c565b6106c8565b005b6101fa610728565b005b61021660048036038101906102119190611cfc565b610732565b005b610232600480360381019061022d9190611d3c565b610740565b005b61024e60048036038101906102499190611c47565b610760565b005b61026a60048036038101906102659190611c47565b61076c565b6040516102779190611b3b565b60405180910390f35b61028861077e565b6040516102959190611b3b565b60405180910390f35b6102b860048036038101906102b39190611c47565b610795565b6040516102c59190611cb5565b60405180910390f35b6102e860048036038101906102e39190611d8f565b610847565b6040516102f59190611dcb565b60405180910390f35b6103066108ff565b005b610322600480360381019061031d9190611f1b565b610909565b005b61032c610919565b6040516103399190611bef565b60405180910390f35b61035c60048036038101906103579190611cfc565b6109ab565b005b61037860048036038101906103739190611fb6565b6109b9565b005b610394600480360381019061038f9190611ff6565b6109cf565b005b6103b060048036038101906103ab9190611c47565b610a31565b6040516103bd9190611bef565b60405180910390f35b6103e060048036038101906103db9190612079565b610a99565b6040516103ed9190611b3b565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104c157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104d157506104d082610b2d565b5b9050919050565b6060600080546104e7906120e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610513906120e8565b80156105605780601f1061053557610100808354040283529160200191610560565b820191906000526020600020905b81548152906001019060200180831161054357829003601f168201915b5050505050905090565b600061057582610b97565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105bb82610795565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561062c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106239061218c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661064b610be2565b73ffffffffffffffffffffffffffffffffffffffff16148061067a575061067981610674610be2565b610a99565b5b6106b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b09061221e565b60405180910390fd5b6106c38383610bea565b505050565b6106d96106d3610be2565b82610ca3565b610718576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070f906122b0565b60405180910390fd5b610723838383610d38565b505050565b610730610fca565b565b61073c828261102d565b5050565b61075b838383604051806020016040528060008152506109cf565b505050565b61076981611207565b50565b60006107778261134f565b9050919050565b6000600660009054906101000a900460ff16905090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561083e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108359061231c565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af906123ae565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6109076113bb565b565b61091483838361141e565b505050565b606060018054610928906120e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610954906120e8565b80156109a15780601f10610976576101008083540402835291602001916109a1565b820191906000526020600020905b81548152906001019060200180831161098457829003601f168201915b5050505050905090565b6109b58282611479565b5050565b6109cb6109c4610be2565b8383611497565b5050565b6109e06109da610be2565b83610ca3565b610a1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a16906122b0565b60405180910390fd5b610a2b84848484611604565b50505050565b6060610a3c82610b97565b6000610a46611660565b90506000815111610a665760405180602001604052806000815250610a91565b80610a7084611677565b604051602001610a8192919061240a565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ba08161134f565b610bdf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd69061231c565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c5d83610795565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610caf83610795565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610cf15750610cf08185610a99565b5b80610d2f57508373ffffffffffffffffffffffffffffffffffffffff16610d178461056a565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d5882610795565b73ffffffffffffffffffffffffffffffffffffffff1614610dae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da5906124a0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1590612532565b60405180910390fd5b610e298383836117d8565b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610eaf9190612581565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f0691906125b5565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610fc5838383611830565b505050565b610fd2611835565b6000600660006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611016610be2565b6040516110239190611cb5565b60405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561109d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109490612657565b60405180910390fd5b6110a68161134f565b156110e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110dd906126c3565b60405180910390fd5b6110f2600083836117d8565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461114291906125b5565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461120360008383611830565b5050565b600061121282610795565b9050611220816000846117d8565b6004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112a69190612581565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461134b81600084611830565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6113c361187e565b6001600660006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611407610be2565b6040516114149190611cb5565b60405180910390a1565b611428838361102d565b61143560008484846118c8565b611474576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146b90612755565b60405180910390fd5b505050565b61149382826040518060200160405280600081525061141e565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611506576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114fd906127c1565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115f79190611b3b565b60405180910390a3505050565b61160f848484610d38565b61161b848484846118c8565b61165a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165190612755565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156116bf576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506117d3565b600082905060005b600082146116f15780806116da906127e1565b915050600a826116ea9190612859565b91506116c7565b60008167ffffffffffffffff81111561170d5761170c611df0565b5b6040519080825280601f01601f19166020018201604052801561173f5781602001600182028036833780820191505090505b5090505b600085146117cc576001826117589190612581565b9150600a85611767919061288a565b603061177391906125b5565b60f81b818381518110611789576117886128bb565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856117c59190612859565b9450611743565b8093505050505b919050565b6117e3838383611a5f565b6117eb61077e565b1561182b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118229061295c565b60405180910390fd5b505050565b505050565b61183d61077e565b61187c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611873906129c8565b60405180910390fd5b565b61188661077e565b156118c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118bd90612a34565b60405180910390fd5b565b60006118e98473ffffffffffffffffffffffffffffffffffffffff16611a64565b15611a52578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611912610be2565b8786866040518563ffffffff1660e01b81526004016119349493929190612aa9565b602060405180830381600087803b15801561194e57600080fd5b505af192505050801561197f57506040513d601f19601f8201168201806040525081019061197c9190612b0a565b60015b611a02573d80600081146119af576040519150601f19603f3d011682016040523d82523d6000602084013e6119b4565b606091505b506000815114156119fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119f190612755565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a57565b600190505b949350505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611ad081611a9b565b8114611adb57600080fd5b50565b600081359050611aed81611ac7565b92915050565b600060208284031215611b0957611b08611a91565b5b6000611b1784828501611ade565b91505092915050565b60008115159050919050565b611b3581611b20565b82525050565b6000602082019050611b506000830184611b2c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b90578082015181840152602081019050611b75565b83811115611b9f576000848401525b50505050565b6000601f19601f8301169050919050565b6000611bc182611b56565b611bcb8185611b61565b9350611bdb818560208601611b72565b611be481611ba5565b840191505092915050565b60006020820190508181036000830152611c098184611bb6565b905092915050565b6000819050919050565b611c2481611c11565b8114611c2f57600080fd5b50565b600081359050611c4181611c1b565b92915050565b600060208284031215611c5d57611c5c611a91565b5b6000611c6b84828501611c32565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c9f82611c74565b9050919050565b611caf81611c94565b82525050565b6000602082019050611cca6000830184611ca6565b92915050565b611cd981611c94565b8114611ce457600080fd5b50565b600081359050611cf681611cd0565b92915050565b60008060408385031215611d1357611d12611a91565b5b6000611d2185828601611ce7565b9250506020611d3285828601611c32565b9150509250929050565b600080600060608486031215611d5557611d54611a91565b5b6000611d6386828701611ce7565b9350506020611d7486828701611ce7565b9250506040611d8586828701611c32565b9150509250925092565b600060208284031215611da557611da4611a91565b5b6000611db384828501611ce7565b91505092915050565b611dc581611c11565b82525050565b6000602082019050611de06000830184611dbc565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e2882611ba5565b810181811067ffffffffffffffff82111715611e4757611e46611df0565b5b80604052505050565b6000611e5a611a87565b9050611e668282611e1f565b919050565b600067ffffffffffffffff821115611e8657611e85611df0565b5b611e8f82611ba5565b9050602081019050919050565b82818337600083830152505050565b6000611ebe611eb984611e6b565b611e50565b905082815260208101848484011115611eda57611ed9611deb565b5b611ee5848285611e9c565b509392505050565b600082601f830112611f0257611f01611de6565b5b8135611f12848260208601611eab565b91505092915050565b600080600060608486031215611f3457611f33611a91565b5b6000611f4286828701611ce7565b9350506020611f5386828701611c32565b925050604084013567ffffffffffffffff811115611f7457611f73611a96565b5b611f8086828701611eed565b9150509250925092565b611f9381611b20565b8114611f9e57600080fd5b50565b600081359050611fb081611f8a565b92915050565b60008060408385031215611fcd57611fcc611a91565b5b6000611fdb85828601611ce7565b9250506020611fec85828601611fa1565b9150509250929050565b600080600080608085870312156120105761200f611a91565b5b600061201e87828801611ce7565b945050602061202f87828801611ce7565b935050604061204087828801611c32565b925050606085013567ffffffffffffffff81111561206157612060611a96565b5b61206d87828801611eed565b91505092959194509250565b600080604083850312156120905761208f611a91565b5b600061209e85828601611ce7565b92505060206120af85828601611ce7565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061210057607f821691505b60208210811415612114576121136120b9565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612176602183611b61565b91506121818261211a565b604082019050919050565b600060208201905081810360008301526121a581612169565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612208603e83611b61565b9150612213826121ac565b604082019050919050565b60006020820190508181036000830152612237816121fb565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b600061229a602e83611b61565b91506122a58261223e565b604082019050919050565b600060208201905081810360008301526122c98161228d565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612306601883611b61565b9150612311826122d0565b602082019050919050565b60006020820190508181036000830152612335816122f9565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612398602983611b61565b91506123a38261233c565b604082019050919050565b600060208201905081810360008301526123c78161238b565b9050919050565b600081905092915050565b60006123e482611b56565b6123ee81856123ce565b93506123fe818560208601611b72565b80840191505092915050565b600061241682856123d9565b915061242282846123d9565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061248a602583611b61565b91506124958261242e565b604082019050919050565b600060208201905081810360008301526124b98161247d565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061251c602483611b61565b9150612527826124c0565b604082019050919050565b6000602082019050818103600083015261254b8161250f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061258c82611c11565b915061259783611c11565b9250828210156125aa576125a9612552565b5b828203905092915050565b60006125c082611c11565b91506125cb83611c11565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612600576125ff612552565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612641602083611b61565b915061264c8261260b565b602082019050919050565b6000602082019050818103600083015261267081612634565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006126ad601c83611b61565b91506126b882612677565b602082019050919050565b600060208201905081810360008301526126dc816126a0565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061273f603283611b61565b915061274a826126e3565b604082019050919050565b6000602082019050818103600083015261276e81612732565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006127ab601983611b61565b91506127b682612775565b602082019050919050565b600060208201905081810360008301526127da8161279e565b9050919050565b60006127ec82611c11565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561281f5761281e612552565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061286482611c11565b915061286f83611c11565b92508261287f5761287e61282a565b5b828204905092915050565b600061289582611c11565b91506128a083611c11565b9250826128b0576128af61282a565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732315061757361626c653a20746f6b656e207472616e73666572207760008201527f68696c6520706175736564000000000000000000000000000000000000000000602082015250565b6000612946602b83611b61565b9150612951826128ea565b604082019050919050565b6000602082019050818103600083015261297581612939565b9050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b60006129b2601483611b61565b91506129bd8261297c565b602082019050919050565b600060208201905081810360008301526129e1816129a5565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000612a1e601083611b61565b9150612a29826129e8565b602082019050919050565b60006020820190508181036000830152612a4d81612a11565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612a7b82612a54565b612a858185612a5f565b9350612a95818560208601611b72565b612a9e81611ba5565b840191505092915050565b6000608082019050612abe6000830187611ca6565b612acb6020830186611ca6565b612ad86040830185611dbc565b8181036060830152612aea8184612a70565b905095945050505050565b600081519050612b0481611ac7565b92915050565b600060208284031215612b2057612b1f611a91565b5b6000612b2e84828501612af5565b9150509291505056fea2646970667358221220ee66cfe9f9bd6d0b5e953f5b8c4139d78b82f48c1321b52e954ae4be82c28c6b64736f6c63430008090033";
