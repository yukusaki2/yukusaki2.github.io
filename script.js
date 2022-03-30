$(function () {

    $('.slick01').slick();

    $(".slider").slick({
        speed: 1000,
        prevArrow: '<img src="/img/menu_btn_left.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="/img/menu_btn_right.png" class="slide-arrow next-arrow">',
        dots: true,
    });

    $('#slick-slide-control00').html('・');
    $('#slick-slide-control01').html('・');
    $('#slick-slide-control02').html('');

    $('#slick-slide-control00').css('color', '#fff');
    $('#slick-slide-control01').css('color', '#fff');

    $('#slick-slide-control00').css('font-size', '24px');
    $('#slick-slide-control01').css('font-size', '24px');





});
