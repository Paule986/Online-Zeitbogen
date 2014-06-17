<?php
$seitentitel = "Home";
require('../includes/header.php');
require('../includes/menue.php');
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
