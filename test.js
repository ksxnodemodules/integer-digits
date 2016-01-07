
function Test() {
	'use strict';

	var ProductIterable = require('x-iterable/product-iterable');
	var integerDigits = require('integer-digits');

	var integers = [1234, 225, 66, 333333, 666, 10, 12, 0];
	var shifts = [0, 1, 2, 3, 4, 5, 6, 7];

	((out) => {

		calltest((int, shift, unit) => {
			var object = out[`{unit: ${unit}, int: ${int}, shift: ${shift}}`] = {};
			testmtd(unit, object, 'string', int, shift);
			testmtd(unit, object, 'integer', int, shift);
		}, ['bin', 'hex', 'oct']);

		function testmtd(unit, object, pname, ...args) {
			object[pname] = integerDigits[unit][pname](...args);
		}

	})(this['{bin, hex, oct}'] = {});

	((out) =>
		calltest((int, shift, unit, be) => {
			var object = out[`{unit: ${unit}, ${unit === 'exp' ? 'exp' : 'base'}: ${be}, int: ${int}, shift: ${shift}}`] = {};
			var Class = object.class = integerDigits[unit](be, shift);
			var instance = object.object = new Class(int);
			['string', 'integer'].forEach((pname) => object[pname] = instance[pname]);
		}, ['exp'], [2, 3, 4, 5, 6, 7, 8, 9, 10])
	)(this['{exp, any}'] = {});

	function calltest(test, ...args) {
		ProductIterable.create(integers, shifts, ...args).forEach((element) => test(...element));
	}

}

module.exports = new Test();
