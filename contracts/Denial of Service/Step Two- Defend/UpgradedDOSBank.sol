// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

/**
 * @title UpgradedDOSBank
 * @dev A in which the owner pays interest to members
 */
contract UpgradedDOSBank {
    uint256 constant INTEREST = 1 ether / 1000;
    mapping(address => uint256) public balances;
    // we've added an interest accrued mapping
    mapping(address => uint256) public interestAccrued;
    address payable[] members;
    address immutable owner;

    constructor() {
        owner = msg.sender;
    }

    /// @notice Deposit ETH into the bank
    function deposit() public payable {
        require(msg.value == 1 ether);
        require(balances[msg.sender] == 0);
        balances[msg.sender] = 1 ether;
        members.push(payable(msg.sender));
    }

    /// @notice pays out interest to each member
    function payInterest() public {
        // fill me in
    }

    function withdrawInterest() public {
        // fill me in
    }
}
