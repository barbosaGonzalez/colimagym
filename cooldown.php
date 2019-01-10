<?php $titulo = "¡Calculadora Cooldown!";
$is_index = false;
include('./config/init.php');
include('./includes/header.php');?>
	<!-- Page Content -->
	<section>
		<div class="container buscador text-center">
			<h2>
			COOLDOWN TIME
			</h2>
			<p>Calcula el tiempo que debes de esperar para poder volar a cualquier parte del mundo.<br>
        Debes de poner las cordenadas origen y las cordenadas destino.
    </div>
    <div class="container">
        <p>
          <b>Aceptables</b>
        </p>
        <ul>
          <li>+90.0, -127.554334</li>
          <li>45, 180</li>
          <li>-90, -180</li>
          <li>-90.000, -180.0000</li>
          <li>+90, +180</li>
          <li>47.1231231, 179.99999999</li>
        </ul>
        <p>
          <b></b>No aceptables</b>
        </p>
        <ul>
          <li>-90., -180.</li>
          <li>+90.1, -100.111</li>
          <li>-91, 123.456</li>
          <li>045, 180</li>
        </ul>
		</div>
    <!-- /.container -->
  <div class="container">
		<div class="row">
      <label for="cordOrigen">
        <b>Coordenadas Origen:</b>
      </label>
      <div class="input-group">
        <input type="text" class="form-control" id="cordOrigen" placeholder="##.####, -###.####">
      </div>
    </div>
    <br>
    <div class="row">
      <label for="cordDestino">
        <b>Coordenadas Destino:</b>
      </label>
      <div class="input-group">
        <input type="text" class="form-control" id="cordDestino" placeholder="##.####, -###.####">
      </div>
    </div>
    <br>
    <div class="row">
      <div class="input-group">
        <span class="input-group-btn">
          <button class="btn btn-danger" type="button" onclick="borrarCordenadas()">Borrar!</button>
          <button class="btn btn-primary" type="button" onclick="calcular()">Calcular!</button>
        </span>
      </div>
    </div>
    </div>
	</section>
	<!-- Modal -->
  <div class="modal hide fade in" data-keyboard="false" data-backdrop="static" id="modalExito" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header tiempo_calculado_header">
          <h4 class="modal-title">¡Tiempo calculado!</h4>
          <button type="button" onclick="borrarCordenadas()" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body tiempo_calculado_body"></div>
        <div class="modal-footer tiempo_calculado_footer">
          <button type="button" onclick="borrarCordenadas()" class="btn btn-danger fa fa-window-close" data-dismiss="modal"> Cerrar</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal hide fade in" data-keyboard="false" data-backdrop="static" id="modalErrores" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header cords_header">
          <h4 class="modal-title">¡Coordenadas incorrectas!</h4>
          <button type="button" onclick="borrarCordenadas()" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body cords_body">
          Revisa tus coordenadas para que cumplan los patrones indicados al inicio de la página.
        </div>
        <div class="modal-footer cords_footer">
          <button type="button" onclick="borrarCordenadas()" class="btn btn-danger fa fa-window-close" data-dismiss="modal"> Cerrar</button>
        </div>
      </div>
    </div>
  </div>
	<?php include('./includes/footer.php') ?>