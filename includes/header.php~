<?php
session_start();
// Provisorische maid
$_SESSION['maid'] = "112";
?>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title><?php echo $seitentitel; ?> - Online-Gleitzeitbogen</title>
    <!-- Bootstrap-CSS -->
    <link href="../includes/css/bootstrap.css" rel="stylesheet">
    <link href="../includes/css/master.css" rel="stylesheet">
    <link href="../includes/css/signin.css" rel="stylesheet">
    <!-- Zusätzliche Scripte - individuell geladen -->
    <?php echo $zusatzinclude; ?>
    <!-- Scripte - weiÃŸ nicht ob das gebraucht wird -->
    <script type="text/javascript" src="../includes/js/bootstrap.js"></script>
    <script type="text/javascript" src="../includes/js/application.js"></script>
  </head>
  <body>
    <!-- Beginn: Header -->
    <div class="non-ie lang-de">
      <div class="container-wrapper container-portal-header">
        <div class="container">
          <div class="row" role="banner">
            <div class="span12">
              <div class="html5-header portal-header">
                <div class="html5-figure main-image"> <a href="#" title="Link f&uml;hrt zur Startseite von Berlin.de">
                    <img class="portal-logo hide-mobile" src="/includes/images/berlin_de.png"
                      alt="Bild zeigt: Berlin.de Logo"
                      title="Link f&uuml;hrt zur Startseite von Berlin.de">
                  </a> </div>
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
            <div class="span5">
              <div class="html5-section section-logo without-logo">
                <div class="html5-section text"> <a href="./index.php" title="Link f&uuml;hrt zur Startseite von 'Institution Titel der Institution'">
                    <span class="institution">Berliner Verwaltung</span> <span
                      class="title">Online-Gleitzeitbogen</span>
                  </a> </div>
              </div>
            </div>
            <!-- Ende: Institution -->
            <div class="row">
              <div class="span12">
                <div class="container">
            <!-- ggf. Menue gleich hier includen??  -->
            <?php  require('menue.php'); ?>