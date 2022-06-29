### Reentrancy Guards

As you may have noticed in the last example, reentrancy can come in many different forms, and in fact may call multiple functions. For this reason, it is always best to think about the overall design of your contract rather than having a one-size-fits-all type of solution.
That being said, there are two major methods of guarding against reentrancy attacks:

1. Checks/Effects/Interaction pattern
2. Mutex "locks"

### The Checks/Effects/Interaction

The Checks/Effects/Interaction pattern writes functions is implemented by writing a functions in the following order:

1. **Checks**: most functions will first perform some checks (who called the function, are the arguments in range, did they send enough Ether, does the person have tokens, etc.).
2. **Effects**: if all checks passed, effects to the state variables of the current contract should be made.
3. **Interaction**: with other contracts should be the very last step in any function.

If you use this pattern, you will be able to prevent against reentrancy that takes advantages of state changes that haven't been made.

Lets take a another look at our **insecure** example from the _hack_ section of this lesson:

```
// INSECURE mapping (address => uint) private userBalances;
function withdrawBalance() public {
	uint amountToWithdraw = userBalances[msg.sender];
	(bool success, ) = msg.sender.call{ value: amountToWithdraw }("");
	require(success);
	userBalances[msg.sender] = 0;
}
```

This function does NOT follow the Checks/Effects/Interaction because it makes the external call BEFORE it updates the userBalances state to 0.
Here's an updated version of the same function to follow the Checks/Effects/Interaction pattern.

```
// INSECURE mapping (address => uint) private userBalances;
function withdrawBalance() public {
	uint amountToWithdraw = userBalances[msg.sender];
	userBalances[msg.sender] = 0;
	(bool success, ) = msg.sender.call{ value: amountToWithdraw }("");
	require(success);
}
```

### Mutex "locks"

These types of guards may be best explained with an example:

```
mapping  (address  =>  uint)  private  balances;
bool  private  lockBalances;

function withdraw(uint amount) payable public returns (bool) {
    require(!lockBalances && amount > 0 && balances[msg.sender] >= amount);
    lockBalances = true;
    (bool success, ) = msg.sender.call.value(amount)("");
    if (success) { // Normally insecure, but the mutex saves it
      balances[msg.sender] -= amount;
    }
    lockBalances = false;
    return true;
}

```

Mutex uses extra state updates to "lock" this function from being called again. An addition, you could use this type of guard to span multiple functions. In this example, deposit cannot be called when lockBalances = true, set from the withdraw function:

```
mapping (address => uint) private balances;
bool private lockBalances;

function deposit() payable public returns (bool) {
    require(!lockBalances);
    lockBalances = true;
    balances[msg.sender] += msg.value;
    lockBalances = false;
    return true;
}

function withdraw(uint amount) payable public returns (bool) {
    require(!lockBalances && amount > 0 && balances[msg.sender] >= amount);
    lockBalances = true;
    (bool success, ) = msg.sender.call.value(amount)("");
    if (success) { // Normally insecure, but the mutex saves it
      balances[msg.sender] -= amount;
    }
    lockBalances = false;
    return true;
}
```

This type of guard is useful for more complicated logic. However, it does come at the cost of the additional gas used to check locks.
As a final note, this type of guard is often used as a function modifier:

```
contract ReEntrancyGuard {
    bool internal locked;

    modifier noReentrant() {
        require(!locked, "No re-entrancy");
        locked = true;
        _;
        locked = false;
    }
}
```

### The assignment

In this folder you will find:

1. UpgradedReentrencyBank.sol - its currently a copy of the bank from the Hack section, but you will need to upgrade it to make it pass the test
2. DefendTest.ts - in this file, your HackReenterencyBank code from the Hack section is attempting to hack UpgradedReentrencyBank.sol

Complete this assignment by passing all the tests in DefendTest.ts and by preventing HackReenterencyBank.sol from hacking UpgradedReentrencyBank.sol!
