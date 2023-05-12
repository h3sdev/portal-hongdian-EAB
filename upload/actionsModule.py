storage_tmp = "/mnt/web0/upload/storage_tmp/"
URL = ('http://ads.brasiliawifi.com/mess')
recip = ('http://ads.brasiliawifi.com/recip')
from genericpath import exists
import subprocess
import json
import time
import os
import os.path
from os import path, system

# exclusively to use in this function
import urllib

serial_box= subprocess.check_output("cat /etc/system.info | grep -o -w '\w\{16\}' | sort --unique | cut -c 14-", shell=True)
serial_box= serial_box.strip('\n')
response = subprocess.check_output('curl --connect-timeout 60 -m 3600  -X GET "' + str(URL) + '?serial=' + str(serial_box) +'"' , shell=True)
#Read json response, put contents in json_response var
response=json.loads(response)
print("serialThisBox:"+serial_box)

def checkActions(jsonResponse):
    def deleteMatch(storageTmp,md5):    
       try:
         if (exists(storageTmp)):
           removalOp = os.system("rm " + storageTmp+md5+"* 2>&1")
           if(removalOp==0):
               return "Removed"
           else:
               return "Removed or doesn't exist"
         else:
           return "Doesn't have storage_tmp"
       except :
           return "Error unknown"
    serial_box_len = 3
    # print raw json so...like... var = json.dumps(resultDict["actions"]["removeAdZip"]["md5"])
    #check if key attributte was set to do something
    result={}
    def isKeyPresent(json, key):
        try:
            buf = json[key]
        except KeyError:
            return False
        return True
    def hasmd5val(json, key):
        try:
            if(isKeyPresent(json, key)):
                md5 = json[key]
                if(type(md5) != str):
                    return False
            return True
        except:
            # print (str(e)+"String")
            return False
    try:
        print("checking actions")
        if(isKeyPresent(jsonResponse, "actions")):
            #check if the "box" key exist
            print("The key \"actions\" was found")
            if(isKeyPresent(jsonResponse["actions"], "box") ):
                print("The key \"box\" was found in actions")
                
                if ((len(jsonResponse["actions"]["box"]) == serial_box_len or jsonResponse["actions"]["box"] == "*")):
                    print("The value in \"box\" key is propery formatted")
                    if(jsonResponse["actions"]["box"] == "*" or jsonResponse["actions"]["box"] == serial_box):
                        print("The value of \"box\" correspond to one tha can be executed in this \"box\" :"+serial_box)                    
                        if(isKeyPresent(jsonResponse["actions"],"removeAdZip") or isKeyPresent(jsonResponse["actions"],"command")):
                            
                            print("A key \"actions\" or \"command\" was found in actions")
                            if(isKeyPresent(jsonResponse["actions"],"removeAdZip")):
                                if(hasmd5val(jsonResponse["actions"]["removeAdZip"],"md5")):
                                    print("The key \"md5\" was found in actions")
                                    md5 = jsonResponse["actions"]["removeAdZip"]["md5"]
                                    result.update({"removeAdZipResponse":deleteMatch(storage_tmp,md5)})
                                else:
                                    result.update({"removeAdZipResponse":"Warn::WiFiAds(4.1)"})
                            else:
                                    result.update({"removeAdZipResponse":"Warn::WiFiAds(4.1)"})
                            
                            if(isKeyPresent(jsonResponse["actions"], "command")):
                                if(not jsonResponse["actions"]["command"] or type(jsonResponse["actions"]["command"]) != list):
                                    result.update({"commandResponse":["Warn::WiFiAds(4.2.1)"]})
                                    print ("empty or nor valid command format to execute")  
                                    return result
                                else:
                                    print("The key \"command\" was found in actions and is not empty")
                                    result.update({"commandResponse":[]})
                                    output=""
                                    try:
                                        for command in jsonResponse["actions"]["command"]:
                                            comandDecoded=urllib.unquote(command).decode('utf8')
                                            output = subprocess.check_output(comandDecoded, shell=True)
                                            outputEncoded = urllib.quote(output)
                                            result["commandResponse"].append(outputEncoded)
                                        return result
                                    except subprocess.CalledProcessError as e:
                                            output = str(e.output)
                                            print("Error on command execution please do a test first!")
                                            output=urllib.quote("Broken in this step u didn't catch the error hoe")
                                            result["commandResponse"].append(output)
                                    return result
                            else:
                                result.update({"commandResponse":["Warn::WiFiAds(4.2)"]})
                                return result
                        else:
                            return result.update({"commandResponse":["Warn::WiFiAds(4.2)"]})
                            # return result["commandResponse"].append("Warn::WiFiAds(3)")
                    else:
                        result.update({"actionResponse":"Warn::WiFiAds(2.1)"})
                        return result
                else:
                    result.update({"actionResponse":"Warn::WiFiAds(2)"})
                    return result
            else:
                result.update({"actionResponse":"Warn::WiFiAds(1)"})
                return result
        else:
            result.update({"actionResponse":"No actions"})
        
            return result
    except:
        result.update({"actionResponse":"General error"})
        return result



print(response["actions"]["box"])
print(checkActions(response))

# jsonResponsex= {
#     "status": "basefile",
#     "actions":{
#         "box":"444",
#         "removeAdZip":{"md5":"44444444444444444444444444444444"},
#         "command":["echo%20%22hi%22"]
#         }
# }
# WiFiAdsErrors
# (1)Undefined "box" key: must be defined inside actions
    # {"status": "basefile","actions":{"box":"xxxxxxxxxxxxx",... }}
# (2) "box" key parameters were not met : must declare its value or arent a string
    # Declare to use this bus eg. {"box":"termSNxxxx"} 
    # To use every bus eg.{"box":"*"}  
# (2.1) the value isnt for this box or is invalid 
# (3) There are no json keys that could be ready to do something or some are invalid,
# only the following will work
    # removeAdZip 
    # RaWEncodedCmd
    #{ "actions": 
#         {     
#             "box":"xxxxxxxxxxxxx", <--- remember to set to be able to take the others values
#             "command":["print 1","print 2"],
#             "removeAdZip":{"md5":"fileAdZip"},
#         }
#     }
# (4) md5 given value was bad formatted or is in array, should be an object {"md5":"fileAdZip"}
# (4.1) md5 not given or not used
# (4.2) No command key
# (4.2.1) error on parsing comand string must be a string inside an array for each command and must not be empty
#bug?: cant accept boolean json comparisons? are json booleans in the standard