var mymap = L.map('mapid',{
  zoom: 5,
  fullscreenControl: true,
  /*fullscreenControlOptions: { // optional
    title:"Show me the fullscreen !",
    titleCancel:"Exit fullscreen mode"
  }*/
});

var options = {key: geocoder_api_key, limit: 10};
var control = L.Control.openCageSearch(options).addTo(mymap);

/* // MAPBOX TILE LAYER
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
  maxZoom: 18,
  id: 'mapbox.mapbox-traffic-v1',
  accessToken: mapbox_access_token
}).addTo(mymap);
*/

L.tileLayer('http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
    attribution: '<a href="attribution: mbAttr">Map tiles </a>by <a href="http://stamen.com/"> Stamen Design</a>, under <ahref="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0"> CC BY SA</a>.',
}).addTo(mymap);

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

//SEVEN WONDERS//
//Set icons for seven wonders
var tajMahal_icon = new L.Icon({
  iconUrl: './images/seven_wonders/tajMahal_icon.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var greatWall_icon = new L.Icon({
  iconUrl: './images/seven_wonders/greatWall_icon.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var petra_icon = new L.Icon({
  iconUrl: './images/seven_wonders/petra_icon.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var christRedeemer_icon = new L.Icon({
  iconUrl: './images/seven_wonders/christRedeemer_icon.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var machuPicchu_icon = new L.Icon({
  iconUrl: './images/seven_wonders/machuPicchu_icon.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var chichenItzaPyramid_icon = new L.Icon({
  iconUrl: './images/seven_wonders/chichenItzaPyramid_icon.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var romeColosseum_icon = new L.Icon({
  iconUrl: './images/seven_wonders/romeColosseum_icon.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// specify popup options
var custom_wonders_popup = {
  'className':'custom_wonders_popup'
};

//Add icons and popup windows for seven wonders to the map
var tajMahal_img = "<img src='./images/seven_wonders/tajMahal.jpg' height='200px' width='300px'>";
var tajMahal_intro = "<p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. (<a href='https://en.wikipedia.org/wiki/Taj_Mahal' target='_blank'>Wikipedia</a>)</p>";
var tajMahal_pop = "<h3 font-weight='bold'>Taj Mahal, India</h3>" + tajMahal_intro + "<br>" +  "<center>"+tajMahal_img+"</center>";
var tajMahal = L.marker([27.174961,78.042385],{icon: tajMahal_icon}).addTo(mymap);
tajMahal.bindPopup(tajMahal_pop, custom_wonders_popup);

var greatWall_img = "<img src='./images/seven_wonders/greatWall.jpg' height='200px' width='300px'>";
var greatWall_intro = "<p>The Great Wall of China is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities. (<a href='https://en.wikipedia.org/wiki/Great_Wall_of_China' target='_blank'>Wikipedia</a>)</p>";
var greatWall_pop = "<h3 font-weight='bold'>The Great Wall, China</h3>" + greatWall_intro + "<br>" +  "<center>"+greatWall_img+"</center>";
var greatWall = L.marker([40.334245,116.477652],{icon: greatWall_icon}).addTo(mymap);
greatWall.bindPopup(greatWall_pop, custom_wonders_popup);

var petra_img = "<img src='./images/seven_wonders/petra.jpg' height='200px' width='300px'>";
var petra_intro = "<p>Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the \"Rose City.\" Perhaps its most famous structure is 45m-high Al Khazneh, a temple with an ornate, Greek-style facade, and known as The Treasury.(<a href='https://en.wikipedia.org/wiki/Petra' target='_blank'>Wikipedia</a>)</p>";
var petra_pop = "<h3 font-weight='bold'>Petra, Jordan</h3>" + petra_intro + "<br>" +  "<center>"+petra_img+"</center>";
var petra = L.marker([30.328611,35.441944],{icon: petra_icon}).addTo(mymap);
petra.bindPopup(petra_pop, custom_wonders_popup);

var christRedeemer_img = "<img src='./images/seven_wonders/christRedeemer.jpg' height='300px' width='200px'>";
var christRedeemer_intro = "<p>Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.(<a href='https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)' target='_blank'>Wikipedia</a>)</p>";
var christRedeemer_pop = "<h3 font-weight='bold'>The Statue of Christ the Redeemer, Brazil</h3>" + christRedeemer_intro + "<br>" +  "<center>"+christRedeemer_img+"</center>";
var christRedeemer = L.marker([-22.951389,-43.2108334],{icon: christRedeemer_icon}).addTo(mymap);
christRedeemer.bindPopup(christRedeemer_pop, custom_wonders_popup);

var machuPicchu_img = "<img src='./images/seven_wonders/machuPicchu.jpg' height='200px' width='300px'>";
var machuPicchu_intro = "<p>Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views.(<a href='https://en.wikipedia.org/wiki/Machu_Picchu' target='_blank'>Wikipedia</a>)</p>";
var machuPicchu_pop = "<h3 font-weight='bold'>Machu Picchu, Peru</h3>" + machuPicchu_intro + "<br>" +  "<center>"+machuPicchu_img+"</center>";
var machuPicchu = L.marker([-13.163056,-72.545556],{icon: machuPicchu_icon}).addTo(mymap);
machuPicchu.bindPopup(machuPicchu_pop, custom_wonders_popup);

var chichenItzaPyramid_img = "<img src='./images/seven_wonders/chichenItzaPyramid.jpg' height='200px' width='300px'>";
var chichenItzaPyramid_intro = "<p>Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–900) through the Terminal Classic (c. AD 800–900) and into the early portion of the Postclassic period (c. AD 900–1200). The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands. The presence of central Mexican styles was once thought to have been representative of direct migration or even conquest from central Mexico, but most contemporary interpretations view the presence of these non-Maya styles more as the result of cultural diffusion.(<a href='https://en.wikipedia.org/wiki/Chichen_Itza' target='_blank'>Wikipedia</a>)</p>";
var chichenItzaPyramid_pop = "<h3 font-weight='bold'>Chichen Itza Pyramid, Mexico</h3>" + chichenItzaPyramid_intro + "<br>" +  "<center>"+chichenItzaPyramid_img+"</center>";
var chichenItzaPyramid = L.marker([20.682778,-88.569167],{icon: chichenItzaPyramid_icon}).addTo(mymap);
chichenItzaPyramid.bindPopup(chichenItzaPyramid_pop, custom_wonders_popup);

var romeColosseum_img = "<img src='./images/seven_wonders/romeColosseum.jpg' height='200px' width='300px'>";
var romeColosseum_intro = "<p>The Colosseum or Coliseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 spectators. (<a href='https://en.wikipedia.org/wiki/Colosseum' target='_blank'>Wikipedia</a>)</p>";
var romeColosseum_pop = "<h3 font-weight='bold'>Colosseum, Italy</h3>" + romeColosseum_intro + "<br>" +  "<center>"+romeColosseum_img+"</center>";
var romeColosseum = L.marker([41.890169,12.492269],{icon: romeColosseum_icon}).addTo(mymap);
romeColosseum.bindPopup(romeColosseum_pop, custom_wonders_popup);

mymap.setView([0, 0], 1);


/* insert leaftlet plug-in: autolayers */
var cities = new L.LayerGroup();
L.marker([25.144392, 121.398302]).bindPopup('This is my hometown: <br> Bali, New Taipei, Taiwan').addTo(cities);

var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
var terrain_v2 = L.tileLayer(mbUrl, {
        id: 'mapbox.mapbox-terrain-v2',
        accessToken: mapbox_access_token,
        attribution: mbAttr
    }),
    streets_v8 = L.tileLayer(mbUrl, {
        id: 'mapbox.mapbox-streets-v8',
        accessToken: mapbox_access_token,
        attribution: mbAttr
    });
var wgs84 = L.extend({}, L.CRS, {
    projection: L.extend({}, L.Projection.LonLat, {
        bounds: L.bounds([-180, -90], [180, 90])
    }),
    transformation: new L.Transformation(1 / 180, 1, -1 / 180, 0.5),
    getSize: function(zoom) {
        var b = this.projection.bounds,
            s = this.scale(zoom),
            min = this.transformation.transform(b.min, s),
            max = this.transformation.transform(b.max, s);
        return L.point(Math.abs(max.x - min.x), Math.abs(max.y - min.y));
    }
});


var baseLayers = {
    "Mapbox Terrain v2": terrain_v2,
    "Mapbox Streets v8": streets_v8
};

var overlays = {
    "Cities": cities
};

var config = {
    overlays: overlays,
    baseLayers: baseLayers,
    selectedBasemap: 'ESRI_Imagery_World_2D',
    selectedOverlays: ["ASTER Digital Elevation Model 30M", "ASTER Digital Elevation Model Color 30M", "Cities"],
    mapServers: [/*{
        "url": "http://services.arcgisonline.com/arcgis/rest/services",
        "dictionary": "http://services.arcgisonline.com/arcgis/rest/services?f=pjson",
        "tileUrl": "/MapServer/tile/{z}/{y}/{x}",
        "name": "ArcGIS Online",
        "type": "esri",
        "maxZoom": 15,
        "baseLayers": ["ESRI_Imagery_World_2D", "ESRI_StreetMap_World_2D", "NGS_Topo_US_2D"],
        "whitelist": ["ESRI_Imagery_World_2D", "ESRI_StreetMap_World_2D", "NGS_Topo_US_2D"]
    }, {
        "url": "http://geoint.nrlssc.navy.mil/nrltileserver",
        "dictionary": "http://geoint.nrlssc.navy.mil/nrltileserver/wms?REQUEST=GetCapabilities&VERSION=1.1.1&SERVICE=WMS",
        "tileUrl": "/{z}/{x}/{y}.png",
        "name": "Navy NRL",
        "type": "nrltileserver",
        "maxZoom": 16,
        "baseLayers": ["bluemarble", "Landsat7", "DTED0_GRID_COLOR1", "ETOPO1_COLOR1", "NAIP", "DRG_AUTO"],
        "blacklist": ["BlackMarble"]
    }*/]
};
var control = L.control.autolayers(config).addTo(mymap);

/* Insert leaftlet plug-in: fullscreen*/
// detect fullscreen toggling
mymap.on('enterFullscreen', function(){
  if(window.console) window.console.log('enterFullscreen');
});
mymap.on('exitFullscreen', function(){
  if(window.console) window.console.log('exitFullscreen');
});

/* Insert leaftlet plug-in: MeasureControl*/
L.Control.measureControl().addTo(mymap);

/*Insert leaftlet plug-in: MiniMap*/
var osmUrl='http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
var osm = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13});
var miniMap = new L.Control.MiniMap(osm).addTo(mymap);
