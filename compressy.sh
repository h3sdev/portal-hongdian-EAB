#!/bin/bash

# Obtener la ruta de la carpeta actual
dir=$(pwd)

# Cambiar a la carpeta actual
cd $dir

# Preguntar al usuario el nombre del archivo comprimido
echo "Por favor ingrese el nombre del archivo comprimido (sin extensión):"
read filename

# Concatenar el nombre de la carpeta actual con el nombre del archivo
filename="${dir##*/}_${filename}.zip"

# Crear una lista de archivos que deben ser ignorados
ignore_list=$(cat $dir/.gitignore | sed 's/#.*//;/^\s*$/d' | sed "s|^\./|$dir/|")

# Comprimir los archivos que no están en la lista de ignorados
zip -r "$filename" . -x "$filename" $(echo "$ignore_list" | paste -sd " " -)

