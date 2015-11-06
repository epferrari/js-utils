// create custom events cross browser
function createLegacyEvent(type,options){
	let event = document.createEvent('CustomEvent');
	return event.initCustomEvent(type, options.bubbles || false, options.cancelable || false, options.detail || {});
}

export default function createCustomEvent(type,options,errorHandler) {
	var _customEvent;
	if (window.CustomEvent) {
		try{
			options = options || { bubbles: false, cancelable: false, detail: {} };
			_customEvent = new CustomEvent(type, options);
		}catch (e){
			if(errorHandler && errorHandler.call && errorHandler.apply) errorHandler(e);
			_customEvent = createLegacyEvent(type,options);
		}
	} else {
		_customEvent = createLegacyEvent(type,options);
	}
	return _customEvent;
}
