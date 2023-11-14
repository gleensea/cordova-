$(document).ready(function() {
    // object-fit : IE 대응   
    if($(document).find('.object-fit').length > 0){    
      var objectFitImg = new App.ObjectFit();
      objectFitImg.init('.object-fit');
      
      $(document).on('change', '.object-fit img', function() {
        objectFitImg.init('.object-fit');
    })} 
    
    $('.gallery-main-swiper').each(function() {
      var thumbSwiper = new Swiper('.gallery-thumb-swiper', {
        spaceBetween: 10,
        slidesPerView: 9,
        loopedSlides: 9,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        loop: true,
        breakpoints: {
          1024: {
            slidesPerView: 9,
            loopedSlides: 9
          },
          768: {
            slidesPerView: 3.5,
            loopedSlides: 9
          },
          480: {
            slidesPerView: 2.5,
            loopedSlides: 9
          }
        }
      });
      
      var mainSwiper = new Swiper('.gallery-main-swiper', {
        effect: 'fade',
        spaceBetween: 10,
        allowTouchMove: false,
        loop: true,
        loopedSlides: 9,
        navigation: {
          nextEl: '.swiper-gallery-next',
          prevEl: '.swiper-gallery-prev'
        },
        
        breakpoints: {
          1024: {
            loopedSlides: 9
          },
          768: {
            loopedSlides: 9
          },
          480: {
            loopedSlides: 9
          }
        }
      });
      mainSwiper.controller.control = thumbSwiper;
      thumbSwiper.controller.control = mainSwiper;
    })
  })
  
  var App = new Object();
  
  //------------------------------------------------------
  //object-fit(IE)
  //------------------------------------------------------  
  App.ObjectFit = function () {
    var self;
    return {
      init: function (param) {
        if ('objectFit' in document.documentElement.style === false) {
          var container = document.querySelectorAll(param);
          for (var i = 0; i < container.length; i++) {
            var imageSource = container[i].querySelector('img').src;
            container[i].querySelector('img').style.display = 'none';
            container[i].style.backgroundSize = 'cover';
            container[i].style.backgroundImage = 'url(' + imageSource + ')';
            container[i].style.backgroundPosition = '50% 50%';
          }
        }
      }
    }
  };  