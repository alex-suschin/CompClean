import $ from "jquery";
import "./import/modules";
import "./import/jquery.formstyler.min";

$(function() {

    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    let phones = [
        { 'mask': '+7 \\ \\ ###-###-##-##' }
    ];

    // $('input[type=tel]').inputmask({
    //     mask: phones,
    //     greedy: false,
    //     definitions: {
    //         '#': {
    //             validator: '[0-9]',
    //             cardinality: 1
    //         }
    //     }
    // });


    setTimeout(function() {
        $('select').styler();
    }, 100)

});