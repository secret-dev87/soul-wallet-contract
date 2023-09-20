// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "../authority/OwnerAuth.sol";
import "../base/Validator.sol";
import "../libraries/Errors.sol";
import "../libraries/TypeConversion.sol";
import "../libraries/SignatureDecoder.sol";

abstract contract SignatureValidator is OwnerAuth, Validator {
    using ECDSA for bytes32;
    using TypeConversion for address;

    function _isValidateSignature(bytes32 rawHash, bytes calldata rawSignature)
        internal
        view
        returns (uint256 validationData, bool sigValid)
    {
        bytes32 recovered;
        bool success;
        bytes calldata guardHookInputData;
        bytes calldata validatorSignature;

        (guardHookInputData, validatorSignature) = SignatureDecoder.decodeSignature(rawSignature);

        (validationData, recovered, success) = validator().recoverSignature(rawHash, validatorSignature);

        if (!success) {
            sigValid = false;
        } else {
            sigValid = _isOwner(recovered);
        }
    }

    function _isValidUserOp(bytes32 userOpHash, bytes calldata userOpSignature)
        internal
        view
        returns (uint256 validationData, bool sigValid, bytes calldata guardHookInputData)
    {
        bytes32 recovered;
        bool success;
        bytes calldata validatorSignature;

        (guardHookInputData, validatorSignature) = SignatureDecoder.decodeSignature(userOpSignature);

        (validationData, recovered, success) = validator().recoverSignature(userOpHash, validatorSignature);
        if (!success) {
            sigValid = false;
        } else {
            sigValid = _isOwner(recovered);
        }
    }
}
