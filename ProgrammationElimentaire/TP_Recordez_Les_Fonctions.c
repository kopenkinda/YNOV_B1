#include <stdio.h>
#include <string.h>

int it_int(int a, int b)
{
  return a == b;
}

// ? strlen : longueur d’une chaîne
int mystrlen(const char *str)
{
  int count = 0;
  while (str[count] != 0)
    count++;
  return count;
}

// ? strcpy : copie d’une chaîne
void mystrcpy(const char *inputStr, char *outputStr)
{
  int i = 0;
  while (inputStr[i] != '\0')
  {
    outputStr[i] = inputStr[i];
    i++;
  }
};

// ? strcat : concaténation de chaînes
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

// ? strcmp : comparaisons de chaînes
int mystrcmp(const char *str1, const char *str2)
{
  if (mystrlen(str1) != mystrlen(str2))
    return 1;
  int len = mystrlen(str1);
  for (int i = 0; i < len; i++)
  {
    if (str1[i] != str2[i])
      return 1;
  }
  return 0;
}

// ? strchr : rechercher un caractére dans une chaîne

char *mystrchr(const char *str, int c)
{
  int len = mystrlen(str),
      hasFound = 0,
      counter = 0;
  char *result;

  for (int i = 0; i <= len; i++)
  {
    if (!hasFound)
    {
      if (str[i] == c)
      {
        result[counter] = str[i];
        counter++;
      }
    }
    else
    {
      result[counter] = str[i];
      counter++;
    };
  }
  return result;
}

// ? strstr : recherche une chaîne dans une autre
char *mystrstr(char *str, char *substr)
{
  while (*str)
  {
    char *Begin = str;
    char *pattern = substr;

    while (*str && *pattern && *str == *pattern)
    {
      str++;
      pattern++;
    }
    if (!*pattern)
      return Begin;
    str = Begin + 1;
  }
  return NULL;
}

int main()
{

  char str1[] = "Strings",
       str2[] = "Stringz",
       str3[] = "Strings",
       str4[1000] = {0},
       str5[1000] = {0},
       str6[1000] = "Con",
       str7[1000] = "Cat",
       str8[1000] = "Con",
       str9[1000] = "Cat",
       str10[1000] = {0},
       str11[1000] = {0};

  //! My strlen
  printf("Test 1(strlen): %d -> %d\n", it_int(mystrlen(str1), strlen(str1)), mystrlen(str1));

  //! My strcpy
  mystrcpy(str1, str4);
  strcpy(str5, str1);
  printf("Test 2(strcpy): %d -> %s\n", !strcmp(str4, str5), str4);

  //! My strcat
  strcat(str6, str7);
  mystrcat(str8, str9);
  printf("Test 3(strcat): %d -> %s\n", !strcmp(str6, str8), str6);

  //! My strcmp

  printf("Test 4(strcmp): %d -> %d\n", it_int(strcmp(str6, str8), mystrcmp(str6, str8)), mystrcmp(str6, str8));

  // ! My strchr
  const char str[] = "http://www.tutorialspoints.com";
  const char ch = '.';
  char *myret = strchr(str, ch);
  char *ret = strchr(str, ch);
  printf("Test 5(strchr): %d -> %s\n", !strcmp(ret, myret), myret);

  //! My strstr
  const char haystack[20] = "TestString";
  const char needle[10] = "String";
  char *ret2 = strstr(haystack, needle);
  char *myret2 = mystrstr(haystack, needle);

  ret = strstr(haystack, needle);
  printf("Test 6(strstr): %d -> %s\n", !strcmp(ret2, myret2), myret2);
  return 0;
}