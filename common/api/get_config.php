<?php
	/**
	 * 路由器中读取配置文件
	 * 参数：配置名称
	 */
	function getConfig($file, $param) {
		$value = "";
		$file = fopen($file,"r");
		while(!feof($file)) {
			//读取一条记录
			$line = fgets($file);
			if (strpos($line, $param) === 0) {
				$arr = explode("=",$line);
				$value = trim($arr[1]);
				break;
			}
			
		}
		//关闭文件
		fclose($file);
		return $value;
	}
	
	/**
	 * 路由器中读取run.config配置文件
	 * 参数：配置名称
	 */
	function getRunConfig($param) {
		return getConfig("/tmp/hdconfig/run.conf", $param);
	}


	/**
	 * 路由器中读取cli.conf配置文件
	 * 参数：配置名称
	 */
	function getCliConfig($param) {
		//return getConfigofCli("/tmp/hdconfig/cli.conf", $param);
		$value = "";
		$file = fopen("/tmp/hdconfig/cli.conf","r");
		while(!feof($file)) {
			//读取一条记录
			$line = fgets($file);
			if (strpos($line, $param) === 0 || strpos($line, $param) > 0) {
				$line = str_replace($param,"",$line);
				$arr = explode("/",$line);
				$value = trim($arr[0]);
				break;
			}

		}
		//关闭文件
		fclose($file);
		return $value;
	}


	/**
	 * 路由器中读取设备ip
	 * 参数：配置名称
	 */
	function getIpAddress(){
		return getCliConfig("ip address");
	}


	/**
	 * 路由器中读取device.info配置文件
	 * 参数：配置名称
	 */
	function getDeviceConfig($param) {
		return getConfig("/tmp/device.info", $param);
	}
	
	/**
	 * 获取本地域名
	 * 
	 */
	function getDomain() {
		return getRunConfig("domain address");
	}	
	
	/**
	 * 获取认证服务器地址
	 * 
	 */
	function getAuthHost() {
		return getRunConfig("auth host");
	}

	/**
	 * 获取欢迎页
	 * 
	 */
	function getWelcome() {
		return getRunConfig("page welcome");
	}
	
	/**
	 * 获取设备编号
	 * 
	 */
	function getTermSn() {
		return getDeviceConfig("Device_SN");
	}

	/**
	 * 获取设备mac
	 *
	 */
	function getApMac() {
		return getDeviceConfig("AP_MAC");
	}

	
	/**
	 * 获取上网时长
	 * 
	 */
	function getexpireTime() {
		return getRunConfig("expire time");
	}

	/*
	 *	检查当前网络信号
	 */
	function getModem() {
		//$modem = shell_exec("route -n | grep modem"); //3G卡
		$modem = shell_exec("route -n | grep eth0"); //有线
		return isset($modem);
	}
	
	//测试
	//echo "==".getTermSn()."==";
	//echo "==".getIpAddress()."==";
?>