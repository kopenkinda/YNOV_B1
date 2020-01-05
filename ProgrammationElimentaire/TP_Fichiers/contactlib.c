#include "contactlib.h"

// 6 points : Créez un programme qui permet de saisir des contacts et de les enregistrer sur disque : createContacts.exe
// 2 points : Créez un programme qui affiche le nombre de contacts, la liste des contacts : contactsList.exe
// 12 points : Créez un programme qui cherche dans les contacts par nom et/ou prénom et/ou age

// Ex.:
// searchContacts.exe “firstname:bob,lastname:marley,age:20”
// searchContacts.exe “firstname:bob,lastname:marley”
// searchContacts.exe “firstname:bob”
// Recherche fulltext
// searchContacts.exe “any:bob”

// La recherche est insensible à la casse

int addContact( char* firstName, char* lastName, int age ) {
  FILE *fp = fopen(CONTACTS_FILE, "a+");
  Contact contact = {
    firstName,
    lastName,
    age
  };
  if (fp == NULL)
  {
    fclose(fp);
    return 1;
  }
  fprintf(
    fp,
    "%s %s %d\n",
    contact.firstname,
    contact.lastname,
    contact.age
  );
  fclose(fp);
  return 0;
};

void listContacts(){
  FILE *fp = NULL;
  fp = fopen(CONTACTS_FILE, "r+");
  if (fp != NULL)
  {
    int i = 0;
    int age = 0;
    char *firstname = malloc(sizeof(char*)*100);
    char *lastname = malloc(sizeof(char*)*100);
    for (int i = 0 ; i < getLinesAmount(); i++) {
      fscanf(fp, "%s %s %d", firstname, lastname, &age);
      printf("%d) %s %s - %d\n", i+1, firstname, lastname, age);
    }
    free(firstname);
    free(lastname);
  }
  fclose(fp);
};

void searchContacts()
{
    FILE *fp;
    char word[100], wordS[100];
    fp = fopen(CONTACTS_FILE, "r");
    int i = 0;
    if (!fp)
      printf("Cant open file: %s.\n", CONTACTS_FILE);

    printf("Search for ?: ");
    scanf("%s", wordS);
    toLowerCase(wordS);
    while (fgets(word, 100, fp) != NULL)
    {
      ++i;
      toLowerCase(word);
      if (strstr(word, wordS) != NULL)
        printf("Contact found! : %d) %s", i, word);
    }
    fclose(fp);
}