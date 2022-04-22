$(document).ready(function () {
    initMap();
    $('#loading').fadeOut('slow');
});
function initMap() {
    const dayOptions = {
        zoom: 17,
        center: { lat: 36.8380903730006, lng: -2.4607514064735563 },
        streetViewControl: false,
        maxZoom: 16,
        minZoom: 15,
        styles: [
            {
                featureType: 'poi',
                stylers: [
                    {
                        visibility: 'off',
                    }
                ]
            },
        ],

    }
    const nightOptions = {
        zoom: 17,
        center: { lat: 36.8380903730006, lng: -2.4607514064735563 },
        streetViewControl: false,
        maxZoom: 18,
        minZoom: 15,
        styles: [
            {
                featureType: 'poi',
                stylers: [
                    {
                        visibility: 'off',

                    }
                ]
            },
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ],

    }

    function generateMarkers(pointsMap) {
        // Se crean marcadores de cada punto
        for (var i = 0; i < pointsMap.length; i++) {
            new google.maps.Marker({
                position: pointsMap[i],
                label: { text: pointsMap[i].description, color: "#ffffff" },
                map: map,
                //icon: "images/markerResize.png",
            });
        }
    }

    //detectar si el sistema tiene modo oscuro, tnato en windows, como macos, como linux, como android, etc
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const map = new google.maps.Map(document.getElementById('map'), isDarkMode ? nightOptions : dayOptions);

    //Array para los puntos, deberan ser pasados a la funcion de randomizar y despues ser pasados como obejtos circle de maps
    const markers = [
        {
            "lat": 36.8403461,
            "lng": - 2.4683977,
            "description": "A"
        },
        {
            "lat": 36.838592,
            "lng": - 2.467101,
            "description": "S"
        },
        {
            "lat": 36.8389123,
            "lng": - 2.4679658,
            "description": "K"
        },
        {
            "lat": 36.8393413,
            "lng": - 2.4690482,
            "description": "N"
        },
        {
            "lat": 36.839972,
            "lng": - 2.465078,
            "description": "O"
        },
        {
            "lat": 36.837707,
            "lng": - 2.466765,
            "description": "R"
        },
        {
            "lat": 36.8371766,
            "lng": - 2.464134,
            "description": "E"
        },
        {
            "lat": 36.8371265,
            "lng": - 2.4648705,
            "description": "D"
        },
        {
            "lat": 36.8359531,
            "lng": - 2.4700537,
            "description": "G"
        },
        {
            "lat": 36.8346513,
            "lng": - 2.4673469,
            "description": "F"
        },
        {
            "lat": 36.8337794,
            "lng": - 2.4654702,
            "description": "L"
        },
        {
            "lat": 36.8323273,
            "lng": - 2.464994,
            "description": "B"
        },
        {
            "lat": 36.8348762,
            "lng": - 2.4579586,
            "description": "I"
        },
        {
            "lat": 36.8369768,
            "lng": - 2.4593192,
            "description": "Q"
        },
        {
            "lat": 6.8420943,
            "lng": - 2.4651482,
            "description": "M"
        },
        {
            "lat": 36.8442162,
            "lng": - 2.46557,
            "description": "C"
        },
        {
            "lat": 36.8416706,
            "lng": - 2.4661463,
            "description": "J"
        },
        {
            "lat": 36.839802,
            "lng": - 2.467844,
            "description": "P"
        },
        {
            "lat": 36.842926,
            "lng": - 2.457797,
            "description": "H"
        },
        {
            "lat": 36.839842,
            "lng": - 2.470082,
            "description": "T"
        }
    ];
    //función que lee un array, y se cambian los campos del array, lat y lng con una variación de 0,025% pero respetando la estructura del array (lat, lng, description)
    function generateRandomPoints(array) {
        for (var i = 0; i < array.length; i++) {
            array[i].lat = array[i].lat + (Math.random() * 0.00025);
            array[i].lng = array[i].lng + (Math.random() * 0.00025);
        }
        return array;
    }
    //generateMarkers(generateRandomPoints(generateRandomPoints2(markers)));
    generateMarkers(markers)




    //window.gMap = map;


    // Zoom y mapa centrado automáticamente
    /*var lngs = stations.map(function(station) { return station.lng; });
    var lats = stations.map(function(station) { return station.lat; });

    map.fitBounds({
        west: Math.min.apply(null, lngs),
        east: Math.max.apply(null, lngs),
        north: Math.min.apply(null, lats),
        south: Math.max.apply(null, lats),
    });*/

    /* 
    * Marcadores
    *
    new google.maps.Marker({
        position: ubicacionCercana,
        icon: svgMarker,
        map: map,
        title: ubicacionCercana.name
    }); */
}