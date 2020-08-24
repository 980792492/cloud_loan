import url from '../url.js';
import ajax from '../ajax.js';

export default {
	faceDetectImage(param) {
	    return ajax.payload({
	      url:url.applycredit.faceDetectImage,
	      data: param
	    })
	},
}