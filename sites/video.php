<!-- Haupttemplate Online-Gleitzeitbogen -->
<!-- Version 1.0 vom 14.06.14 von Holger Keye -->
<!-- Header, Footer und Menu müssen im selben Verzeichnis wie template.php liegen -->

<!-- Beginn: Inkludieren von Header und Menue -->
	<?php 		
		$seitentitel = "Template";
		// Navigation active setzen
		$navsite =7 ;
		require('../includes/header.php');
		require('../includes/mysql.php');
	?>
<!-- Ende: Inkludieren von Header und Menue -->

<!-- Seiteninhalt -->
	<div class="responsive-video">
    
<iframe width="560" height="315" src="https://www.youtube.com/embed/4no8NgIvC0c" frameborder="0" allowfullscreen></iframe>
        
	</div>          
<!-- Seiteninhalt -->

<!-- Beginn: Inkludieren von Footer -->
<?php 
require('../includes/footer.php'); 
?>
<!-- Ende: Inkludieren von Footer -->
