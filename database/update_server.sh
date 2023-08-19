#!/bin/bash
# */30 * * * * sh ~/www/Quiero_regresar_a_casa/database/update_debug_server.sh &
# @reboot sh ~/www/Quiero_regresar_a_casa/database/update_debug_server.sh &

cd ~/database/Quiero_regresar_a_casa/database;
ssh-add ~/.ssh/id_rsa;
git pull;

docker-compose -f docker-compose.prod.yaml down;
docker-compose -f docker-compose.prod.yaml up --build --detach &

