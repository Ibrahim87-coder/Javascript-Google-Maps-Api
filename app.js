let map;

function initMap() {
  // Map Options
  var options = {
    center: { lat: 34.43667, lng: 35.84972},
    zoom: 16,
  };

  // New Map
  map = new google.maps.Map(document.getElementById("map"), options);
  

  //Add Marker
  google.maps.event.addListener(map,"click" , (event)=>{
      addMarker({location:event.latLng})
  })

  
  //Info Window

  const detailWindow = new google.maps.InfoWindow({
      content:  `<h2>Tripoli City</h2>`
  })

  marker.addListener("mouseover",() =>{
      detailWindow.open(map,marker);
  })
    // Add Marker
    function addMarker(property){
        marker = new google.maps.Marker({
            position: property.location,
            map:map,
            icon:property.ImageIcon
        })
    }

    addMarker({location:{ lat: 34.43667, lng: 35.84972},
    ImageIcon: "https://img.icons8.com/nolan/2x/marker.png"})
}
