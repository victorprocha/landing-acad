var map = L.map('map').setView([-21.762354, -41.3071086,17], 13);

var marker = L.marker([-21.762354, -41.3071086,17]).addTo(map);

marker.bindPopup("<b>Estamos aqui!</b>").openPopup();


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);