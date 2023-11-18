<<<<<<< HEAD
<?php
 require_once("get_mac.php");
 $ip = $_SERVER['REMOTE_ADDR'];
 $mac = getMac($ip);
 $mac = strtoupper($mac);
 $command = "iptables -t mangle -nvL internet |grep";
 $result = shell_exec("iptables -t mangle -nvL internet |grep ".$mac);
 if (isset($result)) {
	echo json_encode( array( 'code' => 1));
 }else {
	echo json_encode( array( 'code' => 0));
 }

 /*Este código es un script de PHP que realiza lo siguiente:
Primero, incluye el archivo "get_mac.php" que contiene una función para obtener la dirección MAC de un dispositivo a partir de su dirección IP.
Luego, se obtiene la dirección IP del dispositivo que está accediendo al script a través de la variable $_SERVER['REMOTE_ADDR'].
Se utiliza la función getMac() para obtener la dirección MAC correspondiente a la dirección IP obtenida en el paso anterior.
Se convierte la dirección MAC a letras mayúsculas utilizando la función strtoupper().
Se construye un comando de shell para buscar la dirección MAC en una regla iptables llamada "internet".
Se ejecuta el comando utilizando la función shell_exec() y se almacena el resultado en la variable $result.
Se verifica si el resultado obtenido contiene la dirección MAC buscada utilizando la función isset() y se imprime el resultado en formato JSON.
En resumen, este código busca la dirección MAC de un dispositivo a través de su dirección IP y verifica si esta dirección está incluida en una regla de iptables.
*/

?>
=======
<?php
 require_once("get_mac.php");
 $ip = $_SERVER['REMOTE_ADDR'];
 $mac = getMac($ip);
 $mac = strtoupper($mac);
 $command = "iptables -t mangle -nvL internet |grep";
 $result = shell_exec("iptables -t mangle -nvL internet |grep ".$mac);
 if (isset($result)) {
	echo json_encode( array( 'code' => 1));
 }else {
	echo json_encode( array( 'code' => 0));
 }

 /*Este código es un script de PHP que realiza lo siguiente:
Primero, incluye el archivo "get_mac.php" que contiene una función para obtener la dirección MAC de un dispositivo a partir de su dirección IP.
Luego, se obtiene la dirección IP del dispositivo que está accediendo al script a través de la variable $_SERVER['REMOTE_ADDR'].
Se utiliza la función getMac() para obtener la dirección MAC correspondiente a la dirección IP obtenida en el paso anterior.
Se convierte la dirección MAC a letras mayúsculas utilizando la función strtoupper().
Se construye un comando de shell para buscar la dirección MAC en una regla iptables llamada "internet".
Se ejecuta el comando utilizando la función shell_exec() y se almacena el resultado en la variable $result.
Se verifica si el resultado obtenido contiene la dirección MAC buscada utilizando la función isset() y se imprime el resultado en formato JSON.
En resumen, este código busca la dirección MAC de un dispositivo a través de su dirección IP y verifica si esta dirección está incluida en una regla de iptables.
*/

?>
>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
