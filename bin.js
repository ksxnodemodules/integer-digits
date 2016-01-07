
((module) => {
	'use strict';

	var BinBase = require('x-iterable/create-class').fromGenerator(digits);

	class Bin extends BinBase {

		get boolean() {
			return this.map(Boolean);
		}

		get integer() {
			return this.reduce((prev, now) => (prev << 1) + now, 0);
		}

		get string() {
			return this.reduce((prev, now) => prev + String(now), '');
		}

		valueOf() {
			return this.integer;
		}

		toString() {
			return `0b${this.string}`;
		}

	}

	module.exports = {
		Bin: Bin,
		create: (...args) => new Bin(...args),
		boolean: propgetter('boolean'),
		integer: propgetter('integer'),
		string: propgetter('string'),
		digits: digits
	};

	function * digits(int, shift) {
		for (let i = 1 << shift; i; i >>= 1) {
			yield int & i ? 1 : 0;
		}
	}

	function propgetter(pname) {
		return (...args) => new Bin(...args)[pname];
	}

})(module);
