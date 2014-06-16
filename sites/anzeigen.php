<?php
$seitentitel = "Liste anzeigen";
$zusatzinclude = "
<script type='text/javascript' src='../includes/js/jquery.js'></script>
<link rel='stylesheet' href='../includes/css/bootstrap-theme.min.css'>
";

require('../includes/header.php');
require('../includes/mysql.php');
$timestamp = time();
$datum_now = date("Y-m-d",$timestamp);
//$maid = $_SESSION['maid'];

// Monatsnamen für die Anzeige festlegen
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

// Testen, ob bereits Monat über URL übergeben
if(!isset($_GET['m'])){
         //Keine Übergabe --> aktuelles Datum nutzen
         $monat_now_t = $monate[date("n",$timestamp)];
         $monat_now_z =date("n",$timestamp);
         $GLOBALS["now_m"] = $monat_now_z;
}else{
         // Monat aus der URL nutzen
         $monat_now_t = $monate[$_GET['m']];
         $monat_now_z =$_GET['m'];
         $GLOBALS["now_m"] = $monat_now_z;
}

?>

    <!--<link href="../assets/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap-theme.min.css">
   <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js">
    <script type="text/javascript" src="../assets/jquery/js/jquery.js"></script>
    <style type="text/css">
           body { background-color:#E0E0E0; }
           </style>   -->
    <div class="container">
    <h3><a href="?maid=<?php echo($maid); ?>&m=<?php echo($monat_now_z-1); ?>"><span class="glyphicon glyphicon-backward"></span></a>  <?php echo $monat_now_t; ?>  <a href="?maid=<?php echo($maid); ?>&m=<?php echo $monat_now_z+1; ?>"><span class="glyphicon glyphicon-forward"></span></a></h3>

                <table class="table table-striped table-bordered">
                        <thead>
                                <tr>
                                        <th width="50px">Datum</th><th width="50px">Anfang</th><th width="50px">Ende</th><th width="50px">Bemerkung</th><th width="50px">Arbeitsfrei</th><th width="50px">Saldo</th><th width="20px">Bearbeiten</th>
                                </tr>
                        </thead>

                        <tbody>

                                <?php

                                        // heutiges Datum ermitteln
                                        $timestamp = time();
                                        $datum_now = date("Ymd",$timestamp);
                                        $datum_now_y = date("Y",$timestamp);
                                        $datum_now_m = $GLOBALS["now_m"];
                                        if($datum_now_m <10){
                                                 $datum_now_m = "0".$datum_now_m;
                                        }
                                        // Interval Anfang erstellen
                                        $datum_interval_anfang = $datum_now_y."".$datum_now_m."01";
                                        $datum_interval_ende = $datum_now_y."".$datum_now_m."31";
                                        // Befehl ausführen - Soll Stunden von MA anzeigen
                                        $result_soll = $link->query("SELECT sollstd FROM mitarbeiter WHERE maid = '".$maid."'");
                                        $minuten_soll="";
                                        while($row_soll = mysqli_fetch_array($result_soll)){
                                                 // Sollstunden aus DB in Minuten / Tag berechnen
                                                 $minuten_soll =($row_soll['sollstd'])*60/5;
                                        }
                                        // Erfassungsdatensätze des eingetsellten Monats von MA anzeigen
                                        $result = $link->query("SELECT erfassung.beginn, erfassung.ende, erfassung.datum, erfassung.bemerkung, erfassung.eid, arbeitsfrei.bezeichnung FROM erfassung, arbeitsfrei WHERE erfassung.maid = '".$maid."' AND erfassung.aid = arbeitsfrei.aid AND DATE(erfassung.datum) BETWEEN ".$datum_interval_anfang." AND ".$datum_interval_ende." ORDER BY datum");
                                        // Testen, ob Datensätze vorhanden
                                        if($result->num_rows>0){
                                                 // Datensätze in Array $row speichern
                                                 while($row = mysqli_fetch_array($result)){
                                                         // Arbeitszeit berechnen
                                                         /// Datumsobjekt für Beginn & Ende erstellen
                                                         $date_beginn = date_create($row['beginn']);
                                                         $date_ende = date_create($row['ende']);
                                                         /// Differenz zwischen Beginn & Ende berechnen
                                                         $interval = date_diff($date_beginn, $date_ende);
                                                         /// Berechnungen und Formatierungen vom Intervall
                                                         $stdmin_ist = $interval->format('%H:%I');
                                                         $stunden_ist = $interval->format('%H');
                                                         $minuten_ist = $interval->format('%I');
                                                         $minuten_ist = ($stunden_ist*60)+$minuten_ist;
                                                         // Datumsanzeige formatieren
                                                         $date = date_create($row['datum']);
                                                         $date_format = date_format($date, 'd.m.Y');
                                                         // Uhrzeiten formatieren
                                                         $beginn_format = date_format($date_beginn, 'H:i');
                                                         $ende_format = date_format($date_ende, 'H:i');
                                                         // Wochentag festlegen
                                                         $tag[0] = "So";
                                                         $tag[1] = "Mo";
                                                         $tag[2] = "Di";
                                                         $tag[3] = "Mi";
                                                         $tag[4] = "Do";
                                                         $tag[5] = "Fr";
                                                         $tag[6] = "Sa";
                                                         $wochentag = $tag[date_format($date, 'w')];
                                                         // Daten aus DB in Tabelle anzeigen
                                                         echo '<tr>';
                                                         echo '<td width="50px">'.$wochentag.", ".$date_format.'</td>';
                                                         echo '<td width="50px">'.$beginn_format.'</td>';
                                                         echo '<td width="50px">'.$ende_format.'</td>';
                                                         echo '<td width="50px">'.$row['bemerkung'].'</td>';
                                                         echo '<td width="50px">'.$row['bezeichnung'].'</td>';
                                                         echo '<td width="50px">'.($minuten_ist-$minuten_soll).'</td>';
                                                         echo '<td width="20px"><a href="erfassung.php?eid='.$row['eid'].'&do=edit"><span class="glyphicon glyphicon-pencil"></span></a></td>';
                                                         echo '</tr>';
                                                 }
                                        }else{
                                                 echo"<h3>Keine Eintr&auml;ge</h3>";

                                        }
                                    require('../includes/footer.php');
                                ?>



                        <tbody>
                </table>



    </div>