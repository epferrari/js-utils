'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = camelize;

var _typeOf = require('./typeOf.js');

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function camelize(input) {
	if ((0, _typeOf2.default)(input) === 'string') {
		return input.replace(/\W+?[a-z]|\_+?[a-z]/g, function (chr) {
			return chr.toUpperCase();
		}).replace(/\W+|\_+/g, '');
	}
}