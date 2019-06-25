// --------------------------------------------------------------------------
// DEFINE GLOBAL VARIABLES
// mapbox access token
var accessToken = 'pk.eyJ1Ijoia2V0Y2hlbTIiLCJhIjoiY2pjYzQ5ZmFpMGJnbTM0bW01ZjE5Z2RiaiJ9.phQGyL1FqTJ-UlQuD_UFpg';
mapboxgl.accessToken = accessToken;

// create the map object and set the center and zoom
// var map = L.map('map', {
//     center: [44.75, -89.65],
//     zoom: 7,
//     hash: true,
//     transformRequest: (url, resourceType)=> {
//       if(resourceType === 'Source' && url.startsWith('http://localhost')) {
//         return {
//          url: url.replace('http', 'https'),
//          headers: { 'my-custom-header': true},
//          credentials: 'include'  // Include cookies for cross-origin requests
//        }
//       }
//     }
// });

var map = new mapboxgl.Map({
    container: 'map',
    center: [44.75, -89.65],
    zoom: 7,
    // style: 'mapbox://styles/ketchem2/cjxaofh553ssx1cpdh6nkjqo3',
    style: 'mapbox://styles/mapbox/dark-v9',
    hash: true //,
    // transformRequest: (url, resourceType)=> {
    //   if(resourceType === 'Source' && url.startsWith('http://localhost')) {
    //     return {
    //      url: url.replace('http', 'https'),
    //      headers: { 'my-custom-header': true},
    //      credentials: 'include'  // Include cookies for cross-origin requests
    //    }
    //   }
    // }
  });