
((module) => {
	'use strict';

	module.exports = createClass;

	function createClass(exp, shift, getDigit) {

		var Base = require('x-iterable/create-class').fromGenerator(digits);

		shift *= exp;
		var filter = ~(-1 << exp);

		if (typeof getDigit !== 'function') {
			getDigit = require('./utils/get-digit');
		}

		class PowOfTwo extends Base {

			get integer() {
				return this.reduce((prev, now) => (prev << exp) + now, 0);
			}

			get string() {
				return this.reduce((prev, now) => prev + getDigit(now), '');
			}

		};

		['integer', 'string'].forEach((pname) => PowOfTwo[pname] = propgetter(pname));

		function * digits(int) {
			for (let i = shift; ; i -= exp) {
				yield (int >> i) & filter;
				if (!i) {
					break;
				}
			}
		}

		function propgetter(pname) {
			return (...args) => new PowOfTwo(...args)[pname];
		}

		return PowOfTwo;

	}

})(module);
