
((module) => {
	'use strict';

	var A_10 = 'A'.charCodeAt() - 10;

	module.exports = (int) => {
		return int < 10 ? String(int) : String.fromCharCode(int + A_10);
	};

})(module);
