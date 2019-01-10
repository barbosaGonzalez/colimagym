<!-- Footer -->
<footer class="site-footer-1">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
					<aside>
						<h3>
						<hr>
						<span>Acerca de nosotros</span>
						</h3>
						<div class="row">
							<div class="col-lg-3 col-sm-3 col-md-3 col-xs-3">
								<a href="#" target="_blank" rel="noopener">
									<img class="alignleft wp-image-10 " src="<?php base_url("/images/logonew.png")?>"
									alt="Pokémon-GO-Colima" width="116" height="116" />
								</a>
							</div>
							<div class="col-lg-9 col-sm-9 col-md-9 col-xs-9">
								ColimaGym nace del
								<a href="https://www.facebook.com/groups/PkmnGOMonterrey/permalink/2084582295118586/" target="_blank" rel="noopener">grupo de Facebook</a> y de la necesidad de dar a concocer la ubicación de todos y cada uno de los gimasios de Estado y sus alrededores, esto para los que usan app de terceros para hackear, así como para las personas a pie que necesitan saber como llegar al destino.
							</div>
						</div>
						<div class="row">
							Nos esforzarémos en tener actualizada la página lo antes posible así como innovar y traer más y mejores contenidos.
							<strong>
							<span class="email_author"> edselbarbosagonzalez@gmail.com</span>
							</strong>
						</div>
					</aside>
				</div>
				<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
					<aside>
						<h3>
						<hr>
						<span>Nuestros objetivos</span>
						</h3>
						<div class="row">
							<ul>
								<li>Mantener a la comunidad siempre informada de las últimas noticias y novedades del juego.</li>
								<li>Ayudar a jugadores entusiasmados por aprender y mejorar como Entrenadores.</li>
								<li>Compartir las mecánicas y estrategias del juego.</li>
								<li>Crear conexiones entre los jugadores de Monterrey.</li>
							</ul>
								<div class="made-country">
								  <img src="https://cdn2.alegra.com/website/assets/images/flag-mexico.png" alt="México">
								  <h6>Hecho para México con <span class="text-red">♥</span></h6>
								</div>
						</div>
					</aside>
				</div>
			</div>
		</div>
	</footer>
	<footer class="site-footer">
		<div class="bottom">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-xs-6 col-md-6 col-sm-6 text-lg-left text-center">
						<p class="copyright-text">
							Copyrigth ©
						</p>
						<div class="credits">
							Desarrollado por
							<a id="cv_author" href="https://barbosagonzalez.github.io/">Edsel Barbosa Gonzalez</a> | Hackazules 2017
						</div>
					</div>
					<div class="col-lg-6 col-xs-6 col-md-6 col-sm-6 text-lg-right text-center pokemon_copyrigth">
						<small>Pokémon is Copyright Gamefreak, Nintendo and The Pokémon Company 2001-2016
						<br /> Pokémon GO is Trademark &amp; © of Niantic, Inc.
						<br /> All images and names owned and trademarked by Nintendo, Niantic, The Pokémon Company, and Gamefreak are
						property of their respective owners.
						<br /> ColimaGym is a fan website not affiliated with Niantic Inc., The Pokemon Company,
						or Nintendo.</small>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<a id="rocket"></a>
	<!-- Bootstrap core JavaScript -->
	<script type="text/javascript" src="<?php base_url("assets/vendor/jquery/jquery.min.js");?>"></script>
	<script type="text/javascript" src="<?php base_url("assets/js/jquery.js");?>"></script>
	<!-- swipe box js -->
	<script type="text/javascript" src="<?php base_url("assets/js/jquery.swipebox.min.js");?>"></script>
	<!-- //swipe box js -->
	<script type="text/javascript" src="<?php base_url("assets/js/wow.min.js");?>"></script>
	<script type="text/javascript" src="<?php base_url("assets/js/modernizr.custom.79639.js");?>"></script>
	<script type="text/javascript" src="<?php base_url("assets/vendor/bootstrap/js/bootstrap.bundle.min.js");?>"></script>
	<script type="text/javascript" src="https://cdn.rawgit.com/zenorocha/clipboard.js/v1.7.1/dist/clipboard.min.js"></script>
	<script type="text/javascript" src="<?php base_url("assets/js/colimagym.js");?>"></script>
	<?php /*if($is_index == true){*/ ?>
		<!--<script type="text/javascript">
		if ("geolocation" in navigator) {
			// check if geolocation is supported/enabled on current browser
			navigator.geolocation.getCurrentPosition(
			function success(position) {
			// for when getting location is a success
			getAddress(position.coords.latitude, position.coords.longitude)
			},
		function error(error_message) {
			// for when getting location results in an error
			console.error('An error has occured while retrieving location', error_message);
			ipLookUp();
		}
		);
		} else {
			// geolocation is not supported
			// get your location some other way
			console.log('geolocation is not enabled on this browser');
			ipLookUp();
		}
	</script>-->
	<?php /*}*/ ?>
    <script type="text/javascript" src="<?php base_url("assets/lib/superfish/hoverIntent.js");?>"></script>
	<script type="text/javascript" src="<?php base_url("assets/lib/superfish/superfish.min.js");?>"></script>
	<script type="text/javascript" src="<?php base_url("assets/lib/stickyjs/sticky.js");?>"></script>
</body>
</html>