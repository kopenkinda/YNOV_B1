#include "contactlib.h"

int main (void) {
  printf("\
Welcome to contact Manager 3000 v0.1:\n\
What would you like to do?:\n  \
1. Create contact\n  \
2. Show all contacts\n  \
3. Find a contact\n\n\
Your choice?: ");

  int menuChoice;// = 4;
  scanf("%d", &menuChoice);
  printf("\n");
  if (menuChoice == 1)
  {
    char firstname[100];
    char lastname[100];
    int age;
    printf("Enter contact's firstname: ");
    scanf("%s", firstname);
    printf("Enter contact's lastname: ");
    scanf("%s", lastname);
    printf("Enter contact's age: ");
    scanf("%d", &age);

    if(addContact(firstname, lastname, age) != 0)
    {
      printf("Error while trying to create a contact\n");
    };
  }
  else if (menuChoice == 2){
    listContacts();
  }
  else if (menuChoice == 3) {
    searchContacts();
  }
  else {
    printf("Invalid choice, exiting...\n");
    exit(1);
  };
  return 0;
}