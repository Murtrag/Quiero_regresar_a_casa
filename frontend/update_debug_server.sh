#!/bin/bash
# 0 * * * * sh ~/www/Quiero_regresar_a_casa/frontend/update_debug_server.sh &

cd ~/www/Quiero_regresar_a_casa/frontend;
ssh-add ~/.ssh/id_rsa;
git pull;
docker restart frontend_app_1 &
