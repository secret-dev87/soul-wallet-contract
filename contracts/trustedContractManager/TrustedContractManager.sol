// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

import "./ITrustedContractManager.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract TrustedContractManager is ITrustedContractManager, Ownable {
    mapping(address => bool) private trustedContract;

    constructor(address _owner) {
        _transferOwnership(_owner);
    }

    function isTrustedContract(address module) external view returns (bool) {
        return trustedContract[module];
    }

    function isContract(address addr) private view returns (bool _isContract) {
        assembly {
            _isContract := gt(extcodesize(addr), 0)
        }
    }

    function add(address[] memory modules) external onlyOwner {
        for (uint256 i = 0; i < modules.length; i++) {
            require(isContract(modules[i]), "TrustedContractManager: not a contract");
            require(!trustedContract[modules[i]], "TrustedContractManager: contract already trusted");
            trustedContract[modules[i]] = true;
            emit TrustedContractAdded(modules[i]);
        }
    }

    function remove(address[] memory modules) external onlyOwner {
        for (uint256 i = 0; i < modules.length; i++) {
            require(trustedContract[modules[i]], "TrustedContractManager: contract not trusted");
            trustedContract[modules[i]] = false;
            emit TrustedContractRemoved(modules[i]);
        }
    }
}
