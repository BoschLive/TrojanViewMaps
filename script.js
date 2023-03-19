function myMap() {
let mapProp= {
  center:new google.maps.LatLng(31.802535609893273, -85.95787215346463),
  zoom:14,
};
let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

let directionsService = new google.maps.DirectionsService();
let directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map);

let onChangeHandler = function() {
  calculateAndDisplayRoute(directionsService, directionsDisplay);
};
   document.getElementById('start').addEventListener('change', onChangeHandler);
   document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
  

