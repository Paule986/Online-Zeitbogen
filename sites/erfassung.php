<?php
$seitentitel = "Erfassung";
$zusatzinclude = "
<script type='text/javascript' src='../includes/js/jquery.js'></script>
<link rel='stylesheet' href='../includes/css/bootstrap-theme.min.css'>
";

require('../includes/header.php');
require('../includes/mysql.php');
$timestamp = time();
$maid =$_SESSION['maid'];
$notiz = "";
        if(isset($_GET['do'])){
                 $doo = $_GET['do'];
         }else{
                 $doo = "neu";
         }
         if(isset($_GET['eid'])){
                 $eid = $_GET['eid'];
         }


  if(isset($_POST['submitneu'])){

         // Variablen filtern, um mysql injections zu verhindern.
        if(isset($_POST['arbeitsbeginn'])){$beginn_neu = mysqli_real_escape_string($link,$_POST['arbeitsbeginn']); }else $beginn_neu ="";
        if(isset($_POST['arbeitsende'])){$ende_neu = mysqli_real_escape_string($link,$_POST['arbeitsende']); }else $ende_neu ="";
        if(isset($_POST['bemerkung'])){$bemerkung_neu = mysqli_real_escape_string($link,$_POST['bemerkung']); }else $bemerkung_neu ="";
        if(isset($_POST['arbeitsfrei'])){$aid_neu = mysqli_real_escape_string($link,$_POST['arbeitsfrei']); }else $aid_neu ="NULL";
        if(isset($_POST['datum'])){$datum_neu = mysqli_real_escape_string($link,$_POST['datum']); }else $datum_neu ="";


        if($doo=="neu"){
                 $sqladd = "INSERT INTO erfassung (datum,beginn,ende,maid,bemerkung,aid) VALUES('".$datum_neu."','".$beginn_neu.":00','".$ende_neu.":00',".$maid.",'".$bemerkung_neu."','".$aid_neu."');";
                 $link->query($sqladd);
                 $notiz = "<h2><span class='label label-success'>Erfassung erfolgreich.</span></h2>";
        }else if($doo=="edit"){
                 $sqledit = "UPDATE erfassung SET beginn = '".$beginn_neu.":00' AND ende = '".$ende_neu.":00' AND bemerkung = '".$bemerkung_neu."' AND aid = '".$aid_neu."' WHERE eid = '".$eid."';";
                 $link->query($sqledit);
                 $notiz = "<h2><span class='label label-success'>Bearbeitung erfolgreich.</span></h2>";
        }
  }

  if($doo=="edit"){

         $result_edit = $link->query("SELECT * FROM erfassung WHERE eid = '".$_GET['eid']."'");
        // Datensatz in Var $row speichern

        while($row = mysqli_fetch_array($result_edit)){
          $feld_beginn = substr($row['beginn'],0,-3);
          $feld_ende =  substr($row['ende'],0,-3);
          $feld_bemerkung = $row['bemerkung'];
          $feld_aid = $row['aid'];
          $feld_datum = $row['datum'];
        }
  }else if($doo=="neu"){
        if(isset($_GET['datum'])){
                 $feld_datum = $_GET['datum'];
        }else{
                 $feld_datum = date("Y-m-d",$timestamp);
        }
  }

?>


    <div class="container">
         <?php
                 if(isset($_GET['datum'])){
                         echo"<h3>".$_GET['datum']." erfassen</h2>";
                 }else if( (isset($_GET['eid'])) ){
                         echo"<h3>".$feld_datum." anpassen</h2>";
                 }else{
                         echo"<h3>Heute erfassen</h2>";
                 } ?>
         <form class="navbar-form navbar-left" role="search" action="" method="POST" >
         <div class="form-group">
         <div class="input-group">
         <input type="text" value="<?php if(isset($feld_beginn))echo $feld_beginn; ?>" class="form-control one" placeholder="Arbeitsbeginn Bsp.: 06:30" name="arbeitsbeginn" id="arbeitsbeginn">
         <input type="text" value="<?php if(isset($feld_ende))echo $feld_ende; ?>" class="form-control one" placeholder="Arbeitsende Bsp.: 16:30" name="arbeitsende" id="arbeitsende">
         <input type="text" value="<?php if(isset($feld_bemerkung))echo $feld_bemerkung; ?>" class="form-control" placeholder="Bemerkung Bsp.: Homeoffice" name="bemerkung" id="bemerkung">
         <input type="hidden"  name="datum" id="datum" value="<?php if(isset($feld_datum))echo $feld_datum; ?>">
         <select name="arbeitsfrei" id="arbeitsfrei" class="form-control btn-success">
                 <?php
                         $result_liste = $link->query("SELECT * FROM arbeitsfrei ORDER BY aid DESC;");
                         $liste = "";
                         while($row = mysqli_fetch_array($result_liste)){
                         if(($feld_aid==$row['aid'])||($aid_neu==$row['aid'])){
                                 $selected = "SELECTED";
                         }else{
                                 $selected = "";
                         }
                                 $liste .= "<option ".$selected." value = '".$row['aid']."'>".$row['bezeichnung']."</option>\n";
                         }
                         echo $liste;

                 ?>
         </select>
         </div>
         <button type="submit" name="submitneu" class="btn btn-default navbar-btn"><span class="glyphicon glyphicon-ok"></span> Erfassen</button>
         <?php echo $notiz;  ?>
         </form>
         </div>

    </div>
    <?php

    require('../includes/footer.php');

    ?>