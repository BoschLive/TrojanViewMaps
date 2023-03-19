function myMap() {
let mapProp= {
  center:new google.maps.LatLng(31.802535609893273, -85.95787215346463),
  zoom:14,
 
};
let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

const marker1 = new google.maps.Marker({
  position:new google.maps.LatLng(31.802535609893273, -85.95787215346463)
});

marker1.setMap(map);

const directionsService = new google.maps.DirectionsService();
const directionsDisplay = new google.maps.DirectionsDirectionsDisplay();
directionsDisplay.setMap(map);

var onChangeHandler = funtion() {
  displayRoute(directionsService, directionsDisplay);
};
  document.getElementById('start').addEventListener('change',onChangeHandler);
  document.getElementById('destination').addEventListener('change',onChangeHandler);
}


function displayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('destination').value,
    travelMode: 'DRIVING'
   });
 }
  
  

