$(document).ready(function () {

    $('.imgVirus').each(function (i) {
        setTimeout(() => {
            $('.imgVirus').eq(i).addClass('imgVirusMuncul')
        }, 500 * (i + 1));
    })

    $(window).scroll(function () {
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
        if (scroll >= 1085) {
            setTimeout(() => {
                $('.img-gejala').css({
                    "transform": "translateY(0)",
                    "opacity": "1"
                })
                setTimeout(() => {
                    $('.fa-check').css({
                        "transform": "translateX(0)",
                        "opacity": "1"
                    })
                }, 1500);
            }, 1000);
        }
        if (scroll >= 2150) {
            setTimeout(() => {
                $('#img-penanganan').css({
                    "transform": "translateY(0)",
                    "opacity": "1"
                })
            }, 1000);
        }

        if (scroll >= 3125) {
            $('.img-penularan').each(function (i) {
                setTimeout(() => {
                    $('.img-penularan').eq(i).addClass('img-penularanMuncul')
                }, 500 * (i + 1));
            })
            $('.span-penularan').each(function (i) {
                setTimeout(() => {
                    $('.span-penularan').eq(i).addClass('span-penularanMuncul')
                }, 500 * (i + 1));
            })
        }
        if (scroll >= 3295) {
            $(".imgHimbauanProtokol").each(function (i) {
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

    $('.scroll').on('click', function (e) {
        var tujuan = $(this).attr('href');

        var elemenTujuan = $(tujuan);

        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 1500, 'easeInOutExpo');

        e.preventDefault();
    })



})