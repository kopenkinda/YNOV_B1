#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define LINE_SIZE_MAX 10000
typedef struct Contact Contact;
struct Contact
{
  char *firstname;
  char *lastname;
  int age;
};
void createContact();
void showContacts(Contact * contacts, int contacts_length);
void saveContacts(Contact *contacts, int contacts_l, char *filename);
void loadContacts(Contact *contacts, char *filename);