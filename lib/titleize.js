'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = titleize;

var _typeOf = require('./typeOf.js');

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function titleize(input) {

	if ((0, _typeOf2.default)(input) === 'string') {
		return input.replace(/[-_]+/g, ' ').trim().replace(/^.|\s+?[a-z]/g, function (chr) {
			return chr.toUpperCase();
		}).replace(/([a-z])([A-Z])/g, function (pattern, chr1, chr2) {
			return chr1 + ' ' + chr2.toUpperCase();
		});
	}
}