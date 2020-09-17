export default{
	
	// 将数字转换成金额显示
	  formatMoney(num) {
		  
	    if (num) {
			num = num/100
	      // if (isNaN(num)) {
	      //   // alert('金额中含有不能识别的字符');
	      //   return;
	      // }
	      num = typeof num == 'string' ? parseFloat(num) : num // 判断是否是字符串如果是字符串转成数字
	      num = num.toFixed(2); // 保留两位
	      console.log(num)
	      num = parseFloat(num); // 转成数字
	      num = num.toLocaleString(); // 转成金额显示模式
	      // 判断是否有小数
	      if (num.indexOf('.') === -1) {
	        num = '￥' + num + '.00';
	      } else {
	        console.log(num.split('.')[1].length)
	        // num = num.split('.')[1].length < 2 ? '￥' + num + '0' : '￥' + num;
	      }
	      return num; // 返回的是字符串23,245.12保留2位小数
	    } else {
	      return num = null;
	    }
	  },
	
	// 手机号格式校验
	formatMobile(phone){
		  if(!(/^1[3456789]\d{9}$/.test(phone))){ 
		        return false; 
		    }else{
				return true;
			} 
	},
	    /*校验15位或18位的身份证号码*/
	    checkIdCardNo(idCardNo){
	        //15位和18位身份证号码的基本校验
	        var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
	        if(!check) return false;
	        //判断长度为15位或18位
	        if(idCardNo.length==15){
	            return check15IdCardNo(idCardNo);
	        }else if(idCardNo.length==18){
	            return check18IdCardNo(idCardNo);
	        }else{
	            return false;
	        }
	    },
		
		   //校验15位的身份证号码
		    check15IdCardNo: function(idCardNo){
		        //15位身份证号码的基本校验
		        var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
		        if(!check) return false;
		        //校验地址码
		        var addressCode = idCardNo.substring(0,6);
		        check = checkAddressCode(addressCode);
		        if(!check) return false;
		        var birDayCode = '19' + idCardNo.substring(6,12);
		        //校验日期码
		        check = checkBirthDayCode(birDayCode);
		        if(!check) return false;
		        //验证校检码
		        return idCardNoUtil.checkParityBit(idCardNo);
		    },
			    /*校验日期码*/
			    checkBirthDayCode(birDayCode){
			        var check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(birDayCode);
			        if(!check) return false;
			        var yyyy = parseInt(birDayCode.substring(0,4),10);
			        var mm = parseInt(birDayCode.substring(4,6),10);
			        var dd = parseInt(birDayCode.substring(6),10);
			        var xdata = new Date(yyyy,mm-1,dd);
			        if(xdata > new Date()){
			            return false;//生日不能大于当前日期
			        }else if ( ( xdata.getFullYear() == yyyy ) && ( xdata.getMonth () == mm - 1 ) && ( xdata.getDate() == dd ) ){
			            return true;
			        }else{
			            return false;
			        }
			    },

		
		    //校验18位的身份证号码
		    check18IdCardNo (idCardNo){
		        //18位身份证号码的基本格式校验
		        var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
		        if(!check) return false;
		        //校验地址码
		        var addressCode = idCardNo.substring(0,6);
		        check = checkAddressCode(addressCode);
		        if(!check) return false;
		        //校验日期码
		        var birDayCode = idCardNo.substring(6,14);
		        check = idCardNoUtil.checkBirthDayCode(birDayCode);
		        if(!check) return false;
		        //验证校检码
		        return idCardNoUtil.checkParityBit(idCardNo);
		    },
			  /*校验地址码*/
			    checkAddressCode: function(addressCode){
			        var check = /^[1-9]\d{5}$/.test(addressCode);
			        if(!check) return false;
			        if(idCardNoUtil.provinceAndCitys[parseInt(addressCode.substring(0,2))]){
			            return true;
			        }else{
			            return false;
			        }
			    },
	
	
}