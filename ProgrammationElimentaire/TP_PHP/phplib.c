#include <stdio.h>

#include <stdlib.h>

#include <string.h>

#include <math.h>


/*
http://php.net/manual/ru/function.explode.php
http://php.net/manual/ru/function.implode.php
! http://php.net/manual/ru/function.lcfirst.php
! http://php.net/manual/ru/function.ltrim.php
! http://php.net/manual/ru/function.nl2br.php
? http://php.net/manual/ru/function.number-format.php
! http://php.net/manual/ru/function.rtrim.php
http://php.net/manual/ru/function.str-pad.php
http://php.net/manual/ru/function.str-repeat.php
http://php.net/manual/ru/function.str-rot13.php
http://php.net/manual/ru/function.str-shuffle.php
http://php.net/manual/ru/function.str-split.php
http://php.net/manual/ru/function.str-word-count.php
http://php.net/manual/ru/function.strcasecmp.php
http://php.net/manual/ru/function.stripos.php
http://php.net/manual/ru/function.strrchr.php
http://php.net/manual/ru/function.strrev.php
http://php.net/manual/ru/function.strripos.php
http://php.net/manual/ru/function.strrpos.php
http://php.net/manual/ru/function.strtok.php
! http://php.net/manual/ru/function.strtolower.php
! http://php.net/manual/ru/function.strtoupper.php
! http://php.net/manual/ru/function.strtr.php
! http://php.net/manual/ru/function.substr-count.php
! http://php.net/manual/ru/function.substr-replace.php
! http://php.net/manual/ru/function.substr.php
! http://php.net/manual/ru/function.trim.php
! http://php.net/manual/ru/function.ucfirst.php
http://php.net/manual/ru/function.ucwords.php
http://php.net/manual/ru/function.wordwrap.php
*/

// Support func
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

char * php_ltrim(char * source) {
  if (source[0] == '\0') return "";
  char * result = malloc(sizeof(char * ) * strlen(source));
  for (int i = 0; i < strlen(source); i++) result[i] = source[i];
  while (my_isspace( * result)) result++;
  return result;
}

char * php_rtrim(char * source) {
  if (source[0] == '\0') return "";
  int l_source = strlen(source),
      counter = 0;
  int i = l_source;
  while ( my_isspace(source[--i]) ) counter++;
  char * result = malloc(sizeof(char * ) * (l_source - counter));
  for (int i = 0; i < (l_source - counter); i++) result[i] = source[i];
  return result;
}

char * php_trim (char * source) {
  return php_rtrim(php_ltrim(source));
}

char * php_nl2br(char * source) {
  if (source[0] == '\0') return "";
  int counter = 0,
    l_source = strlen(source);
  for (int i = 0; i < l_source; i++)
    if (source[i] == '\n' || source[i] == '\r') counter++;
  char * result = malloc(sizeof(char * ) * l_source + counter * 3);
  int c = 0;
  for (int i = 0; i < l_source; i++) {
    if (source[i] == '\n' || source[i] == '\r') {
      result[i + c] = '<';
      result[i + c + 1] = 'b';
      result[i + c + 2] = 'r';
      result[i + c + 3] = '>';
      c+=3;
      continue;
    }
    result[i + c] = source[i];
  }
  return result;
}


// TODO
// char * php_number_format (int number, int numzero, char separator) {
//   int l_number = 1 + (int)log10(number);
//   return "";
// }

char * php_strtolower(char * str) {
  if (str[0] == '\0') return "";
  int l = strlen(str);
  char * result = malloc(sizeof(char * ) * l);
  for (int i = 0; i < l; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z')
      result[i] = str[i] + 32;
    else
      result[i] = str[i];
  }
  return result;
}

char * php_strtoupper(char * str) {
  if (str[0] == '\0') return "";
  int l = strlen(str);
  char * result = malloc(sizeof(char * ) * l);
  for (int i = 0; i < l; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') result[i] = str[i] - 32;
    else result[i] = str[i];
  }
  return result;
}

char * php_lcfirst(char * str) {
  if (str[0] == '\0') return "";
  int l = strlen(str);
  char * result = malloc(sizeof(char * ) * l);
  result[0] = str[0] + 32;
  for (int i = 1; i < l; i++)
    result[i] = str[i];
  return result;
}

char * php_ucfirst(char * str) {
  if (str[0] == '\0') return "";
  int l = strlen(str);
  char * result = malloc(sizeof(char * ) * l);
  result[0] = str[0] - 32;
  for (int i = 1; i < l; i++)
    result[i] = str[i];
  return result;
}

char * php_strstr(char * source, char * from, char * to) {
  if (strlen(from) != strlen(to) || strlen(source) < strlen(from) || strlen(source) < strlen(to)) return "";
  int f, j, l = strlen(source);
  char * result = malloc(sizeof(char * ) * l);
  for (int i = 0; i < l; i++) {
    f = 0, j = 0;
    for (; j < strlen(from); j++) {
      if (source[i] == from[j]) {
        f = 1;
        break;
      }
    }
    if (f) result[i] = to[j];
    else result[i] = source[i];
  }
  return result;
}

char * php_substr_replace(char * source, char * pattern, int start) {
  int l_source = strlen(source),
    l_pattern = strlen(pattern),
    c = 0;
  if (source[0] == '\0' || pattern[0] == '\0' || start > l_source - l_pattern) return "";
  char * result = malloc(sizeof(char * ) * l_source);

  for (int i = 0; i < l_source; i++) {
    if (i >= start && i < l_pattern + start) {
      result[i] = pattern[c];
      c++;
    } else result[i] = source[i];
  }

  return result;
}

char * php_substr(char * source, int start) {
  if (source[0] == '\0' || start < 0) return "";
  int l_substr = strlen(source) - start;
  char * result = malloc(sizeof(char * ) * l_substr);
  int c = 0;
  for (int i = start; i < start + l_substr; i++) {
    result[c] = source[i];
    c++;
  }
  return result;
}

int php_substr_count(char * source, char * pattern) {
  if (source[0] == '\0' || pattern[0] == '\0') return -1;

  int * result = malloc(sizeof(int)),
    l_source = strlen(source),
    l_pattern = strlen(pattern),
    flag;

  * result = 0;

  for (int i = 0; i < l_source - l_pattern; i++) {
    flag = 0;
    for (int j = 0; j < l_pattern; j++) {
      if (source[i + j] != pattern[j]) flag = 1;
    }
    if (flag == 0) * result += 1;
  }

  return *result;
}