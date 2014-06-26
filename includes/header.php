<?php
session_start();
// Datenbank-Connect für personifizierten Logout
require('../includes/mysql.php');
// Provisorische maid
// $_SESSION['maid'] = "112";
  // akteulle Seite aus URL laden
  $checkindex = substr($_SERVER['PHP_SELF'],-9);
  // Um Endlosschleife bei Weiterleitung zu verhindern, nur weiterleiten, wenn nicht bereits auf index.php
  if(!isset($_SESSION['maid'])&&($checkindex!="index.php")){
      echo'<meta http-equiv="refresh" content="0; url=index.php">';
  }
?>
<?php
  $maid = $_SESSION['maid'];
?>  
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title><?php if(isset($seitentitel)){echo $seitentitel;} ?> - Online-Gleitzeitbogen</title>
    <script type="text/javascript" src="../includes/js/application.js"></script>
    <!-- Zusaetzliche Scripte - individuell geladen -->
    <?php if(isset($zusatzinclude)){ echo $zusatzinclude; }?>
    <!-- Bootstrap-CSS -->
    <link href="../includes/css/bootstrap.css" rel="stylesheet">
    <link href="../includes/css/master.css" rel="stylesheet">
    <link href="../includes/css/signin.css" rel="stylesheet">
    <!-- Scripte - weiß nicht ob das gebraucht wird -->
    <script type="text/javascript" src="../includes/js/bootstrap.js"></script>
    <!-- JS für Logout-Button -->
  </head>
  <body>
  
    <!-- Beginn: Header -->
      <div class="container-wrapper container-portal-header">
        <div class="container">
          <div class="row" role="banner">
              <div class="html5-header portal-header">
                <div class="html5-figure main-image"> 
                 <a href="#" title="Link f&uml;hrt zur Startseite von Berlin.de">
                    <img class="portal-logo hide-mobile" src="../includes/images/berlin_de.png" alt="Bild zeigt: Berlin.de Logo" title="Link f&uuml;hrt zur Startseite von Berlin.de">
                 </a> 
                </div>
              </div>
          </div>
        </div>
      </div>     
    <!-- Ende: Header -->
    
      <div class="container-wrapper container-content">
		<div class="container">
		 <!-- Beginn: Institution -->
			<div class="row html5-header content-header" role="banner">
				<div class="html5-section section-logo without-logo">
					<div class="html5-section text">
						<a href="dashboard.php" title="Link f&uuml;hrt zur Startseite von 'Institution Titel der Institution'">
							<span class="institution">Berliner Verwaltung</span>
							<span class="title">Online-Gleitzeitbogen</span>
						</a> 
					</div>
					<div class="span12">
					<ul class="nav">
						<li>
						    <div class="popover-container zentral-login">
                                                <a title="" class="login-btn popover-link" id="zentral-popover-link" href="#" data-original-title="Jetzt einloggen">
                                                <?php
									$result2 = $link->query("SELECT vname, nname FROM mitarbeiter WHERE mitarbeiter.maid = '".$maid."' ");
									while($row2 = mysqli_fetch_object($result2))
									{
										echo $row2->vname."&nbsp;".$row2->nname;
									}
								?>
                                                </a>
                                            </div>
						    <div id="popover-login-content" style="display:none;">
                                                 <form action="#" class="form-zentrallogout">
                                                    <div class="row-fluid">
                                                        <p class="text-center">
                                                            <strong>Sie sind angemeldet als <span class="username">
                                                            <?php
									$result2 = $link->query("SELECT vname, nname FROM mitarbeiter WHERE mitarbeiter.maid = '".$maid."' ");
									while($row2 = mysqli_fetch_object($result2))
									{
										echo $row2->vname."&nbsp;".$row2->nname;
									}
								?>
                                                            </span></strong>
                                                        </p>
                                                        <button type="button" class="btn btn-danger span12" onClick="self.location.href='index.php?do=logout'">Abmelden</button>
                                                    </div>
                                                </form>
                                            </div>
						</li>
					</ul>	
				</div>
				</div>
			</div>
		 <!-- Ende: Institution -->
		 
		<?php
		require('../includes/menue.php');
		?>
