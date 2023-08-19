#!/bin/bash

function check_sudo() {
  if [[ $EUID -ne 0 ]]; then
    echo "Some commands require root privileges. Please enter your password."
    if ! sudo -v; then
      echo "Incorrect password. Exiting."
      exit 1
    fi
  fi
}

check_sudo

# Temperature of the CPU in Celsius
cpu_temp=$(vcgencmd measure_temp | egrep -o '[0-9]*\.[0-9]*')
echo "CPU Temperature: ${cpu_temp}C"

# Voltage of the CPU
cpu_voltage=$(vcgencmd measure_volts | awk -F= '{print $2}')
echo "CPU Voltage: ${cpu_voltage}V"

# Get throttled status
throttled=$(vcgencmd get_throttled)

# Interpret throttled status
interpretation=""
if [[ $throttled == *"0x50005"* ]]; then
  interpretation+="[Undervoltage detected] "
fi

if [[ $throttled == *"0x50000"* ]]; then
  interpretation+="[Undervoltage occurred since last reboot] "
fi

if [[ $throttled == *"0x10000"* ]]; then
  interpretation+="[Throttling occurred since last reboot] "
fi

if [[ $throttled == *"0x20000"* ]]; then
  interpretation+="[Throttling occurred] "
fi

if [[ $throttled == *"0x0"* ]]; then
  interpretation+="[No throttling or undervoltage detected] "
fi

echo "Throttled status: $throttled $interpretation"

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

