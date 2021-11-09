$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 500,
        dots: false,
        navText: ['<div>', '</div>'],
        responsive: {
            320: {
                items: 1,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1000,
            },
            576: {
                items: 2,
                nav: true,
                autoplay: true,
                loop: true,
                autoplayTimeout: 1000,
            },
            992: {
                items: 5,
                nav: true,
                autoplay: true,
                loop: true,
                autoplayTimeout: 1000,
            }
        }
    });
});
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > 300) {
            $('.scroll__top').fadeIn();
        } else {
            $('.scroll__top').fadeOut();
        }
    })

    $('.scroll__top').click(function() {
        $('html,body').animate({
            scrollTop: 0,
        }, 1000);
    })
})