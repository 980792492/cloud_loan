<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	@import url("https://at.alicdn.com/t/font_2007743_x1d0s1006rb.css");
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */

	uni-page-body,
	html,
	body {
		height: 100%;
	}
	/* // */
	@font-face {
	  font-family: 'iconfont';  /* project id 2007743 */
	  src: url('https://at.alicdn.com/t/font_2007743_pdll9tsgy8.eot');
	  src: url('https://at.alicdn.com/t/font_2007743_pdll9tsgy8.eot?#iefix') format('embedded-opentype'),
	  url('https://at.alicdn.com/t/font_2007743_pdll9tsgy8.woff2') format('woff2'),
	  url('https://at.alicdn.com/t/font_2007743_pdll9tsgy8.woff') format('woff'),
	  url('https://at.alicdn.com/t/font_2007743_pdll9tsgy8.ttf') format('truetype'),
	  url('https://at.alicdn.com/t/font_2007743_pdll9tsgy8.svg#iconfont') format('svg');
	}
	.icon {
		font-size: 28upx;
		color: #3C3E49;
		font-family: iconfont;
	}
	
	/*  去掉 button的外边框 */
	uni-button:after {
		border: none;
	}
	
	
	
</style>
