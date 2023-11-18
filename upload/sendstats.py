# -*- coding: utf-8 -*-
    
# Send files to server
# 18May
import time
import subprocess
import json
import os
import os.path
from os import path

ARCHIVO = "/mnt/web0/stats/socket_msg_0.old"

#Function return if exist file
if (path.exists(ARCHIVO)):
    serial_box = subprocess.check_output("cat /etc/system.info | grep -o -w '\w\{16\}' | sort --unique | cut -c 14-", shell=True)
    URL = "http://ads.brasiliawifi.com/upstats"
    response = subprocess.check_output("curl -F 'file=@" + str(ARCHIVO) + "' -F 'serial="+ str(serial_box)+ "' " + str(URL), shell=True)
    print(response)
    json_response = json.loads(response)
    if json_response["status"] == "success":
        print(time.strftime("%c") + "::Upload file successful")
        os.system("rm " + ARCHIVO)
    elif json_response["status"] == "unavailable":
        print(time.strftime("%c") + "::Error upload file")
else:
    print(time.strftime("%c") + "::File not exist")



#curl -v -F 'file=@records' -F 'serial=168' http://ads.brasiliawifi.com//upstats