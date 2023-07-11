/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Bytes32ToUintMapMock } from "../Bytes32ToUintMapMock";

export class Bytes32ToUintMapMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Bytes32ToUintMapMock> {
    return super.deploy(overrides || {}) as Promise<Bytes32ToUintMapMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Bytes32ToUintMapMock {
    return super.attach(address) as Bytes32ToUintMapMock;
  }
  connect(signer: Signer): Bytes32ToUintMapMock__factory {
    return super.connect(signer) as Bytes32ToUintMapMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Bytes32ToUintMapMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Bytes32ToUintMapMock;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "OperationResult",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "at",
    outputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "contains",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "get",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "errorMessage",
        type: "string",
      },
    ],
    name: "getWithMessage",
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
    name: "length",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "tryGet",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d93806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638eaa6ac01161005b5780638eaa6ac01461012757806395bc267314610157578063dc09a8a714610173578063e0886f90146101a457610088565b80631d1a696d1461008d5780631f7b6d32146100bd578063273f4940146100db5780636cf3dff1146100f7575b600080fd5b6100a760048036038101906100a2919061091f565b6101d5565b6040516100b49190610967565b60405180910390f35b6100c56101f2565b6040516100d2919061099b565b60405180910390f35b6100f560048036038101906100f091906109e2565b610203565b005b610111600480360381019061010c9190610a87565b610259565b60405161011e919061099b565b60405180910390f35b610141600480360381019061013c919061091f565b6102be565b60405161014e919061099b565b60405180910390f35b610171600480360381019061016c919061091f565b6102db565b005b61018d6004803603810190610188919061091f565b61032e565b60405161019b929190610ae7565b60405180910390f35b6101be60048036038101906101b99190610b10565b61034e565b6040516101cc929190610b4c565b60405180910390f35b60006101eb82600061036e90919063ffffffff16565b9050919050565b60006101fe6000610385565b905090565b600061021b8383600061039a9092919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e338160405161024c9190610967565b60405180910390a1505050565b60006102b58484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505060006103b69092919063ffffffff16565b90509392505050565b60006102d48260006103d290919063ffffffff16565b9050919050565b60006102f18260006103ec90919063ffffffff16565b90507fed9840e0775590557ad736875d96c95cf1458b766335f74339951a32c82a9e33816040516103229190610967565b60405180910390a15050565b60008061034583600061040390919063ffffffff16565b91509150915091565b60008061036583600061042c90919063ffffffff16565b91509150915091565b600061037d8360000183610455565b905092915050565b600061039382600001610475565b9050919050565b60006103ad84600001848460001b61048a565b90509392505050565b60006103c68460000184846104c5565b60001c90509392505050565b60006103e18360000183610546565b60001c905092915050565b60006103fb83600001836105c2565b905092915050565b60008060008061041686600001866105fb565b91509150818160001c9350935050509250929050565b60008060008061043f866000018661064b565b91509150818160001c9350935050509250929050565b600061046d828460000161068b90919063ffffffff16565b905092915050565b6000610483826000016106a2565b9050919050565b600081846002016000858152602001908152602001600020819055506104bc83856000016106b790919063ffffffff16565b90509392505050565b6000808460020160008581526020019081526020016000205490506000801b811415806104f857506104f78585610455565b5b839061053a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105319190610c0e565b60405180910390fd5b50809150509392505050565b6000808360020160008481526020019081526020016000205490506000801b8114158061057957506105788484610455565b5b6105b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105af90610c7c565b60405180910390fd5b8091505092915050565b6000826002016000838152602001908152602001600020600090556105f382846000016106ce90919063ffffffff16565b905092915050565b60008060008460020160008581526020019081526020016000205490506000801b81141561063b5761062d8585610455565b6000801b9250925050610644565b60018192509250505b9250929050565b600080600061066684866000016106e590919063ffffffff16565b9050808560020160008381526020019081526020016000205492509250509250929050565b600061069a83600001836106fc565b905092915050565b60006106b08260000161071f565b9050919050565b60006106c68360000183610730565b905092915050565b60006106dd83600001836107a0565b905092915050565b60006106f483600001836108b4565b905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b600061073c83836106fc565b61079557826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061079a565b600090505b92915050565b600080836001016000848152602001908152602001600020549050600081146108a85760006001826107d29190610ccb565b90506000600186600001805490506107ea9190610ccb565b905081811461085957600086600001828154811061080b5761080a610cff565b5b906000526020600020015490508087600001848154811061082f5761082e610cff565b5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b8560000180548061086d5761086c610d2e565b5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506108ae565b60009150505b92915050565b60008260000182815481106108cc576108cb610cff565b5b9060005260206000200154905092915050565b600080fd5b600080fd5b6000819050919050565b6108fc816108e9565b811461090757600080fd5b50565b600081359050610919816108f3565b92915050565b600060208284031215610935576109346108df565b5b60006109438482850161090a565b91505092915050565b60008115159050919050565b6109618161094c565b82525050565b600060208201905061097c6000830184610958565b92915050565b6000819050919050565b61099581610982565b82525050565b60006020820190506109b0600083018461098c565b92915050565b6109bf81610982565b81146109ca57600080fd5b50565b6000813590506109dc816109b6565b92915050565b600080604083850312156109f9576109f86108df565b5b6000610a078582860161090a565b9250506020610a18858286016109cd565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f840112610a4757610a46610a22565b5b8235905067ffffffffffffffff811115610a6457610a63610a27565b5b602083019150836001820283011115610a8057610a7f610a2c565b5b9250929050565b600080600060408486031215610aa057610a9f6108df565b5b6000610aae8682870161090a565b935050602084013567ffffffffffffffff811115610acf57610ace6108e4565b5b610adb86828701610a31565b92509250509250925092565b6000604082019050610afc6000830185610958565b610b09602083018461098c565b9392505050565b600060208284031215610b2657610b256108df565b5b6000610b34848285016109cd565b91505092915050565b610b46816108e9565b82525050565b6000604082019050610b616000830185610b3d565b610b6e602083018461098c565b9392505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610baf578082015181840152602081019050610b94565b83811115610bbe576000848401525b50505050565b6000601f19601f8301169050919050565b6000610be082610b75565b610bea8185610b80565b9350610bfa818560208601610b91565b610c0381610bc4565b840191505092915050565b60006020820190508181036000830152610c288184610bd5565b905092915050565b7f456e756d657261626c654d61703a206e6f6e6578697374656e74206b65790000600082015250565b6000610c66601e83610b80565b9150610c7182610c30565b602082019050919050565b60006020820190508181036000830152610c9581610c59565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610cd682610982565b9150610ce183610982565b925082821015610cf457610cf3610c9c565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220cffea889432bd6ffadd7441f2a1b293a0196834f1f1bdf14611ae6056462910264736f6c63430008090033";
