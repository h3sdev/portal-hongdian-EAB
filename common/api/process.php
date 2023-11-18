<?php
try
{
	//This temp data for get user name
	//File get config mac and serial box
	require_once("get_config.php");
	require_once("get_ad.php");
	require_once("get_info_box.php");
	// Test section
	// $macUserDevice = "20:54:fa:19:bf:74";
	// $serialBox = "9303MZH20180525004";
	$macUserDevice = $_SESSION["mac"];
	$serialBox = $_SESSION["termSn"];
	//Type Disp File get $type and $model
	setcookie("userMac", $macUserDevice);
	setcookie("userSN", $serialBox);
	setcookie("sessionStat", $userSessionStat);
	//Try get data from form ant put to file recors.json
	if (isset($_POST['phone']))
	{
		date_default_timezone_set('America/Bogota');
		$userAge = $_REQUEST['birthYear'];
		$signupDate = date("Y-m-d H:i:s");
		$usrData= array(
			'usr_phone'  => empty($_REQUEST['phone'])   ? NULL : (@$_REQUEST['phone']),
			'serial_box' => $serialBox,
			'date_record' => $signupDate,
			'usr_name'  => empty($_REQUEST['name'])   ? NULL : (@$_REQUEST['name']),
			'usr_email'  => empty($_REQUEST['email'])   ? NULL : (@$_REQUEST['email']),
			'usr_state' => empty($_REQUEST['controlSelect']) ? NULL : (@$_REQUEST['controlSelect']),
			'usr_city'   => empty($_REQUEST['city'])    ? NULL : (@$_REQUEST['city']),
			'usr_age' => $userAge,
			'usr_mac' => $macUserDevice
		);
		$jsonDataRecord = json_encode($usrData);
		$recordsFile = fopen("records", "a+") or die("Fail open file");
		//Add content
		$lineBreak = ''. PHP_EOL;
		fwrite($recordsFile, $jsonDataRecord);
		fwrite($recordsFile, $lineBreak);
		fclose($recordsFile);
		$recordsSignup = fopen("records_signup", "a+") or die("Fail open file");
		fwrite($recordsSignup, $jsonDataRecord);
		fwrite($recordsSignup, $lineBreak);
		fclose($recordsSignup);
		throw new Exception('success');
	}
}
catch(\Exception $e)
{
	echo $e->getMessage();
}
