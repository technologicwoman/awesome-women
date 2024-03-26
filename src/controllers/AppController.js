const carousel = (classItem) => {
    const instance = $(classItem).carousel({
        fullWidth: true,
        numVisible: 1
    });
    setInterval(() => {
        instance.carousel('next');
    }, 3000);
};

$(() => {
    initMap();
    const sidenavElement = $('.sidenav');
    sidenavElement.sidenav();
    $('select').formSelect();
    carousel('.carousel');
});