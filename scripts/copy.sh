#!/bin/bash
#use -rn to copy without replacing the files, can be used if copy fails. 
cp -rv /mnt/udisk/web0/* /mnt/web0 >> copy_$(date +%Y-%m-%d)_$(cat /tmp/device.info | grep Device_SN | awk -F'=' '{print  $2}' | tr -d ' ').log &
