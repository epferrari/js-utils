import typeOf from './typeOf.js';

export default function formatAsPhone(num,options){
	var defaultOptions = {wrapAreaCode:true,delimiter:"-"};
	if(typeOf(options) !== 'object'){
		options = defaultOptions;
	} else {
		// merge with defaults
		Object.keys(defaultOptions).forEach(opt => {
			if(options[opt] === undefined){
				options[opt] = defaultOptions[opt];
			}
		});
	}
	return num && (num.match(/(\d)/g) || []).join('').replace(/^(\d{3})(\d{3})(\d{4}).*$/,(pattern,g1,g2,g3) => {
		if(options.wrapAreaCode){
			return '(' + g1 + ')' + g2 + options.delimiter + g3;
		}else{
			return [g1,g2,g3].join(options.delimiter);
		}
	});
}
