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

  $path_to_plugin = WP_PLUGIN_URL.'/'.str_replace(basename( __FILE__),"",plugin_basename(__FILE__));

  // Default attributes
  extract(shortcode_atts(
            array(  
                'zoom' => 14,
                'width' => '500',
                'height' => '300',
                'mapcanvasid' => 'map_canvas',
                'maplinkid' => 'map_link',
                'maptype' => 'ROADMAP',
                'containerid' => 'map_details',
                'location' => '',
                'disabledefaultui' => 'true'
              ), $attr));

  $options = array(  
                'zoom' =>  (int) $zoom,
                'mapCanvasId' => $mapcanvasid,
                'mapLinkId' => $maplinkid,
                'mapType' => $maptype,
                'location' => $location,
                'disableDefaultUI' => ($disabledefaultui == 'true' ? true : false )
              );

  $output = '
  <div id="'.$containerid.'">
    <div id="'.$mapcanvasid.'" style="width:'.$width.'px; height:'.$height.'px;"></div>
    <p> 
      <a id="'.$maplinkid.'" target="_blank">Open map in Google</a> 
    </p>
  </div>
  <script src="'.$path_to_plugin.'script.js"></script>
  <script> include_google_v3_map('.json_encode($options).'); </script>
  ';

  return $output;

}
add_shortcode('include_map', 'include_google_v3_map');