# -*- coding: utf-8 -*-
# Descarga de archivos: cliente
# 07/10/2022
import subprocess
import json
import time
import os
import os.path
from os import path

try:
    # URL with endpoint server in php
    URL = ('http://ads.brasiliawifi.com/updatebox')

    # Init value for variable md5_file_local
    md5_file_local = None
    file_path = "/mnt/web0/update.zip"
    base_file_path = "/mnt/web0/advertisement/data/data.zip"
    ad_folder_data = "/mnt/web0/advertisement/data/"
    storage_tmp = "/mnt/web0/upload/storage_tmp/"
    version_file_path = "/mnt/web0/version.json"
    #we add this resource to file
    # unzip -o -j /mnt/web0/upload/PortalFix.zip "web0/video/video/preroll/*" -d "/mnt/web0/video/video/preroll"
    portal_fix_path = "/mnt/web0/upload/PortalFix.zip"
    portal_fix_sub_dir= '"web0/video/video/preroll/*"'
    portal_fix_destination= '"/mnt/web0/video/video/preroll"'
    # Function return if exist file and get md5

    def get_md5_file(uplocalfile):
        try:
            if (path.exists(uplocalfile)):
                md5_file_local = subprocess.check_output(
                    "md5sum " + uplocalfile + " | grep -o -w '\w\{32\}'", shell=True)
            else:
                md5_file_local = "basefile"
            return md5_file_local
        except:
            md5_file_local = "basefile"

    def search(md5file):
        update_list = os.listdir(storage_tmp)
        if(update_list):
            for update_file in update_list:
                md5_storage_file = get_md5_file(storage_tmp + update_file)
                if (str(md5_storage_file[0:33]).strip('\n') == str(md5file).strip('\n')):
                    md5_storage_file_return = str(
                        md5_storage_file[0:33]).strip('\n')
                    break
                else:
                    md5_storage_file_return = False
        else:
            md5_storage_file_return = False
        return md5_storage_file_return
    # Execute function put path file like parameter
    md5_local_file = get_md5_file(file_path)
    # Get last 3 serial numbers
    serial_box = subprocess.check_output(
        "cat /etc/system.info | grep -o -w '\w\{16\}' | sort --unique | cut -c 14-", shell=True)
    # Send get request with serial box and md5 local file like parameters and save output in response var
    # curl --connect-timeout 5 -m 10  -X GET "http://ads.brasiliawifi.com/updatebox?serial=186&md5localfile=false"
    response = subprocess.check_output('curl --connect-timeout 60 -m 3600  -X GET "' + str(URL) + '?serial=' + str(
        serial_box).strip('\n') + '&md5localfile=' + str(md5_local_file).strip('\n') + '"', shell=True)
    # Read json response, put contents in json_response var
    print(response)
    json_response = json.loads(response)
    # Compare status response, when response is aproved download file
    # and descompress content in webserver path
    version_file = open(version_file_path, "r")
    update = json.load(version_file)
    if json_response["status"] == "active":
        # Get md5 remote file
        md5_file_server = json_response["md5sum"]
        fileFind = search(md5_file_server)
        print(fileFind)
        if (str(md5_local_file).strip('\n') == str(md5_file_server).strip('\n')):
            os.system("unzip -o " + file_path + " -d " +
                      json_response['path_unzip_file'])
            os.system("mv " + file_path + " " +
                      storage_tmp + md5_file_server + ".zip")
            print(time.strftime("%c") + "::Change folder")
        elif (fileFind):
            os.system("mv " + storage_tmp + fileFind + ".zip " + file_path)
            os.system("unzip -o " + file_path + " -d " +
                      json_response['path_unzip_file'])
        else:
            if(os.system("mv " + file_path + " " + storage_tmp + md5_file_server + ".zip")):
                print(time.strftime("%c") + "::Move to storage_tmp")
            else:
                print(time.strftime("%c") + "::Nothing move to storage_tmp")

            os.system("wget -O " + file_path + " " +
                      json_response['url_download'])
            md5_local_file = get_md5_file(file_path)
            update['unzipdatabase'] = True
            a_file = open(version_file_path, "w")
            json.dump(update, a_file)
            a_file.close()
            if (str(md5_local_file).strip('\n') == str(md5_file_server).strip('\n')):
                os.system("unzip -o " + file_path + " -d " +
                          json_response['path_unzip_file'])
                os.system("mv " + file_path + " " +
                          storage_tmp + md5_file_server + ".zip")
                print(time.strftime("%c") + "::Down success")
            else:
                os.system("unzip -o " + base_file_path +
                          " -d " + ad_folder_data)
                response2 = subprocess.check_output('curl --connect-timeout 60 -m 3600  -X GET "' + str(
                    URL) + '?serial=' + str(serial_box) + '&md5localfile=basefile"', shell=True)
            print(time.strftime("%c") + json_response["status"])
    elif json_response["status"] == "basefile":
        if (update['unzipdatabase'] == True):
            os.system("unzip -o " + base_file_path + " -d " + ad_folder_data)
            #we tell portalFix file to decompress and replace the videos when is base file again
            print("basefile as answer and realizing path file recovery")
            os.system("unzip -o -j " + portal_fix_path + " " + portal_fix_sub_dir + " -d "+ portal_fix_destination)
            os.system("mv " + file_path + " " + storage_tmp +
                      str(md5_local_file).strip('\n') + ".zip")
            update['unzipdatabase'] = False
            a_file = open(version_file_path, "w")
            json.dump(update, a_file)
            a_file.close()
            subprocess.check_output('curl --connect-timeout 60 -m 3600  -X GET "' + str(
                URL) + '?serial=' + str(serial_box) + '&md5localfile=basefile"', shell=True)
        else:
            print(time.strftime("%c") + "::Nothing to Unzip")

    elif json_response["status"] == "alredyupdate":
        print(time.strftime("%c") + "::Nothing to download")
        update['unzipdatabase'] = True
        a_file = open(version_file_path, "w")
        json.dump(update, a_file)
        a_file.close()
    else:
        print(time.strftime("%c") + "::Not internet")

except Exception as e:
    print(time.strftime("%c")+"::Except alert" + str(e))
