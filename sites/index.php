<?php
$seitentitel = "Home";
require('../includes/header.php');
require('../includes/menue.php');


if(isset($_SESSION['maid'])){
   // Abfragen ob Logout Link geklickt, wenn ja Session löschen
   if(isset($_GET['do'])){ $do = $_GET['do'];}else{$do = "";}
   if($do == "logout"){
      session_destroy();
   }
   // Wenn bereits eingeloggt, Logout Link anzeigen
   echo "<a href='?do=logout'>Logout</a>";
   }
?>
   <form class="form-signin" role="form" action="login.php" method="post">
      <h2 class="form-signin-heading">Bitte melden Sie sich an</h2>
        <input class="form-control" name="usern" placeholder="Benutzername"
                required=""
                autofocus=""
                type="text">
        <input class="form-control" name="passwort" placeholder="Passwort"
                required=""
                type="password">
        <label class="checkbox"> 
        <input value="remember-me" type="checkbox">
                Anmeldung speichern </label> 
        <button class="btn btn-lg btn-primary btn-block"
                type="submit">Anmelden</button>
  </form>
<?php
require('../includes/footer.php');
?>               
