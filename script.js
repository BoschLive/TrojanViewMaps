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
directionsService.route(
  origin: document.getElementByID('start').value,
  destination: document.getElementByID('destination').value,
  travelMode: "DRIVING"
);
  
}
