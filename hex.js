
((module) => {
	'use strict';

	var HexBase = require('x-iterable/create-class').fromGenerator(digits);
	var getDigit = require('./utils/get-digit');

	class Hex extends HexBase {

		get integer() {
			return this.reduce((prev, now) => (prev << 4) + now, 0);
		}

		get string() {
			return this.reduce((prev, now) => prev + getDigit(now), '');
		}

		valueOf() {
			return this.integer;
		}

		toString() {
			return `0x${this.string}`;
		}

	}

	module.exports = {
		Hex: Hex,
		create: (...args) => new Hex(...args),
		integer: propgetter('integer'),
		string: propgetter('string'),
		digits: digits
	};

	function * digits(int, shift) {
		for (shift <<= 2; ; shift -= 4) {
			yield (int >> shift) & 0xF;
			if (!shift) {
				break;
			}
		}
	}

	function propgetter(pname) {
		return (...args) => new Hex(...args)[pname];
	}

})(module);
