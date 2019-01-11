<?php
$estado = isset($_GET['e']) ? $_GET['e'] : 1 ;
$titulo = "Zona Farming";
$is_index = false;
include('./config/init.php');
include('./includes/header.php');
include('./config/database.php'); ?>
	<!-- Page Content -->
	<section>
		<div class="container buscador text-center">
        <h2>
            Farming
            </h2>
            <p> Lugares para farmear de mejor manera (muchas pokeparadas) en el estado de Colima</p>
		</div>
    <div class="container text-center">
      <h3>Locales</h3>
      <p> Lugares para farmear de mejor manera (muchas pokeparadas) en el estado de Colima</p>
      <div class="row stats-row">
        <?php foreach ($conn->query('SELECT * from Farming WHERE local = 1') as $row){ ?>
          <div class="carton col-xs-12 col-lg-4 col-md-4 col-sm-4">
            <hr>
            <div class="card-body">
              <h6 class="card-title"><?php echo $row['nombre'] ?></h6>
              <img
                  class="rounded-circle img-fluid d-block mx-auto"
                  src="<?php base_url('images/gym.png')?>"
                />
              <div class="dropdown-divider"></div>
                  <p class="card-text">
                    <small><?php echo $row['latlong'] ?></small>
                  </p>
                  <div class="row">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <button type="button" title="Mostrar" onclick="configurarMapa('<?php echo $row['nombre'] ?>', <?php echo $row['latlong'] ?>)"
                          class="btn btn-info fa fa-eye" data-toggle="modal" data-target="#modal_mapa"> Mostrar</button>
                        <button title="Copiar" class="btn btn-success fa fa-files-o" data-clipboard-text="<?php echo $row['latlong'] ?>"
                          onclick="copiado()">
                          Copiar</button>
                      </span>
                    </div>
                  </div>
            </div>
          </div>
        <?php } ?>
      </div>
      <hr>
      <h3>Todo el mundo</h3>
      <p> Lugares para farmear de mejor manera (muchas pokeparadas) en el estado de Colima</p>
      <div class="row stats-row">
      <?php foreach ($conn->query('SELECT * from Farming WHERE local = 2') as $row){ ?>
          <div class="carton col-xs-12 col-lg-4 col-md-4 col-sm-4">
            <hr>
            <div class="card-body">
              <h6 class="card-title"><?php echo $row['nombre'] ?></h6>
              <img
                  class="rounded-circle img-fluid d-block mx-auto"
                  src="<?php base_url('images/gym.png')?>"
                />
              <div class="dropdown-divider"></div>
                  <p class="card-text">
                    <small><?php echo ['latlong'] ?></small>
                  </p>
                  <div class="row">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <button type="button" title="Mostrar" onclick="configurarMapa('<?php echo $row['nombre'] ?>', <?php echo ['latlong'] ?>)"
                          class="btn btn-info fa fa-eye" data-toggle="modal" data-target="#modal_mapa"> Mostrar</button>
                        <button title="Copiar" class="btn btn-success fa fa-files-o" data-clipboard-text="<?php echo ['latlong'] ?>"
                          onclick="copiado()">
                          Copiar</button>
                      </span>
                    </div>
                  </div>
            </div>
          </div>
        <?php } ?>
      </div>
    </div>
  </section>
  <!-- The actual snackbar -->
	<div id="snackbar">Coordenadas copiadas..</div>
	<?php include('./includes/footer.php') ?>