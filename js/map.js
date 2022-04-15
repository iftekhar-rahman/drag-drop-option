jQuery(document).ready(function($) {

    // map script js

    var myCenter = new google.maps.LatLng(52.526564, -0.237269);

    function initialize() {
        var mapProp = {
            center: myCenter,
            scrollwheel: false,
            zoom: 15,
            zoomControl: false,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
            {elementType: 'geometry', stylers: [{color: '#EAEAEA'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#dddddd'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#848484'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#DFDFDF'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#414141'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#C4C4C4'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6C6C6C'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#7D7D7D'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#dddddd'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#dddddd'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#dddddd'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#D9D9D9'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#CCCCCC'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#D1D1D1'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#929292'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#CCCCCC'}]
            }
          ]

        };

        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
            icon: 'assets/contact-img/map-marker2.png'

        });
        marker.setMap(map);

    }

    google.maps.event.addDomListener(window, 'load', initialize);



});
