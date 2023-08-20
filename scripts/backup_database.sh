#!/bin/bash
source utils/verify_in_crontab.sh
entry1="0 0 * * * sh ~/www/Quiero_regresar_a_casa/scripts/backup_database.sh &"

verify_in_crontab "$entry1"

# Define the remote server and container details
remote_server="192.168.1.3"
container_name="backend_app_1"
backup_file="/tmp/data.json"
current_datetime=$(date +"%Y-%m-%d_%H-%M-%S")
host_backup_file="$HOME/db_backups/db_dump-$current_datetime.json"

echo "1. Execute the dumpdata command in the container and save it to a file on the remote server"
ssh $remote_server "docker exec $container_name python main/manage.py dumpdata > $backup_file"

# echo "2. Copy the backup file from the container to the host"
# ssh $remote_server "docker cp $container_name:$backup_file $host_backup_file"

echo "3. Copy the backup file to the local server"
rsync -avz murtrag@$remote_server:$backup_file $host_backup_file


echo "4. Remove the backup file from the remote server"
ssh $remote_server "rm -f $backup_file"



