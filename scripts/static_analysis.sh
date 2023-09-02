#!/bin/bash

analyze_folder() {
    local input_folder="$1"
    local section_name="$2"

    echo "\n\n+++++++++++++ ${section_name} File analysis +++++++++++++\n\n"

    # File tree analysis
    tree -h -L 999 --du "$input_folder" >> output.txt

    echo "\n\n+++++++++++++ ${section_name} Image analysis +++++++++++++\n\n" >> output.txt

    find "$input_folder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -print0 | while IFS= read -r -d '' file; do
        file_size=$(du -sh "$file" | cut -f1) # Pobiera rozmiar pliku za pomocą 'du' i wycina pierwszą kolumnę (rozmiar)
        image_dimensions=$(exiftool -ImageSize -s3 "$file") # Pobiera wymiary obrazka
        echo "$file - $file_size - $image_dimensions"
    done >> output.txt
}

backend_static="$HOME/www/Quiero_regresar_a_casa/backend/main/nginx/static/"
frontend_static="$HOME/www/Quiero_regresar_a_casa/frontend/main/src/assets"

# Początek pliku output.txt
echo "======== Analysis Report ========" > output.txt

# Analiza dla backendu
analyze_folder "$backend_static" "Backend"

# Analiza dla frontendu
analyze_folder "$frontend_static" "Frontend"

less -f -r output.txt;
rm output.txt;

