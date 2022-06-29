### Reentrancy

One of the major dangers of _calling_ external contracts is that they can take over the control flow, and make changes to your data that the calling function wasn't expecting.

```
// INSECURE  mapping  (address  =>  uint)  private  userBalances;

function  withdrawBalance()  public  {
	uint  amountToWithdraw  =  userBalances[msg.sender];
	(bool  success,  )  =  msg.sender.call{ value: amountToWithdraw }("");  // At this point, the caller's code is executed, and can call withdrawBalance again
	require(success);
	userBalances[msg.sender]  =  0;
}
```

In this example, `msg.sender.call{ value: amountToWithdraw }("")` is designed to transfer money from this contract back to the caller by hitting its _fallback_ function.

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

Here's an example of the fallback function, straight from HackReentrancyBank.sol:

```
receive() external  payable {
	// fill me in!
}
```

### Control Flow

As you can see in the fallback function example above, the fallback function is just a function like any other - you can write whatever code it is you want. For example could write a simple logging mechanism to log when ETH is received, or you could reject ETH payments from specific accounts.
Remember when back in our introduction when we mentioned that calling external contracts gives them control flow? What we mean that when `msg.sender.call{ value: amountToWithdraw }("")` calls the fallback function, control of the call stack is given to `msg.sender's` contract, giving it full access to run whatever functions may be in it's fallback function!

### The Attack

Lets take a final look at our original function:

```
// INSECURE  mapping  (address  =>  uint)  private  userBalances;

function  withdrawBalance()  public  {
	uint  amountToWithdraw  =  userBalances[msg.sender];
	(bool  success,  )  =  msg.sender.call{ value: amountToWithdraw }("");  // At this point, the caller's code is executed, and can call withdrawBalance again
	require(success);
	userBalances[msg.sender]  =  0;
}
```

A malicious user could take our original function call and notice that userBalances is not actually updated until the end of the function. They would then:

1.  Run the function withdrawBalance() from their own contract
2.  withdrawBalance() initiates a transfer to their contract, which gives _control flow_ to their contract's fallback function.
3.  In their fallback function they could simply call the withdrawBalance() function again
    -- This works because their userBalance has not yet been updated to 0.
4.  withdrawBalance() would once again be called, and initiate another transfer, thus the name **_Reentrancy attack_**!

### The assignment

In this folder you will find:

1. ReentrancyBank.sol - a bank vulerable to a reentrancy attack
2. HackReentrancyBank.sol - a contract that wishes to drain ReentrancyBank's funds
3. HackTest.ts - a test file

To complete this challenge:

Make the test in HackTest.ts pass by updating HackReentrancyBank.sol
