<?php

if (!defined('ABSPATH')) {
    exit;
}

$connect = mysqli_connect("localhost", "admin", "techietribe", "geodata");
$sql = "SELECT * FROM geojson";
$result = mysqli_query($connect, $sql);
$json_array = array();
while ($row = mysqli_fetch_assoc($result))
{
    $sample = array();
    $sample[type] = $row['type'];
    $sample[geometry] = array("type" => $row['geometry/type'], "coordinates" => [(float)$row['geometry/coordinates/0'],(float)$row['geometry/coordinates/1']]);
    $sample[properties][description] = $row['properties/description'];
    $json_array[] = $sample;

}

$geojson = array("type" => 'FeatureCollection', "features" => $json_array);

$geojson = json_encode($geojson, JSON_UNESCAPED_SLASHES);

$geojson = preg_replace('/"([^"]+)"\s*:\s*/', '$1:', $geojson);

echo $geojson;
?>

<!DOCTYPE html>
<html>
<head>
<!--    <meta charset="utf-8">-->

    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.49.0/mapbox-gl.css' rel='stylesheet' />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>

    <link rel="stylesheet" href="css/style.css">




</head>
<body>

<div class="container">
    <div id="map" class="map_1"></div>
</div>

<script type="text/javascript">

    var json = <?php echo $geojson ?>;

    mapboxgl.accessToken = 'pk.eyJ1IjoidHd1dTAwMTIiLCJhIjoiY2psM2R1NmxmMHR0NDNrbjNqejgzbTQwcCJ9.lDLXUSOFO5TNY53MBsf60w';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/twuu0012/cjlxtorel4sdu2rp4wrmh3rsh',
        center: [144.936447, -36.962066],
        zoom: 6
    });
    map.on('load', () => {
        map.loadImage('https://upload.wikimedia.org/wikipedia/commons/3/3e/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Farm_%E2%80%93_Nature_%E2%80%93_dark.png', function (error, image) {
            if (error) throw error;
            map.addImage('map_icon', image);
            map.addSource('pointsSource', {
                type: 'geojson',
                data: json
            });
            map.addLayer({
                id: 'places',
                source: 'pointsSource',
                type: 'symbol',
                layout: {
                    'icon-image': 'map_icon',
                    'icon-allow-overlap': true,

                }

            })
        });
    });


    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });

</script>

</body>
</html>
