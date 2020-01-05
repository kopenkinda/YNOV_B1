#include <stdio.h>

#include <stdlib.h>

#include <string.h>

#include "phplib.h"

#include "testlib.h"

int main() {
  int successCounter = 0,
    totalTests = 0;

  // PHP_LTRIM
  if (testChar(
      "ltrim: Strings should be equal",
      php_ltrim("\t\n   \r  \vT E S T "),
      "T E S T "
    ))
    successCounter++;
  totalTests++;

  // PHP_RTRIM
  if (testChar(
      "rtrim: Strings should be equal",
      php_rtrim(" T E S T\t\n   \r  \v"),
      " T E S T"
    ))
    successCounter++;
  totalTests++;

  // PHP_TRIM
  if (testChar(
      "trim: Strings should be equal",
      php_trim("\t\n   \r  \vT E S T\t\n   \r  \v"),
      "T E S T"
    ))
    successCounter++;
  totalTests++;

  // PHP_NL2BR
  if (testChar(
      "nl2br: Strings should be equal",
      php_nl2br("test\r\ntest\nhaha"),
      "test<br><br>test<br>haha"
    ))
    successCounter++;
  totalTests++;

  // PHP_STRTOLOWER
  if (testChar(
      "strtolower: Strings should be equal",
      php_strtolower("ABCDEFGZ.!-=+"),
      "abcdefgz.!-=+"
    ))
    successCounter++;
  totalTests++;

  // PHP_STRTOUPPER
  if (testChar(
      "strtoupper: Strings should be equal",
      php_strtoupper("abcdefgz.!-=+"),
      "ABCDEFGZ.!-=+"
    ))
    successCounter++;
  totalTests++;

  // PHP_LCFIRST
  if (testChar(
      "lcfirst: Strings should be equal",
      php_lcfirst("TEST haha P0Po!"),
      "tEST haha P0Po!"
    ))
    successCounter++;
  totalTests++;

  // PHP_UCFIRST
  if (testChar(
      "ucfirst: Strings should be equal",
      php_ucfirst("tEST haha P0Po!"),
      "TEST haha P0Po!"
    ))
    successCounter++;
  totalTests++;

  // PHP_STRSTR
  if (testChar(
      "strstr: Strings should be equal",
      php_strstr("strstr testz!", "!tes", "0abc"),
      "carcar abcaz0"
    ))
    successCounter++;
  totalTests++;

  // PHP_SUBSTR
  if (testChar(
      "substr: Strings should be equal",
      php_substr("Damn, Boi!", 6),
      "Boi!"
    ))
    successCounter++;
  totalTests++;

  // PHP_SUBSTR: REPLACE
  if (testChar(
      "substr_replace: Strings should be equal",
      php_substr_replace("JoJo Unknown Adventures!", "Bizzare", 5),
      "JoJo Bizzare Adventures!"
    ))
    successCounter++;
  totalTests++;

  // PHP_SUBSTR: COUNT
  if (testInts(
      "substr_count: Counter should be equal to 2",
      php_substr_count("This is a test!", "is"),
      2
    ))
    successCounter++;
  totalTests++;

  // Show final
  printf(
    "\n\n---- TESTS ----\n\
Total: %d\n\
Successful : %d\n\
Failed: %d\n",
    totalTests,
    successCounter,
    totalTests - successCounter
  );
  return 0;
}