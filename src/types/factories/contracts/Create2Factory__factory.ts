/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Create2Factory,
  Create2FactoryInterface,
} from "../../contracts/Create2Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_initCode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address payable",
        name: "createdContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610172806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80634af63f0214610030575b600080fd5b61004361003e366004610088565b61005f565b6040516001600160a01b03909116815260200160405180910390f35b6000818351602085016000f59392505050565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561009b57600080fd5b82356001600160401b03808211156100b257600080fd5b818501915085601f8301126100c657600080fd5b8135818111156100d8576100d8610072565b604051601f8201601f19908116603f0116810190838211818310171561010057610100610072565b8160405282815288602084870101111561011957600080fd5b82602086016020830137600060209382018401529896909101359650505050505056fea2646970667358221220efe150992693f9be1551532909c75468c920f180b88ce4fed11f80fa8ffc725964736f6c63430008110033";

type Create2FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Create2FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Create2Factory__factory extends ContractFactory {
  constructor(...args: Create2FactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Create2Factory> {
    return super.deploy(overrides || {}) as Promise<Create2Factory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Create2Factory {
    return super.attach(address) as Create2Factory;
  }
  override connect(signer: Signer): Create2Factory__factory {
    return super.connect(signer) as Create2Factory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Create2FactoryInterface {
    return new utils.Interface(_abi) as Create2FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Create2Factory {
    return new Contract(address, _abi, signerOrProvider) as Create2Factory;
  }
}
