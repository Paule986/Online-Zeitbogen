<!DOCTYPE html>
<html>
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="content-type">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Interner Bereich</title>
    <!-- Bootstrap-CSS -->
    <link href="../assets/bootstrap/css/berlin.css" rel="stylesheet">
    <link href="../assets/bootstrap/css/signin.css" rel="stylesheet">
  </head>
  <body>
    <!-- Beginn: Header -->
    <div class="non-ie lang-de">
      <div class="container-wrapper container-portal-header">
        <div class="container">
          <div class="row" role="banner">
            <div class="span12">
              <div class="html5-header portal-header">
                <div class="html5-figure main-image"> <a href="#" title="Link führt zur Startseite von Berlin.de">
                    <img class="portal-logo hide-mobile" src="../assets/bootstrap/css/images/berlin_de.png"
                      alt="Bild zeigt: Berlin.de Logo"
                      title="Link führt zur Startseite von Berlin.de">
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
                <div class="html5-section text"> <a href="./index.php" title="Link führt zur Startseite von 'Institution Titel der Institution'">
                    <span class="institution">Berliner Verwaltung</span> <span
                      class="title">Online-Gleitzeitbogen</span>
                  </a> </div>
              </div>
            </div>
            <!-- Ende: Institution -->
            <div class="row">
              <div class="span12">
                <div class="container">
<?php
session_start();
?>

<?php

if(!isset($_SESSION["usern"]))
   {
   echo "<div align='center'><h2>Bitte erst <a href=\"login.html\">einloggen</a></h2></div>";
   exit;
   }
else
    echo "<div align='center'><h2>Hallo ",$_SESSION["usern"],"!  Willkommen in Ihrem pers&ouml;nlichen Bereich!</h2></div>";
    
?> 

<form class="form-signin" role="form" action="logout.php" method="post">
<button class="btn btn-lg btn-primary btn-block" value="Logout" type="submit">Abmelden</button>
		</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="span12">
              <!-- Beginn: Footer -->
              <div class="html5-footer content-footer" role="contentinfo">
                <div class="html5-nav">
                  <ul class="nav">
                    <li class="icon-footer icon-imprint_32"><a href="#">Impressum</a></li>
                    <li class="icon-footer icon-information_32"><a href="#">Info</a></li>
                    <li class="icon-footer icon-mail_32"><a href="#">Kontaktformular</a></li>
                    <li class="right icon-footer icon-printer_32"><a href="#">Druckversion</a></li>
                    <li class="right icon-footer icon-totop"><a href="#">zum
                        Seitenanfang</a></li>
                  </ul>
                </div>
              </div>
              <!-- Ende: Footer --> </div>
          </div>
        </div>
      </div>
    </div> 
  </body>
</html>




