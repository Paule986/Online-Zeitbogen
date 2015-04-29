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

if(isset($_GET['m'])){
         $datum_monat_cal = $_GET['m'];
         if($datum_monat_cal<=9){
                 $datum_monat_cal = "0".$datum_monat_cal;
         }
         $datum_now_cal_y = date("Y",$timestamp);
         $datum_now_cal_d = date("d",$timestamp);
         $datum_now_cal = $datum_now_cal_y."-".$datum_monat_cal."-".$datum_now_cal_d;
}else{
         $datum_monat_cal = date("m",$timestamp);
         $datum_now_cal = date("Y-m-d",$timestamp);
}
$datum_mon_cal = date("n",$timestamp);
$datum_year_cal = date("Y",$timestamp);
// Anzahl von Tagen im Monat berechnen
$month_num = cal_days_in_month(CAL_GREGORIAN, $datum_monat_cal, $datum_year_cal);

// Monatsnamen für die Anzeige festlegen
$monate = array(1=>"Januar",
                2=>"Februar",
                3=>"März",
                4=>"April",
                5=>"Mai",
                6=>"Juni",
                7=>"Juli",
                8=>"August",
                9=>"September",
                10=>"Oktober",
                11=>"November",
                12=>"Dezember");
// Aktuellen Monat raussuchen
$monat_now_t = $monate[date("n",$timestamp)];


         $result_ma = $link->query("SELECT mitarbeiter.vname, mitarbeiter.nname, mitarbeiter.stez, mitarbeiter.sollstd, behoerde.art, behoerde.name, behoerde.rahmenzeit_beginn, behoerde.rahmenzeit_ende, status.bezeichnung FROM mitarbeiter, behoerde, status WHERE mitarbeiter.maid = '".$maid."' AND mitarbeiter.bid=behoerde.bid AND mitarbeiter.sid=status.sid");
                                        while($row_ma = mysqli_fetch_array($result_ma)){
                                                 echo "<h2>Stammdaten</h2>";
                                                 echo "<div>".$row_ma['vname']."&nbsp;".$row_ma['nname']."</div>";
                                                 echo"<br>";
                                                 echo "<div>".$row_ma['stez']."</div>";
                                                 echo"<br>";
                                                 echo "<div>".$row_ma['art']."&nbsp;/&nbsp;".$row_ma['name']."</div>";
                                                 echo"<br>";
                                                 echo "<div>".$row_ma['bezeichnung']."</div>";
                                                 $soll_std = $row_ma['sollstd'];
                                                 echo "<h2>Rahmenzeit</h2>";
                                                 echo "<div>Von ".substr($row_ma['rahmenzeit_beginn'],0,-3)." bis ".substr($row_ma['rahmenzeit_ende'],0,-3)."</div>";
                                        }


?>



    <div style="text-indent: 3em">
    <hr size="1" noshade>
    <h2><div>Kurzübersicht</div></h2>
	<a class="pull-left" href="?m=<?php echo($datum_monat_cal-1); ?>"><div class="btn"><span class="glyphicon glyphicon-backward"></span></div></a>
	<div style="float: left; width: 100px; margin-left: 39px;"><h3> <?php echo $datum_monat_cal; ?> </h3></div>
	<a class="pull-left" href="?m=<?php echo($datum_monat_cal+1); ?>"><div class="btn"><span class="glyphicon glyphicon-forward"></span></div></a>
    </div>

                                <div style="text-indent: 2em">
                                <?php

                                        // heutiges Datum ermitteln
                                        $datum_now = date("Ymd",$timestamp);
                                        $datum_now_y = date("Y",$timestamp);
                                        $datum_now_m = date("m",$timestamp);
                                        // Interval Anfang erstellen
                                        $datum_interval_anfang = date("Y-$datum_monat_cal",$timestamp);
                                        $datum_interval_ende = date("Y-$datum_monat_cal",$timestamp)."-31";
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
                                         

echo "<table><tr><td><div>Geleistete Arbeitsstunden</td><td>".(round($saldo/60,1))." (".(round($saldo,0))." Min)</td></tr><tr><td>Soll-Arbeitsstunden</td><td>".($soll_std*4)." (".($soll_std*4*60)." Min)</td></tr><tr><td>Zeit-Saldo</td><td>".(round($saldo/60-($soll_std*4),1))." (".(round(($saldo-($soll_std*4*60)),0))." Min)</td></tr><tr><td>Urlaubstage</td><td>".$urlaub_tage."</td></tr><tr><td>erfasste Urlaubstage</td><td>".$urlaub_ist."</td></tr><tr><td>Krank-Tage</td><td>".$krank."</td></tr></table>";
                                ?>
                                </div>
<!-- Beginn: Inkludieren von Footer -->
<?php 
require('../includes/footer.php'); 
?>
<!-- Ende: Inkludieren von Footer -->
