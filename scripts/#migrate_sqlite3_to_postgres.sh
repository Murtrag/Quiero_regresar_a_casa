docker-compose -f backend/docker-compose.prod.yaml down
docker-compose -f backend/docker-compose.yaml up --detach
# docker exec -it backend_app_1 ./main/manage.py dumpdata --exclude=contenttypes > /tmp/whole2.json
docker exec -it backend_app_1 ./main/manage.py dumpdata main auth.user auth.group basic store missing_person > /tmp/whole2.json


docker-compose -f backend/docker-compose.yaml down 
docker-compose -f backend/docker-compose.prod.yaml up --detach
docker cp /tmp/whole2.json backend_app_1:/tmp/whole2.json
docker exec -it backend_app_1 ./main/manage.py loaddata /tmp/whole2.json


