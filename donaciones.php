<?php $titulo = "Donaciones";
$estado = $_GET['e'];
$is_index = false;
include('./config/init.php');
include('./includes/header.php');?>
	<!-- Page Content -->
	<section>
		<div class="container buscador text-center">
			<h2>
			Donaciones
			</h2>
			<p> Aquí se muestran algunos metodos en los que puedes contribuir al desarrollo. </p>
		</div>
		<div class="container text-center">
			<div class="row stats-row">
				<div class="carton col-lg-4 col-md-4 col-sm-4 col-xs-4">
					<hr>
					<div class="card-body">
            			<img
				            class="rounded-circle img-fluid d-block mx-auto"
				            src="./images/donaciones/paypal.png"
				            alt="PAYPAL">
				        <br>
				        <h5 class="card-title">Paypal</h5>
				        <h6 class="card-subtitle mb-2">Donación voluntaria</h6>
				        <br>
				        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				            <input type="hidden" name="cmd" value="_s-xclick">
				            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
				                        ">
				            <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea.">
				            <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
				          </form>
        			</div>
				</div>
				<div class="carton col-lg-4 col-md-4 col-sm-4 col-xs-4">
					<hr>
					<div class="card-body">
          <img
            class="rounded-circle img-fluid d-block mx-auto"
            src="./images/donaciones/saldazo.jpg"
            alt="SALDAZO">
          <h5 class="card-title">Saldazo</h5>
          <h6 class="card-subtitle mb-2">4766 - 8404 - 5154 - 6399</h6>
          <p class="card-text">Cuenta recargable en Oxxos a travez de una tarjeta de débito</p>
          <a href="http://www.saldazooxxo.com/" class="card-link">Saldazo</a>
        </div>
				</div>
				<div class="carton col-lg-4 col-md-4 col-sm-4 col-xs-4">
					<hr>
					<div class="card-body">
          <img
            class="rounded-circle img-fluid d-block mx-auto"
            src="./images/donaciones/santander.jpg"
            alt="SANTANDER">
          <h5 class="card-title">Santander</h5>
          <h6 class="card-subtitle mb-2">5579 - 0990 - 0677 - 3230</h6>
          <p class="card-text">Cuenta Santander para tarjeta de débito</p>
        </div>
				</div>
				<div class="carton col-lg-4 col-md-4 col-sm-4 col-xs-4">
					<hr>
					<div class="card-body">
          <img
            class="rounded-circle img-fluid d-block mx-auto"
            src="./images/donaciones/transfer.png"
            alt="TRANSFER">
          <h5 class="card-title">Transfer</h5>
          <h6 class="card-subtitle mb-2">3121282869</h6>
          <p class="card-text">Transferencias mediante Telcel</p>
          <a href="http://www.transfer.com/" class="card-link">Transfer</a>
        </div>
				</div>
			</div>
		</div>
	</section>
	<?php include('./includes/footer.php') ?>