<?php $titulo = "Mapas Regionaes";
$estado = isset($_GET['e']) ? $_GET['e'] : 1 ;
$is_index = false;
include('./config/init.php');
include('./includes/header.php');
include('./config/database.php'); ?>
	<!-- Page Content -->
	<section>
		<div class="container buscador text-center">
			<h2>
			Mapas
			</h2>
			<p> Se muestran los mapas importantes para el Estado
        </p>
		</div>
		<div class="container">
		<?php foreach ($conn->query('SELECT * from Mapas') as $row){ // aca puedes hacer la consulta e iterarla con each. ?>
			<div class="row">
				<div class="col-lg-12 col-xs-12 col-md-12 col-sm-12">
					<h4 class="my-4"><?php echo $row['nombre'] ?></h4>
					<p><?php echo $row['descripcion'] ?></p>
					<div class="google-maps">
						<iframe src="<?php echo $row['link'] ?>" width="600" height="450" frameborder="0"></iframe>
					</div>
				</div>
			</div>
		  <?php } ?>
		</div>
	</section>
	<?php include('./includes/footer.php') ?>