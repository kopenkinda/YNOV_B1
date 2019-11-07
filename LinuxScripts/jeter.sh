#!/bin/bash

# ?Déplacer un fichier dans un dossier appelé "corbeille", situé à côté du script.
#   v- Si le dossier n'existe pas, alors le script doit le créer.
#   v- La commande doit s'appeler de la manière suivante : "jeter.sh fichier"
#   v- Si le fichier n'existe pas, alors la commande doit l'indiquer à l'utilisateur
#   v- Si la commande a fonctionné, écrire un message de réussite
# ?Sortir un fichier de la corbeille.
#   - La commande doit s'appeler de la manière suivante : "jeter.sh -s"
#   - Le script listera alors les fichiers du dossier "corbeille" et demandera à l'utilisateur quel fichier il veut sortir
#   - Le fichier sera donc sorti dans le dossier contenant le dossier "corbeille"
# ?Vider la corbeille
#   - La commande doit s'appeler de la manière suivante : "jeter.sh -v"
#   - Le script demandera à l'utilisateur une confirmation. Si l'utilisateur répond oui, le contenu de "corbeille" devra être supprimé

ARGUMENT=$1

function getAction() {
  local switch=0
  if [ $ARGUMENT = "-s" ]; then
    switch=1
  elif [ $ARGUMENT = "-v" ]; then
    switch=2
  else
    switch=0
  fi
  return $switch
}

function checkTrashBin() {
  if [ ! -e "corbeille" ] && [ ! -d "corbeille" ]; then
    echo "No \"Trash Bin\" detected, creating a new one..."
    mkdir "corbeille"
  fi
}

function deleteFile() {
  if [ -e $FILENAME ]; then
    mv $FILENAME './corbeille'
    echo "Succesefully moved '$FILENAME' to \"Trash Bin\""
  else
    echo "File '$FILENAME' doesn't exist"
  fi
}

function showAllFiles() {
  echo "Here's the list of all files:"
  ls -1 "./corbeille"
}

function getFilename() {
  local FILENAME
  read -p "What is your file name?: " FILENAME
  echo $FILENAME
}

function getConfirmation() {
  local c
  read -p "Are you sure you want to delete al files from the \"Trash bin\" (1/0)? " c
  return $c
}

getAction
ACTION=$?

case $ACTION in
0)
  checkTrashBin
  FILENAME=$1
  deleteFile
  ;;
  # Jeter
1)
  showAllFiles
  FILENAME=$(getFilename)
  if [ ! -e "./corbeille/$FILENAME" ]; then
    echo "File '$FILENAME' doesn't exist"
  else
    mv "./corbeille/$FILENAME" "."
    echo "Success"
  fi
  ;;
  # Sortir
2)
  getConfirmation
  CONFIRMATION=$?
  if [ $CONFIRMATION -eq 1 ]; then
    rm -rf ./corbeille/*
    echo "Succesefully erased all files"
  else
    echo "Action cancelled"
  fi
  ;;
  # Vider
esac
