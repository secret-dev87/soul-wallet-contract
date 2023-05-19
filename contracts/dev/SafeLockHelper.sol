// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

import "forge-std/Test.sol";
import "../safeLock/SafeLock.sol";

contract SafeLockHelper is SafeLock {
    constructor(uint64 safeLockPeriod) SafeLock("SafeLockHelper", safeLockPeriod) {}

    function start(bytes32 _id) external {
        lock(_id);
    }

    function cancel(bytes32 _id) external {
        cancelLock(_id);
    }

    function end(bytes32 _id) external {
        unlock(_id);
    }
}
