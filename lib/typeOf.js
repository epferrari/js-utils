"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = typeOf;
function typeOf(obj) {
	return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}