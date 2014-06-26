<?php
///////////////////////////////////////////////////////////////////////////////////
////// Achtung diese Datei trägt ohne Rückfrage neue Datensätze in die DB /////////
///////////////////////////////////////////////////////////////////////////////////

// mysql connect includen
require('includes/mysql.php');
$timestamp = time();
if(isset($_GET['monat'])){
         $datum_monat_cal = $_GET['monat'];
}else{
         $datum_monat_cal = date("n",$timestamp);
}
echo "Einträge für Monat ".$datum_monat_cal." werden angelegt.<br><br>";
$datum_year_cal = date("Y",$timestamp);
// Anzahl von Tagen im Monat berechnen
$month_num = cal_days_in_month(CAL_GREGORIAN, $datum_monat_cal, $datum_year_cal);

$result_ma = $link->query("SELECT maid FROM mitarbeiter");
while($row_ma = mysqli_fetch_array($result_ma)){

         for($dayinmonth=1;$dayinmonth<=$month_num;$dayinmonth++){
         if($dayinmonth<=9){
         $thisday="0".$dayinmonth;
         }else{
         $thisday=$dayinmonth;
         }
         $sqladd = $link->query("INSERT INTO erfassung (datum,maid,aid) VALUES('".$datum_year_cal."-".$datum_monat_cal."-".$thisday."',".$row_ma['maid'].",'88');");
         }
         echo "Tage für MAID ".$row_ma['maid']." angelegt.<br>";

}

?>
