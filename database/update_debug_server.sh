# 0 * * * * sh ~/database/Quiero_regresar_a_casa/database/update_debug_server &
cd ~/www/Quiero_regresar_a_casa/backend;
git pull
docker restart database_db_1 &

