'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = URLQuery;
function URLQuery() {
	var queryString = window.location.href.replace(/^.*\?(.*[^\/])\/.*$/, '$1').split('&');
	return queryString.reduce(function (accum, param) {
		var _param = param.split('='),
		    key = _param[0],
		    val = _param[1];
		accum[key] = val;
		return accum;
	}, {});
}