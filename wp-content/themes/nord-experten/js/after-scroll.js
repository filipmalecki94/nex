$(window).scroll(function () {
    const carousel = document.getElementById("carouselTopBanner");
    const singleBanner = document.getElementById("pictureTopBanner");
    let scroll = $(window).scrollTop();

    if (carousel) {
        let carouselHeight = carousel.offsetHeight;

        if (scroll >= carouselHeight) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");
        }
    }
    if (singleBanner) {
        let singleBannerHeight = singleBanner.offsetHeight;

        if (scroll >= singleBannerHeight) {
            $("#header").addClass("scrolled");
        } else {
            $("#header").removeClass("scrolled");
        }
    }
});
