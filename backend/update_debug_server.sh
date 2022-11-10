# 0 * * * * sh ~/www/Quiero_regresar_a_casa/backend/main/update_debug_server &
cd ~/www/Quiero_regresar_a_casa/backend;
git pull
docker restart backend_app_1 &
