<?php

    if (file_get_contents("/tmp/gpsStatus.flag"))
    {
        $status = file("/tmp/gpsStatus.flag");
        if (trim($status[0]) === "1" )
        {
            $data = file_get_contents("/tmp/gps_data");
            $products = file('/tmp/gps_data');
            foreach ($products as $product => $linea)
            {
                $datos = explode(",",$linea);
                $product1=trim($datos[1]);
                $product2=trim($datos[6]);
                echo "{".$product1.",".$product2.", 'status' : 1}";
            }
        }
        else
        {
            echo "{'status': 0 }"; 
        }
        
    }
    else
    {
        echo "{'status': 0 }"; 
    }
    
?>