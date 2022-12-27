/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WETHTokenPaymaster,
  WETHTokenPaymasterInterface,
} from "../../../contracts/WETHPaymaster.sol/WETHTokenPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract EntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_WETHToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "KnownWallets",
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
    name: "WETHToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "walletCodeHash",
        type: "bytes32",
      },
    ],
    name: "addWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "walletCodeHash",
        type: "bytes32",
      },
    ],
    name: "removeWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    name: "setEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "requiredPreFund",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200147a3803806200147a833981016040819052620000349162000171565b8262000040336200007b565b6200004b81620000cb565b50600280546001600160a01b0319166001600160a01b03841617905562000072816200007b565b505050620001c5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000d5620000f7565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314620001565760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b03811681146200016e57600080fd5b50565b6000806000606084860312156200018757600080fd5b8351620001948162000158565b6020850151909350620001a78162000158565b6040850151909250620001ba8162000158565b809150509250925092565b6112a580620001d56000396000f3fe6080604052600436106101295760003560e01c806397d06cec116100a5578063c23a5cea11610074578063d0e30db011610059578063d0e30db01461032b578063f2fde38b14610333578063f465c77e1461035357600080fd5b8063c23a5cea146102e8578063c399ec881461030857600080fd5b806397d06cec14610253578063a9a2340914610293578063b0d691fe146102b3578063bb9fe6bf146102d357600080fd5b80634e0f4c6b116100fc578063584465f2116100e1578063584465f214610200578063715018a6146102205780638da5cb5b1461023557600080fd5b80634e0f4c6b146101c057806351cff8d9146101e057600080fd5b80630396cb601461012e5780630ad1dee514610143578063205c2878146101635780634b2f336d14610183575b600080fd5b61014161013c366004610f1b565b610381565b005b34801561014f57600080fd5b5061014161015e366004610f48565b61040a565b34801561016f57600080fd5b5061014161017e366004610f76565b61042d565b34801561018f57600080fd5b506002546101a3906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101cc57600080fd5b506101416101db366004610f48565b61049c565b3480156101ec57600080fd5b506101416101fb366004610fa2565b6104bc565b34801561020c57600080fd5b5061014161021b366004610fa2565b6105d6565b34801561022c57600080fd5b50610141610618565b34801561024157600080fd5b506000546001600160a01b03166101a3565b34801561025f57600080fd5b5061028361026e366004610f48565b60036020526000908152604090205460ff1681565b60405190151581526020016101b7565b34801561029f57600080fd5b506101416102ae366004610fbf565b61062c565b3480156102bf57600080fd5b506001546101a3906001600160a01b031681565b3480156102df57600080fd5b50610141610646565b3480156102f457600080fd5b50610141610303366004610fa2565b6106b2565b34801561031457600080fd5b5061031d610735565b6040519081526020016101b7565b6101416107a7565b34801561033f57600080fd5b5061014161034e366004610fa2565b610806565b34801561035f57600080fd5b5061037361036e36600461104e565b610896565b6040516101b79291906110a2565b610389610b5b565b6001546040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff831660048201526001600160a01b0390911690630396cb609034906024016000604051808303818588803b1580156103ee57600080fd5b505af1158015610402573d6000803e3d6000fd5b505050505050565b610412610b5b565b6000908152600360205260409020805460ff19166001179055565b610435610b5b565b6001546040517f205c28780000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152602482018490529091169063205c287890604401600060405180830381600087803b1580156103ee57600080fd5b6104a4610b5b565b6000908152600360205260409020805460ff19169055565b6104c4610b5b565b6002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561050d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053191906110f7565b9050610541565b60405180910390fd5b6002546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152602482018490529091169063a9059cbb906044016020604051808303816000875af11580156105ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d19190611110565b505050565b6105de610b5b565b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b610620610b5b565b61062a6000610bb5565b565b610634610c1d565b61064084848484610c34565b50505050565b61064e610b5b565b600160009054906101000a90046001600160a01b03166001600160a01b031663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561069e57600080fd5b505af1158015610640573d6000803e3d6000fd5b6106ba610b5b565b6001546040517fc23a5cea0000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301529091169063c23a5cea90602401600060405180830381600087803b15801561071a57600080fd5b505af115801561072e573d6000803e3d6000fd5b5050505050565b6001546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561077e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a291906110f7565b905090565b6001546040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b039091169063b760faf99034906024016000604051808303818588803b15801561071a57600080fd5b61080e610b5b565b6001600160a01b03811661088a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610538565b61089381610bb5565b50565b6060600061afc88560a00135116109155760405162461bcd60e51b815260206004820152602b60248201527f574554482d546f6b656e5061796d61737465723a2067617320746f6f206c6f7760448201527f20666f7220706f73744f700000000000000000000000000000000000000000006064820152608401610538565b84356109246040870187611132565b1590506109395761093486610cf4565b610a3a565b6002546040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301523060248301528692169063dd62ed3e90604401602060405180830381865afa1580156109a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c691906110f7565b1015610a3a5760405162461bcd60e51b815260206004820152602960248201527f574554482d546f6b656e5061796d61737465723a206e6f7420656e6f7567682060448201527f616c6c6f77616e636500000000000000000000000000000000000000000000006064820152608401610538565b6002546040516370a0823160e01b81526001600160a01b038381166004830152869216906370a0823190602401602060405180830381865afa158015610a84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa891906110f7565b1015610b1c5760405162461bcd60e51b815260206004820152602760248201527f574554482d546f6b656e5061796d61737465723a206e6f7420656e6f7567682060448201527f62616c616e6365000000000000000000000000000000000000000000000000006064820152608401610538565b610b296020870187610fa2565b604080516001600160a01b0390921660208301520160408051601f198184030181529190529660009650945050505050565b6000546001600160a01b0316331461062a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610538565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001546001600160a01b0316331461062a57600080fd5b6000610c4283850185610fa2565b6002549091506001600160a01b03166323b872dd8230610c64613a98876111cd565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af1158015610cd0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104029190611110565b6000610d036040830183611132565b60009061010e610d166040870187611132565b610d219291506111e6565b92610d2e939291906111f9565b604051610d3c929190611223565b604051809103902090506000828060400190610d589190611132565b61010e610d686040870187611132565b610d739291506111e6565b610d7e9282906111f9565b610d8791611233565b6001549091506001600160a01b03808316911614610de75760405162461bcd60e51b815260206004820152601e60248201527f77726f6e67207061796d617374657220696e20636f6e7374727563746f7200006044820152606401610538565b6000610df66040850185611132565b606e610e056040880188611132565b610e109291506111e6565b610e1b9282906111f9565b610e2491611233565b6002549091506001600160a01b03808316911614610e845760405162461bcd60e51b815260206004820152601a60248201527f77726f6e6720746f6b656e20696e20636f6e7374727563746f720000000000006044820152606401610538565b6000610e936040860186611132565b604e610ea26040890189611132565b610ead9291506111e6565b610eb89282906111f9565b610ec191611233565b90506001600160a01b038116301461072e5760405162461bcd60e51b815260206004820152601e60248201527f77726f6e67207061796d617374657220696e20636f6e7374727563746f7200006044820152606401610538565b600060208284031215610f2d57600080fd5b813563ffffffff81168114610f4157600080fd5b9392505050565b600060208284031215610f5a57600080fd5b5035919050565b6001600160a01b038116811461089357600080fd5b60008060408385031215610f8957600080fd5b8235610f9481610f61565b946020939093013593505050565b600060208284031215610fb457600080fd5b8135610f4181610f61565b60008060008060608587031215610fd557600080fd5b843560038110610fe457600080fd5b9350602085013567ffffffffffffffff8082111561100157600080fd5b818701915087601f83011261101557600080fd5b81358181111561102457600080fd5b88602082850101111561103657600080fd5b95986020929092019750949560400135945092505050565b60008060006060848603121561106357600080fd5b833567ffffffffffffffff81111561107a57600080fd5b8401610160818703121561108d57600080fd5b95602085013595506040909401359392505050565b604081526000835180604084015260005b818110156110d057602081870181015160608684010152016110b3565b506000606082850101526060601f19601f8301168401019150508260208301529392505050565b60006020828403121561110957600080fd5b5051919050565b60006020828403121561112257600080fd5b81518015158114610f4157600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261116757600080fd5b83018035915067ffffffffffffffff82111561118257600080fd5b60200191503681900382131561119757600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156111e0576111e061119e565b92915050565b818103818111156111e0576111e061119e565b6000808585111561120957600080fd5b8386111561121657600080fd5b5050820193919092039150565b8183823760009101908152919050565b803560208310156111e0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b169291505056fea26469706673582212208df5430c3f6f1fd8f674c572e2cebb6643ea98c4e7da1bb32ace38fd9e29e3e864736f6c63430008110033";

type WETHTokenPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WETHTokenPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WETHTokenPaymaster__factory extends ContractFactory {
  constructor(...args: WETHTokenPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _WETHToken: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WETHTokenPaymaster> {
    return super.deploy(
      _entryPoint,
      _WETHToken,
      _owner,
      overrides || {}
    ) as Promise<WETHTokenPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _WETHToken: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _WETHToken,
      _owner,
      overrides || {}
    );
  }
  override attach(address: string): WETHTokenPaymaster {
    return super.attach(address) as WETHTokenPaymaster;
  }
  override connect(signer: Signer): WETHTokenPaymaster__factory {
    return super.connect(signer) as WETHTokenPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETHTokenPaymasterInterface {
    return new utils.Interface(_abi) as WETHTokenPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETHTokenPaymaster {
    return new Contract(address, _abi, signerOrProvider) as WETHTokenPaymaster;
  }
}
