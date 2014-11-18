/* app.js -- our application code */

"use strict";

// UW coordinates:
// lat: 47.655
// lng: -122.3080

$(document).ready(function() {
    var mapElem = document.getElementById('map');

    function createMap(elem, center, zoom) {
        var map = new google.maps.Map(elem, {
            center: center,
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }

    var center = {
        lat: 47.655,
        lng: -122.3080
    };

    createMap(mapElem, center, 14);
}); //doc ready