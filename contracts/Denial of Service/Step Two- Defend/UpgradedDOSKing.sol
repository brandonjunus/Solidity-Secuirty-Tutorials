// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

/**
 * @title UpgradedDOSBank
 * @dev An upgraded version of DOSKing that can't be DOS'd as easily
 */
contract UpgradedDOSKing {
    address public king;
    uint256 public balance;
    // we've added a new balances mapping
    mapping(address => uint256) public balances;

    function claimThrone() public payable {
        require(msg.value > balance, "Need to pay more to become the king");
        // When crowning a new king, add a balance for the previous king
        balances[king] += balance;
        balance = msg.value;
        king = msg.sender;
    }

    function withdraw() public {
        // fill me in
    }
}
