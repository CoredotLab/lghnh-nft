/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721BurnableMock } from "../ERC721BurnableMock";

export class ERC721BurnableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<ERC721BurnableMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721BurnableMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721BurnableMock {
    return super.attach(address) as ERC721BurnableMock;
  }
  connect(signer: Signer): ERC721BurnableMock__factory {
    return super.connect(signer) as ERC721BurnableMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721BurnableMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721BurnableMock;
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002be038038062002be08339818101604052810190620000379190620002c2565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b5050505050620003ac565b828054620000839062000376565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018e8262000143565b810181811067ffffffffffffffff82111715620001b057620001af62000154565b5b80604052505050565b6000620001c562000125565b9050620001d3828262000183565b919050565b600067ffffffffffffffff821115620001f657620001f562000154565b5b620002018262000143565b9050602081019050919050565b60005b838110156200022e57808201518184015260208101905062000211565b838111156200023e576000848401525b50505050565b60006200025b6200025584620001d8565b620001b9565b9050828152602081018484840111156200027a57620002796200013e565b5b620002878482856200020e565b509392505050565b600082601f830112620002a757620002a662000139565b5b8151620002b984826020860162000244565b91505092915050565b60008060408385031215620002dc57620002db6200012f565b5b600083015167ffffffffffffffff811115620002fd57620002fc62000134565b5b6200030b858286016200028f565b925050602083015167ffffffffffffffff8111156200032f576200032e62000134565b5b6200033d858286016200028f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038f57607f821691505b60208210811415620003a657620003a562000347565b5b50919050565b61282480620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80636352211e116100a2578063a144819411610071578063a1448194146102ef578063a22cb4651461030b578063b88d4fde14610327578063c87b56dd14610343578063e985e9c51461037357610116565b80636352211e1461025557806370a08231146102855780638832e6e3146102b557806395d89b41146102d157610116565b806323b872dd116100e957806323b872dd146101b557806340c10f19146101d157806342842e0e146101ed57806342966c68146102095780634f558e791461022557610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611914565b6103a3565b604051610142919061195c565b60405180910390f35b610153610485565b6040516101609190611a10565b60405180910390f35b610183600480360381019061017e9190611a68565b610517565b6040516101909190611ad6565b60405180910390f35b6101b360048036038101906101ae9190611b1d565b61055d565b005b6101cf60048036038101906101ca9190611b5d565b610675565b005b6101eb60048036038101906101e69190611b1d565b6106d5565b005b61020760048036038101906102029190611b5d565b6106e3565b005b610223600480360381019061021e9190611a68565b610703565b005b61023f600480360381019061023a9190611a68565b61075f565b60405161024c919061195c565b60405180910390f35b61026f600480360381019061026a9190611a68565b610771565b60405161027c9190611ad6565b60405180910390f35b61029f600480360381019061029a9190611bb0565b610823565b6040516102ac9190611bec565b60405180910390f35b6102cf60048036038101906102ca9190611d3c565b6108db565b005b6102d96108eb565b6040516102e69190611a10565b60405180910390f35b61030960048036038101906103049190611b1d565b61097d565b005b61032560048036038101906103209190611dd7565b61098b565b005b610341600480360381019061033c9190611e17565b6109a1565b005b61035d60048036038101906103589190611a68565b610a03565b60405161036a9190611a10565b60405180910390f35b61038d60048036038101906103889190611e9a565b610a6b565b60405161039a919061195c565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061046e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061047e575061047d82610aff565b5b9050919050565b60606000805461049490611f09565b80601f01602080910402602001604051908101604052809291908181526020018280546104c090611f09565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b5050505050905090565b600061052282610b69565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061056882610771565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d090611fad565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105f8610bb4565b73ffffffffffffffffffffffffffffffffffffffff161480610627575061062681610621610bb4565b610a6b565b5b610666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065d9061203f565b60405180910390fd5b6106708383610bbc565b505050565b610686610680610bb4565b82610c75565b6106c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bc906120d1565b60405180910390fd5b6106d0838383610d0a565b505050565b6106df8282610f9c565b5050565b6106fe838383604051806020016040528060008152506109a1565b505050565b61071461070e610bb4565b82610c75565b610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074a906120d1565b60405180910390fd5b61075c81611176565b50565b600061076a826112be565b9050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561081a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108119061213d565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610894576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088b906121cf565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108e683838361132a565b505050565b6060600180546108fa90611f09565b80601f016020809104026020016040519081016040528092919081815260200182805461092690611f09565b80156109735780601f1061094857610100808354040283529160200191610973565b820191906000526020600020905b81548152906001019060200180831161095657829003601f168201915b5050505050905090565b6109878282611385565b5050565b61099d610996610bb4565b83836113a3565b5050565b6109b26109ac610bb4565b83610c75565b6109f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e8906120d1565b60405180910390fd5b6109fd84848484611510565b50505050565b6060610a0e82610b69565b6000610a1861156c565b90506000815111610a385760405180602001604052806000815250610a63565b80610a4284611583565b604051602001610a5392919061222b565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b72816112be565b610bb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba89061213d565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c2f83610771565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c8183610771565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610cc35750610cc28185610a6b565b5b80610d0157508373ffffffffffffffffffffffffffffffffffffffff16610ce984610517565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d2a82610771565b73ffffffffffffffffffffffffffffffffffffffff1614610d80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d77906122c1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610df0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de790612353565b60405180910390fd5b610dfb8383836116e4565b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e8191906123a2565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ed891906123d6565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f978383836116e9565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561100c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100390612478565b60405180910390fd5b611015816112be565b15611055576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104c906124e4565b60405180910390fd5b611061600083836116e4565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110b191906123d6565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611172600083836116e9565b5050565b600061118182610771565b905061118f816000846116e4565b6004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461121591906123a2565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112ba816000846116e9565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6113348383610f9c565b61134160008484846116ee565b611380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137790612576565b60405180910390fd5b505050565b61139f82826040518060200160405280600081525061132a565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611412576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611409906125e2565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611503919061195c565b60405180910390a3505050565b61151b848484610d0a565b611527848484846116ee565b611566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155d90612576565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156115cb576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506116df565b600082905060005b600082146115fd5780806115e690612602565b915050600a826115f6919061267a565b91506115d3565b60008167ffffffffffffffff81111561161957611618611c11565b5b6040519080825280601f01601f19166020018201604052801561164b5781602001600182028036833780820191505090505b5090505b600085146116d85760018261166491906123a2565b9150600a8561167391906126ab565b603061167f91906123d6565b60f81b818381518110611695576116946126dc565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116d1919061267a565b945061164f565b8093505050505b919050565b505050565b505050565b600061170f8473ffffffffffffffffffffffffffffffffffffffff16611885565b15611878578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611738610bb4565b8786866040518563ffffffff1660e01b815260040161175a9493929190612760565b602060405180830381600087803b15801561177457600080fd5b505af19250505080156117a557506040513d601f19601f820116820180604052508101906117a291906127c1565b60015b611828573d80600081146117d5576040519150601f19603f3d011682016040523d82523d6000602084013e6117da565b606091505b50600081511415611820576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181790612576565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061187d565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118f1816118bc565b81146118fc57600080fd5b50565b60008135905061190e816118e8565b92915050565b60006020828403121561192a576119296118b2565b5b6000611938848285016118ff565b91505092915050565b60008115159050919050565b61195681611941565b82525050565b6000602082019050611971600083018461194d565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119b1578082015181840152602081019050611996565b838111156119c0576000848401525b50505050565b6000601f19601f8301169050919050565b60006119e282611977565b6119ec8185611982565b93506119fc818560208601611993565b611a05816119c6565b840191505092915050565b60006020820190508181036000830152611a2a81846119d7565b905092915050565b6000819050919050565b611a4581611a32565b8114611a5057600080fd5b50565b600081359050611a6281611a3c565b92915050565b600060208284031215611a7e57611a7d6118b2565b5b6000611a8c84828501611a53565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ac082611a95565b9050919050565b611ad081611ab5565b82525050565b6000602082019050611aeb6000830184611ac7565b92915050565b611afa81611ab5565b8114611b0557600080fd5b50565b600081359050611b1781611af1565b92915050565b60008060408385031215611b3457611b336118b2565b5b6000611b4285828601611b08565b9250506020611b5385828601611a53565b9150509250929050565b600080600060608486031215611b7657611b756118b2565b5b6000611b8486828701611b08565b9350506020611b9586828701611b08565b9250506040611ba686828701611a53565b9150509250925092565b600060208284031215611bc657611bc56118b2565b5b6000611bd484828501611b08565b91505092915050565b611be681611a32565b82525050565b6000602082019050611c016000830184611bdd565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c49826119c6565b810181811067ffffffffffffffff82111715611c6857611c67611c11565b5b80604052505050565b6000611c7b6118a8565b9050611c878282611c40565b919050565b600067ffffffffffffffff821115611ca757611ca6611c11565b5b611cb0826119c6565b9050602081019050919050565b82818337600083830152505050565b6000611cdf611cda84611c8c565b611c71565b905082815260208101848484011115611cfb57611cfa611c0c565b5b611d06848285611cbd565b509392505050565b600082601f830112611d2357611d22611c07565b5b8135611d33848260208601611ccc565b91505092915050565b600080600060608486031215611d5557611d546118b2565b5b6000611d6386828701611b08565b9350506020611d7486828701611a53565b925050604084013567ffffffffffffffff811115611d9557611d946118b7565b5b611da186828701611d0e565b9150509250925092565b611db481611941565b8114611dbf57600080fd5b50565b600081359050611dd181611dab565b92915050565b60008060408385031215611dee57611ded6118b2565b5b6000611dfc85828601611b08565b9250506020611e0d85828601611dc2565b9150509250929050565b60008060008060808587031215611e3157611e306118b2565b5b6000611e3f87828801611b08565b9450506020611e5087828801611b08565b9350506040611e6187828801611a53565b925050606085013567ffffffffffffffff811115611e8257611e816118b7565b5b611e8e87828801611d0e565b91505092959194509250565b60008060408385031215611eb157611eb06118b2565b5b6000611ebf85828601611b08565b9250506020611ed085828601611b08565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f2157607f821691505b60208210811415611f3557611f34611eda565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f97602183611982565b9150611fa282611f3b565b604082019050919050565b60006020820190508181036000830152611fc681611f8a565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612029603e83611982565b915061203482611fcd565b604082019050919050565b600060208201905081810360008301526120588161201c565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006120bb602e83611982565b91506120c68261205f565b604082019050919050565b600060208201905081810360008301526120ea816120ae565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612127601883611982565b9150612132826120f1565b602082019050919050565b600060208201905081810360008301526121568161211a565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006121b9602983611982565b91506121c48261215d565b604082019050919050565b600060208201905081810360008301526121e8816121ac565b9050919050565b600081905092915050565b600061220582611977565b61220f81856121ef565b935061221f818560208601611993565b80840191505092915050565b600061223782856121fa565b915061224382846121fa565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006122ab602583611982565b91506122b68261224f565b604082019050919050565b600060208201905081810360008301526122da8161229e565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061233d602483611982565b9150612348826122e1565b604082019050919050565b6000602082019050818103600083015261236c81612330565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006123ad82611a32565b91506123b883611a32565b9250828210156123cb576123ca612373565b5b828203905092915050565b60006123e182611a32565b91506123ec83611a32565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561242157612420612373565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612462602083611982565b915061246d8261242c565b602082019050919050565b6000602082019050818103600083015261249181612455565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006124ce601c83611982565b91506124d982612498565b602082019050919050565b600060208201905081810360008301526124fd816124c1565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612560603283611982565b915061256b82612504565b604082019050919050565b6000602082019050818103600083015261258f81612553565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006125cc601983611982565b91506125d782612596565b602082019050919050565b600060208201905081810360008301526125fb816125bf565b9050919050565b600061260d82611a32565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156126405761263f612373565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061268582611a32565b915061269083611a32565b9250826126a05761269f61264b565b5b828204905092915050565b60006126b682611a32565b91506126c183611a32565b9250826126d1576126d061264b565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006127328261270b565b61273c8185612716565b935061274c818560208601611993565b612755816119c6565b840191505092915050565b60006080820190506127756000830187611ac7565b6127826020830186611ac7565b61278f6040830185611bdd565b81810360608301526127a18184612727565b905095945050505050565b6000815190506127bb816118e8565b92915050565b6000602082840312156127d7576127d66118b2565b5b60006127e5848285016127ac565b9150509291505056fea26469706673582212208e9a32d3c203f9376d905ca5435d3acd17af04b11a2fe8e5404f073ed2e0f7cc64736f6c63430008090033";