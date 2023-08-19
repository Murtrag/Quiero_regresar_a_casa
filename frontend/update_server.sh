#!/bin/bash
# */30 * * * * sh ~/www/Quiero_regresar_a_casa/frontend/update_debug_server.sh &
# @reboot sh ~/www/Quiero_regresar_a_casa/frontend/update_debug_server.sh &

cd ~/www/Quiero_regresar_a_casa/frontend;
ssh-add ~/.ssh/id_rsa;
git pull --no-edit;

docker-compose -f docker-compose.prod.yaml down;
docker-compose -f docker-compose.prod.yaml up --build --detach &
