import typeOf from './typeOf.js';

export default function titleize(input){

	if(typeOf(input) === 'string'){
		return input
		.replace(/[-_]+/g,' ')
		.trim()
		.replace(/^.|\s+?[a-z]/g,(chr) => chr.toUpperCase())
		.replace(/([a-z])([A-Z])/g,(pattern,chr1,chr2) => chr1 + ' ' + chr2.toUpperCase());
	}
}
