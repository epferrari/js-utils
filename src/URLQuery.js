export default function URLQuery(){
	var queryString = window.location.href.replace(/^.*\?(.*[^\/])\/.*$/,'$1').split('&');
	return queryString.reduce((accum,param) => {
		let _param = param.split('='),
				key = _param[0],
				val = _param[1];
		accum[key] = val;
		return accum;
	},{});
}
