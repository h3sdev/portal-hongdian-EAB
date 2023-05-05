#!/bin/bash
#created by DH 05-05-2023
#change this variable to set up a ssid for your device
WiFiSSID="CopetranWiFi"

#Assign the variables from command-line arguments
boxID="$(cat /tmp/device.info | grep Device_SN | awk -F'=' '{print  $2}'| tail -c 4 | tr -d ' ')"

#agrega el número de la caja y renombra por el ssid elegido
replace=" ssid $WiFiSSID_$boxID"

#Replace the whole line where the search string is found with the value of replace in the file
#look for cli file
file="/etc/hdconfig/cli.conf"
search="ssid"
sed -i "/$search/c $replace" $file

#Quitar la clave del la red wifi removiendo toda la linea que contiene la palabra seguridad
remove="security"
sed -i "/$remove/d" $file

#Actualizar la direccion ip del servidor remoto de contenido (ya no se usa, pero en caso de emergencia puede ser útil)
search="update_server"
replaceIp="update server 34.198.242.94:8888/freewifi"
sed -i "/$search/c $replaceIp" $file
