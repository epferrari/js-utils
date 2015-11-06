import typeOf from './typeOf.js';

export default function camelize(input){
	if(typeOf(input) === 'string'){
		return input
		.replace(/\W+?[a-z]|\_+?[a-z]/g,(chr) => chr.toUpperCase())
		.replace(/\W+|\_+/g,'');
	}
}
