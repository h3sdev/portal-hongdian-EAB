<?php
	//session_start();
	//检测域名
	
	/*$host= $_SERVER['HTTP_HOST'];

	if (isset($_REQUEST["preview"])) 
	{
		$preview = $_REQUEST["preview"];
		echo $preview;
		if(!isset($_SESSION["preview"])) {
			$_SESSION["preview"] = $preview;
			echo $_SESSION["preview"];
		}
		//缓存域名
		if (!isset($_SESSION["host"])) 
		{
			$_SESSION["host"] = $host;
		}
		header("Location:http://".$host."/homePage/web/after_auth.html");
	}
	else
	{*/
		/*//Comment for testing
		require_once("common/api/get_mac.php");
		require_once("common/api/get_config.php");

		//解决ios弹出框问题
        $ip = $_SERVER['REMOTE_ADDR'];
        $mac = getMac($ip);
        $auth_mac = shell_exec("ls /tmp/ |grep ios_".$mac);
        if (isset($auth_mac)) {
            shell_exec("rm /tmp/ios_".$mac);
            echo '<html><head><title>Success</title></head><body>success</body></html>';
            exit();
        }
			//缓存域名
            if (!isset($_SESSION["domain"])) {
                $domain = getDomain();
                $_SESSION["domain"] = $domain;
            }
            //缓存根目录
            if (!isset($_SESSION["docRoot"])) {
                $docRoot = $_SERVER["DOCUMENT_ROOT"]."/";
                $_SESSION["docRoot"] = $docRoot;
            }
		*/
		//Get domain, comment for testing
		//$domain = getDomain();
		//Get domain for test
		$domain = "localhost/copetran";
		if($host != $domain){
			echo $host;
			header("Location: http://".$domain."/homePage/web/homePage.html");
			exit();
		}
		header("Location:http://".$domain."/homePage/web/homePage.html");
	//}
?>