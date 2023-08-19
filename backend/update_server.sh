#!/bin/bash
# */30 * * * * sh ~/www/Quiero_regresar_a_casa/backend/update_server &
# @reboot sh ~/www/Quiero_regresar_a_casa/backend/update_server &

cd ~/www/Quiero_regresar_a_casa/backend;
ssh-add ~/.ssh/id_rsa;
git pull --no-edit;
docker exec -it backend_app_1 ./main/manage.py migrate;
# docker restart backend_app_1 &
docker-compose -f docker-compose.yaml down;
docker-compose -f docker-compose.yaml up --build --detach;
