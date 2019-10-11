var mymap = L.map('mapid');
var options = {key: geocoder_api_key, limit: 10};
var control = L.Control.openCageSearch(options).addTo(mymap);
/* // MAPBOX TILE LAYER
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
  maxZoom: 18,
  id: 'mapbox.mapbox-traffic-v1',
  accessToken: mapbox_access_token
}).addTo(mymap);
*/
L.tileLayer('http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {}).addTo(mymap);
/*
//Add a marker
var marker = L.marker([51.5,-0.09]).addTo(mymap);
//Add a circle
var circle = L.circle([51.508,-0.11], {color: 'red', fillColor: '#f03', fillOpacity: 0.5, radius: 500}).addTo(mymap);
//Add a polygon
var polygon = L.polygon([[51.509, -0.08],[51.503, -0.06],[51.51, -0.047]]).addTo(mymap);
//Add a polyline
var polyline = L.polyline([[51.506, -0.08],[51.502, -0.06],[51.507, -0.047]]).addTo(mymap);
//Add popup windows for each object
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygom.");

marker.on('click', function(e){mymap.setView(e.latlng, 14);})
circle.on('click', function(e){mymap.setView(e.latlng, 13);})
polygon.on('click', function(e){mymap.setView(e.latlng, 13);})

var ZoomViewer = L.Control.extend({
  onAdd: function(){
    var gauge = L.DomUtil.create('div');
    gauge.style.width = '200px';
    gauge.style.background = 'rgba(255,255,255,0.5)';
    gauge.style.textAlign = 'left';
    mymap.on('zoomstart xoom zoomed', function(ev){
      gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
    })
    return gauge;
  }
});

(new ZoomViewer).addTo(mymap);
*/

mymap.setView([0, 0], 1);