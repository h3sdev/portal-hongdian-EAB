#!/bin/sh
#7/10/2022
#Stores captive file value inside a variable
echo "CAPTIVE VALIDATION STARTED" > /tmp/CAPTIVE_status
CAPTIVE_COUNTER="/root/CAPTIVE"
while [ true ]
do
  echo "in loop"
  sleep 6m
	if dig @192.168.0.1 busconectado.com | grep -q 'NOERROR'
  #must state NOERROR to be true
	then echo "OK"
	#if it can reach the server will overwrite CAPTIVE file and break
  echo "CAPTIVE AVAILABLE" >> /tmp/CAPTIVE_status
  echo 0 > $CAPTIVE_COUNTER
  break
 
	else echo "ERROR"
     #Create CAPTIVE file just in case it doesn't exist
    if [ ! -f $CAPTIVE_COUNTER ]; then
        echo 0 > $CAPTIVE_COUNTER
    fi
    sleep 2
    PRIV=$(cat $CAPTIVE_COUNTER|bc)
    TMP=$(echo 1+$PRIV|bc)
    echo $TMP > $CAPTIVE_COUNTER

    if [ "$PRIV" -gt 3 ]
    then
      echo "too many tries"
      echo 0 > $CAPTIVE_COUNTER
      break
    else
      echo "shutting down the router"
      shutdown -r 00
    fi 
	fi
done
echo "Server reached" 
