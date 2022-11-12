#!/bin/bash


# 0 * * * * sh ~/database/Quiero_regresar_a_casa/database/update_debug_server &
cd ~/database/Quiero_regresar_a_casa/backend;
ssh-add ~/.ssh/id_rsa;
git pull;
docker restart database_db_1 &

