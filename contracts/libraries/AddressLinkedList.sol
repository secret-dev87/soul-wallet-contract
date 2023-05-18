// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

library AddressLinkedList {
    address internal constant SENTINEL_ADDRESS = address(1);
    uint160 internal constant SENTINEL_UINT = 1;

    modifier onlyAddress(address addr) {
        require(uint160(addr) > SENTINEL_UINT, "invalid address");
        _;
    }

    function add(mapping(address => address) storage self, address addr) internal onlyAddress(addr) {
        require(self[addr] == address(0), "address already exists");
        address _prev = self[SENTINEL_ADDRESS];
        if (_prev == address(0)) {
            self[SENTINEL_ADDRESS] = addr;
            self[addr] = SENTINEL_ADDRESS;
        } else {
            self[SENTINEL_ADDRESS] = addr;
            self[addr] = _prev;
        }
    }

    function replace(mapping(address => address) storage self, address oldAddr, address newAddr) internal {
        require(isExist(self, oldAddr), "address not exists");
        require(!isExist(self, newAddr), "new address already exists");

        address cursor = SENTINEL_ADDRESS;
        while (true) {
            address _addr = self[cursor];
            if (_addr == oldAddr) {
                address next = self[_addr];
                self[newAddr] = next;
                self[cursor] = newAddr;
                self[_addr] = address(0);
                return;
            }
            cursor = _addr;
        }
    }

    function remove(mapping(address => address) storage self, address addr) internal {
        require(isExist(self, addr), "address not exists");

        address cursor = SENTINEL_ADDRESS;
        while (true) {
            address _addr = self[cursor];
            if (_addr == addr) {
                address next = self[_addr];
                self[cursor] = next;
                self[_addr] = address(0);
                return;
            }
            cursor = _addr;
        }
    }

    function clear(mapping(address => address) storage self) internal {
        for (address addr = self[SENTINEL_ADDRESS]; uint160(addr) > SENTINEL_UINT; addr = self[addr]) {
            self[addr] = address(0);
        }
        self[SENTINEL_ADDRESS] = address(0);
    }

    function isExist(mapping(address => address) storage self, address addr)
        internal
        view
        onlyAddress(addr)
        returns (bool)
    {
        return self[addr] != address(0);
    }

    function size(mapping(address => address) storage self) internal view returns (uint256) {
        uint256 result = 0;
        address addr = self[SENTINEL_ADDRESS];
        while (uint160(addr) > SENTINEL_UINT) {
            addr = self[addr];
            unchecked {
                result++;
            }
        }
        return result;
    }

    function isEmpty(mapping(address => address) storage self) internal view returns (bool) {
        return self[SENTINEL_ADDRESS] == address(0);
    }

    function list(mapping(address => address) storage self, address from, uint256 limit)
        internal
        view
        returns (address[] memory)
    {
        address[] memory result = new address[](limit);
        uint256 i = 0;
        address addr = self[from];
        while (uint160(addr) > SENTINEL_UINT && i < limit) {
            result[i] = addr;
            addr = self[addr];
            unchecked {
                i++;
            }
        }

        return result;
    }
}
