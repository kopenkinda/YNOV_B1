#include "functions.h"

void saveContacts(Contact *contacts, int contacts_l, char *filename)
{
  free(contacts);
};

void loadContacts(Contact *contacts, char *filename)
{
  FILE *file = NULL;
  Contact contact = {"", "", 0};

  file = fopen(filename, "r+");

  if (file != NULL)
  {
    int i = 0;
    while (fscanf(file, "%s,%s,%d\n", contact.firstname, contact.lastname, &contact.age) != -1)
    {
      contacts[i] = contact;
      i++;
    }

    fclose(file);
  }
  else
  {
    file = fopen(filename, "w");
    fclose(file);
  }
};

void createContact(){};

void showContacts(Contact * contacts, int contacts_length){
  for (int i = 0; i < contacts_length; i++)
  {
    printf("%s %s, %d\n", contacts[i].lastname, contacts[i].firstname, contacts[i].age);
  };
};