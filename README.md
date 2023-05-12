
Este repositorio contiene los portales de EAB de distintas versiones, incluyendo un archivo ZIP que contiene los archivos del portal. Para instalar una versión, es necesario descomprimir el contenido del archivo ZIP en la raíz de /mnt/web0, ya que este repositorio es el contenido que debe tener dicha carpeta.

Es importante crear una release cada vez que se modifique una versión a instalar en un bus. La release debe incluir el ZIP del contenido actualizado. De esta manera, se puede llevar un registro de las versiones que se han enviado a los buses y hacer un seguimiento adecuado.

Es super importante modificar el archivo versión de la carpeta upload pues de este se verifica remotamente que versión contiene el dispositivo.

> ## Para Instalar en el dispositivo Hongdian

use de la carpeta /scripts/up.sh

Renombre el archivo release ej web0_Copetran-portal-2.6.2.zip por portal.zip

Copie ambos en la raíz ”/root/” del EAB

Ejecute chmod 777 /root/up.sh

Ejecute ./up.sh

El dispositivo enviará unos mensajes y se reiniciará.


