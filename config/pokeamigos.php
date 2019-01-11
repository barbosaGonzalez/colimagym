<?php
if( isset($_POST['avatar']) ) {
	get_persons($_GET['avatar']);
} else {
	die("Solicitud no válida.");
}
?>