<?php
//set up mysql connection

$datenbankname = "zeiterfassungsbogen";
$dbuser = "root";
$dbpw = "";
$dbserver = "localhost";


// Prozedural
$link = mysqli_connect($dbserver,$dbuser,$dbpw,$datenbankname) or die("Error " . mysqli_error($link));
// OO
$mysqli = new mysqli($dbserver,$dbuser,$dbpw,$datenbankname)or die("Error " . mysqli_error($mysqli));;

?>