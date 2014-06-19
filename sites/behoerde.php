<?php
// Seitentitel setzen
$seitentitel = "Behörden";
//Header inkludieren
require('../includes/header.php');
// Menü inkludieren
require('../includes/menue.php');
// mysql connect includen
require('../includes/mysql.php');


?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
        
    <title>Behördenliste</title>
	<style>
		.btn-kurz
			{
				width: 250px;
			}
	</style>
	
  </head>

  <body>

    <div class="container">
	<form class="form-signin" role="form" method="post">
    <h2 class="form-signin-heading">Bitte Behörde eintragen:</h2>
        <input type="text" name="behoerde" id="behoerde1" class="form-control btn-kurz" placeholder="Name der Behörde" required autofocus>
        <input type="text" name="bezirk" id="bezirk1" class="form-control btn-kurz" placeholder="Bezirk" required>
        <input type="text" name="verantw" id="verantw1" class="form-control btn-kurz" placeholder="Verantwortlicher" required>
		<input type="text" name="rhmzbg" id="rhmzbg1" class="form-control btn-kurz" placeholder="Rahmenzeit Beginn" required>
		<input type="text" name="rhmzen" id="rhmzen1" class="form-control btn-kurz" placeholder="Rahmenzeit Ende" required>
		<!--<input type="datetime-local" name="rhmzbg" id="rhmzbg1" class="form-control btn-kurz" placeholder="Rahmenzeit Beginn" required>
		<input type="datetime-local" name="rhmzen" id="rhmzen1" class="form-control btn-kurz" placeholder="Rahmenzeit Ende" required>-->
        <button class="btn btn-lg btn-primary btn-block  btn-kurz" type="submit" name ="eingabe_ja">Eingabe bestätigen</button>
    </form>
		<?php
			if (isset($_POST['eingabe_ja'])) {
			$behoerde = $_POST["behoerde"];
			$bezirk = $_POST["bezirk"];
			$verantw = $_POST["verantw"];
			$rhmzbg = $_POST["rhmzbg"];
			$rhmzen = $_POST["rhmzen"];
			
			$eintrag = "INSERT INTO behoerde (art, name, verantwortlich, rahmenzeit_beginn, rahmenzeit_ende) VALUES ('$behoerde', '$bezirk', '$verantw', '$rhmzbg', '$rhmzen')";
			$eintragen = mysqli_query($link, $eintrag);
			}
		?>
	
		<table class="table table-striped">
			<tr>
				<th>Behördenname</th>
				<th>Bezirk</th>
				<th>Verantwortlicher</th>
			</tr>
		 <?php
			$abfrage = "SELECT art,name,verantwortlich,rahmenzeit_beginn, rahmenzeit_ende FROM behoerde";
			$ergebnis = mysqli_query($link, $abfrage);
			while($row = mysqli_fetch_array($ergebnis))
					{
					echo '<tr>';
					echo '<td>'.$row['art'].'</td>';
					echo '<td>'.$row['name'].'</td>';
					echo '<td>'.$row['verantwortlich'].'</td>';
					echo '<td>'.$row['rahmenzeit_beginn'].'</td>';
					echo '<td>'.$row['rahmenzeit_ende'].'</td>';
					echo '</tr>';
					}
		?>
		 </table>
	</div> 
  </body>
</html>
<?php
	require('../includes/footer.php');
?>
