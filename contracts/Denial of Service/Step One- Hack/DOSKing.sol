// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

/**
 * @title DOSKing
 * @dev A Simple Game with a King
 * Become King by paying more ETH than the last King
 */
contract DOSKing {
    address public king;
    uint256 public balance;

    function claimThrone() public payable {
        require(msg.value > balance, "Need to pay more to become the king");
        (bool sent, ) = king.call{value: balance}("");
        require(sent, "Failed to send Ether");
        balance = msg.value;
        king = msg.sender;
    }
}
