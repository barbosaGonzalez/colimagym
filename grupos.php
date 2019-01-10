<?php $titulo = "Grupos WhatsApp";
$is_index = false;
include('./config/init.php');
include('./includes/header.php');
include('./config/database.php'); ?>
    <!-- Page Content -->
    <section>
      <div class="container buscador text-center">
        <h2>Grupos de WhatsApp</h2>
        <p>
          Aquí se muestran los grupos más importantes para poder jugar de manera
          óptima en el estado de Colima.
        </p>
        <p>
          Se mostrará el nombre del grupo y en caso de así desearlo, puedes
          mandarle un WhatsApp al administrador de cada uno, para pedir la
          inclusión al mismo.
        </p>
      </div>
      <div class="container text-center">
        <div class="row stats-row">

          <?php foreach ($conn->query('SELECT * from Grupos') as $row){ ?>
            <div class="carton col-xs-12 col-lg-4 col-md-4 col-sm-4">
              <hr />
              <div class="card-body">
                <h6 class="card-title"><?php echo $row['nombre'] ?></h6>
                <img
                  class="rounded-circle img-fluid d-block mx-auto"
                  src="<?php echo $row['imagen'] ?>"
                  alt="POKECODIGOS Y POKEDUDAS"
                />
                <p class="card-text"><?php echo $row['responsable'] ?></p>
                <div class="dropdown-divider"></div>
                <p class="card-text"><small><?php echo $row['celular'] ?></small></p>
                <center>
                  <a href="https://api.whatsapp.com/send?phone=<?php echo $row['celular'] ?>">
                    <img
                      title="+<?php echo $row['celular'] ?>"
                      class="rounded-circle"
                      height="40"
                      width="40"
                      alt="+<?php echo $row['celular'] ?>"
                      src="./images/WhatsApp_Logo_1.png"
                    />
                  </a>
                </center>
              </div>
            </div>
          <?php } ?>
        </div>
      </div>
    </section>
    <?php include('./includes/footer.php') ?>