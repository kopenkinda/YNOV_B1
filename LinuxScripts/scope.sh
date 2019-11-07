#!/bin/sh

function var_change() {
  local var1="local 1"
  echo "Local:\nvar1 -> $var1 \nvar2 -> $var2\n"
  var1="Global 1.1"
  var2="Global 2.1"
}

var1="global 1"
var2="global 2"
echo "Global 1:\nvar1 -> $var1 \nvar2 -> $var2\n"
var_change
echo "Global 2:\nvar1 -> $var1 \nvar2 -> $var2\n"
