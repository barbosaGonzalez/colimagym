<?php $titulo = "Shiny Chance";
$estado = $_GET['e'];
$is_index = false;
include('./config/init.php');
include('./includes/header.php'); ?>
	<!-- Page Content -->
	<section>
		<div class="container buscador text-center">
			<h2>
			Calculadora de Oportunidades para shinys en Pokémon Go
			</h2>
			<p>Esta calculadora te permite calcular la posibilidad de encuentro con un Pokémon shiny. <br>
			Las estadisticas son obtenidas mediante una investigación de 
			<a href='https://thesilphroad.com/science/shiny-egg-hatches-field-research-encounter-rates/'>
				<b>"The SilphRoad"</b>
			</a> y asumiendo que estos datos no cambiarán.</p>
    </div>
    <div class="container">
        <p>
          <b>Cosas para considerar</b>
        </p>
        <ul>
          <li>Las ratios de los shinys son obtenidos individualmente</li>
					<li>Los ratios pueden ser cambiados en cualquier momento</li>
        </ul>
		</div>
    <!-- /.container -->
  <div class="container">
					<div class="row">
						<select id='type_drop' onchange='change_drop()'> 
							<option value="450">Pókemon shiny salvajes o de raid (1 de 450)</option> 
							<option value="19">Legendario Shiny - Raid Boss  (1 de 19)</option> 
							<option value="35">Mawile Shiny Mawile (1 de 35)</option>
							<option value="75">Absol Shiny Absol (1 de 75)</option>
							<option value="60">Aerodactyl Salvaje (1 de 60)</option>
							<option value="24.5">Community Day (1 de 24.5)</option>
							<option value="50">Eclosión de Baby Shiny (1 de 50)</option>
						</select>
					</div>
					<div class="row" id="counters_container"> 
						<input id="start_rate" type='number' value=1 oninput='edit_val_man(true)' /> &nbsp; En &nbsp;
						<input id="full_rate" type='number' value=450 oninput='edit_val_man(true)' />
					</div>
					<div class="row" id="encounters_text">
						# Encuentros: &nbsp;
						<input id="encounters" type='number' oninput='edit_val_man(false)'/>
					</div>
					<div id='not_get' class='output_holder' hidden>
						<div id='chance_not_get' class='dialog'></div>
						<div id='chance_not_get_per' class='per'></div>
					</div>
					<div id='to_get' class='output_holder' hidden>
						<div id='chance_to_get' class='dialog'></div>
						<div id='chance_to_get_per' class='per'></div>
					</div>
					<div id='next' class='output_holder' hidden>
						<div id='next_chance' class='dialog'></div>
						<div id='next_chance_per' class='per'></div>
					</div>
    </div>
	</section>
	<?php include('./includes/footer.php') ?>