import url from '../url.js';
import ajax from '../ajax.js';

export default {
	login(param) {
	    return ajax.payload({
	      url:url.login.appLogin,
	      data: param
	    })
	}
}