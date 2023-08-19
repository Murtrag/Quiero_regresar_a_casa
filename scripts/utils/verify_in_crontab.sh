#!/bin/bash
function verify_in_crontab() {
  entries=("$@")
  missing_entries=()

  for entry in "${entries[@]}"; do
    if ! crontab -l | grep -Fq "$entry"; then
      echo "Entry \"$entry\" does not exist in crontab."
      missing_entries+=("$entry")
    fi
  done

  if [ ${#missing_entries[@]} -gt 0 ]; then
    read -p "Do you want to add missing entries to crontab? [Y/n] " choice
    case "$choice" in
      n|N) echo "Entries were not added." ;;
      *)
        for missing_entry in "${missing_entries[@]}"; do
          (crontab -l; echo "$missing_entry") | crontab -
          echo "Added entry \"$missing_entry\"."
        done
        ;;
    esac
  fi
}
