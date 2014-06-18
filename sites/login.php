<?php
$seitentitel = "Home";
require('../includes/header.php');
require('../includes/menue.php');
require('../includes/mysql.php');
?>

<?php
$usern = $_POST["usern"];
$passwort = md5($_POST["passwort"]);


$ergebnis = mysqli_query($link, "SELECT maid, usern, passwort, rechte FROM mitarbeiter WHERE usern = '$usern' AND passwort = '$passwort' LIMIT 1");
$num_rows = mysqli_num_rows($ergebnis);
if($num_rows==1){
    $row = $ergebnis -> fetch_array(MYSQLI_ASSOC);
    $_SESSION["maid"] = $row->maid;
    $_SESSION["usern"] = $row->usern;
    $_SESSION["admin"] = $row->rechte;
    echo "<div align='center'><h2>Login erfolgreich. <br> Sie werden automatisch weitergeleitet, wenn nicht klicken sie hier: </h2> <br> <a href=\"geheim.php\">Gesch&uuml;tzer Bereich</a></div>";
    echo '<meta http-equiv="refresh" content="0; url=anzeigen.php">';
    }
else
    {
    echo "<div align='center'><h2>Benutzername und/oder Passwort waren falsch.</h2> <a href=\"index.php\">Login</a></div>";
    }

require('../includes/footer.php');
?>
