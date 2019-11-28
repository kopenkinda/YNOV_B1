#!/bin/sh

# Créez un script "admin.sh" qui remplira
# les fonctions suivantes :

# - Gestion d'utilisateurs (paramètre "user"
# au lancement du script) : ajout / suppression /
# changement de mot de passe/ ajout dans un groupe

# - Gestion de groupes (paramètre "group" au lancement du script) :
# ajout / suppression

# - Gestion des processus (paramètre "process" au
# lancement du script) : liste des processus / recherche
# de processus par nom / arrêt d'un processus

# C'est à vous de décider comment implémenter correctement
# les fonctions demandées.

# Consignes à respecter :

# - Le script doit être découpé en fonctions

# - Le script doit demander à l'utilisateur
# toutes les informations dont il a besoin pour exécuter les commandes

# - Le script doit afficher une aide à
# l'utilisateur s'il est lancé sans paramètre ou
# avec un paramètre inconnu

function user_menu() {
  echo "Here's the list of all available actions:\n1. Add user\n2. Delete user\n3. Modify user's password\n4. Add user to a group\n"
  read -p "What would you like to do?: " submenu_choice
  case $submenu_choice in
  "1" | "add")
    read -p "Uest with what username would you like to create?: " username
    sudo adduser $username
    echo "User: $username, succesefully created"
    ;;
  "2" | "delete")
    read -p "What username would you like to delete?: " username
    sudo deluser $username
    echo "User: $username, succesefully deleted"
    ;;
  "3" | "modify")
    read -p "What username's password would you like to modify?: " username
    sudo passwd $username
    echo "$username's password is succesefully modified"
    ;;
  "4" | "group")
    read -p "What username would you like to add to a group?: " username
    read -p "What group would you like to add $username to?: " group
    sudo adduser $username $group
    echo "User: $username, succesefully added to a group $group"
    ;;
  *) echo "Sorry, but this command is invalid" ;;
  esac
}

function group_menu() {
  echo "Here's the list of all available actions:\n1. Create a new group\n2. Delete an existing group\n"
  read -p "What would you like to do?: " submenu_choice
  case $submenu_choice in
  "1" | "add")
    read -p "What group would you like to create?: " group
    sudo addgroup $group
    echo "Group: $group, succesefully created"
    ;;
  "2" | "delete")
    read -p "What group would you like to delete?: " group
    sudo delgroup $group
    echo "Group: $group, succesefully created"
    ;;
  *) echo "Sorry, but this command is invalid" ;;
  esac
}

function process_menu() {
  echo "Here's the list of all available actions:\n1. List all processes\n2. Find a process\n3. Stop a process\n"
  read -p "What would you like to do?: " submenu_choice
  case $submenu_choice in
  "1" | "list")
    echo "Here's the list of all running processes:\n"
    ps
    ;;
  "2" | "find")
    read -p "What process would you like to find?: " process
    pidof $process
    ;;
  "3" | "stop")
    read -p "What process would you like to kill?: " process
    sudo kill $process
    ;;
  *) echo "Sorry, but this command is invalid" ;;
  esac
}

echo "Welcome to the best and most reliable user interface\nhere's the list of all commands you can do:\n1. User control\n2. Group control\n3. Process control\n\n"
read -p "What would you like to do?: " menu1_choice

case $menu1_choice in
"user" | "1")
  user_menu
  ;;
"group" | "2")
  group_menu
  ;;
"process" | "3")
  process_menu
  ;;
*) echo "Sorry, but this command is invalid" ;;
esac
