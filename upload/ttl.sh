#!/bin/sh
#7/10/2022
echo "TTL SET" > /tmp/TTL_status
while :
do
	tableCheckTTL=$(iptables -n -t mangle -L POSTROUTING 2>/dev/null | grep "TTL" 2>/dev/null)

	if [ -z $tableCheckTTL ];
	then
		echo "empty executing fixing ttl"
		`iptables -t mangle -A POSTROUTING -j TTL --ttl-set 65`
		sleep 3;
	else
		echo "rule already set TTL to 65"
		sleep 6;
	fi
done
