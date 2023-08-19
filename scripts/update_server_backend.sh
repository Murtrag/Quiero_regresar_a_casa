#!/bin/bash
source utils/verify_in_crontab.sh
entry1="*/30 * * * * sh ~/www/Quiero_regresar_a_casa/scripts/update_server_backend.sh &"
entry2="@reboot sh ~/www/Quiero_regresar_a_casa/scripts/update_server_backend.sh &"

verify_in_crontab "$entry1" "$entry2"


cd ~/www/Quiero_regresar_a_casa/backend;
ssh-add ~/.ssh/id_rsa;
git pull --no-edit;
docker exec -it backend_app_1 ./main/manage.py migrate;
# docker restart backend_app_1 &
docker-compose -f docker-compose.yaml down;
docker-compose -f docker-compose.yaml up --build --detach;
