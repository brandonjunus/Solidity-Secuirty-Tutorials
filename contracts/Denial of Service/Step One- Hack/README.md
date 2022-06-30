### Denial of Service

In solidity, a Denial of Service attack is best described as a an attack in which a malicious user or contract renders a contract unusable.
Given its broad definition, there are many ways in which this could be achieved. Here we'll go over a couple examples.

### Example 1: Deny by Gas Limit

Consider the following example of a bank:

```
	address[] members;
	mapping(address => uint256) balances;
	function becomeMember () public payable {
	    if (!balances[msg.sender]) {
	        members.push(msg.sender);
	    }
	    balances[msg.sender] += msg.value
	}
	function payInterest() public {
		require(msg.sender == owner);
	    for (uint256 i; i < members.length; i++) {
	        (bool success, ) members[i].call{value: INTEREST_VALUE}("");
	        require(success);
	    }
	}
```

We have two functions:

1.  A function that allows new users to become members of the bank by sending in any amount
2.  A function that only the bank owner can use that pays interest to each member

While these functions seem harmless, consider that a malicious user could create 1,000s of new accounts and become a member by paying .00000001 ETH for each. By the time the owner has to pay interest, the owner will be required to loop over 1,000s of members and will probably run out of gas, thereby reverting the entire function call.
For a very small amount of money, a malicious user could render this entire contract useless!

### Example 2: Deny by Revert in Fallback Function

Lets take another look at the same example:

```
	address[] members;
	mapping(address => uint256) balances;
	function becomeMember () public payable {
	    if (!balances[msg.sender]) {
	        members.push(msg.sender);
	    }
	    balances[msg.sender] += msg.value
	}
	function payInterest() public {
		require(msg.sender == owner);
	    for (uint256 i; i < members.length; i++) {
	        (bool success, ) members[i].call{value: INTEREST_VALUE}("");
	        require(success);
	    }
	}
```

In this example, `(bool success, ) members[i].call{value: INTEREST_VALUE}("")` is designed to transfer money from this contract to the member by hitting its _fallback_ function.

### Fallback Function?

In Solidity, a fallback function is an external function with neither a name, parameters, or return values. It is executed in one of the following cases:

- If a function identifier doesn’t match any of the available functions in a smart contract.
- If there was no data supplied along with the function call.

The fallback function:

- Is unnamed (must be either _receive_ or _fallback_),
- Cannot accept arguments.
- Cannot return anything.
- Required to be marked external.
- It should be marked _payable_. If not, the contract will throw an exception if it receives ether without any data.

Here's an example of the fallback function, straight from HackDOSKing.sol:

```
receive() external  payable {
	// fill me in!
}
```

**By using a revert in their fallback function a malicious user could throw an error for the entire call stack, thereby blocking the entire function call from the original payInterest function!**

### The Assignment

In this folder you will find:

1. DOSKing.sol - A simple game vulnerable to a DOS attack
2. HackDOSKing.sol - a contract that wishes to deny service to DOSKing
3. HackTest.ts - a test file

To complete this challenge:
Make the test in HackTest.ts pass by updating HackDOSKing.sol
