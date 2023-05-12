
Este repositorio contiene los portales de EAB de distintas versiones incluye un zip que contiene losa rchivos del portal.


Desde la raíz de este repositorio debe descomprimirse el contenido en la raíz de /mnt/web0 ya que este repositorio es el contenido que debe tener dicha carpeta.


Cada vez que se modifique una versión a instalar en un bus se debe crear una release que incluya el zip del contenido esto es importante ya que es la forma de saber que versiones se han enviado a alos buses y puede de este modo hacerle seguimiento.


> ## Para Instalar en el dispositivo Hongdian

use de la carpeta /scripts/up.sh

Renombre el archivo release ej web0_Copetran-portal-2.6.2.zip por portal.zip

Copie ambos en la raíz ”/root/” del EAB

Ejecute chmod 777 /root/up.sh

Ejecute ./up.sh

El dispositivo enviará unos mensajes y se reiniciará.


