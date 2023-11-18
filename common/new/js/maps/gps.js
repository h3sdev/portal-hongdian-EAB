if (navigator.geolocation) 
    {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  }
  
  function mostrarUbicacion (ubicacion) {
    const lng = ubicacion.coords.longitude;
    const lat = ubicacion.coords.latitude;
    var showMap = document.getElementById('map')
    showMap.innerHTML = `<iframe width="320" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
        src="https://www.openstreetmap.org/export/embed.html?bbox=${ lng }%2C${ lat }%2C${ lng }%2C${ lat }&amp;layer=mapnik&amp;marker=${ lat }%2C${ lng }" 
        style="border: 1px solid black">
    </iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=${ lat }&amp;mlon=${ lng }#map=18/${ lat }/${ lng }">Ver mapa más grande</a></small>`
    console.log(`longitud: ${ lng } | latitud: ${ lat }`);
  }
  