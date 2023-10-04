pragma solidity ^0.8.17;

import "./IKnownStateRootWithHistory.sol";
import "./MerklePatriciaVerifier.sol";
import "../../keystore/interfaces/IKeyStoreProof.sol";

contract KeystoreProof is IKeyStoreProof {
    mapping(bytes32 => bytes32) public l1SlotToSigningKey;
    mapping(bytes32 => bytes) public l1SlotToRawOwners;
    mapping(bytes32 => uint256) public lastProofBlock;
    mapping(bytes32 => bytes32) public stateRootToKeystoreStorageRoot;

    address public immutable STATE_ROOT_HISTORY_ADDESS;
    address public immutable L1_KEYSTORE_ADDRESS;
    // the latest block number in l1 that proved
    uint256 public lastestProofL1BlockNumber;

    event KeyStoreStorageProved(bytes32 stateRoot, bytes32 storageRoot);
    event L1KeyStoreProved(bytes32 l1Slot, bytes32 signingKey);

    constructor(address _l1KeystoreAddress, address _stateRootHistoryAddress) {
        L1_KEYSTORE_ADDRESS = _l1KeystoreAddress;
        STATE_ROOT_HISTORY_ADDESS = _stateRootHistoryAddress;
    }

    function proofKeystoreStorageRoot(bytes32 stateRoot, bytes memory accountProof) external {
        (bool searchResult, BlockInfo memory currentBlockInfo) =
            IKnownStateRootWithHistory(STATE_ROOT_HISTORY_ADDESS).stateRootInfo(stateRoot);
        require(searchResult, "unkown root");
        require(stateRootToKeystoreStorageRoot[stateRoot] == bytes32(0), "storage root already proved");
        bytes memory keyStoreAccountDetailsBytes = MerklePatriciaVerifier.getValueFromProof(
            currentBlockInfo.storageRootHash, keccak256(abi.encodePacked(L1_KEYSTORE_ADDRESS)), accountProof
        );
        Rlp.Item[] memory keyStoreDetails = Rlp.toList(Rlp.toItem(keyStoreAccountDetailsBytes));
        bytes32 keyStoreStorageRootHash = Rlp.toBytes32(keyStoreDetails[2]);
        stateRootToKeystoreStorageRoot[stateRoot] = keyStoreStorageRootHash;
        if (currentBlockInfo.blockNumber > lastestProofL1BlockNumber) {
            lastestProofL1BlockNumber = currentBlockInfo.blockNumber;
        }
        emit KeyStoreStorageProved(stateRoot, keyStoreStorageRootHash);
    }

    function proofL1Keystore(
        bytes32 l1Slot,
        bytes32 stateRoot,
        bytes32 newSigningKey,
        bytes memory rawOwners,
        bytes memory keyProof
    ) external {
        require(newSigningKey == keccak256(rawOwners), "invalid raw owner data");
        (bool searchResult, BlockInfo memory currentBlockInfo) =
            IKnownStateRootWithHistory(STATE_ROOT_HISTORY_ADDESS).stateRootInfo(stateRoot);
        require(searchResult, "unkown stateRoot root");
        bytes32 keyStoreStorageRootHash = stateRootToKeystoreStorageRoot[stateRoot];
        require(keyStoreStorageRootHash != bytes32(0), "storage root not set");

        // when verify merkel patricia proof for storage value, the tree path = keccaka256("l1slot")
        bytes32 proofSigningKey = Rlp.rlpBytesToBytes32(
            MerklePatriciaVerifier.getValueFromProof(keyStoreStorageRootHash, keccak256(abi.encode(l1Slot)), keyProof)
        );
        require(proofSigningKey == newSigningKey, "key not match");
        // store the new proof signing key to slot mapping

        uint256 blockNumber = lastProofBlock[l1Slot];
        require(currentBlockInfo.blockNumber > blockNumber, "needs to proof newer block");

        l1SlotToSigningKey[l1Slot] = newSigningKey;
        lastProofBlock[l1Slot] = currentBlockInfo.blockNumber;
        l1SlotToRawOwners[l1Slot] = rawOwners;
        emit L1KeyStoreProved(l1Slot, newSigningKey);
    }

    function keystoreBySlot(bytes32 l1Slot) external view returns (bytes32 signingKey) {
        return (l1SlotToSigningKey[l1Slot]);
    }

    function rawOwnersBySlot(bytes32 l1Slot) external view override returns (bytes memory owners) {
        return l1SlotToRawOwners[l1Slot];
    }
}
