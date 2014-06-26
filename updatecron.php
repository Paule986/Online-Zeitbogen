<?php
///////////////////////////////////////////////////////////////////////////////////
////// Achtung diese Datei trÃ¤gt ohne RÃ¼ckfrage neue DatensÃ¤tze in die DB /////////
///////////////////////////////////////////////////////////////////////////////////

// mysql connect includen
require('includes/mysql.php');
$timestamp = time();
if(isset($_GET['monat'])){
         $datum_monat_cal = $_GET['monat'];
}else{
         $datum_monat_cal = date("n",$timestamp);
}

$timestamp = time();
$datum_now = date("Ymd",$timestamp);
$datum_now_y = date("Y",$timestamp);
$datum_now_m = $datum_monat_cal;

if($datum_now_m <10){
          $datum_now_m = "0".$datum_now_m;
}
// Interval Anfang erstellen
$datum_interval_anfang = $datum_now_y."".$datum_now_m."01";
$datum_interval_ende = $datum_now_y."".$datum_now_m."31";
echo "Einträge für Monat ".$datum_monat_cal." werden neu berechnet.<br><br>";
$datum_year_cal = date("Y",$timestamp);
// Anzahl von Tagen im Monat berechnen
$month_num = cal_days_in_month(CAL_GREGORIAN, $datum_monat_cal, $datum_year_cal);

$result_ma = $link->query("SELECT maid,sollstd FROM mitarbeiter");
while($row_ma = mysqli_fetch_array($result_ma)){

         $sollstunden = $row_ma['sollstd'];
         $aende = 7 + $row_ma['sollstd']/5;
         $sqlupdate = "UPDATE erfassung set beginn = '07:00:00', ende = '".$aende.":00:00' WHERE (aid = '2' OR aid = '3') AND maid = '".$row_ma['maid']."' AND DATE(datum) BETWEEN ".$datum_interval_anfang." AND ".$datum_interval_ende.";";
         $sqladd = $link->query($sqlupdate);
         echo "Tage für MAID ".$row_ma['maid']." neu berechnet.<br>";

}
?>
