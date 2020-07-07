import $ from "jquery";
import "./import/modules";
import "./import/jquery.formstyler.min";
import "./import/jquery.mask";



$(function() {

    $("input[type=tel]").mask("+7 (999) 999-9999");

    ymaps.ready(function() {
        var myMap = new ymaps.Map('map', {
                center: [55.751146, 37.520433],
                zoom: 13,
                scrollZoom: false,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark([55.755814, 37.617635], {
                hintContent: 'Россия',
                balloonContent: 'Россия'
            }, {
                iconLayout: 'default#image',
                iconImageHref: './img/svg/pin.svg',
                iconImageSize: [44, 60],
                cursor: 'pointer',
                iconImageOffset: [-30, -120],
                balloonclose: true
            });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects
            .add(myPlacemark)

    });

    $('.scrollto').click(function() {
        var scroll_elem = $(this).attr('href');
        if ($(scroll_elem).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_elem).offset().top - 100
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });

    jQuery(function($) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 123) {
                $('.header').addClass('fixed');
                $('.cities').hide(100);
                $('.header .btn-yellow').hide(100);
                $('.header .logo-fixed').show(100);
                $('.header .logo').hide(100);
                $('#menu-wrap').insertAfter($(".header .logo-fixed"));
                $('body').css('padding-top', '123px');
            } else if ($(this).scrollTop() < 123) {
                $('body').css('padding-top', '0');
                $('.header').removeClass('fixed');
                $('.cities').show(100);
                $('.header .btn-yellow').show(100);
                $('.header .logo').show(100);
                $('.header .logo-fixed').hide(100);
                $('#menu-wrap').insertAfter($(".header-info"));
            }
        });
    });


    setTimeout(function() {
        $('select').styler();
    }, 100)

});