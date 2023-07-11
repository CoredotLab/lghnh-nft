/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721RoyaltyMock } from "../ERC721RoyaltyMock";

export class ERC721RoyaltyMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<ERC721RoyaltyMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721RoyaltyMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721RoyaltyMock {
    return super.attach(address) as ERC721RoyaltyMock;
  }
  connect(signer: Signer): ERC721RoyaltyMock__factory {
    return super.connect(signer) as ERC721RoyaltyMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721RoyaltyMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721RoyaltyMock;
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
    inputs: [],
    name: "deleteDefaultRoyalty",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "fraction",
        type: "uint96",
      },
    ],
    name: "setDefaultRoyalty",
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
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "fraction",
        type: "uint96",
      },
    ],
    name: "setTokenRoyalty",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162003439380380620034398339818101604052810190620000379190620002c2565b818181600290805190602001906200005192919062000075565b5080600390805190602001906200006a92919062000075565b5050505050620003ac565b828054620000839062000376565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018e8262000143565b810181811067ffffffffffffffff82111715620001b057620001af62000154565b5b80604052505050565b6000620001c562000125565b9050620001d3828262000183565b919050565b600067ffffffffffffffff821115620001f657620001f562000154565b5b620002018262000143565b9050602081019050919050565b60005b838110156200022e57808201518184015260208101905062000211565b838111156200023e576000848401525b50505050565b60006200025b6200025584620001d8565b620001b9565b9050828152602081018484840111156200027a57620002796200013e565b5b620002878482856200020e565b509392505050565b600082601f830112620002a757620002a662000139565b5b8151620002b984826020860162000244565b91505092915050565b60008060408385031215620002dc57620002db6200012f565b5b600083015167ffffffffffffffff811115620002fd57620002fc62000134565b5b6200030b858286016200028f565b925050602083015167ffffffffffffffff8111156200032f576200032e62000134565b5b6200033d858286016200028f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038f57607f821691505b60208210811415620003a657620003a562000347565b5b50919050565b61307d80620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806342966c68116100ad578063a22cb46511610071578063a22cb46514610317578063aa1b103f14610333578063b88d4fde1461033d578063c87b56dd14610359578063e985e9c51461038957610121565b806342966c68146102615780635944c7531461027d5780636352211e1461029957806370a08231146102c957806395d89b41146102f957610121565b8063095ea7b3116100f4578063095ea7b3146101c057806323b872dd146101dc5780632a55205a146101f857806340c10f191461022957806342842e0e1461024557610121565b806301ffc9a71461012657806304634d8d1461015657806306fdde0314610172578063081812fc14610190575b600080fd5b610140600480360381019061013b9190611ed8565b6103b9565b60405161014d9190611f20565b60405180910390f35b610170600480360381019061016b9190611fdd565b6103cb565b005b61017a6103d9565b60405161018791906120b6565b60405180910390f35b6101aa60048036038101906101a5919061210e565b61046b565b6040516101b7919061214a565b60405180910390f35b6101da60048036038101906101d59190612165565b6104b1565b005b6101f660048036038101906101f191906121a5565b6105c9565b005b610212600480360381019061020d91906121f8565b610629565b604051610220929190612247565b60405180910390f35b610243600480360381019061023e9190612165565b610814565b005b61025f600480360381019061025a91906121a5565b610822565b005b61027b6004803603810190610276919061210e565b610842565b005b61029760048036038101906102929190612270565b61084e565b005b6102b360048036038101906102ae919061210e565b61085e565b6040516102c0919061214a565b60405180910390f35b6102e360048036038101906102de91906122c3565b610910565b6040516102f091906122f0565b60405180910390f35b6103016109c8565b60405161030e91906120b6565b60405180910390f35b610331600480360381019061032c9190612337565b610a5a565b005b61033b610a70565b005b610357600480360381019061035291906124ac565b610a7a565b005b610373600480360381019061036e919061210e565b610adc565b60405161038091906120b6565b60405180910390f35b6103a3600480360381019061039e919061252f565b610b44565b6040516103b09190611f20565b60405180910390f35b60006103c482610bd8565b9050919050565b6103d58282610cba565b5050565b6060600280546103e89061259e565b80601f01602080910402602001604051908101604052809291908181526020018280546104149061259e565b80156104615780601f1061043657610100808354040283529160200191610461565b820191906000526020600020905b81548152906001019060200180831161044457829003601f168201915b5050505050905090565b600061047682610e4f565b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104bc8261085e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561052d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052490612642565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661054c610e9a565b73ffffffffffffffffffffffffffffffffffffffff16148061057b575061057a81610575610e9a565b610b44565b5b6105ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b1906126d4565b60405180910390fd5b6105c48383610ea2565b505050565b6105da6105d4610e9a565b82610f5b565b610619576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061090612766565b60405180910390fd5b610624838383610ff0565b505050565b6000806000600160008681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff16815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614156107bf5760006040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff166bffffffffffffffffffffffff168152505090505b60006107c9611282565b6bffffffffffffffffffffffff1682602001516bffffffffffffffffffffffff16866107f591906127b5565b6107ff919061283e565b90508160000151819350935050509250929050565b61081e828261128c565b5050565b61083d83838360405180602001604052806000815250610a7a565b505050565b61084b81611466565b50565b61085983838361147b565b505050565b6000806004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610907576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fe906128bb565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610981576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109789061294d565b60405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600380546109d79061259e565b80601f0160208091040260200160405190810160405280929190818152602001828054610a039061259e565b8015610a505780601f10610a2557610100808354040283529160200191610a50565b820191906000526020600020905b815481529060010190602001808311610a3357829003601f168201915b5050505050905090565b610a6c610a65610e9a565b8383611623565b5050565b610a78611790565b565b610a8b610a85610e9a565b83610f5b565b610aca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac190612766565b60405180910390fd5b610ad6848484846117dd565b50505050565b6060610ae782610e4f565b6000610af1611839565b90506000815111610b115760405180602001604052806000815250610b3c565b80610b1b84611850565b604051602001610b2c9291906129a9565b6040516020818303038152906040525b915050919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610ca357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610cb35750610cb2826119b1565b5b9050919050565b610cc2611282565b6bffffffffffffffffffffffff16816bffffffffffffffffffffffff161115610d20576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1790612a3f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8790612aab565b60405180910390fd5b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001826bffffffffffffffffffffffff168152506000808201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055509050505050565b610e5881611a2b565b610e97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8e906128bb565b60405180910390fd5b50565b600033905090565b816006600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610f158361085e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610f678361085e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610fa95750610fa88185610b44565b5b80610fe757508373ffffffffffffffffffffffffffffffffffffffff16610fcf8461046b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166110108261085e565b73ffffffffffffffffffffffffffffffffffffffff1614611066576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105d90612b3d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110cd90612bcf565b60405180910390fd5b6110e1838383611a97565b6006600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111679190612bef565b925050819055506001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111be9190612c23565b92505081905550816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461127d838383611a9c565b505050565b6000612710905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f390612cc5565b60405180910390fd5b61130581611a2b565b15611345576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133c90612d31565b60405180910390fd5b61135160008383611a97565b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113a19190612c23565b92505081905550816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461146260008383611a9c565b5050565b61146f81611aa1565b61147881611be9565b50565b611483611282565b6bffffffffffffffffffffffff16816bffffffffffffffffffffffff1611156114e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d890612a3f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154890612d9d565b60405180910390fd5b60405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001826bffffffffffffffffffffffff168152506001600085815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff160217905550905050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611692576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168990612e09565b60405180910390fd5b80600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516117839190611f20565b60405180910390a3505050565b6000806000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff02191690555050565b6117e8848484610ff0565b6117f484848484611c48565b611833576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161182a90612e9b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611898576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506119ac565b600082905060005b600082146118ca5780806118b390612ebb565b915050600a826118c3919061283e565b91506118a0565b60008167ffffffffffffffff8111156118e6576118e5612381565b5b6040519080825280601f01601f1916602001820160405280156119185781602001600182028036833780820191505090505b5090505b600085146119a5576001826119319190612bef565b9150600a856119409190612f04565b603061194c9190612c23565b60f81b81838151811061196257611961612f35565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561199e919061283e565b945061191c565b8093505050505b919050565b60007f2a55205a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611a245750611a2382611ddf565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166004600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b6000611aac8261085e565b9050611aba81600084611a97565b6006600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611b409190612bef565b925050819055506004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611be581600084611a9c565b5050565b60016000828152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556000820160146101000a8154906bffffffffffffffffffffffff0219169055505050565b6000611c698473ffffffffffffffffffffffffffffffffffffffff16611e49565b15611dd2578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611c92610e9a565b8786866040518563ffffffff1660e01b8152600401611cb49493929190612fb9565b602060405180830381600087803b158015611cce57600080fd5b505af1925050508015611cff57506040513d601f19601f82011682018060405250810190611cfc919061301a565b60015b611d82573d8060008114611d2f576040519150601f19603f3d011682016040523d82523d6000602084013e611d34565b606091505b50600081511415611d7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d7190612e9b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611dd7565b600190505b949350505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611eb581611e80565b8114611ec057600080fd5b50565b600081359050611ed281611eac565b92915050565b600060208284031215611eee57611eed611e76565b5b6000611efc84828501611ec3565b91505092915050565b60008115159050919050565b611f1a81611f05565b82525050565b6000602082019050611f356000830184611f11565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611f6682611f3b565b9050919050565b611f7681611f5b565b8114611f8157600080fd5b50565b600081359050611f9381611f6d565b92915050565b60006bffffffffffffffffffffffff82169050919050565b611fba81611f99565b8114611fc557600080fd5b50565b600081359050611fd781611fb1565b92915050565b60008060408385031215611ff457611ff3611e76565b5b600061200285828601611f84565b925050602061201385828601611fc8565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561205757808201518184015260208101905061203c565b83811115612066576000848401525b50505050565b6000601f19601f8301169050919050565b60006120888261201d565b6120928185612028565b93506120a2818560208601612039565b6120ab8161206c565b840191505092915050565b600060208201905081810360008301526120d0818461207d565b905092915050565b6000819050919050565b6120eb816120d8565b81146120f657600080fd5b50565b600081359050612108816120e2565b92915050565b60006020828403121561212457612123611e76565b5b6000612132848285016120f9565b91505092915050565b61214481611f5b565b82525050565b600060208201905061215f600083018461213b565b92915050565b6000806040838503121561217c5761217b611e76565b5b600061218a85828601611f84565b925050602061219b858286016120f9565b9150509250929050565b6000806000606084860312156121be576121bd611e76565b5b60006121cc86828701611f84565b93505060206121dd86828701611f84565b92505060406121ee868287016120f9565b9150509250925092565b6000806040838503121561220f5761220e611e76565b5b600061221d858286016120f9565b925050602061222e858286016120f9565b9150509250929050565b612241816120d8565b82525050565b600060408201905061225c600083018561213b565b6122696020830184612238565b9392505050565b60008060006060848603121561228957612288611e76565b5b6000612297868287016120f9565b93505060206122a886828701611f84565b92505060406122b986828701611fc8565b9150509250925092565b6000602082840312156122d9576122d8611e76565b5b60006122e784828501611f84565b91505092915050565b60006020820190506123056000830184612238565b92915050565b61231481611f05565b811461231f57600080fd5b50565b6000813590506123318161230b565b92915050565b6000806040838503121561234e5761234d611e76565b5b600061235c85828601611f84565b925050602061236d85828601612322565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6123b98261206c565b810181811067ffffffffffffffff821117156123d8576123d7612381565b5b80604052505050565b60006123eb611e6c565b90506123f782826123b0565b919050565b600067ffffffffffffffff82111561241757612416612381565b5b6124208261206c565b9050602081019050919050565b82818337600083830152505050565b600061244f61244a846123fc565b6123e1565b90508281526020810184848401111561246b5761246a61237c565b5b61247684828561242d565b509392505050565b600082601f83011261249357612492612377565b5b81356124a384826020860161243c565b91505092915050565b600080600080608085870312156124c6576124c5611e76565b5b60006124d487828801611f84565b94505060206124e587828801611f84565b93505060406124f6878288016120f9565b925050606085013567ffffffffffffffff81111561251757612516611e7b565b5b6125238782880161247e565b91505092959194509250565b6000806040838503121561254657612545611e76565b5b600061255485828601611f84565b925050602061256585828601611f84565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806125b657607f821691505b602082108114156125ca576125c961256f565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061262c602183612028565b9150612637826125d0565b604082019050919050565b6000602082019050818103600083015261265b8161261f565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006126be603e83612028565b91506126c982612662565b604082019050919050565b600060208201905081810360008301526126ed816126b1565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612750602e83612028565b915061275b826126f4565b604082019050919050565b6000602082019050818103600083015261277f81612743565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006127c0826120d8565b91506127cb836120d8565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561280457612803612786565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612849826120d8565b9150612854836120d8565b9250826128645761286361280f565b5b828204905092915050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006128a5601883612028565b91506128b08261286f565b602082019050919050565b600060208201905081810360008301526128d481612898565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612937602983612028565b9150612942826128db565b604082019050919050565b600060208201905081810360008301526129668161292a565b9050919050565b600081905092915050565b60006129838261201d565b61298d818561296d565b935061299d818560208601612039565b80840191505092915050565b60006129b58285612978565b91506129c18284612978565b91508190509392505050565b7f455243323938313a20726f79616c7479206665652077696c6c2065786365656460008201527f2073616c65507269636500000000000000000000000000000000000000000000602082015250565b6000612a29602a83612028565b9150612a34826129cd565b604082019050919050565b60006020820190508181036000830152612a5881612a1c565b9050919050565b7f455243323938313a20696e76616c696420726563656976657200000000000000600082015250565b6000612a95601983612028565b9150612aa082612a5f565b602082019050919050565b60006020820190508181036000830152612ac481612a88565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612b27602583612028565b9150612b3282612acb565b604082019050919050565b60006020820190508181036000830152612b5681612b1a565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612bb9602483612028565b9150612bc482612b5d565b604082019050919050565b60006020820190508181036000830152612be881612bac565b9050919050565b6000612bfa826120d8565b9150612c05836120d8565b925082821015612c1857612c17612786565b5b828203905092915050565b6000612c2e826120d8565b9150612c39836120d8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612c6e57612c6d612786565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612caf602083612028565b9150612cba82612c79565b602082019050919050565b60006020820190508181036000830152612cde81612ca2565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612d1b601c83612028565b9150612d2682612ce5565b602082019050919050565b60006020820190508181036000830152612d4a81612d0e565b9050919050565b7f455243323938313a20496e76616c696420706172616d65746572730000000000600082015250565b6000612d87601b83612028565b9150612d9282612d51565b602082019050919050565b60006020820190508181036000830152612db681612d7a565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612df3601983612028565b9150612dfe82612dbd565b602082019050919050565b60006020820190508181036000830152612e2281612de6565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612e85603283612028565b9150612e9082612e29565b604082019050919050565b60006020820190508181036000830152612eb481612e78565b9050919050565b6000612ec6826120d8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612ef957612ef8612786565b5b600182019050919050565b6000612f0f826120d8565b9150612f1a836120d8565b925082612f2a57612f2961280f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b6000612f8b82612f64565b612f958185612f6f565b9350612fa5818560208601612039565b612fae8161206c565b840191505092915050565b6000608082019050612fce600083018761213b565b612fdb602083018661213b565b612fe86040830185612238565b8181036060830152612ffa8184612f80565b905095945050505050565b60008151905061301481611eac565b92915050565b6000602082840312156130305761302f611e76565b5b600061303e84828501613005565b9150509291505056fea26469706673582212203eaecf8d0c955647cdae5e838b7d41a4456f4126028368251138059ef69daef664736f6c63430008090033";
