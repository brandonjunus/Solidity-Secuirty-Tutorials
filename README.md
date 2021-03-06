# Solidity Security Basics

Welcome to this Solidity Security Basics!

- This tutorial series is designed to teach you solidity's common security vulnerabilities as well as best practices on how to defend against them.
- This tutorial series requires basic knowledge of solidity syntax.

### How to use this repo

- Before you begin, run:

```
npm install
npx hardhat compile
npx hardhat node
```

- In the contract folder, you will see sub-folders named with some of Solidity's most famous security vulnerabilities
  - For example- within the contract folder, you will see a sub-folder called "Reenterency"
- Within each vulnerability folder you will see a two folders titled: "Step One- Hack" and "Step Two- Defend". Each of these folders contains a readme with some background on the vulnerability itself, and instructions on how to complete each step
  - Be sure to do "Step One- Hack" before doing "Step Two- Defend"
- Complete the tasks laid out in each vulnerability to complete this tutorial series!

### Running Tests

This tutorial series requires you to run specific test files.
Before running any test files, be sure to run:

```
npx hardhat node
```

This runs a local blockchain so you can begin testing.
Run a test file by running:

```
npx hardhat test "test file name with full directory"
```

Example:

```
"contracts/Reenterency/Step One- Hack/HackTest"
```

### Console.log in Solidity

You might have noticed that we have imported the following in each .sol file:

```
import  "hardhat/console.sol";
```

This allows you to use console.log to help debugging your code! Use it like this:

```
console.log("Test: %s", variableToLog);
```

Your logs should then appear when you run your test.

### Want to learn more from the experts?

Want to learn Solidity security and best practices from engineers who have worked on & audited crypto protocols with billions in total value locked?
Want to build projects and receive personalized feedback in the same format in which our audit arm delivers feedback to paying clients?
Want to get network with founders, investors, engineers and hiring partners?

Get all this and more through the 0xMacro Engineering Fellowship. Learn more about how to become a Security-Informed Solidity Engineer at https://0xmacro.com/engineering-fellowship
