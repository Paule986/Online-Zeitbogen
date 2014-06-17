<?php
$seitentitel = "Home";
require('../includes/header.php');
require('../includes/menue.php');
?>

<?php
session_start();
?>

<?php
$usern = $_POST["usern"];
$passwort = md5($_POST["passwort"]);

$abfrage = "SELECT usern, passwort FROM mitarbeiter WHERE usern LIKE '$usern' LIMIT 1";
$ergebnis = mysqli_query($abfrage);
$row = mysqli_fetch_object($ergebnis);

if($row->passwort == $passwort)
    {
    $_SESSION["usern"] = $usern;
    echo "<div align='center'><h2>Login erfolgreich. <br> Sie werden automatisch weitergeleitet, wenn nicht klicken sie hier: </h2> <br> <a href=\"geheim.php\">Gesch&uuml;tzer Bereich</a></div>";
    echo '<meta http-equiv="refresh" content="0; url=anzeigen.php">';
    }
else
    {
    echo "<div align='center'><h2>Benutzername und/oder Passwort waren falsch.</h2> <a href=\"index.php\">Login</a></div>";
    }

?> 
<?php
require('../includes/footer.php');
?>
