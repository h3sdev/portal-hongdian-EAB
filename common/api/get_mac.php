<<<<<<< HEAD
<?php
	//获取mac地址
	function getMac($ip) {

        $arp = "arp";

        $mac = shell_exec("$arp -n ".$ip);

        preg_match('/..:..:..:..:..:../',$mac , $matches);

        @$mac = $matches[0];
		// modify by mfhu,add note	
		//echo $ip.$mac;

        if (!isset($mac)) {

            return;

        }else {

            return $mac;

        }

	}
=======
<?php
	//获取mac地址
	function getMac($ip) {

        $arp = "arp";

        $mac = shell_exec("$arp -n ".$ip);

        preg_match('/..:..:..:..:..:../',$mac , $matches);

        @$mac = $matches[0];
		// modify by mfhu,add note	
		//echo $ip.$mac;

        if (!isset($mac)) {

            return;

        }else {

            return $mac;

        }

	}
>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
?>