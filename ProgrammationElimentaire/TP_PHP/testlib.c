#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/**
* Returns 1 if both Strings are equal, otherwise returns 0
*/
int testChar(char* desc, char * str1, char* str2)
{
  printf("%s -> ", desc);
  if(strcmp(str1, str2) == 0)
  {
    printf("%d\n", 1);
    return 1;
  }
  else
  {
    printf("%d\n", 0);
    return 0;
  }
}

int testInts(char* desc, int int1, int int2)
{
  printf("%s -> ", desc);
  if(int1 == int2)
  {
    printf("%d\n", 1);
    return 1;
  }
  else
  {
    printf("%d\n", 0);
    return 0;
  }
}