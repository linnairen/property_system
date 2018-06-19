/**
 * 定义不可改变属性
 * @param {Object} obj
 * @param {String} propName
 * @param {Object} val
 */
const defineConstProto = function (obj,propName,val) {
	Object.defineProperty(obj || this,propName,{
		enumerable: false,
      	writable: false,
      	configurable: false,
      	value: val
	})
};

defineConstProto(Date.prototype,'Format',
	/**
	 * 返回格式化的时间字符串
	 * @param {String} fmt
	 */
	function (fmt) {
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o)
	    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	    return fmt;
	}
);


defineConstProto(Date.prototype,'getDateString',function () {
	return this.Format('yyyy-MM-dd')
});

defineConstProto(Date.prototype,'getTimeString',function () {
	return this.Format('hh:mm:ss')
});

defineConstProto(Date.prototype,'getDateTimeString', function () {
	return this.Format('yyyy-MM-dd hh:mm:ss')
});

defineConstProto(window,'getRegularStringFromSeconds', 
	/**
	 * 返回常用的的时间字符串格式
	 * @param {Number} seconds
	 * @param {Boolean} haveToday
	 */
	function (seconds,haveToday) {
		var now = new Date(),
			then = new Date(seconds*1000),
			date = then.getDateString() + ' ',
			time = then.getTimeString();
		if(now.getDate() == then.getDate() && Math.abs(now.getTime()/1000 - seconds) < 86400){
			date = haveToday ? '今天 ' : ''
		}
		else if(Math.abs(now.getTime()/1000 - seconds) < 1728000){
			if(now.getDate() - then.getDate() == 1){
				date = '昨天 '
			}
			if(now.getDate() - then.getDate() == -1){
				date = '明天 '
			}
		}
		return date + time
	}
);

defineConstProto(String.prototype,'Hav',
	/**
	 * 检测是否含有字符串
	 * @param {String} str
	 */
	function (str) {
		return this.indexOf(str) != -1;
	}
);

defineConstProto(window,'isPhone',
	/**
	 * 检测手机号码
	 * @param {String,Number} phone
	 */
	function (phone) {
		return /^1[3456789]\d{9}$/.test(String(phone));
	}
);
