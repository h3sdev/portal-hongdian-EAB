#!/bin/sh
#24/04/2024
#Stores captive file value inside a variable
echo "CAPTIVE VALIDATION STARTED" > /tmp/CAPTIVE_status
CAPTIVE_COUNTER="/root/CAPTIVE"
while [ true ]
do
  echo "in loop"
  sleep 3m
  if [ -d /mnt/web0/upload ]
  #check if /mnt/web0/uploads directory exists
  then 
    echo "OK"
    #if directory exists, overwrite CAPTIVE file and break
    echo "CAPTIVE AVAILABLE" >> /tmp/CAPTIVE_status
    echo 0 > $CAPTIVE_COUNTER
    break
  else 
    echo "ERROR"
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
echo "Directory exists" 

