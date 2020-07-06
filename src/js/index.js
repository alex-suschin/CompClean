import $ from "jquery";
import "./import/modules";
import "./import/jquery.formstyler.min";

$(function() {

    setTimeout(function() {
        $('select').styler();
    }, 100)

});