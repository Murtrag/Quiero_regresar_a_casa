#!/bin/bash
source utils/verify_in_crontab.sh
entry1="*/30 * * * * sh ~/www/Quiero_regresar_a_casa/scripts/update_server_frontend.sh &"
entry2="@reboot sh ~/www/Quiero_regresar_a_casa/scripts/update_server_frontend.sh &"

verify_in_crontab "$entry1" "$entry2"

cd ~/www/Quiero_regresar_a_casa/frontend;
ssh-add ~/.ssh/id_rsa;
git pull --no-edit;

docker-compose -f docker-compose.prod.yaml down;
docker-compose -f docker-compose.prod.yaml up --build --detach &
