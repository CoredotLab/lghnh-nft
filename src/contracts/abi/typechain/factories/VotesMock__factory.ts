/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { VotesMock } from "../VotesMock";

export class VotesMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(name: string, overrides?: Overrides): Promise<VotesMock> {
    return super.deploy(name, overrides || {}) as Promise<VotesMock>;
  }
  getDeployTransaction(
    name: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, overrides || {});
  }
  attach(address: string): VotesMock {
    return super.attach(address) as VotesMock;
  }
  connect(signer: Signer): VotesMock__factory {
    return super.connect(signer) as VotesMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotesMock {
    return new Contract(address, _abi, signerOrProvider) as VotesMock;
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
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    inputs: [
      {
        internalType: "uint256",
        name: "voteId",
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
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
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
      {
        internalType: "address",
        name: "newDelegation",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
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
    name: "delegates",
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
    name: "getChainId",
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
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
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
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
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
    name: "getTotalSupply",
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
    ],
    name: "getVotes",
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
        name: "voteId",
        type: "uint256",
      },
    ],
    name: "mint",
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
    name: "nonces",
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
  "0x6101406040523480156200001257600080fd5b506040516200257638038062002576833981810160405281019062000038919062000301565b806040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a08181525050620000d88184846200012860201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508061012081815250505050505050506200042a565b6000838383463060405160200162000145959493929190620003cd565b6040516020818303038152906040528051906020012090509392505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001cd8262000182565b810181811067ffffffffffffffff82111715620001ef57620001ee62000193565b5b80604052505050565b60006200020462000164565b9050620002128282620001c2565b919050565b600067ffffffffffffffff82111562000235576200023462000193565b5b620002408262000182565b9050602081019050919050565b60005b838110156200026d57808201518184015260208101905062000250565b838111156200027d576000848401525b50505050565b60006200029a620002948462000217565b620001f8565b905082815260208101848484011115620002b957620002b86200017d565b5b620002c68482856200024d565b509392505050565b600082601f830112620002e657620002e562000178565b5b8151620002f884826020860162000283565b91505092915050565b6000602082840312156200031a57620003196200016e565b5b600082015167ffffffffffffffff8111156200033b576200033a62000173565b5b6200034984828501620002ce565b91505092915050565b6000819050919050565b620003678162000352565b82525050565b6000819050919050565b62000382816200036d565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003b58262000388565b9050919050565b620003c781620003a8565b82525050565b600060a082019050620003e460008301886200035c565b620003f360208301876200035c565b6200040260408301866200035c565b62000411606083018562000377565b620004206080830184620003bc565b9695505050505050565b60805160a05160c05160e05161010051610120516120fc6200047a60003960006107c601526000610808015260006107e70152600061071c015260006107720152600061079b01526120fc6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80635c19a95c1161008c5780638e539e8c116100665780638e539e8c146102105780639ab24eb014610240578063c3cda52014610270578063c4e41b221461028c576100cf565b80635c19a95c146101a85780637ecebe00146101c45780638ab65686146101f4576100cf565b80633408e470146100d45780633644e515146100f25780633a46b1a81461011057806340c10f191461014057806342966c681461015c578063587cde1e14610178575b600080fd5b6100dc6102aa565b6040516100e991906115d6565b60405180910390f35b6100fa6102b2565b604051610107919061160a565b60405180910390f35b61012a600480360381019061012591906116b4565b6102c1565b60405161013791906115d6565b60405180910390f35b61015a600480360381019061015591906116b4565b61031c565b005b610176600480360381019061017191906116f4565b6103d6565b005b610192600480360381019061018d9190611721565b610476565b60405161019f919061175d565b60405180910390f35b6101c260048036038101906101bd9190611721565b6104de565b005b6101de60048036038101906101d99190611721565b6104f8565b6040516101eb91906115d6565b60405180910390f35b61020e60048036038101906102099190611778565b610548565b005b61022a600480360381019061022591906116f4565b610556565b60405161023791906115d6565b60405180910390f35b61025a60048036038101906102559190611721565b6105b5565b60405161026791906115d6565b60405180910390f35b61028a6004803603810190610285919061181d565b610605565b005b610294610709565b6040516102a191906115d6565b60405180910390f35b600046905090565b60006102bc610718565b905090565b600061031482600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061083290919063ffffffff16565b905092915050565b6001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461036c91906118d9565b92505081905550816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103d2600083600161098a565b5050565b60006005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461045e919061192f565b92505081905550610472816000600161098a565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104e8610a4a565b90506104f48183610a52565b5050565b6000610541600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610b65565b9050919050565b6105528282610a52565b5050565b600043821061059a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610591906119c0565b60405180910390fd5b6105ae82600261083290919063ffffffff16565b9050919050565b60006105fe600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610b73565b9050919050565b83421115610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063f90611a2c565b60405180910390fd5b60006106aa6106a27fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf8989896040516020016106879493929190611a4c565b60405160208183030381529060405280519060200120610c0e565b858585610c28565b90506106b581610c53565b86146106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90611add565b60405180910390fd5b6107008188610a52565b50505050505050565b6000610713610cb1565b905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561079457507f000000000000000000000000000000000000000000000000000000000000000046145b156107c1577f0000000000000000000000000000000000000000000000000000000000000000905061082f565b61082c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610cc2565b90505b90565b6000438210610876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086d90611b49565b60405180910390fd5b60008360000180549050905060005b818110156108fa5760006108998284610cfc565b9050848660000182815481106108b2576108b1611b69565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff1611156108e4578092506108f4565b6001816108f191906118d9565b91505b50610885565b6000821461095f5784600001600183610913919061192f565b8154811061092457610923611b69565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16610962565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109da576109d7610d22826002610d389092919063ffffffff16565b50505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a2a57610a27610d66826002610d389092919063ffffffff16565b50505b610a45610a3684610476565b610a3f84610476565b83610d7c565b505050565b600033905090565b6000610a5d83610476565b9050816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4610b608183610b5b86610f89565b610d7c565b505050565b600081600001549050919050565b6000808260000180549050905060008114610be55782600001600182610b99919061192f565b81548110610baa57610ba9611b69565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16610be8565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b6000610c21610c1b610718565b83610fd2565b9050919050565b6000806000610c3987878787611005565b91509150610c4681611112565b8192505050949350505050565b600080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050610ca081610b65565b9150610cab816112e7565b50919050565b6000610cbd6002610b73565b905090565b60008383834630604051602001610cdd959493929190611b98565b6040516020818303038152906040528051906020012090509392505050565b60006002828418610d0d9190611c1a565b828416610d1a91906118d9565b905092915050565b60008183610d3091906118d9565b905092915050565b600080610d5a85610d55610d4b88610b73565b868863ffffffff16565b6112fd565b91509150935093915050565b60008183610d74919061192f565b905092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015610db85750600081115b15610f8457600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610ea057600080610e49610d6684600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610d389092919063ffffffff16565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051610e95929190611c4b565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610f8357600080610f2c610d2284600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610d389092919063ffffffff16565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051610f78929190611c4b565b60405180910390a250505b5b505050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008282604051602001610fe7929190611cec565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115611040576000600391509150611109565b601b8560ff16141580156110585750601c8560ff1614155b1561106a576000600491509150611109565b60006001878787876040516000815260200160405260405161108f9493929190611d32565b6020604051602081039080840390855afa1580156110b1573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561110057600060019250925050611109565b80600092509250505b94509492505050565b6000600481111561112657611125611d77565b5b81600481111561113957611138611d77565b5b1415611144576112e4565b6001600481111561115857611157611d77565b5b81600481111561116b5761116a611d77565b5b14156111ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a390611df2565b60405180910390fd5b600260048111156111c0576111bf611d77565b5b8160048111156111d3576111d2611d77565b5b1415611214576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120b90611e5e565b60405180910390fd5b6003600481111561122857611227611d77565b5b81600481111561123b5761123a611d77565b5b141561127c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127390611ef0565b60405180910390fd5b60048081111561128f5761128e611d77565b5b8160048111156112a2576112a1611d77565b5b14156112e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112da90611f82565b60405180910390fd5b5b50565b6001816000016000828254019250508190555050565b600080600084600001805490509050600061131786610b73565b905060008211801561136d57504386600001600184611336919061192f565b8154811061134757611346611b69565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16145b156113fd5761137b856114ff565b8660000160018461138c919061192f565b8154811061139d5761139c611b69565b5b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1602179055506114f0565b8560000160405180604001604052806114154361156a565b63ffffffff168152602001611429886114ff565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b80859350935050509250929050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8016821115611562576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155990612014565b60405180910390fd5b819050919050565b600063ffffffff80168211156115b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ac906120a6565b60405180910390fd5b819050919050565b6000819050919050565b6115d0816115bd565b82525050565b60006020820190506115eb60008301846115c7565b92915050565b6000819050919050565b611604816115f1565b82525050565b600060208201905061161f60008301846115fb565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116558261162a565b9050919050565b6116658161164a565b811461167057600080fd5b50565b6000813590506116828161165c565b92915050565b611691816115bd565b811461169c57600080fd5b50565b6000813590506116ae81611688565b92915050565b600080604083850312156116cb576116ca611625565b5b60006116d985828601611673565b92505060206116ea8582860161169f565b9150509250929050565b60006020828403121561170a57611709611625565b5b60006117188482850161169f565b91505092915050565b60006020828403121561173757611736611625565b5b600061174584828501611673565b91505092915050565b6117578161164a565b82525050565b6000602082019050611772600083018461174e565b92915050565b6000806040838503121561178f5761178e611625565b5b600061179d85828601611673565b92505060206117ae85828601611673565b9150509250929050565b600060ff82169050919050565b6117ce816117b8565b81146117d957600080fd5b50565b6000813590506117eb816117c5565b92915050565b6117fa816115f1565b811461180557600080fd5b50565b600081359050611817816117f1565b92915050565b60008060008060008060c0878903121561183a57611839611625565b5b600061184889828a01611673565b965050602061185989828a0161169f565b955050604061186a89828a0161169f565b945050606061187b89828a016117dc565b935050608061188c89828a01611808565b92505060a061189d89828a01611808565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118e4826115bd565b91506118ef836115bd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611924576119236118aa565b5b828201905092915050565b600061193a826115bd565b9150611945836115bd565b925082821015611958576119576118aa565b5b828203905092915050565b600082825260208201905092915050565b7f566f7465733a20626c6f636b206e6f7420796574206d696e6564000000000000600082015250565b60006119aa601a83611963565b91506119b582611974565b602082019050919050565b600060208201905081810360008301526119d98161199d565b9050919050565b7f566f7465733a207369676e617475726520657870697265640000000000000000600082015250565b6000611a16601883611963565b9150611a21826119e0565b602082019050919050565b60006020820190508181036000830152611a4581611a09565b9050919050565b6000608082019050611a6160008301876115fb565b611a6e602083018661174e565b611a7b60408301856115c7565b611a8860608301846115c7565b95945050505050565b7f566f7465733a20696e76616c6964206e6f6e6365000000000000000000000000600082015250565b6000611ac7601483611963565b9150611ad282611a91565b602082019050919050565b60006020820190508181036000830152611af681611aba565b9050919050565b7f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e6564600082015250565b6000611b33602083611963565b9150611b3e82611afd565b602082019050919050565b60006020820190508181036000830152611b6281611b26565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060a082019050611bad60008301886115fb565b611bba60208301876115fb565b611bc760408301866115fb565b611bd460608301856115c7565b611be1608083018461174e565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611c25826115bd565b9150611c30836115bd565b925082611c4057611c3f611beb565b5b828204905092915050565b6000604082019050611c6060008301856115c7565b611c6d60208301846115c7565b9392505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611cb5600283611c74565b9150611cc082611c7f565b600282019050919050565b6000819050919050565b611ce6611ce1826115f1565b611ccb565b82525050565b6000611cf782611ca8565b9150611d038285611cd5565b602082019150611d138284611cd5565b6020820191508190509392505050565b611d2c816117b8565b82525050565b6000608082019050611d4760008301876115fb565b611d546020830186611d23565b611d6160408301856115fb565b611d6e60608301846115fb565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611ddc601883611963565b9150611de782611da6565b602082019050919050565b60006020820190508181036000830152611e0b81611dcf565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611e48601f83611963565b9150611e5382611e12565b602082019050919050565b60006020820190508181036000830152611e7781611e3b565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611eda602283611963565b9150611ee582611e7e565b604082019050919050565b60006020820190508181036000830152611f0981611ecd565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202776272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f6c602283611963565b9150611f7782611f10565b604082019050919050565b60006020820190508181036000830152611f9b81611f5f565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b6000611ffe602783611963565b915061200982611fa2565b604082019050919050565b6000602082019050818103600083015261202d81611ff1565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b6000612090602683611963565b915061209b82612034565b604082019050919050565b600060208201905081810360008301526120bf81612083565b905091905056fea264697066735822122048f45cf479bcba2d1758f4d0a0614d89d445055346382cdf1ab284e4ee70a90464736f6c63430008090033";
