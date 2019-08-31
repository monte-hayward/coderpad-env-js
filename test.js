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

console.log('	', typeof async, 'async');
console.log('	', typeof bluebird, 'bluebird');
console.log('	', typeof fetch, 'fetch');
console.log('	', typeof chai, 'chai');
console.log('	', typeof sinonChai, 'sinonChai');
console.log('	', typeof sinon, 'sinon');
console.log('	', typeof mocha, 'mocha');
console.log('	', typeof lodash, 'lodash');
console.log('	', typeof underscore, 'underscore');
console.log('	', typeof ramda, 'ramda');
console.log('	', typeof jsdom, 'jsdom');

console.log(
	`You may alias as desired. E.g.,
	const _ = lodash; // OR
	const _ = underscore;`
);