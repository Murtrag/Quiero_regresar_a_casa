#!/bin/bash
# 0 * * * * sh ~/www/Quiero_regresar_a_casa/frontend/update_debug_server.sh &

cd ~/www/Quiero_regresar_a_casa/frontend;
ssh-add ~/.ssh/id_rsa;
git pull;
docker-compose -f docker-compose.prod.yaml stop
docker-compose -f docker-compose.prod.yaml up --build --detach &
