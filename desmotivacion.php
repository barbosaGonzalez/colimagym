<?php $titulo = "Desmotivación en Gym";
$estado = $_GET['e'];
$is_index = false;
include('./config/init.php');
include('./includes/header.php');?>
    <!-- Page Content -->
    <section>
      <div class="container buscador text-center">
        <h2>Desmotivación de los Pokémon en los Gimnasios</h2>
        <p>
          Calcula el CP de los Pokémon después de ciertas horas de dejarlos en
          un gimnasio. <br />Esta idea esta basada del post de
          <a
            href="https://old.reddit.com/r/TheSilphRoad/comments/8fbn0w/are_there_any_gym_demotivation_calculators/"
          >
            <b>"The SilphRoad"</b>
          </a>
        </p>
      </div>
      <!-- /.container -->
      <div class="container">
        <div id="input_boxes">
          <div class="input_items">
            Starting CP:
            <input
              id="cp"
              type="number"
              onkeyup="on_update()"
              onchange="on_update()"
            />
          </div>
        </div>
        <div id="input_boxes">
          <div class="input_items">
            Hours:
            <input
              id="hours"
              type="number"
              onkeyup="on_update()"
              onchange="on_update()"
            />
          </div>
        </div>
        <div id="result"></div>
        <div id="output">
          <div class="k" id="next_kick"></div>
          <div id="sub">
            <div class="i" id="cp_decay"></div>
            <div class="i" id="per_left"></div>
            <div class="i" id="per_decay"></div>
            <div class="i" id="bat_remain"></div>
            <div class="i" id="2_bat_hrs"></div>
            <div class="i" id="2_bat_cp"></div>
            <div class="i" id="1_bat_hrs"></div>
            <div class="i" id="1_bat_cp"></div>
          </div>
        </div>
      </div>
    </section>
    <?php include('./includes/footer.php') ?>