<?php
// Menue "ACITVE
$nav1 = "";
$nav2 = "";
$nav3 = "";
$nav4 = "";
$nav5 = "";
$nav6 = "";
$nav7 = "";
switch($navsite){
                        case 1: $nav1 = 'class="active"'; break;
                        case 2: $nav2 = 'class="active"'; break;
                        case 3: $nav3 = 'class="active"'; break;
                        case 4: $nav4 = 'class="active"'; break;
                        case 5: $nav5 = 'class="active"'; break;
                        case 6: $nav6 = 'class="active"'; break;
						case 7: $nav7 = 'class="active"'; break;
                        }

?>
                        <div class="row">
                  <!-- template start: navi-top -->
                  <div class="content-navi-wrapper navbar">
                    <div class="html5-nav content-navi-top navbar-inner"> <button
                        data-target=".mainnav-collapse"
                        data-toggle="collapse"
                        class="btn btn-navbar collapsed"
                        type="button">
                        <span class="icon-bar"></span> <span class="icon-bar"></span>
                        <span class="icon-bar"></span> </button>
                      <div class="nav-collapse mainnav-collapse collapse">
                        <ul class="nav level1">
                          <li <?php echo $nav1; ?>><a href="../sites/dashboard.php">Übersicht</a></li>
                          <li <?php echo $nav2; ?>><a href="../sites/erfassung.php">Eingabe</a></li>
                          <li <?php echo $nav3; ?>><a href="../sites/kalender.php">Kalender</a></li>
                          <li <?php echo $nav4; ?>><a href="../sites/anzeigen.php">Liste</a></li>
                          <li <?php echo $nav5; ?>><a href="../sites/mitarbeiter.php">Mitarbeiter</a></li>
                          <li <?php echo $nav6; ?>><a href="../sites/behoerde.php">Behörden</a></li>
                          <li <?php echo $nav7; ?>><a href="#">Hilfe</a>
                          	<ul>
                                            <li class=""><a href="#" onclick="tour.restart()">Seiten-Tour</a></li>
                                            <li class=""><a href="../sites/video.php">Tutorial-Video</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- /template end: navi-top -->
