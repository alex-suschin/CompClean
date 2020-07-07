import $ from "jquery";
import "./import/modules";
import "./import/jquery.formstyler.min";
import "./import/jquery.mask";



$(function() {

    $("input[type=tel]").mask("+7 (999) 999-9999");

    ymaps.ready(function() {
        var myMap = new ymaps.Map('map', {
                center: [51.675628, 39.201276],
                zoom: 17,
                scrollZoom: false,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark([51.675578, 39.203287], {
                hintContent: 'Россия, Воронеж ул. Кольцовская 9а, оф. 626',
                balloonContent: 'Россия, Воронеж ул. Кольцовская 9а, оф. 626'
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
                scrollTop: $(scroll_elem).offset().top - 10
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        }
        return false;
    });



    setTimeout(function() {
        $('select').styler();
    }, 100)

});