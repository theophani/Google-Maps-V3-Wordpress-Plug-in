(function () {

  // Uses Google Maps JavaScript API V3
  // http://code.google.com/apis/maps/documentation/javascript/

  var showMap = function (options) {
    var useFullAPI = options.useFullAPI || false; // allows direct access to full V3 api

    // Can pass either an object, or just the location as a string
    var location = options.location || options || alert('No location provided for map');
    var zoom = options.zoom || 13;
    var disableDefaultUI = (options.disableDefaultUI === false ? false : true);
    var mapTypeId = options.mapTypeId || 'HYBRID'; // other: SATELLITE, ROADMAP, TERRAIN
        mapTypeId = google.maps.MapTypeId[mapTypeId];

    var renderMap = function (lat, lng) {
      var map;
      var latlng = new google.maps.LatLng(lat,lng);
      var mapOptions = (function(){
        if (useFullAPI) {
          return options.mapOptions;
        } else {
          return {
            zoom : zoom,
            center : latlng,
            disableDefaultUI : disableDefaultUI,
            mapTypeId : mapTypeId
          };
        }
      }());
      // defining this variable renders the map to "map_canvas"
      var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    };
    
    if (useFullAPI) {
        renderMap();
    } else {
      $.getJSON("http://maps.google.com/maps/geo?q="+location+"&sensor=false&output=json&callback=?",
        function(data, textStatus){
          var coords = data.Placemark[0].Point.coordinates;
          console.log(coords);
          renderMap(coords[1],coords[0]);
        });
    }
    var uri = 'http://maps.google.com/maps?q=' + location;
    document.getElementById('map_link').href = uri;
  };
  
  var options = {
    location: 'Whistler,%20BC',
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
