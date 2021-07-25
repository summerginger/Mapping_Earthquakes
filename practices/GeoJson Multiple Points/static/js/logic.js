// Add console.log to check to see if our code is working.
console.log("working");

// 13.5.2
// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([37.5, -122.5], 10);
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);
// // Add GeoJSON data.
// Grabbing our GeoJSON data.
// Accessing the airport GeoJSON URL
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
streets.addTo(map);
let airportData = "https://raw.githubusercontent.com/summerginger/Mapping_Earthquakes/main/majorAirports.json";
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//   .bindPopup("<h2>" + feature.properties.name + ", " + feature.properties.city + "</h2> <hr> <h3>" + feature.properties.country+ "</h3>")
// }
// }).addTo(map);
// Grabbing our GeoJSON data.

d3.json(airportData).then(function(data) {
  console.log(data)
// Creating a GeoJSON layer with the retrieved data.
// .bindPopup("<h2>Airport code: " + features.properties.faa + "</h2> <hr> <h3>Airport name : " + features.properties.name+ "</h3>");
//    }

L.geoJson(data, {
  onEachFeature: function(feature, layer) {
    console.log(layer)
    layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name : " + feature.properties.name+ "</h3>");
   }
}).addTo(map)
});
