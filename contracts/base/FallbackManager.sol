// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

import "../interfaces/IFallbackManager.sol";
import "../authority/Authority.sol";
import "../libraries/AccountStorage.sol";

abstract contract FallbackManager is Authority, IFallbackManager {
    receive() external payable {}

    function internalSetFallbackHandler(address fallbackContract) internal {
        require(fallbackContract != address(0), "fallbackContract is zero address");
        AccountStorage.layout().defaultFallbackContract = fallbackContract;
    }

    fallback() external payable {
        // all requests are forwarded to the fallback contract use STATICCALL
        address fallbackContract = AccountStorage.layout().defaultFallbackContract;
        assembly {
            calldatacopy(0, 0, calldatasize())
            let result := staticcall(gas(), fallbackContract, 0, calldatasize(), 0, 0)
            returndatacopy(0, 0, returndatasize())
            switch result
            case 0 { revert(0, returndatasize()) }
            default { return(0, returndatasize()) }
        }
    }

    function setFallbackHandler(address fallbackContract) public override onlyEntryPointOrSelf {
        internalSetFallbackHandler(fallbackContract);
        emit FallbackChanged(fallbackContract);
    }
}
