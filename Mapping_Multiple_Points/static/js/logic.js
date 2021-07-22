// Add console.log to check to see if our code is working.
console.log("working");

// 13.2.4
// Create the map object with a center and zoom level.In the code block above:

// We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7)
//  and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

let map = L.map('mapid').setView([40.7, -94.5], 4);
// Get data from cities.js

let cityData = cities;

  // Loop through the cities array and create one marker for each city.
  cityData.forEach(function(city) {
    console.log(city)
    // L.marker(city.location)skill drill 13.4.2
    L.circleMarker(city.location, {
      color:'orange',
      lineweight:4,
      radius: city.population/200000
      })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
  });
  
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);