#!/bin/sh
#7/10/2022
#calls captive portal comprobation
nohup /bin/sh ./root/captive.sh >/dev/null &
#activate ttl command on start
nohup /bin/sh ./root/ttl.sh >/dev/null &
####################################
#hasta que exista el archivo haga loop para pasarlo
FILE_TEMP=/tmp/socket_msg
FILE_STATS=/mnt/web0/stats/socket_msg_0.old
FILE_STATS_2=/mnt/web0/stats/socket_msg_1.old
echo "STATS RUNNING" > /tmp/STATS_status
existe(){
    while :
    do
        echo "entrando al bucle"
        if [ -f "$FILE_TEMP" ]
        then
            #echo "encontrado archivo temporal"
            if [ -f "$FILE_STATS" ]
            then
                #echo "encontrado archivo /mnt/web0/stats/socket_msg_0.old"
                mv /tmp/socket_msg /mnt/web0/stats/socket_msg_2.old && sed -i -e '/{\|}/!d; s/^.*{"/{"/;s/}/},/;s/\r$//g' /mnt/web0/stats/socket_msg_2.old && cat /mnt/web0/stats/socket_msg_2.old >> /mnt/web0/stats/socket_msg_1.old && rm /mnt/web0/stats/socket_msg_2.old
            elif [ -f "$FILE_STATS_2" ]
            then
                #echo "encontrado archivo /mnt/web0/stats/socket_msg_1.old"
                    cat /mnt/web0/stats/socket_msg_1.old >> /mnt/web0/stats/socket_msg_0.old && rm /mnt/web0/stats/socket_msg_1.old
            else
              #echo "archivo " FILE_STATS " no existe creandolo"
              mv /tmp/socket_msg /mnt/web0/stats/socket_msg_0.old && sed -i -e '/{\|}/!d; s/^.*{"/{"/;s/}/},/;s/\r$//g' /mnt/web0/stats/socket_msg_0.old
            fi
        else
          if [ ! -f "$FILE_STATS" ] && [ -f "$FILE_STATS_2" ]
            then
            #echo "falta archivo /mnt/web0/stats/socket_msg_0.old y archivo msg_1 existe"
            cat /mnt/web0/stats/socket_msg_1.old >> /mnt/web0/stats/socket_msg_0.old && rm /mnt/web0/stats/socket_msg_1.old
            fi
        fi
        #echo "esperando 5 segundos"
        sleep 5
    done
}

existe &
