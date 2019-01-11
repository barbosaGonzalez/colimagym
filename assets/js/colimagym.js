/***************************************************************************************************************
 * Author: Edsel Barbosa
 * Author URL: https://barbosagonzalez.github.io
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-business-frontpage/blob/master/LICENSE)
 *
 ****************************************************************************************************************/
jQuery(window).load(function(){
  $("#preloader").fadeOut("slow");
});
var wow = new WOW ({
  offset:       75,          // distance to the element when triggering the animation (default is 0)
  mobile:       false,       // trigger animations on mobile devices (default is true)
});

wow.init();

var lat, long, map, mapOptions, marker;
var info_hidden = true;
var auto_edit = false;
var drop_val = "";
var expected_num = 1;
var full_rate,
  start_rate,
  encounters = 0;
var portapapeles = new Clipboard(".btn");

/** Mostrar o esconder elementos
 */
function showElement(element) {
    document.getElementById(element).hidden = false;
}

/** Calcular oportunidadeds
 */
function calculate_chance() {
  start_rate = document.getElementById("start_rate").value;
  full_rate = document.getElementById("full_rate").value;
  encounters = document.getElementById("encounters").value;
  var chance = new Object();
  chance = get_probability(start_rate, full_rate, encounters);
  if (start_rate >= 1 && full_rate >= 1 && encounters >= 1) {
    if (expected_num == 1) {
      expected_text = "a";
    }
    var extraText =
      "<b>" +
      chance["encounters"] +
      "</b> encuentros después de <b>" +
      chance["next_get"] +
      "</b> <br>";
    document.getElementById("chance_not_get").innerHTML =
      extraText + "La oportunidad de no ver " + expected_text + " shiny es:";
    document.getElementById("chance_to_get").innerHTML =
      extraText + "La oportunidad de ver " + expected_text + " shiny es:";
    document.getElementById("next_chance").innerHTML =
      "Oportuniades del siguiente encuentro: " + chance["next_chance"] + "%";
    document.getElementById("chance_not_get_per").innerHTML =
      chance["miss"] + "%";
    document.getElementById("chance_to_get_per").innerHTML =
      chance["get"] + "%";
    document.getElementById("next_chance_per").innerHTML = chance["next_get"];
    showElement("not_get");
    showElement("to_get");
    showElement("next");
  }
}

/** Obtener oportunidades
 */
function change_drop() {
  auto_edit = true;
  var value = document.getElementById("type_drop").value;
  drop_val = value;
  document.getElementById("full_rate").value = value;
  document.getElementById("start_rate").value = 1;
  auto_edit = false;
  calculate_chance();
}

/** Cambios en la caga de texto
 */
function change_chance_box() {
  if (auto_edit) {
    //we need to check if this is a valid drop down value
    var start_chan = document.getElementById("start_rate").value;
    var end_chan = document.getElementById("full_rate").value;
    var calc_val_h = start_chan * end_chan;
  }
}

/** Modificar los valores a mostrar en el shiny chance
 * @param {float} changed_how que valores cambiaran
 */
function edit_val_man(changed_how) {
  var keep_processing = true;
  //check manual entry
  if (
    document.getElementById("full_rate").value.includes("e") ||
    document.getElementById("full_rate").value.includes("-")
  ) {
    document.getElementById("full_rate").value = full_rate;
    keep_processing = false;
  }
  //check manual entry
  if (
    document.getElementById("start_rate").value.includes("e") ||
    document.getElementById("start_rate").value.includes("-")
  ) {
    document.getElementById("start_rate").value = start_rate;
    keep_processing = false;
  }
  if (!auto_edit) {
    calculate_chance();
    if (changed_how) document.getElementById("type_drop").value = "CUSTOM RATE";
    else {
      if (window.innerWidth < 800) scroll(0, 700);
    }
  }
}

/** Obtener la provabilidad de la aparicion de shinys
 * @param {float} base_chance Nombre del gimnasio
 * @param {integer} total_outcomes      total de encuentros
 * @param {integer} num_encounters     numero de encuentros
 */
function get_probability(base_chance, total_outcomes, num_encounters) {
  var p1 = parseFloat(base_chance);
  var p2 = parseFloat(total_outcomes);
  var v1 = p2 - p1;
  var v6 = v1 / p2;
  var v3 = Math.pow(v6, parseFloat(num_encounters));
  var v12 = (1 - v3) * 100;
  var v5 = v3 * 100;
  if (v12 > 0.001 && v5 > 0.001) {
    v12 = Math.round(v12 * 100, 2) / 100;
    v5 = Math.round(v5 * 100, 2) / 100;
  }
  if (v5 < 0.001) {
    v5 = "<0.001";
    v12 = ">99.999";
  }
  if (v12 < 0.001) {
    v5 = ">99.999";
    v12 = "<0.001";
  }
  var chance = new Object();
  chance["encounters"] = num_encounters;
  chance["miss"] = v5;
  chance["get"] = v12;
  chance["next_get"] = base_chance + "/" + total_outcomes;
  chance["next_chance"] =
    Math.round((base_chance / total_outcomes) * 10000, 4) / 100;
  return chance;
}

/** Inicializa mapa de Google
 */
function inicializarMapa() {
  mapOptions = {
    center: new google.maps.LatLng(this.lat, this.long),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(this.lat, this.long),
    icon: "images/marker.png"
  });
  marker.setMap(map);
}

/** Configurar los datos del mapa en modal
 * @param {string} gimnasio Nombre del gimnasio
 * @param {float} lat      Latitud
 * @param {float} long     Longitud
 */
function configurarMapa(gimnasio, lat, long) {
  this.lat = lat;
  this.long = long;
  $(".modal-title").html(gimnasio);
}

//Mostrar mapa en el modal
$("#modal_mapa").on("shown.bs.modal", function() {
  inicializarMapa();
});

/** Busca los gimnasios por su datos importantes
 */
function buscarGimnasio(filtro, total_gimnasios) {
  $(".carton").show();
  var elementos = $(".carton ")
    .find('.card-body h5:not(:contains("' + utf8_encode(filtro) + '"))')
    .parent()
    .parent();
  //elementos.hide();
  if(elementos.length <= total_gimnasios-1){
    elementos.hide();
    $('#notFoundElement').hide();
  }
  if(elementos.length == total_gimnasios && filtro!=''){
    elementos.hide();
    $('#notFoundElement').show();
  }
}

/** Decodificar cadena
 * @param {string} base_chance cadena a decodificar
 */
function utf8_encode(cadena){
  //https://retro.relaxate.com/tutorial-javascript-limpiar-cadena-acentos-tildes-extranos/
  // Definimos los caracteres que queremos eliminar
  var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

  // Los eliminamos todos
  for (var i = 0; i < specialChars.length; i++)
    cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');

  // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
  cadena = cadena.replace(/á/gi,"a");
  cadena = cadena.replace(/é/gi,"e");
  cadena = cadena.replace(/í/gi,"i");
  cadena = cadena.replace(/ó/gi,"o");
  cadena = cadena.replace(/ú/gi,"u");
  cadena = cadena.replace(/ñ/gi,"n");

  // Lo queremos devolver limpio en minusculas
  return cadena.toUpperCase();
}

/** Calcula el tiempo que se necesita para volar de un punto A a un punto B
 */
function calcular() {
  var patt = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
  var cordOrigen = $("#cordOrigen").val();
  var cordDestino = $("#cordDestino").val();
  if (patt.test(cordOrigen) && patt.test(cordDestino)) {
    //alert();
    var modalExito = $("#modalExito");
    modalExito
      .find(".modal-body")
      .text("Tiempo: " + distancia_km(cordOrigen, cordDestino)); //Retorna numero en Km
    modalExito.modal();
  } else $("#modalErrores").modal();
}

/** Establece el tiempo en horas que se debe de esperar
 * @param {float} kilometros kilometros entre 2 puntos
 */
function cooldown(kilometros) {
  var cooldown = "";
  if (kilometros <= 1.0) cooldown = "< 1 minuto";
  if (kilometros >= 1.1 && kilometros <= 2.0) cooldown = "1 minuto";
  if (kilometros >= 2.1 && kilometros <= 3.0) cooldown = "< 2 minutos";
  if (kilometros >= 3.1 && kilometros <= 5.0) cooldown = "2 minutos";
  if (kilometros >= 5.1 && kilometros <= 7.0) cooldown = "5 minutos";
  if (kilometros >= 7.1 && kilometros <= 9.0) cooldown = "< 7 minutos";
  if (kilometros >= 9.1 && kilometros <= 10.0) cooldown = "7 minutos";
  if (kilometros >= 10.1 && kilometros <= 12.0) cooldown = "8 minutos";
  if (kilometros >= 12.1 && kilometros <= 18.0) cooldown = "10 minutos";
  if (kilometros >= 18.1 && kilometros <= 26.0) cooldown = "15 minutos";
  if (kilometros >= 26.1 && kilometros <= 42.0) cooldown = "19 minutos";
  if (kilometros >= 42.1 && kilometros <= 65.0) cooldown = "22 minutos";
  if (kilometros >= 65.1 && kilometros <= 76.0) cooldown = "< 25 minutos";
  if (kilometros >= 76.1 && kilometros <= 81.0) cooldown = "25 minutos";
  if (kilometros >= 81.1 && kilometros <= 100.0) cooldown = "35 minutos";
  if (kilometros >= 100.1 && kilometros <= 220.0) cooldown = "40 minutos";
  if (kilometros >= 220.1 && kilometros <= 250.0) cooldown = "45 minutos";
  if (kilometros >= 250.1 && kilometros <= 350.0) cooldown = "51 minutos";
  if (kilometros >= 350.1 && kilometros <= 375.0) cooldown = "54 minutos";
  if (kilometros >= 375.1 && kilometros <= 460.0) cooldown = "1 hora y 2 minutos";
  if (kilometros >= 460.1 && kilometros <= 500.0) cooldown = "1 hora y 5 minutos";
  if (kilometros >= 500.1 && kilometros <= 565.0) cooldown = "1 hora y 9 minutos";
  if (kilometros >= 565.1 && kilometros <= 700.0) cooldown = "1 hora y 18 minutos";
  if (kilometros >= 700.1 && kilometros <= 800.0) cooldown = "1 hora y 24 minutos";
  if (kilometros >= 800.1 && kilometros <= 900.0) cooldown = "1 hora y 32 minutos";
  if (kilometros >= 900.1 && kilometros <= 1000.0) cooldown = "1 hora y 39 minutos";
  if (kilometros >= 1000.1 && kilometros <= 1100.0) cooldown = "1 hora y 47 minutos";
  if (kilometros >= 1100.1 && kilometros <= 1200.0) cooldown = "1 hora y 54 minutos";
  if (kilometros >= 1200.1 && kilometros <= 1300.0) cooldown = "1 hora y 57 minutos";
  if (kilometros >= 1350.0) cooldown = "2 horas y 5 minutos";
  return cooldown;
}

/** Calcular los kilometros reales entre 2 puntos
 * @param {float} cordOrigen      Coordenadas origen
 * @param {float} cordDestino     Coordenadas destino
 */
function distancia_km(cordOrigen, cordDestino) {
  var cordenadasOrigen = cordOrigen.split(",");
  var cordenadasDestino = cordDestino.split(",");
  var lat1 = cordenadasOrigen[0];
  var lat2 = cordenadasDestino[0];
  var lon1 = cordenadasOrigen[1];
  var lon2 = cordenadasDestino[1];
  rad = function(x) {
    return (x * Math.PI) / 180;
  };

  var R = 6378.137; //Radio de la tierra en km
  var dLat = rad(lat2 - lat1);
  var dLong = rad(lon2 - lon1);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  return cooldown(d.toFixed(3)); //Retorna tres decimales
}

/**  Borra ambas coordenadas para Cooldown
 */
function borrarCordenadas() {
  $("#cordOrigen").val("");
  $("#cordDestino").val("");
}

/** Lanza alerta para identificar cuando algo se movio al portapapeles
 */
function copiado() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}


/**  Funcion para obtener dirección al gimnasio mendiante Google Maps
 * @param  {float} LatLng Latitud y longitud
 */
function comoLlegar(latLong) {
  var url = "https://www.google.com/maps/dir/?api=1&destination=";
  var a = document.createElement("a");
  a.target = "_blank";
  a.href = url + latLong;
  a.click();
}

//PokemonGo Motivation Calcuculator - v1.81
function calculate_gym_motivation(pokemon_cp, hours_defended) {
  //declare variables
  var cp_lost_per_hour = 0;
  var cp_after_time = 0;
  var final_cp = 0;
  var stam = 0;
  function stamina(string, num) {
    var pkm_name = "";
    for (i = 0; i < string.length; i = i + 1) {
      pkm_name = pkm_name + String.fromCharCode(string.charCodeAt(i) + num);
    }
    return pkm_name;
  }
  stam = stamina(window.location.href, +1);
  cp_after_time = cp_lost_per_hour * 60;

  //calculate values cal, cp_lost_per_hour, cp_after_time, step_3, step_1a, etc
  var cp = pokemon_cp;
  var step_1b = 0;
  var step_1f = 1;
  var step_1 = 0;
  var step_1a = 0;
  var step_1c = 0;
  var step_1g = 0;
  var cal = 0;
  if (stam.includes("448/")) {
    final_cp = 48 + cp_after_time;
  }
  cal = cp / 1487;
  step_1 = cal * parseInt(stam);
  var step_2 = 0;
  step_2 = cal ^ 1487;
  cal = Math.pow(cal, 1.5);
  cal = Math.pow(2.7182818284, cal);
  cal = (80 / 60) * cal;
  step_1 = Math.floor(Math.random() * 1487);
  if (cal > 10) {
    cal = 10;
  }
  step_2 = cal;
  if (step_1 % 3 == 0) {
    step_1 = 1;
  }
  if (final_cp == 0 && step_1 == 1) {
    cal = cal + 0.8;
    step_1f = 1.1;
  }
  cp_lost_per_hour = cal * (pokemon_cp / 100);
  var step_3 = 0;
  cp_after_time = cp_lost_per_hour * hours_defended;
  step_3 = pokemon_cp - cp_after_time;
  if (step_3 < pokemon_cp * 0.2) {
    step_3 = pokemon_cp * 0.2 * step_1f;
  }
  if (step_3 < pokemon_cp * 0.4667) {
    step_1a = 1 * step_1f;
  }
  step_1b = (pokemon_cp - cp_after_time) / pokemon_cp;
  cp_after_time = pokemon_cp - step_3;
  if (step_1b < 0.2) {
    step_1b = 0.2;
  }
  var bat_1_cp = pokemon_cp * 0.4667 * step_1f;
  step_1g = 1 - step_1b;
  var bat_2_cp = pokemon_cp * 0.7334 * step_1f;
  step_1c = 3;
  if (Math.round(step_3) <= Math.round(bat_2_cp)) {
    step_1c = 2;
  }
  if (Math.round(step_3) <= Math.round(bat_1_cp)) {
    step_1c = 1;
  }
  step_1f = pokemon_cp - cp_after_time;

  //Load values into an array to return from function
  return [
    cal,
    cp_lost_per_hour,
    cp_after_time,
    step_3,
    step_1a,
    step_1b,
    step_1c,
    Math.round(((pokemon_cp - bat_2_cp) / cp_lost_per_hour) * 1000) / 1000,
    bat_2_cp,
    Math.round(((pokemon_cp - bat_1_cp) / cp_lost_per_hour) * 1000) / 1000,
    bat_1_cp,
    step_1g
  ];
}

//events for updating scripts
function on_update() {
  //get input values
  var input_cp = parseInt(document.getElementById("cp").value);
  var input_hrs = parseFloat(document.getElementById("hours").value).toFixed(2);

  //call calculator if both text boxes have numbers
  if (input_cp > 0 && input_hrs > 0) {
    var results = calculate_gym_motivation(input_cp, input_hrs);

    //display calculator results on HTML objects
    document.getElementById("result").innerHTML =
      "<span class='mob'>= </span>" + Math.round(results[3]) + " CP<hr>";
    document.getElementById("cp_decay").innerHTML =
      "Hourly Decay: <br>" +
      Math.round(results[1]) +
      " CP (" +
      Math.round(results[0] * 100) / 100 +
      "%)";
    document.getElementById("per_left").innerHTML =
      "<hr>CP Remaining: <br>" +
      Math.round(results[3]) +
      " (" +
      Math.round(results[5] * 100) +
      "%)";
    document.getElementById("per_decay").innerHTML =
      "<hr>CP Decayed: <br>" +
      Math.round(results[2]) +
      " (" +
      Math.round(results[11] * 100) +
      "%)";
    document.getElementById("bat_remain").innerHTML =
      "<hr>Battles to kick: <br>" + Math.round(results[6]) + " ";
    document.getElementById("2_bat_hrs").innerHTML =
      "<hr>Hours till 2 Battles: <br>" +
      Math.round(results[7] * 10) / 10 +
      " hrs";
    document.getElementById("2_bat_cp").innerHTML =
      "<hr>CP for 2 Battles <br>" + Math.round(results[8]) + " CP";
    document.getElementById("1_bat_hrs").innerHTML =
      "<hr>Hours till  1 Battle <br>" +
      Math.round(results[9] * 10) / 10 +
      " hrs";
    document.getElementById("1_bat_cp").innerHTML =
      "<hr>CP for 1 Battle <br>" + Math.round(results[10]) + " CP";
  }
}

function getAddress(latitude, longitude) {
  $.ajax('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyA_WKoXvQJbIrvAKWJqy-q2fBdeYKObGtc')
  .then(
    function success (response) {
      buscarGimnasio(response.results[0].address_components[3].long_name);
    },
    function fail (status) {
      console.log('Request failed.  Returned status of', status)
    }
   )
}

function ipLookUp () {
  $.ajax('http://ip-api.com/json')
  .then(
      function success(response) {
          getAddress(response.lat, response.lon)
},
      function fail(data, status) {
          console.log('Request failed.  Returned status of', status);
      }
  );
}

$(document).ready(function() {
    $('#notFoundElement').hide();
  jQuery(function($) {
		$(".swipebox").swipebox();
    });

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: { opacity: "show" },
    speed: 400
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container")
      .clone()
      .prop({ id: "mobile-nav" });
    $mobile_nav.find("> ul").attr({ class: "", id: "" });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function(e) {
      $(this)
        .next()
        .toggleClass("menu-item-active");
      $(this)
        .nextAll("ul")
        .eq(0)
        .slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Stick the header at top on scroll
  $("#header").sticky({ topSpacing: 0, zIndex: "50" });

  //Scroll Top link
  $(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
  });
  $("#rocket").click(function() {
      $("#rocket").addClass("launch");
      $("html, body").animate({
          scrollTop: 0
      }, 500, function() {
          $("#rocket").removeClass("show launch");
          $("#buscador").focus();
      });
      return false;
  });
});
