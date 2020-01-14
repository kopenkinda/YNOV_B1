<!DOCTYPE html>
<html lang="en">

<head>
  <title>PHP</title>
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <?php include('./components/header.php'); ?>
  <?php
  function random_color()
  {
    return '#' . str_pad(dechex(mt_rand(0, 0xFFFFFF)), 6, '0', STR_PAD_LEFT);
  }

  date_default_timezone_set("Europe/Paris");
  $hello = "Hello ";
  $world = ["W", "o", "r", "l", "d", "!"];

  echo ("<h1>" . $hello);
  foreach ($world as $letter) { ?>
    <span style="background-color: <?= random_color() ?>; padding: 8px;"> <?= $letter ?> </span>
  <?php
  }
  echo  "</h1>";
  echo "<span>Today is <span style=\"text-decoration: underline;\">" . date('d/m/Y h:i:s') . "</span></span>";
  ?>

</body>

</html>