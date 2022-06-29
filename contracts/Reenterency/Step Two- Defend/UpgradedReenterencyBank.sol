// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

/**
 * @title UpgradedReenterencyBank
 * @dev Upgrade this contract to defend against the reenterency attack
 */
contract UpgradedReenterencyBank {
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
}
