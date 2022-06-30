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

    address[] members;
    mapping(address => uint256) balances; 
    function becomeMember () public payable {
        if (!balances[msg.sender]) {
            members.push(msg.sender);
        }
        balances[msg.sender] += msg.value
    }
    function payInterest() public {
        for (uint256 i; i < members.length; i++) {
            (bool success, ) members[i].call{value: INTEREST_VALUE}("");
            require(success);
        }
    }
}
