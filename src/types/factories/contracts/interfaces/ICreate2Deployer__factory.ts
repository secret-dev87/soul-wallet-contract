/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICreate2Deployer,
  ICreate2DeployerInterface,
} from "../../../contracts/interfaces/ICreate2Deployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initCode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICreate2Deployer__factory {
  static readonly abi = _abi;
  static createInterface(): ICreate2DeployerInterface {
    return new utils.Interface(_abi) as ICreate2DeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreate2Deployer {
    return new Contract(address, _abi, signerOrProvider) as ICreate2Deployer;
  }
}
