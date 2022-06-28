// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

/**
 * @title Bank
 * @dev Somewhere to store your ETH
 */
contract Bank {
    /// @notice A mapping is just a hash table! In this case
    /// the keys are address and the values are uint256
    /// representing ETH values
    mapping(address => uint256) public balances;

    /// @notice Deposit ETH into the bank
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    /// @notice Withdraw all ETH from the bank
    function withdraw() public {
        if (balances[msg.sender] >= 1) {
            msg.sender.call{value: balances[msg.sender]}("");
            balances[msg.sender] = 0;
        }
    }

    /// @notice Gets the value in ETH for this contract
    function getValueOfContract() public view returns (uint256) {
        return address(this).balance;
    }
}
