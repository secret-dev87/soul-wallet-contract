// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

import "@account-abstraction/contracts/interfaces/IEntryPoint.sol";

abstract contract EntryPointAuth {
    function _entryPoint() internal view virtual returns (IEntryPoint);

    modifier onlyEntryPoint() {
        address addr = msg.sender;
        require(addr == address(_entryPoint()), "require from Entrypoint");
        _;
    }
}
