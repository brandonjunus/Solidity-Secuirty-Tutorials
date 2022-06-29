// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "./ReentrancyBank.sol";

contract HackReentrancyBank {
    ReentrancyBank reentrancyBank;

    constructor(address payable _bankAddress) payable {
        reentrancyBank = ReentrancyBank(_bankAddress);
    }

    function hackContract() external {
        // fill me in!
    }

    receive() external payable {
        // fill me in!
    }
}
