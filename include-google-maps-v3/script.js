/* Use: */
//var options = {
//  location: 'Whistler, BC',
//  zoom: 14
//};
//show_google_v3_map(options);

/* Can also use the simple version: */
//var location = 'Whistler,%20BC';
//show_google_v3_map(location);

(function () {

  // Uses Google Maps JavaScript API V3
  // http://code.google.com/apis/maps/documentation/javascript/
  
  if ( window.include_google_v3_map === undefined ) {
    
    window.include_google_v3_map = function (options) {
      // Can pass either an object, or just the location as a string
      var location = options.location || options || alert('No location provided for map');
      var zoom = options.zoom || 14;
      var disableDefaultUI = (options.disableDefaultUI === false ? false : true);
      var mapType = options.mapType || 'HYBRID'; // other: SATELLITE, ROADMAP, TERRAIN
      var mapTypeId = google.maps.MapTypeId[mapType];
      var mapCanvasId = options.mapCanvasId || 'map_canvas';
      var mapLinkId = options.mapLinkId || 'map_link';
  
      var renderMap = function (latlng) {
        var mapOptions = {
              zoom : zoom,
              center : latlng,
              disableDefaultUI : disableDefaultUI,
              mapTypeId : mapTypeId
            };
        // renders the map to "map_canvas"
        var map = new google.maps.Map(document.getElementById(mapCanvasId), mapOptions);
      };
      
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { address: location }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          renderMap(results[0].geometry.location);
        } else {
          alert("Could not locate " + location);
        }
      });
  
      var uri = 'http://maps.google.com/maps?q=' + location;
      document.getElementById(mapLinkId).href = uri;
    };
  
  }

}());