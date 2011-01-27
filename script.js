(function () {

  // Uses Google Maps JavaScript API V3
  // http://code.google.com/apis/maps/documentation/javascript/

  var showMap = function (options) {
    // Can pass either an object, or just the location as a string
    var location = options.location || options || alert('No location provided for map');
    var zoom = options.zoom || 14;
    var disableDefaultUI = (options.disableDefaultUI === false ? false : true);
    var mapType = options.mapType || 'HYBRID'; // other: SATELLITE, ROADMAP, TERRAIN
    var mapTypeId = google.maps.MapTypeId[mapType];

    var renderMap = function (latlng) {
      var mapOptions = {
            zoom : zoom,
            center : latlng,
            disableDefaultUI : disableDefaultUI,
            mapTypeId : mapTypeId
          };
      // renders the map to "map_canvas"
      var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
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
    document.getElementById('map_link').href = uri;
  };
  
  var options = {
    location: 'Whistler, BC',
    zoom: 10
  };
  showMap(options);

  // Can also use the full API:
  //var latlng = new google.maps.LatLng(43.259587,-81.140653);
  //var options = {
  //  useFullAPI: true,
  //  mapOptions : {
  //          zoom : 15,
  //          center: latlng,
  //          disableDefaultUI : false,
  //          mapTypeId : google.maps.MapTypeId.ROADMAP
  //        }
  //  };
  //showMap(options);

  // Can also use the simple version:
  //var location = 'Whistler,%20BC';
  //showMap(location);

}());
