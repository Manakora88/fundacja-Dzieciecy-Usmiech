$(document).ready(function() {

    //kontakt - google maps
            var uluru = {lat: 51.958828, lng: 20.144958};

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: uluru
            });

            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });

            var infowindow = new google.maps.InfoWindow({
                content: "<p>Fundacja 'Dziecięcy Uśmiech'</br>ul. Jagiellońska 30</p>"
            });

            marker.addListener("click", function() {
                infowindow.open(map, marker);
            });

});
