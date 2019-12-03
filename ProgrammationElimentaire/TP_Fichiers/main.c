//? 6 points : Créez un programme qui permet de
//? saisir des contacts et de les enregistrer sur disque :
//? createContacts.exe

//? 2 points : Créez un programme qui affiche le nombre de contacts,
//? la liste des contacts : contactsList.exe

//? 12 points : Créez un programme qui cherche dans les contacts par
//? nom et/ou prénom et/ou age
//* Ex.:
//*  searchContacts.exe “firstname:bob,lastname:marley,age:20”
//*  searchContacts.exe “firstname:bob,lastname:marley”
//*  searchContacts.exe “firstname:bob”

// ? Recherche fulltext
//*  searchContacts.exe “any:bob”
// ! La recherche est insensible à la casse

#include "functions.h"

int main(int argc, char *argv[])
{
  Contact *contacts = (Contact *)malloc(10000 * sizeof(Contact));
  loadContacts(contacts, "contacts.txt");

  //Menu
  printf("\
Welcome to contact Manager 3000 v2.1:\n\
What would you like to do?:\n  \
1. Create contact\n  \
2. Show all contacts\n  \
3. Find a contact\n\n\
Your choice?: ");
  int menuChoice;
  scanf("%d", &menuChoice);
  switch (menuChoice)
  {
  case 1:
    break;
  case 2:
    showContacts(contacts, sizeof(contacts)/sizeof(contacts[0]));
    break;
  case 3:
    break;
  default:
    printf("Invalid choice, exiting...\n");
    break;
  };

  //
  // saveContacts(contacts);
  return 0;
};