<?php
/*
Plugin Name: Include Google Maps V3
Plugin URI: http://tif.ca/include-google-map-v3
Description: This plug-in allows you to add one or more maps to your page/post using shortcodes.
Version: 0.1
Author: Tiffany Conroy
Author URI: http://tif.ca/
*/

// Add the Google Maps V3 API to header
function include_gmaps_in_header() { 
  echo '<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>';
}
add_action('wp_head', 'include_gmaps_in_header');

// Main function to generate google map
function include_google_v3_map($attr) {
  
  static $instance = 0;
  $instance++;

  $path_to_plugin = WP_PLUGIN_URL.'/'.str_replace(basename( __FILE__),"",plugin_basename(__FILE__));

  // Default attributes
  extract(shortcode_atts(
            array(  
                'zoom' => 14,
                'width' => '500px',
                'height' => '300px',
                'mapcanvasid' => 'map_canvas',
                'maplinkid' => 'map_link',
                'maptype' => 'ROADMAP',
                'containerid' => 'map_details',
                'location' => '',
                'disabledefaultui' => 'true',
                'linktext' => 'Open map in Google'
              ), $attr));

  if ($instance > 1) {
    $containerid .= '-'.$instance;
    $mapcanvasid .= '-'.$instance;
    $maplinkid   .= '-'.$instance;
  }

  $options = array(  
                'zoom' =>  (int) $zoom,
                'mapCanvasId' => $mapcanvasid,
                'mapLinkId' => $maplinkid,
                'mapType' => $maptype,
                'location' => $location,
                'disableDefaultUI' => ($disabledefaultui == 'true' ? true : false )
              );

  $output = '
  <div id="'.$containerid.'" class="map_details">
    <div id="'.$mapcanvasid.'" class="map_canvas" style="width:'.$width.'; height:'.$height.';"></div>
    <p>
      <a id="'.$maplinkid.'" class="map_link" target="_blank">'.$linktext.'</a>
    </p>
  </div>
  <script src="'.$path_to_plugin.'script.js"></script>
  <script> include_google_v3_map('.json_encode($options).'); </script>
  ';

  return $output;

}
add_shortcode('include_map', 'include_google_v3_map');