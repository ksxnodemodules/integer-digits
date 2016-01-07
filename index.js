
((module) => {
	'use strict';

	module.exports = {
		bin: require('./bin.js'),
		hex: require('./hex.js'),
		oct: require('./oct.js'),
		exp: require('./exp.js'),
		any: require('./any.js'),
		utils: require('./utils')
	};

})(module);
