function myMap() {
var mapProp= {
  center:new google.maps.LatLng(31.802535609893273, -85.95787215346463),
  zoom:14,
 
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

const marker = new google.maps.Marker({
  position:{lat:31.8026, lng:85.9572},
});

marker.setMap(map);
