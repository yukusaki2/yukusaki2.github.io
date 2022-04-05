$(function () {

    $('.slick01').slick();

    $(".slider").slick({
        speed: 1000,
        prevArrow: '<img src="https://github.com/yukusaki2/yukusaki2.github.io/blob/main/menu_btn_left.png?raw=true" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="https://github.com/yukusaki2/yukusaki2.github.io/blob/main/menu_btn_right.png?raw=true" class="slide-arrow next-arrow">',
        dots: true,
    });

    $('#slick-slide-control00').html('・');
    $('#slick-slide-control01').html('・');
    $('#slick-slide-control02').html('');

    $('#slick-slide-control00').css('color', '#fff');
    $('#slick-slide-control01').css('color', '#fff');

    $('#slick-slide-control00').css('font-size', '24px');
    $('#slick-slide-control01').css('font-size', '24px');

    
    
    $('#top-btn').click(function(){
        $('html, body').animate({
            'scrollTop': 0
        }, 500);
    });

    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });
    
    
    
    if (window.matchMedia("(max-width: 599px)").matches) {
        $('#slick-slide-control00').css('font-size', '19px');
        $('#slick-slide-control01').css('font-size', '19px');
        
//         $('#slider-text1 p').html('CAFE STEENの特製ブレンドのコーヒー。フルーティーな香りとほのかな甘味。妊婦やカフェインが苦手な方にデカフェもご用意。コーヒーはお持ち帰り用のドリップパックもご用意しております。');
//         $('#slider-text2 p').html('CAFE STEENの特製ブレンドのコーヒー。フルーティーな香りとほのかな甘味。妊婦やカフェインが苦手な方にデカフェもご用意。コーヒーはお持ち帰り用のドリップパックもご用意しております。');
//         $('#slider-text3 p').html('CAFE STEENの特製ブレンドのコーヒー。フルーティーな香りとほのかな甘味。妊婦やカフェインが苦手な方にデカフェもご用意。コーヒーはお持ち帰り用のドリップパックもご用意しております。');

    }
    
    
    



});
