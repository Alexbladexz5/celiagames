$(document).ready(function () {
    initMap();
    $('#loading').fadeOut('slow');
});

function initMap() {
    const options = {
        zoom: 17,
        center: { lat: 36.8380903730006, lng: -2.4607514064735563 },
        streetViewControl: false,
        styles: [
            {
                featureType: 'poi',
                stylers: [
                    {
                        visibility: 'off',
                    }
                ]
            }
        ],
        maxZoom: 16,

    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: { lat: 36.8380903730006, lng: -2.4607514064735563 },
        radius: 100,
    });

    const cityCircle2 = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: { lat: 36.83829937579616, lng: -2.463369915991792 },
        radius: 50,
    });
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