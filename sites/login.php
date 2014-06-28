<?php
// Seitentitel setzen
$seitentitel = "Home";
require('../includes/header.php'); // header inkludieren
require('../includes/mysql.php'); // mysql connect includieren
?>

<?php
$usern = $_POST["usern"]; //Variable für username deklarieren und initialisieren
$passwort = md5($_POST["passwort"]); //Variable für passwort deklarieren initialisieren


$result = $link->query("SELECT maid, usern, passwort, rechte FROM mitarbeiter WHERE usern = '$usern' AND passwort = '$passwort' LIMIT 1"); //Werte aus DB holen
 if($result->num_rows==1){ //Prüfung ob Login korrekt
// Datensätze in Array $row speichern
    while($row = mysqli_fetch_array($result)){
    $_SESSION["maid"] = $row['maid'];
    $_SESSION["usern"] = $row['usern'];
    $_SESSION["admin"] = $row['rechte'];
    }
    echo "<div align='center'><h2>Login erfolgreich. <br> Sie werden automatisch weitergeleitet</h2></div>"; //Erfolgsmeldung
    echo '<meta http-equiv="refresh" content="0; url=dashboard.php">'; //Weiterleitung zum Dashboard
    }
else
    {
    echo "<div align='center'><h2>Benutzername und/oder Passwort waren falsch.</h2> <a href=\"index.php\">Login</a></div>"; //Fehlermeldung
    }

require('../includes/footer.php'); //footer inkludieren
?>
