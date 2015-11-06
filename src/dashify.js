import typeOf from './typeOf.js';

export default function dashify(input){
	if(typeOf(input) === 'string'){
		return input
		.trim()
		.replace(/([a-z])([A-Z\d])/g,(pattern,chr1,chr2) => chr1 + '-' + chr2.toLowerCase())
		.replace(/([\d])([A-Z])/g,(pattern,chr1,chr2) => chr1 + '-' + chr2.toLowerCase())
		.replace(/[A-Z]/g,(chr) => chr.toLowerCase())
		.replace(/\s+|[_]+/g,'-')
		.replace(/-{2,}/g,'-');
	}
}
