$(document).ready(function(){

    $('.photo-galery-wrap-img').isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows',
        
        
    });
    $('.photo-galery-wrap-tab ul li a').click(function(){
        console.log($(this))
        $('.photo-galery-wrap-tab ul li a').removeClass('active');
        $(this).addClass('active');
        
        var selector = $(this).attr('data-filter');
        $('.photo-galery-wrap-img').isotope({
            filter: selector
        });
        return false
    })


    $('.slider-inner').slick({
        arrows: false,
        dots: true,
        dotsClass:'slick-dots my_slick-dots'
    });
  });