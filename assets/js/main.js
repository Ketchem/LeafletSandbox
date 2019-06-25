// --------------------------------------------------------------------------
// DEFINE GLOBAL VARIABLES
// mapbox access token
var accessToken = 'pk.eyJ1Ijoia2V0Y2hlbTIiLCJhIjoiY2pjYzQ5ZmFpMGJnbTM0bW01ZjE5Z2RiaiJ9.phQGyL1FqTJ-UlQuD_UFpg';

//  mapbox tiles
// https://api.mapbox.com/styles/v1/ketchem2/cjxaofh553ssx1cpdh6nkjqo3.html?title=true&access_token=pk.eyJ1Ijoia2V0Y2hlbTIiLCJhIjoiY2pjYzQ5ZmFpMGJnbTM0bW01ZjE5Z2RiaiJ9.phQGyL1FqTJ-UlQuD_UFpg#6.1/44.622012/-89.976147/0
// https://api.mapbox.com/styles/v1/ketchem2/cjxaofh553ssx1cpdh6nkjqo3.html?fresh=true&title=true&access_token=pk.eyJ1Ijoia2V0Y2hlbTIiLCJhIjoiY2pjYzQ5ZmFpMGJnbTM0bW01ZjE5Z2RiaiJ9.phQGyL1FqTJ-UlQuD_UFpg#6.1/44.622012/-89.976147/0
// var mapboxTiles = L.tileLayer('https://api.mapbox.com/styles/v1/ketchem2/cjxaofh553ssx1cpdh6nkjqo3.html?access_token=' + accessToken + '#6.1/44.622012/-89.976147/0', {
//     attribution: '<a href="https://www.mapbox.com/feedback/">Mapbox</a> <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// });

var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + accessToken, {
    attribution: '<a href="https://www.mapbox.com/feedback/">Mapbox</a> <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// create the map object and set the center and zoom
var map = L.map('map', {
    center: [44.75, -89.65],
    zoom: 7
});
