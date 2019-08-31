# coderpad-env-js

Runs a package-limited environment locally. Package list is modeled after coderpad.io.

## Install

```shell
yarn add coderpad-env-js
```

## Use

```javascript
require('coderpad-env-js');

// your code and tests, using available packages
```

## Test Your code locally

```shell
yarn run test-<test_lib_name>
```

## Test on coderpad.io

- Paid: https://coderpad.io/login
- Free: https://coderpad.io/sandbox
- Select "JavaScript" for a vanilla JavaScript environment
- Paste in your code
- Run / Edit / add tests for the "final tweaks"
- Save locally, as Sandbox does not allow Save or Share

## TODO

- [ ] Node.js script (plop) that generates a project with your choice of packages, instead of the redundant selection (bloat).
