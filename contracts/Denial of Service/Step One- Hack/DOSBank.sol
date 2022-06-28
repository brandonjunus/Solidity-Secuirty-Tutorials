// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

/**
 * @title DOSBank
 * @dev A in which the owner pays interest to members
 */
contract DOSBank {
    mapping(address => uint256) public balances;
    address[] members;
    address immutable owner;

    constructor() {
        owner = msg.sender;
    }

    /// @notice Deposit ETH into the bank
    function deposit() public payable {
        require(msg.value == 1 ether);
        require(balances[msg.sender] == 0);
        balances[msg.sender] = 1 ether;
        members.push(msg.sender);
    }

    function payInterest() public {
        require(msg.sender == owner);
        for (uint256 i = 0; i < members.length; i++) {
            members[i].call{value: .1 ether}("");
        }
    }
}
