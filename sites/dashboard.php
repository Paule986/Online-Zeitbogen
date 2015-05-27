<?php
$seitentitel = "Übersicht";
// Navigation active setzen
$navsite =1 ;
require('../includes/header.php');
require('../includes/mysql.php');
$soll_std = "";
$timestamp = time();
$datum_now = date("Y-m-d",$timestamp);
$maid = $_SESSION['maid'];
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

// Monatsnamen für die Anzeige festlegen
$monate = array('01'=>"Januar",
                '02'=>"Februar",
                '03'=>"März",
                '04'=>"April",
                '05'=>"Mai",
                '06'=>"Juni",
                '07'=>"Juli",
                '08'=>"August",
                '09'=>"September",
                '10'=>"Oktober",
                '11'=>"November",
                '12'=>"Dezember");
// Aktuellen Monat raussuchen
$monat_now_t = $monate[$datum_monat_cal];

         $result_ma = $link->query("SELECT mitarbeiter.vname, mitarbeiter.nname, mitarbeiter.stez, mitarbeiter.sollstd, behoerde.art, behoerde.name, behoerde.rahmenzeit_beginn, behoerde.rahmenzeit_ende, status.bezeichnung FROM mitarbeiter, behoerde, status WHERE mitarbeiter.maid = '".$maid."' AND mitarbeiter.bid=behoerde.bid AND mitarbeiter.sid=status.sid");
                                        while($row_ma = mysqli_fetch_array($result_ma)){
                                                 echo "<div class='jumbotron'><div id='2'><h2>Stammdaten</h2></div>";
                                                 echo "<div>".$row_ma['vname']."&nbsp;".$row_ma['nname']."</div>";
                                                 echo"<br>";
                                                 echo "<div>".$row_ma['stez']."</div>";
                                                 echo"<br>";
                                                 echo "<div>".$row_ma['art']."&nbsp;/&nbsp;".$row_ma['name']."</div>";
                                                 echo"<br>";
                                                 echo "<div>".$row_ma['bezeichnung']."</div>";
                                                 $soll_std = $row_ma['sollstd'];
                                                 echo "<h2>Rahmenzeit</h2>";
                                                 echo "<div>Von ".substr($row_ma['rahmenzeit_beginn'],0,-3)." bis ".substr($row_ma['rahmenzeit_ende'],0,-3)."</div></div>";
                                        }
?>

    <div id="3" style="text-indent: 3em;"><h2>Kurzübersicht</h2></div>
	
	<div style="margin-left: 3em; padding-bottom: 15px;"><h3 id="Datumsanker"><a href="?m=<?php echo($datum_monat_cal-1); ?>&y=<?php echo($datum_now_cal_y); ?>#Datumsanker"><span class="glyphicon glyphicon-backward"></span></a> <?php echo($monat_now_t); ?> <?php echo $datum_now_cal_y; ?> <a href="?m=<?php echo($datum_monat_cal+1); ?>&y=<?php echo($datum_now_cal_y); ?>#Datumsanker"><span class="glyphicon glyphicon-forward"></span></a></h3></div>

                                <div style="text-indent: 2em">
                                <?php
                                        // heutiges Datum ermitteln
                                        $datum_now = date("Ymd",$timestamp);
                                        $datum_now_y = $datum_now_cal_y;
                                        $datum_now_m = $datum_monat_cal;
                                        // Interval Anfang erstellen
                                        $datum_interval_anfang = date("$datum_now_y-$datum_now_m",$timestamp);
                                        $datum_interval_ende = date("$datum_now_y-$datum_now_m",$timestamp)."-31";
                                        // Befehl ausführen - Daten von MA anzeigen
                                                 $saldo=0;
                                        $result_saldo = $link->query("SELECT * FROM erfassung WHERE maid = '".$maid."' AND aid ='99' AND datum LIKE '".$datum_interval_anfang."%' ");
                                                  while($row_sts = mysqli_fetch_array($result_saldo)){
                                                         $datetime1 = strtotime("1/1/1980 ".$row_sts['beginn']);
                                                         $datetime2 = strtotime("1/1/1980 ".$row_sts['ende']);
                                                         $saldo=$saldo +($datetime2-$datetime1)/60;
                                        }
                                         $saldo = round($saldo,1);
                                         $result_krank = $link->query("SELECT eid FROM erfassung WHERE maid = '".$maid."' AND aid ='3' AND datum LIKE '".$datum_interval_anfang."%' ");
                                         $krank = $result_krank->num_rows;
                                         $result_urlaub = $link->query("SELECT eid FROM erfassung WHERE maid = '".$maid."' AND aid ='2' AND datum LIKE '".$datum_interval_anfang."%' ");
                                         $urlaub_ist = $result_urlaub->num_rows;
                                         $result_tage= "SELECT urlbtage from mitarbeiter WHERE maid = '".$maid."'";
                                         $tage_ist = mysqli_query($link, $result_tage);
                                         while($row_tage=mysqli_fetch_array($tage_ist)){
			 $urlaub_tage = $row_tage['urlbtage'];
		         }		 
                                         
echo "<table><tr><td>Geleistete Arbeitsstunden</td><td>".(round($saldo/60,1))." (".(round($saldo,0))." Min)</td></tr><tr><td>Soll-Arbeitsstunden</td><td>".($soll_std*4)." (".($soll_std*4*60)." Min)</td></tr><tr><td>Zeit-Saldo</td><td>".(round($saldo/60-($soll_std*4),1))." (".(round(($saldo-($soll_std*4*60)),0))." Min)</td></tr><tr><td>Urlaubstage</td><td>".$urlaub_tage."</td></tr><tr><td>erfasste Urlaubstage</td><td>".$urlaub_ist."</td></tr><tr><td>Krank-Tage</td><td>".$krank."</td></tr></table>";
                                ?>
                                </div>
<!-- Beginn: Inkludieren von Footer -->
<?php 
require('../includes/footer.php'); 
?>
<!-- Ende: Inkludieren von Footer -->
