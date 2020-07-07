import $ from "jquery";
import "./import/modules";
import "./import/jquery.formstyler.min";



$(function() {

    // $(window).load(function() {
    //     let phones = [
    //         { 'mask': '+7 \\ \\ ###-###-##-##' }
    //     ];

    //     $('input[type=tel]').inputmask({
    //         mask: phones,
    //         greedy: false,
    //         definitions: {
    //             '#': {
    //                 validator: '[0-9]',
    //                 cardinality: 1
    //             }
    //         }
    //     });
    // });

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

    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });



    setTimeout(function() {
        $('select').styler();
    }, 100)

});