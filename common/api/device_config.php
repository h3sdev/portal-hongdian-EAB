<<<<<<< HEAD
<?php
session_start();
require_once("get_mac.php");
require_once("get_config.php");
$ip = $_SERVER['REMOTE_ADDR'];
$mac = getMac($ip);
$result["mac"] = $mac;
$result["termSn"] = getTermSn();
$result["device_mac "] = getApMac();
$result["ip"] = getIpAddress();
echo json_encode($result);

=======
<?php
session_start();
require_once("get_mac.php");
require_once("get_config.php");
$ip = $_SERVER['REMOTE_ADDR'];
$mac = getMac($ip);
$result["mac"] = $mac;
$result["termSn"] = getTermSn();
$result["device_mac "] = getApMac();
$result["ip"] = getIpAddress();
echo json_encode($result);

>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
?>