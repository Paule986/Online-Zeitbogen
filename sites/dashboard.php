<?php

$seitentitel = "&Uuml;bersicht";
// Navigation active setzen
$navsite =1 ;
require('../includes/header.php');
require('../includes/mysql.php');

$soll_std = "";


$timestamp = time();
$datum_now = date("Y-m-d",$timestamp);
$maid = $_SESSION['maid'];

// Monatsnamen f¸r die Anzeige festlegen
$monate = array(1=>"Januar",
                2=>"Februar",
                3=>"M&auml;rz",
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
                                                 echo "<a>".$row_ma['vname']."&nbsp;".$row_ma['nname']."</a>";
                                                 echo"<br>";
                                                 echo "<a>".$row_ma['stez']."</a>";
                                                 echo"<br>";
                                                 echo "<a>".$row_ma['art']."&nbsp;/&nbsp;".$row_ma['name']."</a>";
                                                 echo"<br>";
                                                 echo "<a>".$row_ma['bezeichnung']."</a>";
                                                 $soll_std = $row_ma['sollstd'];
                                                 echo "<h2>Rahmenzeit</h2>";
                                                 echo "<a>Von ".substr($row_ma['rahmenzeit_beginn'],0,-3)." bis ".substr($row_ma['rahmenzeit_ende'],0,-3)."</a>";
                                        }


?>
    <div style="text-indent: 3em">
    <hr size="1" noshade>
    <h2>Kurz&uuml;bersicht</h2>
    <h3> <?php echo $monat_now_t; ?> </h3>
    </div>

                                <div style="text-indent: 2em">
                                <?php

                                        // heutiges Datum ermitteln
                                        $datum_now = date("Ymd",$timestamp);
                                        $datum_now_y = date("Y",$timestamp);
                                        $datum_now_m = date("m",$timestamp);
                                        // Interval Anfang erstellen
                                        $datum_interval_anfang = date("Y-m",$timestamp);
                                        $datum_interval_ende = date("Y-m",$timestamp)."-31";
                                        // Befehl ausf¸hren - Daten von MA anzeigen
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
