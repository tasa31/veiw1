const { default: MapView } = require("react-native-maps");

// Initialize and add the map
function initMap() {
    const location = { lat: 32.0875, lng: 20.0818 }; // موقع افتراضي في ليبيا
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
  // Load the Google Maps API script dynamically
  function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);
  }
  
  document.addEventListener('DOMContentLoaded', loadGoogleMaps);
