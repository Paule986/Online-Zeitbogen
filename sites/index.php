<?php
$seitentitel = "Home";
$navsite="1";
require('../includes/header.php');

if(isset($_SESSION['maid'])){
   // Abfragen ob Logout Link geklickt, wenn ja Session löschen
   if(isset($_GET['do'])){ $do = $_GET['do'];}else{$do = "";}
   if($do == "logout"){
      session_destroy();
      echo "<div class='alert alert-success'>Sie wurden abgemeldet.</div>";
   }else{
         // Wenn bereits eingeloggt, Logout Link anzeigen
         echo "<a href='?do=logout'>Logout</a>";
   }

   }else{


   echo'
   <form class="form-signin" role="form" action="login.php" method="post">
      <h2 class="form-signin-heading">Bitte melden Sie sich an</h2>
        <div id="1"><input class="form-control" name="usern" placeholder="Benutzername"
                required=""
                autofocus=""
                type="text"></div>
        <input class="form-control" name="passwort" placeholder="Passwort"
                required=""
                type="password">
        <label class="checkbox"> 
        <input value="remember-me" type="checkbox" checked>
                Anmeldung speichern </label> 
        <button class="btn btn-lg btn-primary btn-block"
                type="submit">Anmelden</button>
  </form>';
   }
require('../includes/footer.php');
?>               
