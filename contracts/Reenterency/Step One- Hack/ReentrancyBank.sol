// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import "hardhat/console.sol";

/**
 * @title VulerableBank
 * @dev A weak place to store your ETH
 */
contract ReentrancyBank {
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
}
