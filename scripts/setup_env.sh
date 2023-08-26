#!/bin/bash

# Check if the alias already exists in .bashrc
function check_alias() {
    grep -q "$1" ~/.bashrc
}

# Add alias to .bashrc
function add_alias() {
    echo "alias $1" >> ~/.bashrc
}

# List of aliases to set up
aliases=(
    "script='cd www/Quiero_regresar_a_casa/scripts/'"
    "frontend='cd www/Quiero_regresar_a_casa/frontend/'"
    "backend='cd www/Quiero_regresar_a_casa/backend/'"
    "db='cd www/Quiero_regresar_a_casa/database/'"
    # Add more aliases here
)

# Loop through the aliases and add them if they don't exist
for alias in "${aliases[@]}"; do
    check_alias "$alias"
    if [ $? -ne 0 ]; then
        add_alias "$alias"
        echo "Added alias: $alias"
    else
        echo "Alias already exists: $alias"
    fi
done

# Apply changes
source ~/.bashrc

echo "Alias setup completed!"
