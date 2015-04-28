<?php
// Seitentitel setzen
$seitentitel = "Liste anzeigen";
// Navigation active setzen
$navsite =4 ;
// zusätzliche Dateien includieren
$zusatzinclude = "
<script type='text/javascript' src='../includes/js/jquery.js'></script>
<link rel='stylesheet' href='../includes/css/bootstrap-theme.min.css'>
";
require('../includes/header.php');   // header inkludieren
require('../includes/mysql.php');    // mysql connect includen
$maid = $_SESSION['maid'];           // MAID einlesen
$timestamp = time();                 // Timestamp erstellen
$datum_now = date("Y-m-d",$timestamp);  // Datum formatieren

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

// Testen, ob bereits Monat über URL übergeben
if(!isset($_GET['m'])){
         //Keine Ãœbergabe --> aktuelles Datum nutzen
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


    <h3><a href="?maid=<?php echo($maid); ?>&m=<?php echo($monat_now_z-1); ?>"><span class="glyphicon glyphicon-backward"></span></a>  <?php echo $monat_now_t; ?>  <a href="?maid=<?php echo($maid); ?>&m=<?php echo $monat_now_z+1; ?>"><span class="glyphicon glyphicon-forward"></span></a></h3>

                <table class="table table-striped table-bordered">
                        <thead>
                                <tr>
                                        <th width="50px">Datum</th><th width="50px">Anfang</th><th width="50px">Ende</th><th width="50px">Bemerkung</th><th width="50px">Status</th><th width="50px">Saldo</th><th width="20px">Bearbeiten</th>
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
                                        // Befehl ausfÃ¼hren - Soll Stunden von MA anzeigen
                                        $result_soll = $link->query("SELECT sollstd FROM mitarbeiter WHERE maid = '".$maid."'");
                                        $minuten_soll="";

                                        if(isset($_POST['save'])){
                                        // Wenn Speichern Button geklickt, daten in DB Ã¤ndern

                                                 // Variablen filtern, um mysql injections zu verhindern.
                                                $auswahl= 2;
                                                if($_POST['arbeitsfrei'] == $auswahl){     
                                                                $result_urlaub = $link->query("SELECT eid FROM erfassung WHERE maid = '".$maid."' AND aid ='2'");
			                			$urlaub_ist = $result_urlaub->num_rows;
			        				$summe = $urlaub_ist + 1;																		
		                        			$result_tage= "SELECT urlbtage from mitarbeiter WHERE maid = '".$maid."'";
			                			$tage_ist = mysqli_query($link, $result_tage);
			        				 while($row_tage=mysqli_fetch_array($tage_ist)){
			                        			 $tage = $row_tage['urlbtage'];
								}
							if ($summe > $tage){
			                			echo '<html><head><title>Warnung</title>
			                			<script language="javascript" type="text/javascript"> 
								alert("Urlaubstage aufgebraucht!");
								</script></head><body></body></html>';
							}
							else{
			                        		// Variablen filtern, um mysql injections zu verhindern.
			                			if(isset($_POST['arbeitsbeginn'])){$beginn_neu = mysqli_real_escape_string($link,$_POST['arbeitsbeginn']); }else $beginn_neu ="";
			                			if(isset($_POST['arbeitsende'])){$ende_neu = mysqli_real_escape_string($link,$_POST['arbeitsende']); }else $ende_neu ="";
			                			if(isset($_POST['bemerkung'])){$bemerkung_neu = mysqli_real_escape_string($link,$_POST['bemerkung']); }else $bemerkung_neu ="";
			                			if(isset($_POST['arbeitsfrei'])){$aid_neu = mysqli_real_escape_string($link,$_POST['arbeitsfrei']); }else $aid_neu ="99";
								if(isset($_POST['eid'])){$eid_neu = mysqli_real_escape_string($link,$_POST['eid']); }else $eid_neu ="";
								// Ã„nderungen in DB speichern
				                		$sqledit = "UPDATE erfassung SET beginn = '".$beginn_neu.":00', ende = '".$ende_neu.":00', bemerkung = '".$bemerkung_neu."', aid = '".$aid_neu."' WHERE eid = ".$eid_neu.";";
								$link->query($sqledit);
							}
						}
						else{
				                	// Variablen filtern, um mysql injections zu verhindern.
							if(isset($_POST['arbeitsbeginn'])){$beginn_neu = mysqli_real_escape_string($link,$_POST['arbeitsbeginn']); }else $beginn_neu ="";
							if(isset($_POST['arbeitsende'])){$ende_neu = mysqli_real_escape_string($link,$_POST['arbeitsende']); }else $ende_neu ="";
				        		if(isset($_POST['bemerkung'])){$bemerkung_neu = mysqli_real_escape_string($link,$_POST['bemerkung']); }else $bemerkung_neu ="";
							if(isset($_POST['arbeitsfrei'])){$aid_neu = mysqli_real_escape_string($link,$_POST['arbeitsfrei']); }else $aid_neu ="99";
							if(isset($_POST['eid'])){$eid_neu = mysqli_real_escape_string($link,$_POST['eid']); }else $eid_neu ="";
							// Ã„nderungen in DB speichern
							$sqledit = "UPDATE erfassung SET beginn = '".$beginn_neu.":00', ende = '".$ende_neu.":00', bemerkung = '".$bemerkung_neu."', aid = '".$aid_neu."' WHERE eid = ".$eid_neu.";";
							$link->query($sqledit);
						}
                                        }
							          
			          while($row_soll = mysqli_fetch_array($result_soll)){
                                                 // Sollstunden aus DB in Minuten / Tag berechnen
                                                 $minuten_soll =($row_soll['sollstd'])*60/5;
                                        }
                                        // ErfassungsdatensÃ¤tze des eingetsellten Monats von MA anzeigen
                                        $result = $link->query("SELECT erfassung.beginn, erfassung.ende, erfassung.datum, erfassung.bemerkung, erfassung.eid, erfassung.aid, arbeitsfrei.bezeichnung FROM erfassung, arbeitsfrei WHERE erfassung.maid = '".$maid."' AND erfassung.aid = arbeitsfrei.aid AND DATE(erfassung.datum) BETWEEN ".$datum_interval_anfang." AND ".$datum_interval_ende." ORDER BY datum");
                                        // Testen, ob DatensÃ¤tze vorhanden
                                        if($result->num_rows>0){
                                                 // DatensÃ¤tze in Array $row speichern
                                                 while($row = mysqli_fetch_array($result)){
                                                         // Arbeitszeit berechnen
                                                         /// Datumsobjekt fÃ¼r Beginn & Ende erstellen
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


                                                        if(isset($_POST['edit'])&&($_POST['eid']==$row['eid'])){
                                                         // Wenn Bearbeiten-Button geklickt, in dieser Zeile Textfelder erstellen
                                                         // und Daten aus DB laden
                                                         echo '<tr id="row'.$row['eid'].'">';
                                                         echo '<form class="navbar-form navbar-left" role="search" action="?m='.$monat_now_z.'#row'.$row['eid'].'" method="POST" >';
                                                         echo '<td width="50px">'.$wochentag.", ".$date_format.'</td>';
                                                         echo '<td width="20px"><input type="text" value="'.$beginn_format.'" class="form-control" placeholder="Arbeitsbeginn Bsp.: 06:30" name="arbeitsbeginn" id="arbeitsbeginn"></td>';
                                                         echo '<td width="20px"><input type="text" value="'.$ende_format.'" class="form-control" placeholder="Arbeitsende Bsp.: 16:30" name="arbeitsende" id="arbeitsende"></td>';
                                                         echo '<td width="50px"><input type="text" value="'.$row['bemerkung'].'" class="form-control" placeholder="Bemerkung Bsp.: Homeoffice" name="bemerkung" id="bemerkung"></td>';
                                                         echo '<td width="20px"><select name="arbeitsfrei" id="arbeitsfrei" class="form-control">';
                                                         // SELECT Feld mit Arbeitsfrei Varianten aus DB fÃ¼llen
                                                         $result_liste = $link->query("SELECT * FROM arbeitsfrei ORDER BY aid DESC;");
                                                         $liste = "";
                                                         while($row_aid = mysqli_fetch_array($result_liste)){
                                                                 if($row['aid']==$row_aid['aid']){
                                                                         $selected = "SELECTED";
                                                                 }else{
                                                                         $selected = "";
                                                                 }
                                                                 $liste .= "<option ".$selected." value = '".$row_aid['aid']."'>".$row_aid['bezeichnung']."</option>\n";
                                                         }
                                                         echo $liste;
                                                         echo '</select></td>';
                                                         echo '<td width="50px">( '.($minuten_ist-$minuten_soll).' )</td>';
                                                         echo '<input type="hidden" name="eid" value="'.$_POST['eid'].'">';
                                                         echo '<td width="20px"><button type="submit" name="save" class="btn btn-default navbar-btn"><span class="glyphicon glyphicon-ok"></span>&nbsp;Speichern</button></td></form>';
                                                         echo '</tr>';
                                                         }else{
                                                         // Wenn nicht Bearbeiten geklickt oder Speichern geklickt, nur Tabelle
                                                         // ohne Textfelder anzeigen
                                                         echo '<tr id="row'.$row['eid'].'">';
                                                         echo '<td width="50px">'.$wochentag.", ".$date_format.'</td>';
                                                         echo '<td width="50px">'.$beginn_format.'</td>';
                                                         echo '<td width="50px">'.$ende_format.'</td>';
                                                         echo '<td width="50px">'.$row['bemerkung'].'</td>';
                                                         echo '<td width="50px">'.$row['bezeichnung'].'</td>';
                                                         echo '<td width="50px">'.($minuten_ist-$minuten_soll).'</td>';
                                                         echo '<form class="navbar-form navbar-left" role="search" action="#row'.$row['eid'].'" method="POST" >';
                                                         echo '<input type="hidden" name="eid" value="'.$row['eid'].'">';
                                                         echo '<td width="20px"><button type="submit" name="edit" class="btn btn-default navbar-btn"><span class="glyphicon glyphicon-pencil"></span>&nbsp;Bearbeiten</button></td></form>';
                                                         echo '</tr>';
                                                         }

                                                 }
                                        }else{
                                                 echo"<h3>Keine Eintr&auml;ge</h3>";

                                        }

                                ?>



                        <tbody>
                </table>


    <?php  require('../includes/footer.php'); ?>
