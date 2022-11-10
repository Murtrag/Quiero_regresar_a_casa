# 0 * * * * sh ~/www/Quiero_regresar_a_casa/backend/update_debug_server &
cd ~/www/Quiero_regresar_a_casa/backend;
git pull
docker exec -it backend_app_1 ./main/manage.py migrate
docker restart backend_app_1 &
