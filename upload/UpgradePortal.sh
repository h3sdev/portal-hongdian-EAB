#!/bin/sh
#15/04/2022
echo "this will replace frontend portal files"
#unzip -o -DD /mnt/web0/upload/PortalFix.zip -d /mnt

checkStatsInRC=$(grep -w "stats" /etc/rc.local 2>/dev/null)

if [ -z $checkStatsInRC ];
then
    echo "No stats line in rc.local"
    echo "Replacing rc.local"
    `cp /mnt/web0/upload/rc.local /etc/rc.local`
    echo "Giving permissions to rc.local"
    `chmod 777 /etc/rc.local`
    sleep 1;
else
    echo "stats already in rc.local"
fi

    echo "move new stats AND PERMISSION SET"
    `cp /mnt/web0/upload/stats.sh /root/stats.sh`
    `chmod 777 /root/stats.sh`

    echo "move ttl script"
    `cp /mnt/web0/upload/ttl.sh /root/ttl.sh`
    `chmod 777 /root/ttl.sh`

    echo "move captive script"
    `cp /mnt/web0/upload/captive.sh /root/captive.sh`
    `chmod 777 /root/captive.sh`

    echo "move new crontab"
    `cp /mnt/web0/upload/crontab /etc/crontab`
    `chmod 644 /etc/crontab`

    #echo "extracting File actions actionsModule for upload folder"
    #`unzip -o -j -DD "/mnt/web0/upload/PortalFix.zip" "web0/upload/actionsModule.py" -d "/mnt/web0/upload"`
    
    echo "extracting and give permissions to actions module"
    `chmod 777 /mnt/web0/upload/actionsModule.py`

    #echo "give permissions to Upgrade portal"
    #`chmod 777 /mnt/web0/upload/UpgradePortal.sh`

    echo "give permissions to everything in portal"
    `chmod 777 -R /mnt/web0`
