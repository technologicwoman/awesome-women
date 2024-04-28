const carousel = (classItem, womanData) => {
    // add quote to carousel 
    womanData.forEach((woman)=>{
        const womanPresenterInstance = new WomanPresenter(woman);
        $("#quotes-carousel").append(womanPresenterInstance.womanQuote());

    })
    const instance = $(classItem).carousel({
        fullWidth: true,
        numVisible: 1
    });
    
    const transitionInterval = 6000;
    setInterval(() => {
        instance.carousel('next');
    }, transitionInterval);    
};

$(() => {
    let womanData = [];
    JsonDatasetRepository.then((data) => {
        womanData = data;
        initMap(womanData);
        const sidenavElement = $('.sidenav');
        sidenavElement.sidenav();
        sidenavElement.sidenav('open');
        $('select').formSelect();
        $('.modal').modal();
        $('.dropdown-trigger').dropdown();
        carousel('.carousel', womanData);
        // TODO: organize woman controller.
        // add event for expertise-option class to filter womanData by their data-attribute and repaint the map.
        $('.expertise-option').on('click', function() {
            const expertise = $(this).data('expert');
            let filteredwomanData = womanData;
            if (expertise) {
                filteredwomanData = womanData.filter(woman => woman.area_of_expertise === expertise);
            }
            initMap(filteredwomanData);
            
        });
    })
    
});