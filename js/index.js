$(window).on('load', function() {
    setTimeout(function() {
        $('#firstSlideImage').css('transform','scale(1)');
    }, 300);

    setTimeout(function() {
        $('#firstSlideText').css('opacity','1');
        $('#firstSlideText').css('transform','translate(-50%,-50%)');
    }, 300);

    $('.mainMask').addClass("hide");
    $('#firstSlideImage').animate({ opacity: 1 }, 600);
    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 9000,
        dots: false,
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: 'ease-in-out'
    });
});

/* header scroll show and hide */
$(window).scroll(function() {
    if ($(this).scrollTop() > 476) {
        $('header').addClass("show");
    } else {
        $('header').removeClass("show");
    }
});

/* shopping button change color on scroll */
$(window).scroll(function() {
    if ($(this).scrollTop() > 576) {
        $('.shoppingButton').addClass("dark");
    } else {
        $('.shoppingButton').removeClass("dark");
    }
});

/* shopping button hide when reaching bottom */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1300) {
        $('.shoppingButton').addClass("hide");
    } else {
        $('.shoppingButton').removeClass("hide");
    }
});

/* intro image show and hide */
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.intro').addClass("show");
    } else {
        $('.intro').removeClass("show");
    }
});

/* intro text show and hide */
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.rightSection').addClass("show");
    } else {
        $('.rightSection').removeClass("show");
    }
});

/* news show and hide */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1050) {
        $('.news').addClass("show");
    } else {
        $('.news').removeClass("show");
    }
});

/* lower banner show and hide */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1300) {
        $('.lowerBanner').addClass("show");
    } else {
        $('.lowerBanner').removeClass("show");
    }
});

/* footer show and hide */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1900) {
        $('footer').addClass("show");
    } else {
        $('footer').removeClass("show");
    }
});