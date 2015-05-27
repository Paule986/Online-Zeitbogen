<?php
// Seitentitel setzen
$seitentitel = "Erfassung";
// Navigation active setzen
$navsite =2 ;
// zusätzliche Dateien includieren
$zusatzinclude = "
<script type='text/javascript' src='../includes/js/responsive-calendar.js'></script>
<link rel='stylesheet' href='../includes/css/responsive-calendar.css'>
<link rel='stylesheet' href='../includes/css/bootstrap-theme.min.css'>
";
require('../includes/header.php'); // header includieren
require('../includes/mysql.php');  // Mysql Connect Datei einbinden
$maid = $_SESSION['maid'];         // MAID einlesen
$timestamp = time();               // Timestamp für Datumsoperationen erstellen
if((isset($_GET['m']))&&(isset($_GET['y']))){
    $datum_monat_cal = $_GET['m'];
    $datum_jahr_cal = $_GET['y'];
	$datum_monat_showcal = $_GET['m'];


    if($datum_monat_cal<1){
        $datum_monat_cal = 12;
		$datum_monat_showcal = 12;
        $datum_now_cal_y = $datum_jahr_cal-1;
    }elseif($datum_monat_cal>12){
        $datum_monat_cal = $datum_monat_cal-12;
		$datum_monat_showcal = $datum_monat_showcal-12;
        $datum_now_cal_y = $datum_jahr_cal+1;

    }else{
        $datum_now_cal_y = $datum_jahr_cal;
    }
	
    if($datum_monat_cal<=9){
        $datum_monat_cal = "0".$datum_monat_cal;
    }
    $datum_now_cal_d = date("d", $timestamp);
    $datum_now_cal = $datum_now_cal_y."-".$datum_monat_cal."-".$datum_now_cal_d;


}else{
    $datum_monat_cal = date("m",$timestamp);
	$datum_monat_showcal = date("m",$timestamp);
    $datum_now_cal_y = date("Y", $timestamp);
    $datum_now_cal = date("Y-m-d",$timestamp);
}
$datum_mon_cal = date("n",$timestamp);
$datum_year_cal = $datum_now_cal_y;
// Anzahl von Tagen im Monat berechnen
$month_num = cal_days_in_month(CAL_GREGORIAN, $datum_monat_cal, $datum_year_cal);
// String für Kalender Events erzeugen
$notes="";
// das Komma vom letzten Event im Kalenderstring entfernen
$notes = substr($notes, 0, -2);
// JS zum einbetten des Kalenders
////////////////////////////////////////////
////////////////////////////////////////////
// "Speichern erfolgreich"-Meldung Variabe definieren
$notiz = "";
         // Abfragen, ob von Kalender kommend
         // und ob Eintrag geändert oder neu erstellt werden soll
        if(isset($_GET['do'])){
                 $doo = $_GET['do'];
         }else{
                 $doo = "";
         }
         if(isset($_GET['eid'])){
                 $eid = $_GET['eid'];
         }
  if(isset($_POST['submitneu'])){
  // Wenn Erfassen geklickt, dann daten aufbereiten und DB Arbeit leisten
         // Variablen filtern, um mysql injections zu verhindern.
        if(isset($_POST['arbeitsbeginn'])){$beginn_neu = mysqli_real_escape_string($link,$_POST['arbeitsbeginn']); }else $beginn_neu ="";
        if(isset($_POST['arbeitsende'])){$ende_neu = mysqli_real_escape_string($link,$_POST['arbeitsende']); }else $ende_neu ="";
        if(isset($_POST['bemerkung'])){$bemerkung_neu = mysqli_real_escape_string($link,$_POST['bemerkung']); }else $bemerkung_neu ="";
        if(isset($_POST['arbeitsfrei'])){$aid_neu = mysqli_real_escape_string($link,$_POST['arbeitsfrei']); }else $aid_neu ="NULL";
        if(isset($_POST['datum'])){$datum_neu = mysqli_real_escape_string($link,$_POST['datum']); }else $datum_neu ="";
        if($doo=="neu"){
                 // Wenn neuer Eintrag, dann in DB schreiben
                 $sqladd = "INSERT INTO erfassung (datum,beginn,ende,maid,bemerkung,aid) VALUES('".$datum_neu."','".$beginn_neu.":00','".$ende_neu.":00',".$maid.",'".$bemerkung_neu."','".$aid_neu."');";
                 $link->query($sqladd);
                 // Erfolgreich-Meldung erstellen
                 $notiz = "<div class='alert alert-success'>Erfassung erfolgreich.</div>";
        //}else if($doo=="edit"){
          }else{
                 if(($_POST['arbeitsfrei']=="2")||($_POST['arbeitsfrei']=="3")){
                         $sollstunden = $_SESSION['sollstd'];
                         $aende = 7 + $sollstunden/5;
                         $sqledit = "UPDATE erfassung set beginn = '07:00:00', ende = '".$aende.":00:00', aid = '".$aid_neu."'  WHERE eid = ".$_POST['eid'].";";
                 }else{
                 // Wenn Eintrag bereits vorhanden, diesen in DB abändern
                 $sqledit = "UPDATE erfassung SET beginn = '".$beginn_neu.":00', ende = '".$ende_neu.":00', bemerkung = '".$bemerkung_neu."', aid = '".$aid_neu."' WHERE eid = ".$_POST['eid'].";";
                 }
                 $link->query($sqledit);
                 // Erfolgreich-Meldung erstellen
                 $notiz .= "<div class='alert alert-success'>Bearbeitung erfolgreich.</div>";
        }
  }
  
  if(isset($_POST['submitdelete'])){
                 // Wenn Button "Eintrag löschen" gedrückt, lösche den Datensatz
                 $sqldelete = "DELETE FROM erfassung WHERE eid = ".$_POST['eid'].";";              
                 $link->query($sqldelete);
				             // Lade Seite neu, damit Scripte nicht mehr auf gelöschte Daten zugreifen
				             echo ("<script>window.location.href=\"erfassung.php?m=".$datum_monat_showcal."&y=".$datum_now_cal_y.\"</script>");
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
          $feld_eid = $row['eid'];
          if($row['aid']=="3"){
           $notiz .= "<div class='alert alert-warning'>Bei einem 'Krank-Tag' wird die Arbeitszeit nicht beachtet.</div>";
          }
          if($row['aid']=="2"){
           $notiz .= "<div class='alert alert-warning'>Bei einem Urlaubstag wird die Arbeitszeit nicht beachtet.</div>";
          }
        
        }
  }else if($doo=="neu"){
        if(isset($_GET['datum'])){
                 $feld_datum = $_GET['datum'];
        }else{
                 $feld_datum = date("Y-m-d",$timestamp);
        }
  }else{
           $sqlheute = "SELECT * FROM erfassung WHERE maid= '".$_SESSION['maid']."' AND datum = '".$datum_now_cal."'";
           $result_edit = $link->query($sqlheute);
        // Datensatz in Var $row speichern
        while($row = mysqli_fetch_array($result_edit)){
          $feld_beginn = substr($row['beginn'],0,-3);
          $feld_ende =  substr($row['ende'],0,-3);
          $feld_bemerkung = $row['bemerkung'];
          $feld_aid = $row['aid'];
          $feld_datum = $row['datum'];
          $feld_eid = $row['eid'];
         }
  }
// Alle Tage des Monats aufrufen, um abzufragen, ob Eintrag vorhanden
for($tage=1;$tage<=$month_num;$tage++){
         if($tage<10){$tag ="0".$tage;}else{$tag = $tage;}
         // Aus Schleifen-Wert Datumsformat erstellen
         $select_datum = "'".$datum_year_cal."-".$datum_monat_cal."-".$tag."'";
         $result = mysqli_query($link, "SELECT eid,aid FROM erfassung WHERE maid = ".$maid." AND datum = ".$select_datum.";");
         // Anzahl an DatensÃƒÆ’Ã‚Â¤tzen erfragen
           $anzahl_notes = mysqli_num_rows($result);
         // Wenn kein Datensatz für den aktuellen Tag --> Markierung für JS erzeugen
         if($anzahl_notes<1){
                         $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'class': 'fehlt', 'url': 'erfassung.php?m=".$datum_monat_showcal."&y=".$datum_now_cal_y."&maid=".$maid."&do=neu&datum=".$datum_year_cal."-".$datum_monat_cal."-".$tag."'},\n";
         }else{
                while($myrow = mysqli_fetch_array($result)) {
                         // Wenn Eintrag vorhanden und AID = 3 - KRANK - dann Markierung erzeugen
                         if($myrow['aid']=="88"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'class': 'fehlt', 'url': 'erfassung.php?m=".$datum_monat_showcal."&y=".$datum_now_cal_y."&do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="99"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'class': 'normal', 'url': 'erfassung.php?m=".$datum_monat_showcal."&y=".$datum_now_cal_y."&do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="1"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'class': 'gleittag', 'url': 'erfassung.php?m=".$datum_monat_showcal."&y=".$datum_now_cal_y."&do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="2"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'class': 'urlaub', 'url': 'erfassung.php?m=".$datum_monat_showcal."&y=".$datum_now_cal_y."&do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="3"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'class': 'krank', 'url': 'erfassung.php?m=".$datum_monat_showcal."&y=".$datum_now_cal_y."&do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="4"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'class': 'fortbildung', 'url': 'erfassung.php?m=".$datum_monat_showcal."&y=".$datum_now_cal_y."&do=edit&eid=".$myrow['eid']."'},\n";
                         }
						 if($myrow['aid']=="5"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'class': 'wochenende', 'url': 'erfassung.php?m=".$datum_monat_showcal."&y=".$datum_now_cal_y."&do=edit&eid=".$myrow['eid']."'},\n";
                         }
                 }
         }
}
                 if(isset($_GET['datum'])){
                         echo"<h3>".$_GET['datum']." erfassen</h3>";
                 }else if( (isset($_GET['eid'])) ){
                         echo"<h3>".$feld_datum." anpassen</h3>";
                 }else{
					 	$feld_datum = date("Y-m-d",$timestamp);
                        echo"<h3>Heute erfassen</h3>";
                 } ?>
         <div style="width:25%;float:left;">
         <form class="navbar-form navbar-left" role="search" action="" method="POST" >
         <div class="form-group">
         <div id="4">
         <div class="input-group">
         <input autofocus="" type="text" value="<?php if(isset($feld_beginn))echo $feld_beginn; ?>" class="form-control btn-kurz" placeholder="Arbeitsbeginn Bsp.: 06:30" name="arbeitsbeginn" id="arbeitsbeginn">
         <input type="text" value="<?php if(isset($feld_ende))echo $feld_ende; ?>" class="form-control" placeholder="Arbeitsende Bsp.: 16:30" name="arbeitsende" id="arbeitsende">
         <input type="text" value="<?php if(isset($feld_bemerkung))echo $feld_bemerkung; ?>" class="form-control" placeholder="Bemerkung Bsp.: Homeoffice" name="bemerkung" id="bemerkung">
         <input type="hidden"  name="datum" id="datum" value="<?php if(isset($feld_datum))echo $feld_datum; ?>">
         <input type="hidden"  name="eid" id="eid" value="<?php if(isset($feld_eid))echo $feld_eid; ?>">
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
         </div></div>
         <button id="6" type="submit" name="submitneu" class="btn btn-default navbar-btn" style="width: 110px;"><span class="glyphicon glyphicon-ok"></span> Erfassen</button>
		 <button id="7" type="submit" name="submitdelete" class="btn btn-default navbar-btn" style="width: 110px;"><span class="glyphicon glyphicon-minus"></span> Löschen</button>
         <?php echo $notiz;  ?>
         </form>
         </div>
         </div>


<div style="width:45%;float:right;">
     <script>
$( document ).ready( function() {
  $(".responsive-calendar").responsiveCalendar({
      translateMonths:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
    time: '<?php echo $datum_now_cal; ?>',
    events: {
      <?php  echo $notes; // Events aus Kalenderstring einfügen?>
      }
  });
});
</script>

<!-- Responsive calendar - START -->
<div class="responsive-calendar"  >
  <div class="controls">
      <a class="pull-left" href="?m=<?php echo($datum_monat_cal-1); ?>&y=<?php echo($datum_now_cal_y); ?>"><div class="btn"><span class="glyphicon glyphicon-backward"></span></div></a>
      <h4><span data-head-year></span> <span data-head-month></span></h4>
      <a class="pull-right" href="?m=<?php echo($datum_monat_cal+1); ?>&y=<?php echo($datum_now_cal_y); ?>"><div class="btn"><span class="glyphicon glyphicon-forward"></span></div></a>
  </div><hr/>
  <div class="day-headers">
    <div class="day header">Mo</div>
    <div class="day header">Di</div>
    <div class="day header">Mi</div>
    <div class="day header">Do</div>
    <div class="day header">Fr</div>
    <div class="day header">Sa</div>
    <div class="day header">So</div>
  </div>
  <div id="5">
  <div class="days" data-group="days">
    <!-- the place where days will be generated -->
  </div>
  </div>
</div>
<!-- Responsive calendar - END -->
<div align="center"><span><a style="color:#F9836F";>nicht erfasst </a><a style="color:#00CC66";>erfasst </a><a style="color:#9296CB";>Urlaub </a><a style="color:#E2BDA0";>Krank </a><a style="color:#ADCBEA";>Gleittag </a><a style="color:#AAB2B1";>Wochenende </a><a style="color:#FDD703";>Fortbildung</a></span></div>
</div>
<div style="clear:left;"></div>
<?php
require('../includes/footer.php');
?>
