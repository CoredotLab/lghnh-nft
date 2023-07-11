/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CrossChainEnabledAMBMock } from "../CrossChainEnabledAMBMock";

export class CrossChainEnabledAMBMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    bridge: string,
    overrides?: Overrides
  ): Promise<CrossChainEnabledAMBMock> {
    return super.deploy(
      bridge,
      overrides || {}
    ) as Promise<CrossChainEnabledAMBMock>;
  }
  getDeployTransaction(
    bridge: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(bridge, overrides || {});
  }
  attach(address: string): CrossChainEnabledAMBMock {
    return super.attach(address) as CrossChainEnabledAMBMock;
  }
  connect(signer: Signer): CrossChainEnabledAMBMock__factory {
    return super.connect(signer) as CrossChainEnabledAMBMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainEnabledAMBMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainEnabledAMBMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "actual",
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
    name: "crossChainOwnerRestricted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crossChainRestricted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
];

const _bytecode =
  "0x60c06040523373ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b5060405161059638038061059683398181016040528101906100659190610104565b808073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050610131565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100d1826100a6565b9050919050565b6100e1816100c6565b81146100ec57600080fd5b50565b6000815190506100fe816100d8565b92915050565b60006020828403121561011a576101196100a1565b5b6000610128848285016100ef565b91505092915050565b60805160a0516104346101626000396000818161018601526101f401526000818160ba015260de01526104346000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634b074af5146100465780638da5cb5b14610050578063f97f51891461006e575b600080fd5b61004e610078565b005b6100586100b8565b604051610065919061035c565b60405180910390f35b6100766100dc565b005b61008061017f565b6100b6576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000060006101076101af565b90508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461017b5780826040517fef25d32b000000000000000000000000000000000000000000000000000000008152600401610172929190610377565b60405180910390fd5b5050565b60006101aa7f000000000000000000000000000000000000000000000000000000000000000061021d565b905090565b60006101b961017f565b6101ef576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102187f0000000000000000000000000000000000000000000000000000000000000000610255565b905090565b60008173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149050919050565b60006102608261021d565b610296576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663d67bdd256040518163ffffffff1660e01b815260040160206040518083038186803b1580156102dc57600080fd5b505afa1580156102f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031491906103d1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103468261031b565b9050919050565b6103568161033b565b82525050565b6000602082019050610371600083018461034d565b92915050565b600060408201905061038c600083018561034d565b610399602083018461034d565b9392505050565b600080fd5b6103ae8161033b565b81146103b957600080fd5b50565b6000815190506103cb816103a5565b92915050565b6000602082840312156103e7576103e66103a0565b5b60006103f5848285016103bc565b9150509291505056fea26469706673582212200a08f45034a8968a5f9abfd48cf67609222adebaaff8afc53e5ccc2c5aaa75ca64736f6c63430008090033";
