import url from '../url.js';
import ajax from '../ajax.js';

export default {
	isCredit(param) {
	    return ajax.payload({
	      url:url.index.queryCredit,
	      data: param
	    })
	},
}