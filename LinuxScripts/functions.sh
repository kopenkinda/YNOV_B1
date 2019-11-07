#!/bin/sh

function exo() {
  echo $1
  return 255
}

exo "Lol"
r=$?
exo $r