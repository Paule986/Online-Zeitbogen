<?php
$seitentitel = "Home";
require('../includes/header.php');
require('../includes/menue.php');
require('../includes/mysql.php');
?>

<?php
$usern = $_POST["usern"];
$passwort = md5($_POST["passwort"]);


$result = $link->query("SELECT maid, usern, passwort, rechte FROM mitarbeiter WHERE usern = '$usern' AND passwort = '$passwort' LIMIT 1");
 if($result->num_rows==1){
// DatensÃƒÂ¤tze in Array $row speichern
    while($row = mysqli_fetch_array($result)){
    $_SESSION["maid"] = $row['maid'];
    $_SESSION["usern"] = $row['usern'];
    $_SESSION["admin"] = $row['rechte'];
    }
    echo "<div align='center'><h2>Login erfolgreich. <br> Sie werden automatisch weitergeleitet</h2></div>";
    echo '<meta http-equiv="refresh" content="0; url=anzeigen.php">';
    }
else
    {
    echo "<div align='center'><h2>Benutzername und/oder Passwort waren falsch.</h2> <a href=\"index.php\">Login</a></div>";
    }

require('../includes/footer.php');
?>
