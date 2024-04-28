async function initMap(womanData) {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

    const mapInitOptions = {
        center: { lat: 0, lng: 0 },
        zoom: 2,
        mapId: 'WomanMap'
    };
    let map;
    let markers = [];

    map = new Map(document.getElementById("WomenMap"), mapInitOptions);
    
    womanData.forEach(woman => {
        const womanPresenterInstance = new WomanPresenter(woman);
        const iconImage = womanPresenterInstance.pinIcon();
        const pin = new PinElement({
            glyph: iconImage,
            background: "#6c25be",
            borderColor: "#6c25be"
        });  
        const marker = new AdvancedMarkerElement({
            position: { 
                lat: womanPresenterInstance.data.birth_city.lat, 
                lng: womanPresenterInstance.data.birth_city.ln 
            },
            map: map,
            title: womanPresenterInstance.data.name,
            content: pin.element
        });
        
        marker.addListener("click", () => {
            womanPresenterInstance.showWomanDetail();
        });

        markers.push(marker);
    });
    
    // Add a marker clusterer to manage the markers.
    new markerClusterer.MarkerClusterer({ markers, map });

}

