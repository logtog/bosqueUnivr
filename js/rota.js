//Redireciomento de páginas:
			function map() { window.location.href = "maps.php"; }	
      function main() { window.location.href = "index.html"; }

			if ('geolocation' in navigator) {
				navigator.geolocation.getCurrentPosition(function(position){
					console.log(position)
				}, function(error){
					console.log(error)
				})
				const watcher = navigator.geolocation.watchPosition(function(position){
					console.log(position)
				}, function(error){
					console.log(error)
				}, { enableHighAccuracy: true, maximumAge: 30000, timeout: 30000 })
				navigator.geolocation.clearWatch(watcher)

			}else{
				alert('Ops, não foi possível pegar localização')
			}
      
			/*-------------------------------------------------------------------------*/

	var customLabel = {
       	restaurant: {
          label: 'R'
    },
    bar: {
      	label: 'B'
      }
    };

        function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(-33.863276, 151.207977),
          zoom: 5
        });
        var infoWindow = new google.maps.InfoWindow;

          // Altere isso dependendo do nome do seu arquivo PHP ou XML
          downloadUrl('resultado.php', function(data) {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
            Array.prototype.forEach.call(markers, function(markerElem) {
              var name = markerElem.getAttribute('name');
              var address = markerElem.getAttribute('address');
              var type = markerElem.getAttribute('type');
              var point = new google.maps.LatLng(
                  parseFloat(markerElem.getAttribute('lat')),
                  parseFloat(markerElem.getAttribute('lng')));

              var infowincontent = document.createElement('div');
              var strong = document.createElement('strong');
              strong.textContent = name
              infowincontent.appendChild(strong);
              infowincontent.appendChild(document.createElement('br'));

              var text = document.createElement('text');
              text.textContent = address
              infowincontent.appendChild(text);
              var icon = customLabel[type] || {};
              var marker = new google.maps.Marker({
                map: map,
                position: point,
                label: icon.label
              });
              marker.addListener('click', function() {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
              });
            });
          });
        }



      function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }

      function doNothing() {}



			