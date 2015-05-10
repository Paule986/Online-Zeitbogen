 <?php
// Seitentitel setzen
$seitentitel = "Kalender";
// Navigation active setzen
$navsite =3 ;
// zusÃ¤tzliche Dateien includieren
$zusatzinclude = "
<script type='text/javascript' src='../includes/js/jquery.js'></script>
<script type='text/javascript' src='../includes/js/responsive-calendar.js'></script>
<link rel='stylesheet' href='../includes/css/responsive-calendar.css'>
";
require('../includes/header.php'); // header includieren
require('../includes/mysql.php');  // Mysql Connect Datei einbinden
$maid = $_SESSION['maid'];         // MAID einlesen
$timestamp = time();               // Timestamp für Datumsoperationen erstellen
if((isset($_GET['m']))&&(isset($_GET['y']))){
    $datum_monat_cal = $_GET['m'];
    $datum_jahr_cal = $_GET['y'];


    if($datum_monat_cal<1){
        $datum_monat_cal = 12;
        $datum_now_cal_y = $datum_jahr_cal-1;
    }elseif($datum_monat_cal>12){
        $datum_monat_cal = $datum_monat_cal-12;
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
    $datum_now_cal_y = date("Y", $timestamp);
    $datum_now_cal = date("Y-m-d",$timestamp);
}
$datum_mon_cal = date("n",$timestamp);
$datum_year_cal = $datum_now_cal_y;
// Anzahl von Tagen im Monat berechnen
$month_num = cal_days_in_month(CAL_GREGORIAN, $datum_monat_cal, $datum_year_cal);
// String für Kalender Events erzeugen
$notes="";
// Alle Tage des Monats aufrufen, um abzufragen, ob Eintrag vorhanden
for($tage=1;$tage<=$month_num;$tage++){
         if($tage<10){$tag ="0".$tage;}else{$tag = $tage;}
         // Aus Schleifen-Wert Datumsformat erstellen
         $select_datum = "'".$datum_year_cal."-".$datum_monat_cal."-".$tag."'";
         $result = mysqli_query($link, "SELECT eid,aid FROM erfassung WHERE maid = ".$maid." AND datum = ".$select_datum.";");
         // Anzahl an Datensätzen erfragen
           $anzahl_notes = mysqli_num_rows($result);
         // Wenn kein Datensatz für den aktuellen Tag --> Markierung für JS erzeugen
         if($anzahl_notes<1){

                         $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'number': 'nicht erfasst', 'class' : 'fehlt', 'url': 'erfassung.php?maid=".$maid."&do=neu&datum=".$datum_year_cal."-".$datum_monat_cal."-".$tag."'},\n";
         }else{

                while($myrow = mysqli_fetch_array($result)) {
                         // Wenn Eintrag vorhanden und AID = 3 - KRANK - dann Markierung erzeugen
                         if($myrow['aid']=="88"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'number': 'nicht erfasst', 'class': 'fehlt', 'url': 'erfassung.php?do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="99"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'number': 'erfasst', 'class': 'normal', 'url': 'erfassung.php?do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="1"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'number': 'Gleittag', 'class': 'gleittag', 'url': 'erfassung.php?do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="2"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'number': 'Urlaub', 'class': 'urlaub', 'url': 'erfassung.php?do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="3"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'number': 'krank', 'class': 'krank', 'url': 'erfassung.php?do=edit&eid=".$myrow['eid']."'},\n";
                         }
                         if($myrow['aid']=="4"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'number': 'Fortbildung', 'class': 'fortbildung', 'url': 'erfassung.php?do=edit&eid=".$myrow['eid']."'},\n";
                         }
						 if($myrow['aid']=="5"){
                                 $notes .="'".$datum_year_cal."-".$datum_monat_cal."-".$tag."': {'number': 'Wochenende', 'class': 'wochenende', 'url': 'erfassung.php?do=edit&eid=".$myrow['eid']."'},\n";
                         }

                 }
         }
}

// das Komma vom letzten Event im Kalenderstring entfernen
$notes = substr($notes, 0, -2);
// JS zum einbetten des Kalenders
?>
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
<div class="responsive-calendar"  data-translate-months="Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,Novemer,Dezember" >
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
  <div class="days" data-group="days">
    <!-- the place where days will be generated -->
  </div>
</div>
<!-- Responsive calendar - END -->
<div align="center"><span><a style="color:#F9836F";>nicht erfasst </a><a style="color:#00CC66";>erfasst </a><a style="color:#9296CB";>Urlaub </a><a style="color:#E2BDA0";>Krank </a><a style="color:#ADCBEA";>Gleittag </a><a style="color:#AAB2B1";>Wochenende </a><a style="color:#FDD703";>Fortbildung</a></span></div>
<?php

require('../includes/footer.php');

?>
