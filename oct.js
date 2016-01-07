
((module) => {
	'use strict';

	var OctBase = require('x-iterable/create-class').fromGenerator(digits);
	var getDigit = require('./utils/get-digit');

	class Oct extends OctBase {

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
		Oct: Oct,
		create: (...args) => new Oct(...args),
		integer: propgetter('integer'),
		string: propgetter('string'),
		digits: digits
	};

	function * digits(int, shift) {
		for (shift *= 3; ; shift -= 3) {
			yield (int >> shift) & 0o7;
			if (!shift) {
				break;
			}
		}
	}

	function propgetter(pname) {
		return (...args) => new Oct(...args)[pname];
	}

})(module);
