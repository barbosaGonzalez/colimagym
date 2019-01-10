<?php 
function base_url($uri){
    if($uri == "https://static.memrise.com/uploads/category_photos/pokemon.png")
        echo $uri;
    else
      echo 'http://colimagym.com/'.$uri;
}
?>