#!/bin/bash

case $1 in
"-c")
  read -p "What partition would you like to use (ex: /dev/sdb1)?: " partition
  read -p "What filesystem would you like to use?: " fs
  mkfs -t $fs $partition
  echo "fs created succesefully"
  ;;
"-m")
  read -p "What partition would you like to use (ex: /dev/sdb1)?: " partition
  read -p "What filesystem would you like to use?: " fs
  read -p "What folder would you like your system to be mounted on?: " folder
  # mount
  ;;
"-d")
  read -p "What partition would you like to use (ex: /dev/sdb1)?: " partition
  read -p "What filesystem would you like to use?: " fs
  # mkfs
  echo "System deleted succesefully"
  ;;
"*") echo "invalid command" ;;
esac
