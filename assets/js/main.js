// --------------------------------------------------------------------------
// DEFINE GLOBAL VARIABLES
// mapbox access token
var accessToken = 'pk.eyJ1Ijoia2V0Y2hlbTIiLCJhIjoiY2pjYzQ5ZmFpMGJnbTM0bW01ZjE5Z2RiaiJ9.phQGyL1FqTJ-UlQuD_UFpg';
mapboxgl.accessToken = accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ketchem2/cjxaofh553ssx1cpdh6nkjqo3'
});
