#!/bin/bash

# Temperature of the CPU in Celsius
cpu_temp=$(vcgencmd measure_temp | egrep -o '[0-9]*\.[0-9]*')
echo "CPU Temperature: ${cpu_temp}C"

# Voltage of the CPU
cpu_voltage=$(vcgencmd measure_volts | awk -F= '{print $2}')
echo "CPU Voltage: ${cpu_voltage}V"

# CPU usage in percentage
cpu_usage=$(top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print 100 - $1"%"}')
echo "CPU Usage: ${cpu_usage}"

# RAM usage in MB
ram_usage=$(free -m | awk '/^Mem:/{print $3 "MB"}')
echo "RAM Usage: ${ram_usage}"

# Disk usage in percentage
disk_usage=$(df -h / | awk '$NF=="/"{print $5}')
echo "Disk Usage: ${disk_usage}"

# Uptime
uptime=$(uptime -p)
echo "Uptime: ${uptime}"

# Frequency of ARM CPU
arm_freq=$(vcgencmd measure_clock arm | awk -F"=" '{print $2/1000000 " MHz"}')
echo "ARM Frequency: ${arm_freq}"

# List of running processes
echo "Running Processes:"
ps aux | awk '{print $11}' | tail -n +2
