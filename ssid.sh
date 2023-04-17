#!/bin/bash

#Assign the variables from command-line arguments
search="ssid"
boxID="$(cat /tmp/device.info | grep Device_SN | awk -F'=' '{print  $2}'| tail -c 4 | tr -d ' ')"
#agrega el numero de la caja en el ssid
replace="ssid CopetranWiFi_$boxID"
file="/etc/hdconfig/cli.conf"
remove="security"
#Replace the whole line where the search string is found with the value of replace in the file
sed -i "/$search/c $replace" $file
#Quitar la clave del wifi
sed -i "/$remove/d" $file
#Actualizar la direccion ip del servidor remoto de contenido
search="update_server"
replaceIp="update server 34.198.242.94:8888/freewifi"
sed -i "/$search/c $replaceIp" $file
