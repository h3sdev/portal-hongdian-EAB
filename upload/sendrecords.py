# -*- coding: utf-8 -*-
    
# Send files to server
# 18May
import time
import subprocess
import json
import os
import os.path
from os import path

FILE_RECORDS = "/mnt/web0/common/api/records"

#Function return if exist file
if (path.exists(FILE_RECORDS)):
    serial_box = subprocess.check_output("cat /etc/system.info | grep -o -w '\w\{16\}' | sort   --unique | cut -c 14-", shell=True)
    URL = "http://ads.brasiliawifi.com/uprecords" 
    response = subprocess.check_output("curl -F 'file=@" + str(FILE_RECORDS) + "' -F 'serial="+ str(serial_box)+ "' " + str(URL), shell=True)
    print(response)
    json_response = json.loads(response)
    if json_response["status"] == "success":
        os.system("rm "+ FILE_RECORDS)
        print(time.strftime("%c") + "::Upload file successful")
    elif json_response["status"] == "unavailable":
        print(time.strftime("%c") + "KO!!::Elif is lost :c")
else:
    print(time.strftime("%c") + "KO!!::FinthechatNofile")

#curl -v -F 'file=@textsend.txt' -F 'serial=168' http://ads.brasiliawifi.com/uprecords