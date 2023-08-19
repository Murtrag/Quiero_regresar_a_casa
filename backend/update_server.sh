#!/bin/bash
# */30 * * * * sh ~/www/Quiero_regresar_a_casa/backend/update_debug_server &
# @reboot sh ~/www/Quiero_regresar_a_casa/backend/update_debug_server &

cd ~/www/Quiero_regresar_a_casa/backend;
ssh-add ~/.ssh/id_rsa;
git pull;
docker exec -it backend_app_1 ./main/manage.py migrate;
# docker restart backend_app_1 &
docker-compose -f docker-compose.prod.yaml down;
docker-compose -f docker-compose.prod.yaml up --build --detach;
