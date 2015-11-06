'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = dashify;

var _typeOf = require('./typeOf.js');

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dashify(input) {
	if ((0, _typeOf2.default)(input) === 'string') {
		return input.trim().replace(/([a-z])([A-Z\d])/g, function (pattern, chr1, chr2) {
			return chr1 + '-' + chr2.toLowerCase();
		}).replace(/([\d])([A-Z])/g, function (pattern, chr1, chr2) {
			return chr1 + '-' + chr2.toLowerCase();
		}).replace(/[A-Z]/g, function (chr) {
			return chr.toLowerCase();
		}).replace(/\s+|[_]+/g, '-').replace(/-{2,}/g, '-');
	}
}