var lat, long, map, mapOptions, marker;
var portapapeles = new Clipboard('.btn');

/**
 * Funcion para inicializar mapa de Google
 */
function inicializarMapa() {
  mapOptions = {
      center: new google.maps.LatLng(this.lat,this.long),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);
  marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.lat,this.long)
  });
  marker.setMap(map);
}

/**
 * Función para establecer datos del mapa
 * @param {string} gimnasio Nombre del gimnasio
 * @param {float} lat      Latitud
 * @param {float} long     Longitud
 */
function configurarMapa(gimnasio, lat, long){
  this.lat = lat;
  this.long = long;
  $('.modal-title').html(gimnasio);
}

//Mostrar mapa en el modal
$('#myModal').on('shown.bs.modal', function () {
    inicializarMapa();
});

function buscarGimnasio() {
  var filtroBusqueda, tabla, fila, columna, indice;
  filtroBusqueda = $("#buscador").val().toUpperCase();
  tabla = document.getElementById("gimnasios");
  fila = tabla.getElementsByTagName("tr");

  for (indice = 0; indice < fila.length; indice++) {
    columna = fila[indice].getElementsByTagName("td")[2];
    if (columna) {
      if (columna.innerHTML.toUpperCase().indexOf(filtroBusqueda) > -1) {
        fila[indice].style.display = "";
      } else {
        fila[indice].style.display = "none";
      }
    }
  }
}

/**
 * Funcion para buscar los gimnasios por municipios
 * @param  {string} id Clave para el municipio
 */
function buscarMunicipio(municipio){
  $("#buscador").val('');
  this.buscarGimnasio();
  var tabla, fila, indice;
  tabla = document.getElementById("gimnasios");
  fila = tabla.getElementsByTagName("tr");

  if(municipio != ''){
    for (indice = 1; indice < fila.length; indice++) {
      if(fila[indice].id == municipio){
        fila[indice].style.display = "";
      } else{
        fila[indice].style.display = "none";
      }
    }
  } else {
    this.buscarGimnasio();
  }
}

/**
 * Funcion para obtener dirección al gimnasio mendiante Google Maps
 * @param  {string} LatLng Latitud y longitud
 */
function comoLlegar(latLong){
  var url = 'https://www.google.com/maps/dir/?api=1&destination=';
  var a = document.createElement("a");
  a.target = "_blank";
  a.href = url+latLong;
  a.click();
}

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

function mostrarMapaGimnasios(){
  // Try HTML5 geolocation.
  if (navigator.geolocation)
  {

    navigator.geolocation.getCurrentPosition(function(position) {
      pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      mapOptions = 
      {
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
              mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.SATELLITE,
                google.maps.MapTypeId.HYBRID,
                google.maps.MapTypeId.TERRAIN
                ]
                },
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        center: pos
      };
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      console.log(pos);
      moveIntoMap = true;
      map.setCenter(pos);
      map.setZoom(15);
      setMarker("Encontrado", "Usted se encuentra aqúi", pos, "images/marker.png");

      var gimnasios = [
        {'titulo':'Escultura del toro', 'lat':19.266426, 'long':-103.739129, 'img': 'images/gym.png'},
        {'titulo':'Angelito de la Independencia', 'lat':19.271212, 'long':-103.747383, 'img': 'images/gym.png'},
        {'titulo':'Andamio Real', 'lat':19.282388, 'long':-103.721627, 'img': 'images/gym.png'},
        {'titulo':'Recordatorio De La Infancia', 'lat':19.280501, 'long':-103.723403, 'img': 'images/gym.png'},
        {'titulo':'Caseta Bosque Real', 'lat':19.278897,'long':-103.722505, 'img': 'images/gym.png'},
        {'titulo':'Los Almendros', 'lat':19.289092, 'long':-103.732041, 'img': 'images/gym.png'},
        {'titulo':'Glorieta de los Perritos', 'lat':19.283745, 'long':-103.744536, 'img': 'images/gym.png'},
        {'titulo':'Luis Donaldo Colisio', 'lat':19.272195, 'long':-103.734327, 'img': 'images/gym.png'},
        {'titulo':'Fuente en Diosa del Agua', 'lat':19.273467, 'long':-103.739757, 'img': 'images/gym.png'},
        {'titulo':'Unidad Deportiva', 'lat':19.268086, 'long':-103.742048, 'img': 'images/gym.png'},
        {'titulo':'Monumento Benito Juárez','lat':19.266856, 'long':-103.739173, 'img': 'images/gym.png'},
        {'titulo': 'Kiosco (Jardín de la Villa)', 'lat': 19.265048, 'long': -103.736146, 'img': 'images/gym.png'},
        {'titulo': 'Triángulo de Agua', 'lat': 19.27355,'long': -103.714928, 'img': 'images/gym.png'},
        {'titulo': 'Tiny Town', 'lat': 19.26673,'long': -103.708621, 'img': 'images/gym.png'},
        {'titulo': 'Zentralia', 'lat': 19.266252,'long': -103.698313, 'img': 'images/gym.png'},
        {'titulo': 'El Mariachi', 'lat': 19.260379,'long': -103.690708, 'img': 'images/gym.png'},
        {'titulo': 'Mural Facultad de Derecho', 'lat': 19.2609875,'long': -103.687605, 'img': 'images/gym.png'},
        {'titulo': 'Monumento Mujeres', 'lat': 19.256091, 'long': -103.68801, 'img': 'images/gym.png'},
        {'titulo': 'Tripié Rojo', 'lat': 19.255508,'long': -103.689388, 'img': 'images/gym.png'},
        {'titulo': 'Facultad de Telemática (UCOL)', 'lat': 19.249165,'long': -103.697576, 'img': 'images/gym.png'},
        {'titulo': 'Monumento de Espejo (UCOL)', 'lat': 19.248482,'long': -103.698552, 'img': 'images/gym.png'},
        {'titulo': 'Monumento al Deporte', 'lat': 19.248906,'long': -103.704439, 'img': 'images/gym.png'},
        {'titulo': 'Plaques de Manos (FEC)', 'lat': 19.245343,'long': -103.702791, 'img': 'images/gym.png'},
        {'titulo': 'Biblioteca de Ciencias (UCOL)', 'lat': 19.244296,'long': -103.701701, 'img': 'images/gym.png'},
        {'titulo': 'José María Morelos y Pavón (Panteón de Colima', 'lat': 19.247335,'long': -103.709139, 'img': 'images/ex.png'},
        {'titulo': 'Castillo del Pedregal', 'lat': 19.237439,'long': -103.693067, 'img': 'images/gym.png'},
        {'titulo': 'Glorieta Benito Juárez (Zalatón)', 'lat': 19.244243,'long': -103.715926, 'img': 'images/gym.png'},
        {'titulo': 'Rotonda de los Colimenses Ilustres (Piedra lisa)', 'lat': 19.239865,'long': -103.715745, 'img': 'images/gym.png'},
        {'titulo': 'Museo XOLOITZCUINTLE (Piedra Lisa)', 'lat': 19.239472,'long': -103.714109, 'img': 'images/gym.png'},
        {'titulo': 'Mural del Oso', 'lat': 19.23696,'long': -103.718574, 'img': 'images/gym.png'},
        {'titulo': 'Busto Francisco I. Madero (Moralete)', 'lat': 19.233694,'long': -103.713793, 'img': 'images/ex.png'},
        {'titulo': 'Glorieta Elefantes', 'lat': 19.232724,'long': -103.708554, 'img': 'images/gym.png'},
        {'titulo': 'Campana de la Independencia (Parque Hidalgo)', 'lat': 19.23338,'long': -103.728316, 'img': 'images/gym.png'},
        {'titulo': 'Armadillo (Parque Hidalgo)', 'lat': 19.233953,'long': -103.728955, 'img': 'images/ex.png'},
        {'titulo': 'Templo Juan Bosco (Albarrada)', 'lat': 19.234708,'long': -103.741431, 'img': 'images/gym.png'},
        {'titulo': 'Estatua José Pimentel Llerenas (Parque Regional)', 'lat': 19.238535,'long': -103.736203, 'img': 'images/gym.png'},
        {'titulo': 'Estanque de los Niños (Parque Regional)', 'lat': 19.239933,'long': -103.734069, 'img': 'images/gym.png'},
        {'titulo': 'Glorieta del Charro', 'lat': 19.244125,'long': -103.736044, 'img': 'images/gym.png'},
        {'titulo': 'Busto Benito Juárez (Jardín Juarez)', 'lat': 19.237565,'long': -103.727204, 'img': 'images/gym.png'},
        {'titulo': 'Antigua Central Camionera', 'lat': 19.241037, 'long': -103.7294, 'img': 'images/gym.png'},
        {'titulo': 'Monumento Torres Quintero (El Torres)', 'lat': 19.242556,'long': -103.727689, 'img': 'images/ex.png'},
        {'titulo': 'Andador Ana Martell (El Torres)', 'lat': 19.243087,'long': -103.727589, 'img': 'images/gym.png'},
        {'titulo': 'Ventanas al Cielo (Pinacote universitaria)', 'lat': 19.244833, 'long': -103.72658, 'img': 'images/gym.png'},
        {'titulo': 'Santuario de Nuestra Señora del Refugio', 'lat': 19.244923,'long': -103.721443, 'img': 'images/gym.png'},
        {'titulo': 'Monumento a la Madre (Guadaljarita)', 'lat': 19.250392,'long': -103.71981, 'img': 'images/gym.png'},
        {'titulo': 'Templo del Consagrado Corazón de María', 'lat': 19.251616,'long': -103.719784, 'img': 'images/gym.png'},
        {'titulo': 'Al Maestro (ISENCO)', 'lat': 19.254049,'long': -103.725151, 'img': 'images/gym.png'},
        {'titulo': 'Monasterio (Jardín San Francisco)', 'lat': 19.254747,'long': -103.730102, 'img': 'images/ex.png'},
        {'titulo': 'Oso de Madera (Starbucks)', 'lat': 19.252696,'long': -103.712242, 'img': 'images/gym.png'},
        {'titulo': 'Piedras Rodantes', 'lat': 19.259148,'long': -103.714698, 'img': 'images/gym.png'},
        {'titulo': 'Panteón de los Gringos', 'lat': 19.258003,'long': -103.718979, 'img': 'images/gym.png'},
        {'titulo': 'Búhos Esculpidos en Madera', 'lat': 19.259854,'long': -103.721412, 'img': 'images/gym.png'},
        {'titulo': 'Laboratorio Informática (TEC)', 'lat': 19.261821,'long': -103.722741, 'img': 'images/gym.png'},
        {'titulo': 'Laboratorio Química Orgánica (TEC)', 'lat': 19.262679,'long': -103.722941, 'img': 'images/gym.png'},
        {'titulo': 'Cápsula del Tiempo (TEC)', 'lat': 19.262871,'long': -103.724088, 'img': 'images/gym.png'},
        {'titulo': 'Nahui Old (TEC)', 'lat': 19.263147,'long': -103.723644, 'img': 'images/gym.png'},
        {'titulo': 'Rancho de Villa', 'lat': 19.231162,'long': -103.768492, 'img': 'images/gym.png'},
        {'titulo': 'Flor Rosa Morada (Arboledas)', 'lat': 19.277523,'long': -103.729335, 'img': 'images/ex.png'},
        {'titulo': 'Colima Capital', 'lat': 19.24212,'long': -103.748741, 'img': 'images/gym.png'},
        {'titulo': 'Al Mártir José Pimentel Llerenas', 'lat': 19.238574,'long': -103.737624, 'img': 'images/gym.png'},
        {'titulo': 'Central de Autobuses de Colima', 'lat': 19.232499,'long': -103.704344, 'img': 'images/gym.png'},
        {'titulo': 'Testigos de Jehova', 'lat': 19.235227,'long': -103.696265, 'img': 'images/gym.png'},
        {'titulo': 'Estatua de Gabino Barreda (UDC)', 'lat': 19.251752,'long': -103.700466, 'img': 'images/gym.png'},
        {'titulo': 'Virgen de Guadalupe', 'lat': 19.258184,'long': -103.707561, 'img': 'images/gym.png'},
        {'titulo': 'Fuente V. Carranza', 'lat': 19.271373,'long': -103.716141, 'img': 'images/gym.png'},
        {'titulo': 'Fuente San Francisco de Almoloyan', 'lat': 19.254021,'long': -103.730091, 'img': 'images/ex.png'},
        {'titulo': 'Cuauhtémoc', 'lat': 19.328637,'long': -103.602316, 'img': 'images/gym.png'},
        {'titulo': 'Kiosco Jardín Del Trapiche, Cuauhtemoc', 'lat': 19.278148,'long': -103.661466, 'img': 'images/gym.png'},
        {'titulo': 'Comala Pueblo Mágico', 'lat': 19.320703,'long': -103.759337, 'img': 'images/gym.png'},
        {'titulo': 'Parroquia de San Miguel', 'lat': 19.323034,'long': -103.758095, 'img': 'images/gym.png'},
        {'titulo': 'Nicho De La Virgen Con Niño (Nogueras)', 'lat': 19.323708,'long': -103.739932, 'img': 'images/gym.png'},
        {'titulo': 'Homenaje a la Amistad', 'lat': 19.213257,'long': -103.803975, 'img': 'images/gym.png'},
        {'titulo': 'UDC Campus Coquimatlán', 'lat': 19.212802,'long': -103.805325, 'img': 'images/gym.png'},
        {'titulo': 'Fuente Aceleradora de Particulas (Centro Tecomán)', 'lat': 18.910498, 'long': -103.87292, 'img': 'images/gym.png'},
        {'titulo': 'Iguana Tecomán Colima', 'lat': 18.9408460,'long': -103.8955270, 'img': 'images/gym.png'},
        {'titulo': 'Jalipa', 'lat': 19.1212, 'long': -104.26816, 'img': 'images/gym.png'},
        {'titulo': 'Kiosko de campos', 'lat': 19.023792,'long': -104.311066, 'img': 'images/ex.png'},
        {'titulo': 'Campos Logo', 'lat': 19.0226, 'long': -104.318695, 'img': 'images/gym.png'},
        {'titulo': 'Campos Termo', 'lat': 19.023628, 'long': -104.32269, 'img': 'images/gym.png'},
        {'titulo': 'Centro Gyms Internos', 'lat': 19.046448,'long': -104.319648, 'img': 'images/gym.png'},
        {'titulo': 'Centro', 'lat': 19.054398,'long': -104.317438, 'img': 'images/gym.png'},
        {'titulo': 'Centro 3 Pokeparadas Juntas', 'lat': 19.053493, 'long': -104.31095, 'img': 'images/gym.png'},
        {'titulo': 'San Pedrito-Brisas', 'lat': 19.059522,'long': -104.302908, 'img': 'images/gym.png'},
        {'titulo': 'Iglesia Brisas', 'lat': 19.070696,'long': -104.302601, 'img': 'images/gym.png'},
        {'titulo': 'Tapeixtles', 'lat': 19.068460,'long': -104.284879, 'img': 'images/gym.png'},
        {'titulo': 'Valle de las Garzas', 'lat': 19.092058,'long': -104.29812, 'img': 'images/gym.png'},
        {'titulo': 'Crucero de Brisas', 'lat': 19.084914,'long': -104.308675, 'img': 'images/gym.png'},
        {'titulo': 'Poseidón', 'lat': 19.088816,'long': -104.31274, 'img': 'images/gym.png'},
        {'titulo': 'Libra-Leo', 'lat': 19.091655,'long': -104.315765, 'img': 'images/gym.png'},
        {'titulo': 'Tubo Gomez', 'lat': 19.101225,'long': -104.30672, 'img': 'images/gym.png'},
        {'titulo': 'Sirena', 'lat': 19.097581,'long': -104.321915, 'img': 'images/gym.png'},
        {'titulo': 'Sr. Sushi- Casino Faro', 'lat': 19.100691,'long': -104.325261, 'img': 'images/gym.png'},
        {'titulo': 'Complejo Adminstrativo', 'lat': 19.112173,'long': -104.323720, 'img': 'images/gym.png'},
        {'titulo': 'Waltmart', 'lat': 19.104505,'long': -104.334384, 'img': 'images/gym.png'},
        {'titulo': 'Santiago-luz del mundo', 'lat': 19.115850,'long': -104.349925, 'img': 'images/gym.png'},
        {'titulo': 'Club Santiago-UDC', 'lat': 19.121569,'long': -104.392938, 'img': 'images/gym.png'},
        {'titulo': 'Gym Oculto', 'lat': 19.200985,'long': -104.558644, 'img': 'images/gym.png'},
        {'titulo': 'Manzanilla', 'lat': 19.281036,'long': -104.788025, 'img': 'images/gym.png'},
        {'titulo': 'La Huerta', 'lat': 19.30743,'long': -104.833145, 'img': 'images/gym.png'},
        {'titulo': 'Jaluco', 'lat': 19.229565,'long': -104.68538, 'img': 'images/gym.png'},
        {'titulo': 'Barra mirador', 'lat': 19.199492,'long': -104.684814, 'img': 'images/gym.png'},
        {'titulo': 'Barra Entrada', 'lat': 19.206228,'long': -104.683975, 'img': 'images/gym.png'},
        {'titulo': 'Cihuatlan', 'lat': 19.237719224689688,'long': -104.5561337471008, 'img': 'images/gym.png'},
        {'titulo': 'Templo de San Rafael', 'lat': 19.3277519,'long': -103.6013445, 'img': 'images/gym.png'},
        {'titulo': 'Fuente Jardín San Marcos', 'lat': 19.446095,'long': -103.504395, 'img': 'images/gym.png'},
        {'titulo': 'Kiosko Jardín Tonila', 'lat': 19.4087319,'long': -103.5507746, 'img': 'images/gym.png'},
        {'titulo': 'Universidad de Colima (Campus Central)', 'lat': 19.248779,'long': -103.698712, 'img': 'images/farmer.png'},
        {'titulo': 'Instituto Tecnológico de Colima (TEC)', 'lat': 19.2609689,'long': -103.7237269, 'img': 'images/farmer.png'},
        {'titulo': 'Casa de la cultura de Colima', 'lat': 19.2419013,'long': -103.7158044, 'img': 'images/farmer.png'},
        {'titulo': 'Jardín Nuñez', 'lat': 19.239940,'long': -103.724636, 'img': 'images/farmer.png'},
        {'titulo': 'Centro de Colima', 'lat': 19.243404,'long': -103.728573, 'img': 'images/farmer.png'},
        {'titulo': 'Malecon de Manzanillo', 'lat': 19.0535627,'long': -104.3140844, 'img': 'images/farmer.png'}
      ];

      for (i in gimnasios) {
          setMarker(gimnasios[i]['titulo'], gimnasios[i]['titulo'], new google.maps.LatLng(gimnasios[i]['lat'], gimnasios[i]['long']),gimnasios[i]['img']);
      }

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } 
  else
  {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
     'Error: The Geolocation service failed.' :
     'Error: Your browser doesn\'t support geolocation.');
}

function setMarker(titulo, informacion, posicion_rec, icono)
{
  marker = new google.maps.Marker({
      map: map,
     title: titulo,
     // Define the place with a location, and a query string.
     place: {
        location: posicion_rec,
        query: informacion
     },
     icon: icono
   });
  marker.addListener('click', function() {
    map.setCenter(posicion_rec);
 });
  //attachSecretMessage(marker, mensaje);
  return marker;
}

function attachSecretMessage(marker, secretMessage) {
   var infowindow = new google.maps.InfoWindow({
     content: secretMessage
   });

   marker.addListener('click', function() {
     infowindow.open(map, marker);
   });
}