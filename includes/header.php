<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Facebook Opengraph integration: https://developers.facebook.com/docs/sharing/opengraph -->
		<meta property="og:title" content="ColimaGym">
		<meta property="og:image" content="http://colimagym.com/images/logo.ico">
		<meta property="og:url" content="http://colimagym.com">
		<meta property="og:site_name" content="colimagym">
		<meta property="og:description" content="Aquí podras encontrar las coordenadas de los gimnasios de Colima para Pokémon Go">
		<!-- Twitter Cards integration: https://dev.twitter.com/cards/  -->
		<meta name="twitter:card" content="summary">
		<meta name="twitter:site" content="http://colimagym.com">
		<meta name="twitter:title" content="ColimaGym">
		<meta name="twitter:description" content="Aquí podras encontrar las coordenadas de los gimnasios de Colima para Pokémon Go">
		<meta name="twitter:image" content="http://colimagym.com/images/logo.ico">
		<!-- Google Meta tags  -->
		<meta name="google" content="notranslate" />
		<meta name="google" content="nositelinkssearchbox" />
		<meta name="robots" content="noindex, nofollow">
		<meta name="robots" content="nofollow">
		<meta name="googlebot" content="noindex">
		<meta name="google-site-verification" content="YuBqVtBmj3R2GDBSXazurECDVxbpmoeEvM7YyCu_VkY" />
		<!-- Global metas -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Gimnasios de Colima, Mex., y al rededores para Pokémon Go">
		<meta name="author" content="Edsel Barbosa González">
		<meta name="keywords" content="circle, border-radius, hover, css3, transition, image, thumbnail, effect, 3d" />
		<title><?php echo $titulo ?></title>

		<!-- Favicon -->
		<link href="<?php base_url("images/logo.ico"); ?>" rel="shortcut icon">
		<!-- Bootstrap core CSS -->
		<link href="<?php base_url("assets/vendor/bootstrap/css/bootstrap.min.css"); ?>" rel="stylesheet">
		<!-- Libraries CSS Files -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<!-- Main Stylesheet File -->
		<link rel="stylesheet" href="<?php base_url("assets/css/colimagym.css"); ?>" />
		<link rel="stylesheet" href="<?php base_url("assets/css/swipebox.css"); ?>" />

		<script>
			function initMap() {} // now it IS a function and it is in global
		</script>
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_WKoXvQJbIrvAKWJqy-q2fBdeYKObGtc&callback=initMap" type="text/javascript"></script>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130285429-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-130285429-1');
		</script>
		<!-- ADS by Google -->
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		<script>
		  (adsbygoogle = window.adsbygoogle || []).push({
			google_ad_client: "ca-pub-5873793821238584",
			enable_page_level_ads: true
		  });
		</script>
		<!-- =======================================================
		Author: Edsel Barbosa
		Author URL: https://barbosagonzalez.github.io
		======================================================= -->
	</head>
	<body>
		<div id="preloader">
			<div class="loder-box">
				<div class="battery"></div>
			</div>
		</div>

	<?php if ($is_index == true) { ?>
	<!-- Hero -->
	<?php 
        if($estado == 1){ //Colima ?>
            <section class="hero"></section>
       <?php  } elseif($estado == 2){ //Jalisco ?>
            <section class="heroJalisco"></section>
       <?php  } elseif ($estado == 3){ //Durango ?>
            <section class="heroDurango"></section>
       <?php  } else { //Chiapas ?>
            <section class="heroChiapas"></section>
       <?php  }
    ?>
	<!-- /Hero -->
	<?php }  ?>
	<!-- Menu -->
<header id="header">
		<div class="container">
			<div id="logo" class="pull-left">
			    <?php 
			        if($estado == 1){ //Colima ?>
			            <h1><a href="http://colimagym.com/">ColimaGym</a></h1>
			       <?php  } elseif($estado == 2){ //Jalisco ?>
			            <h1><a href="http://jalisco.colimagym.com/">JaliscoGym</a></h1>
			       <?php  } elseif ($estado == 3){ //Durango ?>
			            <h1><a href="http://durango.colimagym.com/">DurangoGym</a></h1>
			       <?php  } else { //Chiapas ?>
			            <h1><a href="http://chiapas.colimagym.com/">ChiapasGym</a></h1>
			       <?php  }
			    ?>
			</div>
			<nav id="nav-menu-container">
				<ul class="nav-menu">
					<li>
						<a href="<?php base_url("grupos.php"); ?>" >Grupos</a>
					</li>
					<li>
						<a href="<?php base_url("farmear.php"); ?>" >Farming</a>
					</li>
					<li>
						<a href="<?php base_url("mapa.php"); ?>" >Mapas</a>
					</li>
					<li>
						<a href="<?php base_url("donaciones.php"); ?>" >Donaciones</a>
					</li>
					<li class="menu-has-children"><a>Calculadoras</a>
						<ul>
						  <li><a href="<?php base_url("cooldown.php"); ?>" >Cooldown</a></li>
						  <li><a href="<?php base_url("shiny.php"); ?>" >Oportunidades shiny</a></li>
						  <li><a href="<?php base_url("desmotivacion.php"); ?>" >Gym Desmotivación</a></li>
						  <!-- <li class="menu-has-children"><a href="#">Drop Down 2</a>
							<ul>
							  <li><a href="#">Deep Drop Down 1</a></li>
							  <li><a href="#">Deep Drop Down 2</a></li>
							  <li><a href="#">Deep Drop Down 3</a></li>
							  <li><a href="#">Deep Drop Down 4</a></li>
							  <li><a href="#">Deep Drop Down 5</a></li>
							</ul>
						  </li> -->
						</ul>
					  </li>
					  <!--<li class="menu-has-children"><a>Listas</a>
						<ul>
						  <li><a>#</a></li>
						</ul>
					  </li>-->
				</ul>
			</nav>
			<!-- #nav-menu-container -->
			<nav class="nav social-nav pull-right d-none d-lg-inline">
				<a href="https://www.facebook.com/groups/826863594111796/">
					<i class="fa fa-facebook"></i>
				</a>
			</nav>
		</div>
	</header>
	<!-- /Menu -->