# coderpad-env-js

Runs a package-limited environment locally. Package list is modeled after coderpad.io.

## Install

```shell
yarn add coderpad-env-js
```

## Usage

Import the needed libraries.

```javascript
const {
    async,
    bluebird,
    fetch,
    chai,
    sinonChai,
    sinon,
    mocha,
    lodash,
    underscore,
    ramda,
    jsdom,
} = require('./index');

// your code and tests, using available packages

```

You may omit uneeded libs and alias as desired. E.g.,
const _ = lodash; // OR
const _ = underscore;

### Expect

| Type  | Name |
|:--|:--|
| object| async|
| function| bluebird|
| function| fetch|
| object| chai|
| function| sinonChai|
| object| sinon|
| function| mocha|
| function| lodash|
| function| underscore|
| object| ramda|
| object| jsdom|

## Test your code locally

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
