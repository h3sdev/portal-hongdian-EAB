#!/bin/bash

# Declara el array con los elementos

find /mnt/web0 -type f ! -name ".mp3" ! -name ".mp4" -o -type d -empty -delete

declare -a esperados=(
    "/mnt/web0/video/video/series/serie3/0407_001.mp4:08931cbea79fa007584f53e52eb7d515"
    "/mnt/web0/video/video/series/serie3/0407_006.mp4:f7618f2c548ddc5b5bdc86b8d35bffee"
    "/mnt/web0/video/video/series/serie3/0407_012.mp4:e01896471b10b2bab32f09570af43444"
    "/mnt/web0/video/video/series/serie4/0406_024.mp4:35f812154e20f3384a3ffcb8ebcea0c0"
    "/mnt/web0/video/video/series/serie4/0406_013.mp4:2b556c1189657a07ef743dd52eea885b"
    "/mnt/web0/video/video/series/serie4/0406_001.mp4:551bfa21093c3c9acc903168026a3dbe"
    "/mnt/web0/video/video/series/serie5/0415_023.mp4:cba128b82ce6aa216945a055aa81651e"
    "/mnt/web0/video/video/series/serie5/0415_014.mp4:3846526642c0b493b7eba65eeb9fbd6f"
    "/mnt/web0/video/video/series/serie5/0415_001.mp4:34a5ae779bc9cabe8de7d13ac7e3a14a"
    "/mnt/web0/video/video/series/serie6/0416_022.mp4:eb0fe72bf49bb26c1cbacc242387da6f"
    "/mnt/web0/video/video/series/serie6/0416_014.mp4:a3d4afc3c0c034f1bd576805b81fdcae"
    "/mnt/web0/video/video/series/serie6/0416_001.mp4:e0dddc8f5eeffeff460d68bc5c522b55"
    "/mnt/web0/video/video/movies/0401_031.mp4:9824b2bf2137d0b4d72299409cce63f9"
    "/mnt/web0/video/video/movies/0401_014.mp4:9ee8566582989e7292713630cf84fecf"
    "/mnt/web0/video/video/movies/0401_001.mp4:c921cc1bff63b5f987cc4159d6cce3ba"
    "/mnt/web0/video/video/lives/0403_016.mp4:24643e218f8eae53ec553758b881dcc2"
    "/mnt/web0/video/video/lives/0403_010.mp4:8012f99780e70cda97d7ceba9908c600"
    "/mnt/web0/video/video/lives/0403_001.mp4:55adc5c3abca31e87dab055413e27bdf"    
)

# Itera sobre cada elemento del array
for esperado in "${esperados[@]}"; do
    archivo=$(echo "$esperado" | cut -d ":" -f 1)
    md5_esperado=$(echo "$esperado" | cut -d ":" -f 2)

    if [ -e "$archivo" ]; then
        md5_encontrado=$(md5sum "$archivo" | cut -d " " -f 1)

        if [ "$md5_esperado" = "$md5_encontrado" ]; then
            echo "- $archivo"
        else
            echo "Archivos que no coinciden con el original:"
            echo "- $archivo"
            echo "    MD5 original: $md5_esperado"
            echo "    MD5 encontrado: $md5_encontrado"
        fi

        md5_archivo=$(md5sum "$archivo" | cut -d " " -f 1)

        if [ "$md5_esperado" = "$md5_archivo" ]; then
            echo "- Hash MD5 correcto para $archivo"
        else
            echo "Hash MD5 incorrecto para $archivo"
            echo "    MD5 original: $md5_esperado"
            echo "    MD5 calculado: $md5_archivo"
        fi
    else
        echo "Archivo no encontrado: $archivo"
    fi
done >> verificacion.log &
