# TP NOTE GIT

## Numero Uno

Sur une VM serveur : Créez un serveur git qui servira un repo git en SSH. Nommez le repo tp-note
<!-- * RENDU : la liste des commandes exécutées sur le serveur GIT -->
```bash
sudo apt install git
sudo apt install ssh
# Configurer SSH
mkdir ~/git_repos && cd ~/git_repos
mkdir tp-note.git && cd tp-note.git
git init --bare
```

## Numero Dos

Toujours sur la VM serveur : créez un hook pre-receive qui aura pour fonctions d'empêcher tout push sur la branche master, et de vérifier que la variable GIT_AUTHOR_EMAIL est bien remplie et contient bien un '@'
<!-- *RENDU : Le script -->
```bash
cd ~/git_repos/tp-note.git/hooks
touch pre-recieve && echo "#\!/bin/bash

# check if email is valid
if [[ ! $GIT_AUTHOR_EMAIL =~ ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$]]
then
  echo "Invalid Email"
  exit 1
fi

#check if not commiting to master
zero_commit="0000000000000000000000000000000000000000"
while read oldrev newrev refname; do
  if [[ $oldrev == $zero_commit && $refname =~ ^refs/heads/ ]]
  then
    if [[ $refname =~ ^refs/heads/master$ ]]
    then
      echo "Sorry, but you can\'t commit to master"
      exit 1
    fi
  fi
done
exit 0
" >> pre-recieve
chmod +x pre-recieve
```

## Numero Tres

Sur une VM client : clonez ce repo git

<!-- * RENDU : la commande exécutée sur le client -->
```bash
git clone user@VM_serveur_ip:git_repos/tp-note.git ./tp-note
```

## Numero Cuatro

Sur la VM client : Créez un fichier readme.txt et ajoutez-y du texte. Commitez avec le message suivant :" first commit" et pushez sur le serveur git distant
<!-- *RENDU : les commandes et le résultat des commandes. -->
```bash
touch readme.txt && echo "P00P" > readme.txt
git add readme.txt && git commit -m "first commit"
git push origin master

# Résultat des commandes.
# ! [Remote rejected] (pre-recieve hook declined)  
```

## Numero Cinco

Sur la VM client : créez une branche tp-note-branch et refaites le push
<!-- *RENDU : les commandes et le résultat des commandes -->
```bash
git checkout -b tp-note-branch && git push origin tp-note-branch

# Résultat des commandes
# 
# 
# 
# 
```

## Numero Seis

Sur la VM client : créez une branche tp-note-branch-2. Ajoutez du texte dans le fichier readme.txt et commitez. Retournez sur la branche tp-note-branch et mergez le contenu de tp-note-branch-2 dans tp-note-branch. Poussez sur le serveur distant
<!-- *RENDU : Les commandes et le résultat des commandes -->
```bash
git checkout -b tp-note-branch-2
echo "BAN 2" >> readme.txt && git add readme.txt
git commit -m " branch2 commit"
git checkout tp-note-branch && git merge tp-note-branch-2
git push origin tp-note-branch


# Résultat des commandes
# 
# 
# 
# 
```
