'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = formatAsPhone;

var _typeOf = require('./typeOf.js');

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatAsPhone(num, options) {
	var defaultOptions = { wrapAreaCode: true, delimiter: "-" };
	if ((0, _typeOf2.default)(options) !== 'object') {
		options = defaultOptions;
	} else {
		// merge with defaults
		Object.keys(defaultOptions).forEach(function (opt) {
			if (options[opt] === undefined) {
				options[opt] = defaultOptions[opt];
			}
		});
	}
	return num && (num.match(/(\d)/g) || []).join('').replace(/^(\d{3})(\d{3})(\d{4}).*$/, function (pattern, g1, g2, g3) {
		if (options.wrapAreaCode) {
			return '(' + g1 + ')' + g2 + options.delimiter + g3;
		} else {
			return [g1, g2, g3].join(options.delimiter);
		}
	});
}