<<<<<<< HEAD
<?php
	require_once("get_mac.php");
	require_once("get_config.php");
	
	//缓存ip
	if (!isset($_SESSION["ip"])) {
		$ip = $_SERVER['REMOTE_ADDR'];
		$_SESSION["ip"] = $ip;
	}	
	
	//缓存mac
	if (!isset($_SESSION["mac"])) {
		$ip = $_SERVER['REMOTE_ADDR'];
		$mac = getMac($ip);
		$_SESSION["mac"] = $mac;
	}
	
	//缓存一级菜单
/*	if (!isset($_SESSION["menu"])) {
		$menuContent = file_get_contents($_SESSION["docRoot"]."common/data/menu");
		$menuJson = json_decode($menuContent, true);
		$_SESSION["menu"] = $menuJson;
	}*/
	
	//缓存设备sn
	if(!isset($_SESSION["termSn"])){
		$termSn = getTermSn();
		$_SESSION["termSn"] = $termSn;
	}
=======
<?php
	require_once("get_mac.php");
	require_once("get_config.php");
	
	//缓存ip
	if (!isset($_SESSION["ip"])) {
		$ip = $_SERVER['REMOTE_ADDR'];
		$_SESSION["ip"] = $ip;
	}	
	
	//缓存mac
	if (!isset($_SESSION["mac"])) {
		$ip = $_SERVER['REMOTE_ADDR'];
		$mac = getMac($ip);
		$_SESSION["mac"] = $mac;
	}
	
	//缓存一级菜单
/*	if (!isset($_SESSION["menu"])) {
		$menuContent = file_get_contents($_SESSION["docRoot"]."common/data/menu");
		$menuJson = json_decode($menuContent, true);
		$_SESSION["menu"] = $menuJson;
	}*/
	
	//缓存设备sn
	if(!isset($_SESSION["termSn"])){
		$termSn = getTermSn();
		$_SESSION["termSn"] = $termSn;
	}
>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
?>