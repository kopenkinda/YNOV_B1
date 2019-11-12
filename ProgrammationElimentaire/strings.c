#include <stdio.h>

int mystrlen(const char *str)
{
  int count = 0;
  while (str[count] != 0)
    count++;
  return count;
}

void mystrcpy(const char *inputStr, char *outputStr)
{
  int i = 0;
  while (inputStr[i] != '\0')
  {
    outputStr[i] = inputStr[i];
    i++;
  }
};

char *mystrcat(char *str1, const char *str2)
{
  int index = mystrlen(str1),
      counter = 0;

  while (str2[counter] != '\0')
  {
    str1[index] = str2[counter];
    index++;
    counter++;
  }
  return str1;
}

int main()
{
  char test[1000] = "original";
  char test2[1000] = {0};

  //? My strlen
  printf("%d\n", mystrlen(test));

  //? My strcpy
  mystrcpy(test, test2);
  printf("%s -> %s\n", test, test2);

  //? My strcat
  mystrcat(test, test2);
  printf("%s\n", test);

  return 0;
}