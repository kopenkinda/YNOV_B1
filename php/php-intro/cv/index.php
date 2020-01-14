<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Circuluum Vitae</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <?php include('../components/header.php') ?>
  <?php

  $myData = array(
    'firstName' => 'Dmitrii',
    'lastName' => 'Kopenkin',
    'age' => 19,
    'contacts' => array(
      'phone' => '+79630345783',
      'email' => 'kopenkin.da@gmail.com',
      'twitch' => 'https://twitch.tv/dmitriyk_',
    ),
    'school' => array(
      'name' => 'YNOV',
      'fac' => 'Computer science',
      'year' => 'BAC+1',
      'start_year' => '2018',
    ),
    'experience' => array(
      'current_level' => 'Middle Full-Stack developper',
      'technologies' => array(
        'JavaScript (+Node.js)' => 3, //years
        'TypeScript' => 1, //year
        'HTML/CSS' => 4, //years
      ),
    )
  )
  ?>

  <h1><?= $myData['firstName'] . ' ' . $myData['lastName'] . ', ' . $myData['age'] ?></h1>
  <br>
  <h2>My Contacts</h2>
  <ul>
    <?php
    foreach ($myData['contacts'] as $data => $contact) {
      echo '<li>' . $data . ': ' . $contact . '</li>';
    }
    ?>
  </ul>
  <h2>My school</h2>
  <ul>
    <?php
    foreach ($myData['school'] as $item => $data) {
      echo '<li>' . $item . ': ' . $data . '</li>';
    }
    ?>
</ul>
<h2>My experiences</h2>
<strong>My level now is: <?= $myData['experience']['current_level'] ?></strong><br><br>
<strong>List of technologies i know:</strong> 
<ul>
<?php
  foreach ($myData['experience']['technologies'] as $item => $data) {
    echo '<li>' . $item . ': ' . $data . '</li>';
  }
  ?>
  </ul>
</body>

</html>