$(document).ready(function() {
    $("#lightgallery").lightGallery();
});

/*$(function() {
    $(".lg-close").on('click', function() {
        $('#ModalGeorgia').modal('show');
    });
});*/

$(function() {
    $(".custom-close").on('click', function() {
        $('#ModalGeorgia').modal('hide');
    });
});