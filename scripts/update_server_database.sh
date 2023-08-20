#!/bin/bash
source utils/verify_in_crontab.sh
entry1="*/30 * * * * sh ~/www/Quiero_regresar_a_casa/scripts/update_server_database.sh &"
entry2="@reboot sh ~/www/Quiero_regresar_a_casa/scripts/update_server_database.sh &"

verify_in_crontab "$entry1" "$entry2"

cd ~/www/Quiero_regresar_a_casa/database;
ssh-add ~/.ssh/id_rsa;
git pull --no-edit;

docker-compose -f docker-compose.yaml down;
docker-compose -f docker-compose.yaml up --build --detach &

