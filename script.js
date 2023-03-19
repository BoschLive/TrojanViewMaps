function myMap() {
let mapProp= {
  center:new google.maps.LatLng(31.802535609893273, -85.95787215346463),
  zoom:14,
 
};
let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

const marker = new google.maps.Marker({
  position:new google.maps.LatLng(31.802535609893273, -85.95787215346463),
  icon:'TroyU.png'
});

marker.setMap(map);
}
