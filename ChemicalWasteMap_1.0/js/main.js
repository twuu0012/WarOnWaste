


mapboxgl.accessToken = 'pk.eyJ1IjoidHd1dTAwMTIiLCJhIjoiY2psM2R1NmxmMHR0NDNrbjNqejgzbTQwcCJ9.lDLXUSOFO5TNY53MBsf60w';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/twuu0012/cjlxtorel4sdu2rp4wrmh3rsh',
    center: [144.936447, -36.962066],
    zoom: 6
});
var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [145.0449, -37.7563]
        },
        properties: {
            description: '<strong>Banyule Waste Recover Centre<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: 307-325 Waterdale Road, Bellfield (corner Banksia Street); Phone: 03 9490 4222',
            icon: "star"
        }
    },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [144.853410, -37.713860]
            },
            properties: {
                description: '<strong>Brimbank City Council Depot<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Stadium Drive, Keilor Park; Phone: 03 9249 4000',
                icon: "star"
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [144.985590, -37.717740]
            },
            properties: {
                description: '<strong>Darebin Resource Recovery Centre<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Kurnai Avenue, Reservoir (off Henty Street); Phone: 03 8470 8888',
                icon: "star"
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [144.603370, -37.699910]
            },
            properties: {
                description: '<strong>Melton Recycling Facility<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: 33-41 Ferris Road, Melton; Phone: 03 9743 1983',
                icon: "star"
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [145.065970,-38.234820]
            },
            properties: {
                description: '<strong>Mornington Waste Disposal Centre<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: 134 Watt Road, Mornington; Phone: 1300 850 600',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [145.141800,-37.901200]
            },
            properties: {
                title: 'Monash Waste Transfer & Recycling Station',
                description: '<strong>Monash Waste Transfer & Recycling Station<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: 380 Ferntree Gully Rd, Notting Hill; Phone: 03 9518 3767',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [145.270570, -38.115040]
            },
            properties: {
                title: 'City of Casey Transfer and Recycling Centre',
                description: '<strong>City of Casey Transfer and Recycling Centre<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Cemetery Road, Cranbourne; Phone: 03 09705 5200',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [143.818020,-37.558990]
            },
            properties: {
                title: 'Ballarat Transfer Station',
                description: '<strong>Ballarat Transfer Station<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Gillies Street South, Ballarat; Phone: 03 5334 2621',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [144.244340, -36.725980]
            },
            properties: {
                title: 'Eaglehawk Eco Centre',
                description: '<strong>Eaglehawk Eco Centre<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: 189 Upper California Gully Road, Eaglehawk; Phone: 03 5546 3467',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [144.349320, -38.114930]
            },
            properties: {
                title: 'Geelong Resource Recovery Centre',
                description: '<strong>Geelong Resource Recovery Centre<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: 100 Douro Street, North Geelong; Phone: 03 5227 0270',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [146.423470, -38.218480]
            },
            properties: {
                title: 'Morwell Transfer Station',
                description: '<strong>Morwell Transfer Station<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Porters Street, Morwell; Phone: 1300 367 700',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [145.376270, -36.347540]
            },
            properties: {
                title: 'Shepparton Transfer Station',
                description: '<strong>Shepparton Transfer Station<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Wanganui Road, Shepparton; Phone: 03 5832 9700',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [144.603370,-37.699910]
            },
            properties: {
                title: 'Wodonga - Kane Road Waste Transfer Station',
                description: '<strong>Wodonga - Kane Road Waste Transfer Station<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Kane Road, Wodonga; Phone: 02 6022 9300',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [145.132770,-38.123870]
            },
            properties: {
                title: 'Frankston City Council',
                description: '<strong>Frankston City Council<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Council Operations Depot, 3 Buna Ave; Collection Time: 8.00am-4.00pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [142.459440,-38.341520]
            },
            properties: {
                title: 'Warrnambool City Council/Shire of Moyne',
                description: '<strong>Warrnambool City Council/Shire of Moyne<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Livestock Exchange (Saleyards), Warrnambool-Caramut Rd; Collection Time: 8.00am – 4.00pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [144.943860,-37.828990]
            },
            properties: {
                title: 'Port Phillip Council',
                description: '<strong>Port Phillip Council<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Port Phillip Resource Recovery Centre, Corner White St and Boundary St; Collection Time: 8.00am – 4.00pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [143.818020,-37.558990]
            },
            properties: {
                title: 'Ballarat City Council',
                description: '<strong>Ballarat City Council<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Ballarat Transfer Station, Gillies St South; Collection Time: 8.00am – 4.00pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [144.766630,-36.131130]
            },
            properties: {
                title: 'Golden Plains Shire Council',
                description: '<strong>Golden Plains Shire Council<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Carpark at rear of Council Offices, Enter off Moore St; Collection Time: 8.00am – 11.00am',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [145.023410,-37.646840]
            },
            properties: {
                title: 'City of Whittlesea',
                description: '<strong>City of Whittlesea<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Council Operations Depot, 68-96 Houston St; Collection Time: 8.00am – 4.00pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [146.306760,-36.365770]
            },
            properties: {
                title: 'Rural City of Wangaratta',
                description: '<strong>Rural City of Wangaratta<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Council Operations Depot, Newman St; Collection Time: 8.00am – 11.00am',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [146.679210,-36.373080]
            },
            properties: {
                title: 'Indigo Shire Council',
                description: '<strong>Indigo Shire Council<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Shire Depot, Radcliffe Rd; Collection Time: 1.30pm-4.30 pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [147.422750,-36.332010]
            },
            properties: {
                title: 'Towong Shire Council',
                description: '<strong>Towong Shire Council<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Shire Depot, Wagara Rd; Collection Time: 1.30pm-4.00pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [144.717510,-37.875520]
            },
            properties: {
                title: 'Wyndham City Council',
                description: '<strong>Wyndham City Council<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Municipal Depot (Pound and Nursery), Old Geelong Rd; Collection Time: 8.00am – 4.00pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [147.619770,-37.811430]
            },
            properties: {
                title: 'East Gippsland Shire',
                description: '<strong>East Gippsland Shire<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Howitt Park, Main St; Collection Time: 8.00am – 11.00am',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [145.941090,-38.154440]
            },
            properties: {
                title: 'Baw Baw Shire',
                description: '<strong>Baw Baw Shire<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Council Operations Depot, 188 Normanby St; Collection Time: 2.00pm-5.00pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [145.178400,-37.804560]
            },
            properties: {
                title: 'City of Greater Dandenong',
                description: '<strong>City of Greater Dandenong<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Car Park, Rear of Town Hall, 395-397 Springvale Rd; Collection Time: 8.00am – 4.00pm',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [143.550510,-35.326790]
            },
            properties: {
                title: 'Swan Hill Shire Council',
                description: '<strong>Swan Hill Shire Council<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Council Depot, 130 Karinie St; Collection Time: 8.00am – 11.00am',
                icon: "star"
            }
        },{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [143.959190,-35.664480]
            },
            properties: {
                title: 'Gannawarra Shire Council',
                description: '<strong>Gannawarra Shire Council<strong><p><a href=\\"http://www.mtpleasantdc.com/makeitmtpleasant\\" target=\\"_blank\\" title=\\"Opens in a new window\\"></a>Address: Transfer Station, Kerang-Murrabit Rd; Collection Time: 1.30pm-4.30pm',
                icon: "star"
            }
        }
    ]
};

// // add markers to map
// geojson.features.forEach(function(marker) {
//
//     // create a HTML element for each feature
//     var el = document.createElement('div');
//     el.className = 'marker';
//
//     // make a marker for each feature and add to the map
//     new mapboxgl.Marker(el)
//         .setLngLat(marker.geometry.coordinates)
//         .addTo(map);
// });

map.on('load', () => {
    map.loadImage('https://upload.wikimedia.org/wikipedia/commons/3/3e/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Farm_%E2%80%93_Nature_%E2%80%93_dark.png', function (error, image) {
        if (error) throw error;
        map.addImage('map_icon', image);
        map.addSource('pointsSource', {
            type: 'geojson',
            data: geojson
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

