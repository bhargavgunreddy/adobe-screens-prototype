$(document).on('ready', function() {

      $(".slider").not(".navigation").slick({
        vertical: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        
      });
      $(".navigation").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5500,
        speed: 500,
        infinite: true,
        
      });
      

    });