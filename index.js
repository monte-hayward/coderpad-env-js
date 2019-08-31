// require all packages available according to 
// https://coderpad.io/languages#javascript

// make "async HTTP a little more convenient".
module.exports.async = require('async');
module.exports.bluebird = require('bluebird');
module.exports.q = require('q');
module.exports.fetch = require('isomorphic-fetch');

// testing libraries
module.exports.chai = require('chai');
module.exports.sinon = require('sinon');
module.exports.sinonChai = require('sinon-chai');
module.exports.mocha = require('mocha');

// functional helper libraries
module.exports.lodash = require('lodash');
module.exports.underscore = require('underscore');
module.exports.ramda = require('ramda');


// mimic "an HTML DOM within [the coderpad.io] JS environment"
module.exports.jsdom = require('jsdom');

console.log('coderpad-env-js running. A limited set of packages are now available.');