/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SampleChild } from "../SampleChild";

export class SampleChild__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SampleChild> {
    return super.deploy(overrides || {}) as Promise<SampleChild>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SampleChild {
    return super.attach(address) as SampleChild;
  }
  connect(signer: Signer): SampleChild__factory {
    return super.connect(signer) as SampleChild__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleChild {
    return new Contract(address, _abi, signerOrProvider) as SampleChild;
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
    name: "child",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_mother",
        type: "uint256",
      },
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
      {
        internalType: "uint256",
        name: "_child",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
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
  {
    inputs: [],
    name: "mother",
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
  "0x608060405234801561001057600080fd5b5061135e806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638beaf7d7116100665780638beaf7d714610123578063ed7dfee31461013f578063f62d18881461015d578063fa39851f14610179578063fe4b84df146101975761009e565b80631c8aca3b146100a3578063237b5e96146100c15780634a6c9db6146100df5780636f2edbd2146100fd5780638129fc1c14610119575b600080fd5b6100ab6101b3565b6040516100b89190610d60565b60405180910390f35b6100c96101b9565b6040516100d69190610d60565b60405180910390f35b6100e76101bf565b6040516100f49190610d96565b60405180910390f35b61011760048036038101906101129190610f37565b6101d2565b005b610121610318565b005b61013d60048036038101906101389190610fba565b610456565b005b610147610598565b6040516101549190610d60565b60405180910390f35b61017760048036038101906101729190611016565b61059e565b005b6101816106de565b60405161018e91906110e7565b60405180910390f35b6101b160048036038101906101ac9190611109565b61076c565b005b60035481565b60045481565b600060029054906101000a900460ff1681565b60008060019054906101000a900460ff161590508080156102035750600160008054906101000a900460ff1660ff16105b806102305750610212306108ac565b15801561022f5750600160008054906101000a900460ff1660ff16145b5b61026f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610266906111a8565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156102ac576001600060016101000a81548160ff0219169083151502179055505b6102b8858585856108cf565b80156103115760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610308919061121a565b60405180910390a15b5050505050565b60008060019054906101000a900460ff161590508080156103495750600160008054906101000a900460ff1660ff16105b806103765750610358306108ac565b1580156103755750600160008054906101000a900460ff1660ff16145b5b6103b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ac906111a8565b60405180910390fd5b60016000806101000a81548160ff021916908360ff16021790555080156103f2576001600060016101000a81548160ff0219169083151502179055505b6103fa610940565b80156104535760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161044a919061121a565b60405180910390a15b50565b60008060019054906101000a900460ff161590508080156104875750600160008054906101000a900460ff1660ff16105b806104b45750610496306108ac565b1580156104b35750600160008054906101000a900460ff1660ff16145b5b6104f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ea906111a8565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610530576001600060016101000a81548160ff0219169083151502179055505b61053a8383610999565b80156105935760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161058a919061121a565b60405180910390a15b505050565b60015481565b60008060019054906101000a900460ff161590508080156105cf5750600160008054906101000a900460ff1660ff16105b806105fc57506105de306108ac565b1580156105fb5750600160008054906101000a900460ff1660ff16145b5b61063b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610632906111a8565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610678576001600060016101000a81548160ff0219169083151502179055505b610681826109fe565b80156106da5760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516106d1919061121a565b60405180910390a15b5050565b600280546106eb90611264565b80601f016020809104026020016040519081016040528092919081815260200182805461071790611264565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b505050505081565b60008060019054906101000a900460ff1615905080801561079d5750600160008054906101000a900460ff1660ff16105b806107ca57506107ac306108ac565b1580156107c95750600160008054906101000a900460ff1660ff16145b5b610809576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610800906111a8565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610846576001600060016101000a81548160ff0219169083151502179055505b61084f82610a61565b80156108a85760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161089f919061121a565b60405180910390a15b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff1661091e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091590611308565b60405180910390fd5b61092784610a61565b6109318383610999565b61093a81610ac4565b50505050565b600060019054906101000a900460ff1661098f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098690611308565b60405180910390fd5b610997610b1d565b565b600060019054906101000a900460ff166109e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109df90611308565b60405180910390fd5b6109f1826109fe565b6109fa81610b89565b5050565b600060019054906101000a900460ff16610a4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4490611308565b60405180910390fd5b610a55610940565b610a5e81610be2565b50565b600060019054906101000a900460ff16610ab0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa790611308565b60405180910390fd5b610ab8610940565b610ac181610c4b565b50565b600060019054906101000a900460ff16610b13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0a90611308565b60405180910390fd5b8060048190555050565b600060019054906101000a900460ff16610b6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6390611308565b60405180910390fd5b6001600060026101000a81548160ff021916908315150217905550565b600060019054906101000a900460ff16610bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcf90611308565b60405180910390fd5b8060038190555050565b600060019054906101000a900460ff16610c31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2890611308565b60405180910390fd5b8060029080519060200190610c47929190610ca4565b5050565b600060019054906101000a900460ff16610c9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9190611308565b60405180910390fd5b8060018190555050565b828054610cb090611264565b90600052602060002090601f016020900481019282610cd25760008555610d19565b82601f10610ceb57805160ff1916838001178555610d19565b82800160010185558215610d19579182015b82811115610d18578251825591602001919060010190610cfd565b5b509050610d269190610d2a565b5090565b5b80821115610d43576000816000905550600101610d2b565b5090565b6000819050919050565b610d5a81610d47565b82525050565b6000602082019050610d756000830184610d51565b92915050565b60008115159050919050565b610d9081610d7b565b82525050565b6000602082019050610dab6000830184610d87565b92915050565b6000604051905090565b600080fd5b600080fd5b610dce81610d47565b8114610dd957600080fd5b50565b600081359050610deb81610dc5565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e4482610dfb565b810181811067ffffffffffffffff82111715610e6357610e62610e0c565b5b80604052505050565b6000610e76610db1565b9050610e828282610e3b565b919050565b600067ffffffffffffffff821115610ea257610ea1610e0c565b5b610eab82610dfb565b9050602081019050919050565b82818337600083830152505050565b6000610eda610ed584610e87565b610e6c565b905082815260208101848484011115610ef657610ef5610df6565b5b610f01848285610eb8565b509392505050565b600082601f830112610f1e57610f1d610df1565b5b8135610f2e848260208601610ec7565b91505092915050565b60008060008060808587031215610f5157610f50610dbb565b5b6000610f5f87828801610ddc565b945050602085013567ffffffffffffffff811115610f8057610f7f610dc0565b5b610f8c87828801610f09565b9350506040610f9d87828801610ddc565b9250506060610fae87828801610ddc565b91505092959194509250565b60008060408385031215610fd157610fd0610dbb565b5b600083013567ffffffffffffffff811115610fef57610fee610dc0565b5b610ffb85828601610f09565b925050602061100c85828601610ddc565b9150509250929050565b60006020828403121561102c5761102b610dbb565b5b600082013567ffffffffffffffff81111561104a57611049610dc0565b5b61105684828501610f09565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561109957808201518184015260208101905061107e565b838111156110a8576000848401525b50505050565b60006110b98261105f565b6110c3818561106a565b93506110d381856020860161107b565b6110dc81610dfb565b840191505092915050565b6000602082019050818103600083015261110181846110ae565b905092915050565b60006020828403121561111f5761111e610dbb565b5b600061112d84828501610ddc565b91505092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b6000611192602e8361106a565b915061119d82611136565b604082019050919050565b600060208201905081810360008301526111c181611185565b9050919050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b60006112046111ff6111fa846111c8565b6111df565b6111d2565b9050919050565b611214816111e9565b82525050565b600060208201905061122f600083018461120b565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061127c57607f821691505b602082108114156112905761128f611235565b5b50919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b60006112f2602b8361106a565b91506112fd82611296565b604082019050919050565b60006020820190508181036000830152611321816112e5565b905091905056fea2646970667358221220bc25bc218d16ce1731b31397af38520ffb82d8d56fb3050e5a6f9412c0bd346164736f6c63430008090033";
