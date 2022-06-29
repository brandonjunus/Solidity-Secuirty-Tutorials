// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import "hardhat/console.sol";

import "./DOSKing.sol";

contract HackDOSKing {
    DOSKing dosKing;

    constructor(address _dosKingAddress) {
        dosKing = DOSKing(_dosKingAddress);
    }

    function becomeKing() public payable {
        dosKing.claimThrone{value: msg.value}();
    }

    receive() external payable {
        // fill me in
    }
}
