#!/bin/bash
#to use this script you must copu to the root of the eab this file then give 777 permissions with command chmod 777 up.sh
#also copy to the root of the eab the version of the portal you want to install and rename it as portal.zip
#execute with ./up.sh it will set up the portal for you
unzip portal.zip -d /mnt/web0 && chmod 777 /mnt/web0/ssid.sh && ./ssid.sh && mv /mnt/web0/run.conf /etc/hdconfig/run.conf && chmod 777 /etc/hdconfig/run.conf && chmod 777 /mnt/web0/uploads/UpgradePortal.sh && ./mnt/web0/uploads/UpgradePortal.sh && reboot -f