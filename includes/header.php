<?php
session_start();

// Provisorische maid
// $_SESSION['maid'] = "112";
  // akteulle Seite aus URL laden
  $checkindex = substr($_SERVER['PHP_SELF'],-9);
  // Um Endlosschleife bei Weiterleitung zu verhindern, nur weiterleiten, wenn nicht bereits auf index.php
  if(!isset($_SESSION['maid'])&&($checkindex!="index.php")){
      echo'<meta http-equiv="refresh" content="0; url=index.php">';
  }
  ?>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title><?php if(isset($seitentitel)){echo $seitentitel;} ?> - Online-Gleitzeitbogen</title>
    <!-- Zusaetzliche Scripte - individuell geladen -->
    <?php if(isset($zusatzinclude)){ echo $zusatzinclude; }?>
    <!-- Bootstrap-CSS -->
    <link href="../includes/css/bootstrap.css" rel="stylesheet">
    <link href="../includes/css/master.css" rel="stylesheet">
    <link href="../includes/css/signin.css" rel="stylesheet">
    <!-- Scripte - weiß nicht ob das gebraucht wird -->
    <script type="text/javascript" src="../includes/js/bootstrap.js"></script>
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
						<a href="./index.php" title="Link f&uuml;hrt zur Startseite von 'Institution Titel der Institution'">
							<span class="institution">Berliner Verwaltung</span>
							<span class="title">Online-Gleitzeitbogen</span>
						</a> 
					</div>
				</div>
			</div>
		 <!-- Ende: Institution -->
		 
		<?php
		require('../includes/menue.php');
		?>
