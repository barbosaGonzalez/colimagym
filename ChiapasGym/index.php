<?php $titulo = "¡Bienvenid@s!";
$is_index = true;
$estado = 4; //1-> Colima, 2->Jalisco, 3->Durango, 4->Tuxtla
if($estado == 1){
    include('./config/init.php');
    include('./includes/header.php');
    include('./config/database.php');
} else {
    include('../config/init.php');
    include('../includes/header.php');
    include('../config/database.php');
}
?>
	<!-- Page Content -->
	<section>
		<div class="container buscador text-center">
			<h2>
			¿Qué es esto?
			</h2>
			<p>
				Aquí podras encontrar las coordenadas de los gimnasios de Tuxtla Gutierrez para Pokémon Go
			</p>
			<div class="row stats-row">
				<div class="col-xs-12 col-lg-12 col-md-12 col-sm-12">
					<label for="buscador">
						<b>Gimnasio:</b>
					</label>
					<div class="input-group">
						<input type="text" class="form-control" id="buscador" onkeyup="buscarGimnasio(this.value)" placeholder="Escribe el nombre del gimnasio...">
						<span class="input-group-btn">
							<button class="btn btn-primary" type="button">Go!</button>
						</span>
					</div>
					<!-- /input-group -->
				</div>
				<!-- /.col-lg-6 -->
			</div>
		</div>
		<!-- /.container -->
		<div class="container text-center">
			<div class="row stats-row">
			<?php foreach ($conn->query('SELECT edos.id AS estado_id, mpos.orden, mpos.id AS municipio_id, mpos.nombre AS municipio_nombre, mpos.corto FROM Estados AS edos INNER JOIN Municipios AS mpos ON mpos.estado_id = edos.id WHERE edos.id = '.$estado.' ORDER BY mpos.orden ASC') as $municipio){ ?>
				<div class="carton col-xs-12 col-lg-12 col-md-12 col-sm-12">
					<div class="card-body">
						<h4 class="card-title">Ciudad: <?php echo $municipio['municipio_nombre'] ?></h4>
						<h5 hidden><?php echo $municipio['municipio_nombre'] ?> <?php echo $municipio['corto'] ?></h5>
					</div>
				</div>
				<?php foreach ($conn->query('SELECT nombre, alterno, latlong, ex, imagen FROM Gimnasios where municipio_id = '.$municipio['municipio_id']) as $gimnasio){ ?>
					<div class="carton col-xs-12 col-lg-4 col-md-4 col-sm-4">
						<hr>
						<div class="card-body">
							<h6 class="card-title"><?php echo $gimnasio['nombre'] ?></h6>
							<h5 hidden><?php echo $gimnasio['alterno'] ?></h5>
							<img class="rounded-circle img-fluid d-block mx-auto" src="<?php echo $gimnasio['imagen'] ?>" alt="<?php echo $gimnasio['nombre'] ?>">
							<p class="gimnasio_titulo"><?php echo $municipio['municipio_nombre'] ?></p>
							<?php if($gimnasio['ex'] == 1){?>
								<p class="gimnasio_ex">Gimnasio con etiqueta ex</p>
							<?php }?>
							<div class="dropdown-divider"></div>
							<p class="card-text">
								<small><?php echo $gimnasio['latlong'] ?></small>
							</p>
							<div class="row">
								<div class="input-group">
									<span class="input-group-btn">
										<button type="button" title="Mostrar" onclick="configurarMapa('<?php echo $gimnasio['nombre'] ?>', <?php echo $gimnasio['latlong'] ?>)" class="btn btn-primary fa fa-eye"
										data-toggle="modal"
										data-target="#modal_mapa">
										Mostrar</button>
										<button type="button" title="Llegar" onclick="comoLlegar('<?php echo $gimnasio['latlong'] ?>')" class="btn btn-danger fa fa-map-o">
										Llegar</button>
										<button title="Copiar" class="btn btn-success fa fa-files-o" data-clipboard-text="<?php echo $gimnasio['latlong'] ?>" onclick="copiado()">
										Copiar</button>
									</span>
								</div>
							</div>
						</div>
					</div>
				<?php } ?>
			<?php } ?>
			<!--<div id="notFoundElement" class="col-xs-12 col-lg-12 col-md-12 col-sm-12">
					<div class="notFoundElement">
						<div class="notFoundElement-404">
							<div></div>
							<h1>¿?</h1>
						</div>
						<h2>Elemento no encontrado</h2>
						<p>Intenta buscar con otro parametro.</p>
					</div>
				</div>
			</div>
		</div>-->
	</section>
	<!-- Modal-->
	<div class="modal fade" id="modal_mapa" role="dialog" data-keyboard="false" data-backdrop="static">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header mapa_header">
					<h6 class="modal-title">Mapa del gimnasio</h6>
				</div>
				<div class="modal-body mapa_body">
					<div id="map_canvas"></div>
				</div>
				<div class="modal-footer mapa_footer">
					<button type="button" class="btn btn-danger fa fa-window-close" data-dismiss="modal"> Cerrar</button>
				</div>
			</div>
		</div>
	</div>
	<!-- /. Modal -->
	<!-- The actual snackbar -->
	<div id="snackbar">Coordenadas copiadas..</div>
	<?php 
	if($estado == 1)
	    include('./includes/footer.php');
	else
	    include('..//includes/footer.php');?>