#!/bin/bash
<<<<<<< HEAD

#Assign the variables from command-line arguments
search="ssid"
boxID="$(cat /tmp/device.info | grep Device_SN | awk -F'=' '{print  $2}'| tail -c 4 | tr -d ' ')"
replace="ssid CopetranWiFi_$boxID"
file="/etc/hdconfig/cli.conf"
remove="security"
#Replace the whole line where the search string is found with the value of replace in the file
sed -i "/$search/c\ $replace" $file
#Quitar la clave del wifi
sed -i "/$remove/d" $file
#Actualizar la direccion ip del servidor remoto de contenido
search="update server"
replaceIp="update server 34.198.242.94:8888/freewifi"
sed -i "/$search/c\ $replaceIp" $file
=======
#created by DH 09-05-2023
#change this variable to set up a ssid for your device
WiFiSSID="CopetranWiFi"

#Assign the variables from command-line arguments
boxID="$(cat /tmp/device.info | grep Device_SN | awk -F'=' '{print  $2}'| tail -c 4 | tr -d ' ')"

#adds the box number to the SSID and renames it to the chosen SSID
replace="\ ssid $WiFiSSID\_$boxID"

#Replace the whole line where the search string is found with the value of replace in the file
#look for cli file
file="/etc/hdconfig/cli.conf"
search="ssid"
sed -i "/$search/c$replace" $file

#Removes the Wi-Fi network key by removing the whole line that contains the "security" string
remove="security"
sed -i "/$remove/d" $file

#Updates the IP address of the remote content server (no longer used, but may be useful in case of emergency)
search="update_server"
replaceIp="update server 34.198.242.94:8888/freewifi"
sed -i "/$search/c $replaceIp" $file
>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
