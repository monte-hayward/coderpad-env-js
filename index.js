// require all packages available according to 
// https://coderpad.io/languages#javascript

// make "async HTTP a little more convenient".
module.exports.async = require('async');
module.exports.bluebird = require('bluebird');
module.exports.fetch = require('isomorphic-fetch');

// testing libraries
module.exports.export chai = require('chai');
module.exports.export sinon = require('sinon');
module.exports.export sinonChai = require('sinon-chai');
module.exports.mocha = require('mocha');


// mimic "an HTML DOM within [the coderpad.io] JS environment"
module.exports.jsdom = require('jsdom');

console.log('coderpad-env-js running. A limited set of packages are now available.');