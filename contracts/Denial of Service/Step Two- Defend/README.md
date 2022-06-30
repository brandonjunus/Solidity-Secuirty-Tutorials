### Defending against a Denial of Service Attack

As we mentioned in the Hack section of the Denial of Service attack, this attack can come in many forms, and as such, there is no single best method of defense.
This being said, there is one major design system that can be used against DOS attacks.

### Prefer a "Pull" System (to a "Push" system)

External calls can lead to failures, either accidentally or deliberately. To minimize the damage caused by such failures, it is often better to isolate each external call into its own transaction that can be initiated by the recipient of the call.

Consider a system for payments- It is better to let users "pull" by having a function to withdraw funds rather than push funds to them automatically.

The following example is a bid function within an Auction contract. In this "push" system example, a user outbids, and the previous bid is "pushed", or refunded, automatically (similar to our DOSKing example).

```
// bad
function bid() payable {
	require(msg.value >= highestBid);
	if (highestBidder != address(0)) {
		(bool success, ) = highestBidder.call.value(highestBid)("");
		require(success); // if this call consistently fails, no one else can bid
	}
	highestBidder = msg.sender;
	highestBid = msg.value;
}
```

Here's an example of that same Auction contract with a "pull" system. In this example, a user outbids and the previous bid is stored in a mapping called refunds. Then, a withdrawRefund function is added, so users can "pull" their refunds once they are outbid.

```
// good
function bid() payable external {
    require(msg.value >= highestBid);
    if (highestBidder != address(0)) {
        refunds[highestBidder] += highestBid; // record the refund that this user can claim
    }
    highestBidder = msg.sender;
    highestBid = msg.value;
}

function withdrawRefund() external {
    uint refund = refunds[msg.sender];
    refunds[msg.sender] = 0;
    (bool success, ) = msg.sender.call.value(refund)("");
    require(success);
}
```

### The Assignment

In this folder you will find:

1. UpgradedDOSKing.sol - A version of DOSKing that is ready for you to implement a pull system
2. DefendTest.ts - a test file

To complete this challenge:
Make the test in DefendTest.ts pass by updating UpgradedDOSKing.sol to implement a pull system
