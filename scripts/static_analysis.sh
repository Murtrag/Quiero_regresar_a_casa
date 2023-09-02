#!/bin/bash

input_folder="$HOME/www/Quiero_regresar_a_casa/backend/main/nginx/static/"

echo "\n\n+++++++++++++File analysis+++++++++++++\n\n"> output.txt

tree -h -L 999 --du -o output.txt "$input_folder"

echo "\n\n+++++++++++++Image analysis+++++++++++++\n\n">> output.txt

find "$input_folder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -print0 | while IFS= read -r -d '' file; do
    file_size=$(du -sh "$file" | cut -f1) # Pobiera rozmiar pliku za pomocą 'du' i wycina pierwszą kolumnę (rozmiar)
    image_dimensions=$(exiftool -ImageSize -s3 "$file") # Pobiera wymiary obrazka
    echo "$file - $file_size - $image_dimensions"
done >> output.txt

less -f -r output.txt;
rm output.txt;

