async function initMap() {
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

    const mapInitOptions = {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        mapId: 'WomanMap'
    };
    let map;
    let markers = [];

    map = new Map(document.getElementById("WomenMap"), mapInitOptions);
    womenData.forEach(woman => {
        const iconImage = womanPinIcon();
        const pin = new PinElement({
            glyph: iconImage,
            background: "#6c25be",
            borderColor: "#6c25be"
        });  
        const marker = new AdvancedMarkerElement({
            position: { lat: woman["Country Lat"], lng: woman["Country Lng"] },
            map: map,
            title: woman["Name"],
            content: pin.element
        });

        const infoWindow = new InfoWindow({
            content:  womanDetail(woman["Name"], woman["Description"], woman["Quote"], woman["Picture"])
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);

        });

        markers.push(marker);
    });
    
    // Add a marker clusterer to manage the markers.
    new markerClusterer.MarkerClusterer({ markers, map });
}
