#!/bin/bash

input_folder="~/www/Quiero_regresar_a_casa/backend/main/nginx/static/images"
target_height=600

list_images() {
    find "$input_folder" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \)
}

list_staged_images() {
    git diff --cached --name-only --diff-filter=ACMRTUXB "$input_folder" | grep -E '.*\.(jpg|jpeg|png|gif)$'
}

add_images() {
    if [ "$1" == "-A" ] || [ "$1" == "--all" ]; then
        git add "$input_folder"
    else
        git add "$input_folder/$1"
    fi
}

perform_conversion() {
    staged_images=($(list_staged_images))
    
    for image in "${staged_images[@]}"; do
        filename=$(basename "$image")
        output_path="${image%.*}.min.${image##*.}"
        
        convert "$input_folder/$image" -resize x$target_height "$input_folder/$output_path"
        git add "$input_folder/$output_path"
        
        echo "Zmniejszono: $filename -> $output_path"
    done
}

case "$1" in
    "list")
        list_images
        ;;
    "stage")
        list_staged_images
        ;;
    "add")
        shift
        add_images "$@"
        ;;
    "perform")
        perform_conversion
        ;;
    *)
        echo "Użycie: image_convert.sh [list | stage | add | perform]"
        ;;
esac

