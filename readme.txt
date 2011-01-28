Note: To add a second map to any post/post or even blog stream
(i.e. any time two are on the same rendered page)
you need to set new ids. Sorry.
In future versions, I will remove this deficiency.

Usage examples:

As a shortcode:

[include_map location="Berlin"]
[include_map location="Berlin" disabledefaultui="false"]
[include_map location="Berlin" width="500" height="1000"]
[include_map location="Berlin" width="500" height="1000" zoom="10"]
[include_map location="Berlin" mapcanvasid="mychoiceofid" maplinkid="idofthelink"]

As a php function:

echo include_google_v3_map( array('location' => 'Berlin') );
echo include_google_v3_map( array('location' => 'Berlin', 'disabledefaultui'=> 'false') );
echo include_google_v3_map( array('location' => 'Berlin', 'width' => '500', 'height' => '1000') );
echo include_google_v3_map( array('location' => 'Berlin', 'width' => '500', 'height' => '1000', 'zoom' => 10) );
echo include_google_v3_map( array('location' => 'Berlin', 'mapcanvasid' => 'mychoiceofid', 'maplinkid' => 'idofthelink') );

Defaults:

zoom : 14
width : 500
height : 300
disabledefaultui : true

Planned future enhancements:

- The bug with the IDs I mentioned above? That first.
- ability to state a custom field as the source for the location info
- add more access to the Google Maps V3 api. very limited right now.
- requests?