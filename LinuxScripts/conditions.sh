#!/bin/sh

read -p "Hello, what's your name? " name
read -p "Hello $name, how old are you? " age
echo "$name, you're $age years old"


if [ $age -ge 0 ] && [ $age -lt 20 ]
then
  echo "0-20"
elif [ $age -ge 20 ] && [ $age -lt 30 ]
then
  echo "20-30"
elif [ $age -ge 30 ] && [ $age -lt 40 ]
then
  echo "30-40"
else
  echo "0- - 40+"
fi

