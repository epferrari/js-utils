'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = createEvent;
// create events
function createEvent(type, errorHandler) {
	var _event;
	try {
		_event = new Event(type);
	} catch (e) {
		if (errorHandler && errorHandler.call && errorHandler.apply) errorHandler(e);
		_event = document.createEvent('event');
		_event.initEvent(type, true, false);
	}
	return _event;
}