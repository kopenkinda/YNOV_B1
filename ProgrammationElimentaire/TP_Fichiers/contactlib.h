#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "support.h"

#define CONTACTS_FILE "./contacts/contacts.txt"

typedef struct contact {
  char* firstname;
  char* lastname;
  int age;
} Contact;

int addContact( char* firstName, char* lastName, int age );
void listContacts();
void searchContacts();