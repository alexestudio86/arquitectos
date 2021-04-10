// GOOGLE MAPS

const loadMap = () => {

  var mapa = document.getElementById('map');
      mapa.innerHTML = '';
  const coord = { lat:19.3023926, lng:-99.6306474 }
  const styles = [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      }
  ]
  const map = new google.maps.Map(mapa, {
        center: coord,
        zoom: 18,
        mapTypeControlOptions: {
          mapTypeIds: ["styled_map"],
        },
  });
  const marker = new google.maps.Marker({
        position: coord,
        title: 'Perfect Spine',
  });
	const contentString =
        '<div class="w3-row">'+
          '<div class="w3-col s2">'+
           '<i class="far fa-building w3-xlarge w3-text-red"></i>'+
          '</div>'+
          '<div class="w3-col s10">'+
            '<h1 class="w3-large w3-text-black w3-center" style="margin:0 0 0 2px">CAD Grupo Constructor</h1>'+
          '</div>'+
        '</div>';
	const infowindow = new google.maps.InfoWindow({
          content: contentString,
	});

    marker.setMap(map);
	infowindow.open(map, marker);
    map.setOptions({ styles: styles })

  mapa.style = 'height:300px; width:90%; margin:0 auto 16px auto';

}


// Add Eventos map starting
mapa = document.querySelector('#map img');
mapa.addEventListener('click', loadMap);
loadMap();
