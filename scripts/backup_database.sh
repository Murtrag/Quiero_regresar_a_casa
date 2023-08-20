#!/bin/bash
source utils/verify_in_crontab.sh
entry1="0 0 * * * sh ~/www/Quiero_regresar_a_casa/scripts/backup_database.sh &"

verify_in_crontab "$entry1"

# Define the remote server and container details
remote_server="192.168.1.3"
container_name="backend_app_1"
backup_file="/tmp/data.json"

# Execute the dumpdata command in the container and save it to a file on the remote server
ssh $remote_server "docker exec $container_name python manage.py dumpdata > $backup_file"

# Copy the backup file to the local server
scp "$remote_server:$backup_file" "~/db_backups/data.json"

# Optionally, remove the backup file from the remote server
ssh $remote_server "rm -f $backup_file"

