#include "contactlib.h"

int getLinesAmount () {
  int *counter = malloc(sizeof(int));
  *counter = 0;
  FILE *fp; 
  char c;
  fp = fopen(CONTACTS_FILE, "r"); 
  if (fp == NULL) 
  { 
    printf("Could not open file %s", CONTACTS_FILE);
    return 0; 
  } 
  for (c = getc(fp); c != EOF; c = getc(fp)) 
    if (c == '\n')
      *counter = *counter + 1; 
  fclose(fp);
  return *counter;
}

int my_isspace(char c) {
  if (c == ' ' ||
    c == '\f' ||
    c == '\n' ||
    c == '\r' ||
    c == '\t' ||
    c == '\v')
    return 1;

  return 0;
}

char * ltrim(char * source) {
  if (source[0] == '\0') return "";
  char * result = malloc(sizeof(char * ) * strlen(source));
  for (int i = 0; i < strlen(source); i++) result[i] = source[i];
  while (my_isspace( * result)) result++;
  return result;
}

char * rtrim(char * source) {
  if (source[0] == '\0') return "";
  int l_source = strlen(source),
      counter = 0;
  int i = l_source;
  while ( my_isspace(source[--i]) ) counter++;
  char * result = malloc(sizeof(char * ) * (l_source - counter));
  for (int i = 0; i < (l_source - counter); i++) result[i] = source[i];
  return result;
}

char * trim (char * source) {
  return rtrim(ltrim(source));
}

char* toLowerCase(char* str)
{
  for(int i = 0; i < strlen( str ); i++)
  {
    if(str[i] >= 65 && str[i] <= 90)
      str[i] += 32;
  }
  return str;
}