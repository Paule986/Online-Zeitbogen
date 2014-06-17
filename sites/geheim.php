<?php
$seitentitel = "Home";
require('../includes/header.php');
require('../includes/menue.php');
?>

<?php
session_start();
?>

<?php

if(!isset($_SESSION["usern"]))
   {
   echo "<div align='center'><h2>Bitte erst <a href=\"login.html\">einloggen</a></h2></div>";
   exit;
   }
else
    echo "<div align='center'><h2>Hallo ",$_SESSION["usern"],"!  Willkommen in Ihrem pers&ouml;nlichen Bereich!</h2></div>";
    
?> 
?> 
<?php
require('../includes/footer.php');
?>




