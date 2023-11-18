<?php 
//Comentar para pruebas
    if(isset($_REQUEST["preview"])){
        $preview = $_REQUEST["preview"];
        if(isset($_SESSION["preview"])) {
                $_SESSION["preview"] = $preview;
            }
            else{
                    $_SESSION["preview"] = $preview;
        }
    }
    else{
            if(isset($_SESSION["preview"])) {
                    $preview = $_SESSION["preview"];
                }
        else{
                require_once("init_data.php");
        
                //apk需要服务器域名
                //Requerir el nombre de dominio del servidor.
            $domain = getDomain();
            header("Host:".$domain);
        }
    }


    $isModem = getModem(); //查询路由 //Ruta de consulta
    $host= $_SERVER['HTTP_HOST'];

    //读取全屏广告 //Leer anuncios a pantalla completa
    //参数说明 第一个：广告位编号 第二个：当前时间 第三个：当前位置（站点）
    //Descripción del parámetro Primero: Número de espacio publicitario Segundo: Hora actual Tercero: Posición actual (sitio)
    $fullAd = getAd("010001", date("H"), "");
    $interval = $fullAd["interval"];
    $imgArr = $fullAd["img"];

    //apk需要PHPSESSID认证来阻止广告弹出
    //Apk requiere la autenticación PHPSESSID para evitar que aparezcan anuncios.
    $sessionId = session_id();
    header("Cookie: PHPSESSID=".$sessionId);

    //获取跳转网址 //Obtener URL de salto
    $dataContent = file_get_contents("../data/jump_url");
    $apiData = json_decode($dataContent, true);
    $url = $apiData["apk_jump_url"];
    header("jumpUrl:".$url);
    //获取平台服务器地址
    //Obtener la dirección del servidor de la plataforma.
    $serverDataContent = file_get_contents("../data/server_api");
    $serverData = json_decode($serverDataContent, true);
    $serverHost = $serverData["server_host"];
    header("serverHost:".$serverHost);
//Fin de la funcion que optiene Mac y SN
?>