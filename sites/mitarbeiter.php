<?php
// Seitentitel setzen

	$seitentitel = "Liste anzeigen";
// Navigation active setzen
$navsite =5 ;
	
// zusätzliche Dateien includieren

	$zusatzinclude = "

	<script type='text/javascript' src='../includes/js/jquery.js'></script>
	<script type='text/javascript' src='../includes/js/master.js'></script>
	<link rel='stylesheet' href='../includes/css/bootstrap-theme.min.css'>
	";
	
	
	require('../includes/header.php');   // header inkludieren
	require('../includes/mysql.php');    // mysql connect includen

	$notiz ="";
  	error_reporting(0);
   
 if($_SESSION["admin"]==1){
 // Selct über Behörden Tabelle
 
	 $sqlbh = "SELECT * FROM behoerde";
	 $resultbh = mysqli_query($link, $sqlbh);
 
 //Variablen Initialisieren
 
	 $vname="";
	 $nname="";
	 $stez="";
	 $sollstd="";
	 $usern="";
	 $rechte="";
	 $bid="";
	 $behoerdenname="";
 


	if(isset($_GET['bla'])){ 
 		$do=$_GET['bla'];
 
 //Mitarbeiterdaten von XY zum bearbeiten in Edit Felder laden
 
  	if ($do== "edit"){
	 
		$sqlladen = "SELECT * FROM mitarbeiter WHERE maid =".$_GET['maid1'];
		$result2 = mysqli_query($link, $sqlladen);
	 
	while($row1 = mysqli_fetch_array($result2)) {
		$vname=$row1['vname'];
		$nname=$row1['nname']; 
		$stez=$row1['stez'];
		$sollstd=$row1['sollstd'];
		$rechte=$row1['rechte'];
		$bid=$row1['bid'];
		 }
		 }
		 }
	
	//Passwort ändern Funktion
		  
	 if(isset($_POST['savepwd'])){
		 $sqlupdatepwd = "UPDATE mitarbeiter SET 

		 passwort= '".md5($_POST['passwort'])."' 
		
		 WHERE maid=".$_GET['maid1'];

		 mysqli_query($link, $sqlupdatepwd);
		 
		 $notiz = "<div class='alert alert-success'>Passwort geändert</div>";
		 
		
		 }
		 	  
	 if(isset($_POST['submit']))
	 {
		 
	// Updatebefehl für mitarbeiter XY
		
	 if(isset($_GET['bla'])){$do=$_GET['bla'];}else$do="";
	 if($do=="edit")
	 {
		 $sqlupdate = "UPDATE mitarbeiter SET 
		 vname= '".$_POST['vname']."', 
		 nname= '".$_POST['nname']."', 
		 stez='".$_POST['stez']."', 
		 sollstd='".$_POST['sollstd']."',
		 rechte='".$_POST['rechte']."',
		 bid='".$_POST['bid']."'
		 WHERE maid=".$_GET['maid1'];
		 
		 mysqli_query($link, $sqlupdate);
		 
	
		 //Fehlerabfang
		 
		 if (!mysqli_query($link, $sqlupdate)) {
			 
    printf("Errormessage: %s\n", mysqli_error($link));
	}
	}     
	//doppelte Usernames Abfangen
	                                                                                 
		else{
		$sqlcheck = "SELECT maid FROM mitarbeiter WHERE usern = '".$_POST['usern']."';";
		$usercheck = mysqli_query($link, $sqlcheck);
		$rowcount=mysqli_num_rows($usercheck);
		if($rowcount < 1 ){
			 
	//Anlegen eine Mitarbeiters in der Datenbank
			 
		$sqlinsert = "INSERT INTO mitarbeiter 
		(
		vname, 
		nname, 
		stez, 
		sollstd,
		usern,
		passwort,
		rechte, 
		bid
		) 
	    
		VALUES (
		'".$_POST['vname']."', 
		'".$_POST['nname']."', 
		'".$_POST['stez']."', 
	    '".$_POST['sollstd']."',
		'".$_POST['usern']."', 
	    '".md5($_POST['passwort'])."',
		'".$_POST['rechte']."',
	    '".$_POST['bid']."');"; 

     mysqli_query($link, $sqlinsert);
	 
	 //Erfolgsbenachrichtigung
	 
	  $notiz = "<div class='alert alert-success'>Nutzer angelegt</div>";
		 }
		 else
		 {
	 // Fehlermeldung
			  $notiz = "<div class='alert alert-danger'>Nutzer nicht angelegt Username bereits vorhanden !</div>";
			 }
			}
			
		}
 
  
	 
 

 
  ?>

  <!-- Formular   -->
  
  <div style="width: 250px;">
<form role="form" method="post" name="ajax_form" id="ajax_form">


<div   class="form-group">
    <label for="voname">Vorname</label><input class="form-control" name="vname" id="vname" type="text" value="<?php echo $vname; ?>" /></div>
<div class="form-group">
    <label for="nname">Nachname</label><input class="form-control" name="nname" id="nname" type="text" value="<?php echo $nname; ?>"/></div>
<div class="form-group">
    <label for="stez">Stellenzeichen</label><input class="form-control" name="stez" id="stelz" type="text" value="<?php echo $stez; ?>"/></div>
<div class="form-group">
    <label for="sollstd">Sollstunden</label><input class="form-control" name="sollstd" id="sollstd" type="text" value="<?php echo $sollstd; ?>"/></div>
    
    
<?php 

// Edit des Usernamen / Parrwort verhindern

if ($do != "edit"){
echo"<div class='form-group'>
    <label for='usern'>Username</label><input class='form-control' name='usern' id='usern' type='text' value='".$usern."'/></div>
    
<div class='form-group'>
    <label for='passwort'>Passwort</label><input class='form-control' name='passwort' id='passwort' type='text' value='".$passwort."'/></div>";
}
else {
	echo 
	"<form><div class='form-group'>
    <label for='passwort'>Passwort</label><input class='form-control' name='passwort' id='passwort' type='password' value='".$passwort."'/><button class='btn btn-default' name='savepwd' id='savepwd' type='submit' >Ändern</button></div></form>";
	
	}
?>

  <!-- Adminauswahl  -->
    
<div class="checkbox"> 
 <label for="checkbox">Admin</label>   
    <input name="rechte" type="checkbox" value="<?php if($rechte==1){echo $rechte;}else echo "1"; ?>" >

</div>

 <!-- Behördenfeld erstellen und mit daten füllen  -->    
  
<div class="form-group">
    <label for="status">Status</label>
    
    
<?php


 $sqlbh = "SELECT * FROM behoerde";
 $resultbh = mysqli_query($link, $sqlbh);
 
 //Aufbau der Checkbox
 
	echo "<select name='bid' class='form-control'>"; 
	while($row = mysqli_fetch_array($resultbh)) {
		
		$behoerdenname[$row[bid]] = $row[name]; 
		
		if ($row['bid']==$bid){
			$selected="SELECTED";
			}
		else{
			$selected="";

			}
			
        echo "<option ".$selected." value=".$row[bid].">".$behoerdenname[$row[bid]]."</option>";
	 }
 	 echo "</select>";
?> 
  
  <!-- Speichern und Neu Button  --> 
<br>
<button class="btn btn-default" name="submit" id="submit" type="submit" >Speichern</button>


</div>  
</form>
<form action="index3.php">

<button class="btn btn-default" name="neu" id="neu" type="submit" >Neu</button>


<br>
</form>
</div>
<div id="showtab"></div>


  </body>
  
  <!-- Implementierung Bootstrap  -->
  
  <script src="../ajax/bootstrap/js/bootstrap.min.js"></script>
  
 <?php
	echo $notiz;

 
 //Delete Funktion
 
	if(isset($_GET['bla']))
 
 { 
 	$do=$_GET['bla'];
 
	if ($do== "del")
 {
	$sql = "DELETE FROM mitarbeiter WHERE maid =".$_GET['maid1'];
 
     mysqli_query($link, $sql);
 }
 }
 	if(isset($_GET['bla']))
 { 
 	$do=$_GET['bla'];
 



 }
 
// Write Query

	echo"<a id='showbutton' href='javascript:toggle();'>Liste anzeigen</a>";

//Tabelle erzeugen

	echo"<div id='liste' class='hidelist'>";
	$strSQL = "SELECT * FROM mitarbeiter";

 
	echo"  <table class='table table-striped table-bordered table-condensed'>";
	
	echo"  <th>Vorname</th>";
	echo"  <th>Nachname</th>";
	echo"  <th>Stellenzeichen</th>";
	echo"  <th>sollstd</th>";
	echo"  <th>Username</th>";
	
	echo"  <th>Admin</th>";
	echo"  <th>Behoerde</th>";
	echo"  <th>Löschen</th>";
	echo"  <th>Ändern</th>";

//Send Query

	$result = mysqli_query($link, $strSQL);


// Make table from result

	while($row = mysqli_fetch_array($result)) {

	if($row['rechte']=="1")

	{
	$adminok="<span class='glyphicon glyphicon-ok'></span>";
	}
	
	else{$adminok="<span class='glyphicon glyphicon-remove'></span>";}
	echo "<tr><td>"
	
	.$row['vname']."</td><td>"
	.$row['nname']."</td><td>"
	.$row['stez']."</td><td>"
	.$row['sollstd']."</td><td>"
	.$row['usern']."</td><td>"
	.$adminok."</td><td>"
	.$behoerdenname[$row['bid']]."</td>

	<td>
	<a href='?bla=del&maid1=".$row['maid']."'>
	
	<span class='glyphicon glyphicon-trash'></span></a>
	</td><td>
	
	<a href='?bla=edit&maid1=".$row['maid']."'>
	
	<span class='glyphicon glyphicon-pencil'></span></a>
	
	</td>
	</tr>";
	}
	
	echo" </table></div>";

}else{
	
echo "<div class='alert alert-danger'>Sie haben keine Adminrechte !</div>";	
}

	require('../includes/footer.php');
?>
