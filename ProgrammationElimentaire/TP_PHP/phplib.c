#include <stdio.h>

#include <stdlib.h>

#include <string.h>

#include <math.h>


/*
X http://php.net/manual/ru/function.explode.php
? http://php.net/manual/ru/function.implode.php
! http://php.net/manual/ru/function.lcfirst.php
! http://php.net/manual/ru/function.ltrim.php
! http://php.net/manual/ru/function.nl2br.php
? http://php.net/manual/ru/function.number-format.php
! http://php.net/manual/ru/function.rtrim.php
! http://php.net/manual/ru/function.str-pad.php
! http://php.net/manual/ru/function.str-repeat.php
! http://php.net/manual/ru/function.str-rot13.php
X http://php.net/manual/ru/function.str-shuffle.php
X http://php.net/manual/ru/function.str-split.php
! http://php.net/manual/ru/function.str-word-count.php
! http://php.net/manual/ru/function.strcasecmp.php
X http://php.net/manual/ru/function.stripos.php
! http://php.net/manual/ru/function.strrchr.php
! http://php.net/manual/ru/function.strrev.php
X http://php.net/manual/ru/function.strripos.php
X http://php.net/manual/ru/function.strrpos.php
X http://php.net/manual/ru/function.strtok.php
! http://php.net/manual/ru/function.strtolower.php
! http://php.net/manual/ru/function.strtoupper.php
! http://php.net/manual/ru/function.strtr.php
! http://php.net/manual/ru/function.substr-count.php
! http://php.net/manual/ru/function.substr-replace.php
! http://php.net/manual/ru/function.substr.php
! http://php.net/manual/ru/function.trim.php
! http://php.net/manual/ru/function.ucfirst.php
! http://php.net/manual/ru/function.ucwords.php
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

char * php_ucwords(char * source) {
  char * result = malloc(sizeof(char *) * strlen(source));
  result[0] = source[0] - 'a' + 'A';
  for (int i = 1; i < strlen(source); i++) {
    if (my_isspace(source[i])) {
      result[i] = source[i];
      result[i+1] = source[i+1] - 'a' + 'A';
      i++;
      continue;
    }
    result[i] = source[i];
  }
  printf("%s\n", result);
  return result;
}

char * php_strrev(char * source) {
  char * result = malloc(sizeof(char* ) * strlen(source));
  for (int i = ( strlen(source) - 1 ); i >= 0; i--)
    result[strlen(source) - (i+1) ] = source[i];
  return result;
}

char * php_strrchr(char * source, char ch) {
  return strrchr(source, ch);
}

char * php_ltrim(char * source) {
  if (source[0] == '\0') return "";
  char * result = malloc(sizeof(char * ) * strlen(source));
  for (int i = 0; i < strlen(source); i++) result[i] = source[i];
  while (my_isspace( * result)) result++;
  return result;
}

int php_word_count(const char * source) {
  int i, w;
  for (i = 0, w = 0; i < strlen(source); i++) {
    if (!my_isspace((*(source+i)))) {
        w++;
        for (;!my_isspace(*(source+i)) && *(source+i) != '\0'; i++);
    }
  }
  return w;
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

char * php_str_pad(char * source,  int l, char * str) {
  if (source[0] == '\0') return "";
  int length = l - strlen(source);
  if (length <= 0) return source;
  char * result = malloc(sizeof(char * ) * l);
  int i = 0;
  for (; i < strlen(source); i++) result[i] = source[i];
  for (int j = 0; strlen(result) < l; j++) {
    if (j == strlen(str)) j = 0;
    result[i] = str[j];
    i++;
  }
  return result;
}

char * php_str_repeat(char * source, int count) {
  if (source[0] == '\0' || count < 1) return "";
  char * result = malloc(sizeof(char *) * strlen(source) * count);
  for (int i = 0; i < count; i++)
    for (int j = 0; j < strlen(source); j++) result[(i*strlen(source) +j)] = source[j];
  return result;
}

char * php_rot13(char * source) {
  if (source[0] == '\0') return "";
  char * result = malloc(sizeof(char*) * strlen(source));
  for (int i = 0; i < strlen(source); i++){
    if (
      (source[i] >= 'a' && source[i] < ('z' - 13)) ||
      (source[i] >= 'A' && source[i] < ('Z' - 13))
      )
      result[i] = source[i] + 13;
    else if (
      (source[i] >= ('z' - 13) && source[i] <= 'z') || 
      (source[i] >=  ('Z' - 13) && source[i] <= 'Z')
      )
      result[i] = source[i] - 13;
    else
      result[i] = source[i];
  }
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


int php_strcasecmp(char * str1, char * str2) {
  return strcmp(php_strtolower(str1), php_strtolower(str2));
}
