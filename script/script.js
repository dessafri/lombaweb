$(document).ready(function () {

    $('.image-himbauan').slick({
        arrows: true,
        autoplay: true,
        prevArrow: $(".slick-prev"),
        nextArrow: $(".slick-next")
    });
    $('.image').slick({
        autoplay: true,
        autoplaySpeed: 1100,
        infinite: true,
        // arrows: false
        arrows: false,
        easing: 'swing'
    })
    $('.scroll').on('click', function (e) {

        var tujuan = $(this).attr('href');

        var elemenTujuan = $(tujuan);

        if (tujuan == "#covid-19") {
            $('html, body').animate({
                scrollTop: elemenTujuan.offset().top - 120
            }, 1500, 'easeInOutExpo');
        } else if (tujuan == "#data") {
            $('html, body').animate({
                scrollTop: elemenTujuan.offset().top + 180
            }, 1500, 'easeInOutExpo');
        } else if (tujuan == "#pencegahan") {
            $('html, body').animate({
                scrollTop: elemenTujuan.offset().top - 80
            }, 1500, 'easeInOutExpo');
        } else {
            $('html, body').animate({
                scrollTop: elemenTujuan.offset().top
            }, 1500, 'easeInOutExpo');
        }

        e.preventDefault();
    });
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > 350) {
            $('.btn-pulse').css({
                "opacity": "1"
            })
        }
        if (scroll < 350) {
            $('.btn-pulse').css({
                "opacity": "0"
            })
        }
        if (scroll >= 1390 && scroll < 1900) {
            setTimeout(() => {
                $(".img-corona").addClass('img-coronaMuncul')
                $("#penjelasan-covid").addClass('p-muncul')

            }, 1000);
        }

        if (scroll >= 3500) {
            $(".imgHimbauanProtokol,.protokolspan").each(function (i) {
                setTimeout(() => {
                    $(".imgHimbauanProtokol").eq(i).addClass("img-muncul")
                }, 300 * (i + 1));
            })
            $(".protokolspan").each(function (i) {
                setTimeout(() => {
                    $(".protokolspan").eq(i).addClass("spanmuncul")
                }, 300 * (i + 1));
            })
        }
    });
    $("#reloadpage").click(function () {
        $(window).reload()
    })
})