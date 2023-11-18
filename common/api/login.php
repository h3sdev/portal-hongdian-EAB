<?php
try {
    $usrPhoneLogin =  $_REQUEST['phone'];
    $connection = file_get_contents("records_signup");
    if(!$connection)
    {
        header("../../index.html");
    }
    else
    {
        date_default_timezone_set('America/Bogota');
        $veriSuccess = false;
        $fileLines = file("records_signup");
        // Ejecuta el codigo segun el numero de lineas o registros existente
        foreach ($fileLines as $numFileLine => $recordLine)
        {
            $recordData = json_decode($recordLine, true);
            $usrPhone = $recordData['usr_phone'];
            $serialBox = $recordData['serial_box'];
            if ($usrPhoneLogin == $usrPhone)
            {
                $usrDataLogin= array(
                    'usr_phone'  => $usrPhone,
                    'serial_box' => $serialBox,
                    'dt_login' => date("Y-m-d h:i:s")
                );
                $jsonDataLogin = json_encode($usrDataLogin);
                $loginFile=fopen("login_records","a+") or die("Fail open file");
                // Add content
                $lineBreak = ''. PHP_EOL;
                fwrite( $loginFile, $jsonDataLogin );
                fwrite($loginFile, $lineBreak);
                fclose($loginFile);
                $veriSuccess =  'true';
                echo $veriSuccess;
            }
            else
            {
                $veriSuccess = '';
            }
        }
    }
    throw new Exception($veriSuccess);
}
catch (\Exception $e) {
    echo $e->getMessage();
}