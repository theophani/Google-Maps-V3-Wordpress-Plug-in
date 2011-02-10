Note: To style the content, use the classes, not the IDs.
The IDs can change, depending on how many maps are
including on one page.

Usage examples:

As a shortcode:

[include_map location="Berlin"]
[include_map location="Berlin" linktext="See Berlin on a Google Map"]
[include_map location="Berlin" disabledefaultui="false"]
[include_map location="Berlin" width="500px" height="1000px"]
[include_map location="Berlin" width="500px" height="1000px" zoom="10"]
[include_map location="Berlin" mapcanvasid="mychoiceofid" maplinkid="idofthelink"]

As a php function:

echo include_google_v3_map( array('location' => 'Berlin') );
echo include_google_v3_map( array('location' => 'Berlin', 'linktext' => 'See Berlin on a Google Map') );
echo include_google_v3_map( array('location' => 'Berlin', 'disabledefaultui'=> 'false') );
echo include_google_v3_map( array('location' => 'Berlin', 'width' => '500px', 'height' => '1000px') );
echo include_google_v3_map( array('location' => 'Berlin', 'width' => '500px', 'height' => '1000px', 'zoom' => 10) );
echo include_google_v3_map( array('location' => 'Berlin', 'mapcanvasid' => 'mychoiceofid', 'maplinkid' => 'idofthelink') );

Defaults:

zoom : 14
width : 500px
height : 300px
disabledefaultui : true
linktext : 'Open map in Google'

Planned future enhancements:
- add more access to the Google Maps V3 api. very limited right now.
- requests?