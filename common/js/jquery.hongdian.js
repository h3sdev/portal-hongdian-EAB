(function($) {
	$.hongdian = {};
	//上报数据
	$.hongdian.uploadData = function (settings, callback) {
		var options = {
			resId : "",//Número de recurso
			resName : "",//Nombre del recurso
			resType : "",//Tipo de recurso
			click : 0,//La cantidad de clics
			view : 0,//Puntos de vista
			playDuration : 0,//Tiempo de juego
			totalDuration:0,//Tiempo Total
			phoneUser: "",
    	};
		$.extend(options, settings);
		console.log(options);
		if(xhr && xhr.readyState != 4) { 
			xhr.abort();
		}
		var xhr = $.post("../../common/api/upload_data.php", {headers:"userPortal_V1.4",options:options},
			function(data,status){
				if(typeof callback == "function"){callback(data);}
			},
			"json"
		);
	};
	//======
	//认证行为上报
	$.hongdian.userAuthBehavior = function (settings, callback) {
		var options = {
			behavior : "",//行为类型	1、注册；2、登录；3、获取验证码
			respStatus : "",//行为响应状//0、成功；-1、失败；-2、流量已用完；-3、网络未响应
			respMsg : "",//行为响应信息
			phone:""//手机号码
    };
		$.extend(options, settings);
		console.log(options);
		$.post("/common/api/upload_user_auth_behavior.php",  {headers:"userPortal_V1.4",options:options},
			function(data,status){
				if(typeof callback == "function"){callback(data);}
			},
			"json"
		);
	};
})(jQuery);