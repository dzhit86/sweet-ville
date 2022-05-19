"use strict";

$(document).ready(function () {
  var btnBurger = $(".header__burger");
  var topNav = $(".menu-top");
  btnBurger.on("click", mobileMenu);

  function mobileMenu(event) {
    event.preventDefault();
    btnBurger.add(topNav).toggleClass("_active");
  }

  function closeMenu() {
    btnBurger.add(topNav).removeClass("_active");
  }

  $(window).resize(function () {
    if ($(this).outerWidth() >= 768) {
      closeMenu();
    }
  });
  $(document).mouseup(function (e) {
    if (!topNav.is(e.target) && topNav.has(e.target).length === 0 && !btnBurger.is(e.target) && btnBurger.has(e.target).length === 0) {
      closeMenu();
    }
  }); // Sliders

  var sliderOurArea = new Swiper('#swiperOurArea', {
    direction: 'horizontal',
    loop: true,
    pagination: false,
    navigation: {
      prevEl: '.ourarea-swiper__btn_prev',
      nextEl: '.ourarea-swiper__btn_next'
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1.2
      },
      400: {
        spaceBetween: 20,
        slidesPerView: 1.4
      },
      480: {
        spaceBetween: 20,
        slidesPerView: 1.7
      },
      550: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      660: {
        spaceBetween: 20,
        slidesPerView: 2.5
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      970: {
        spaceBetween: 20,
        slidesPerView: 1
      }
    }
  });
  var sliderAdding = new Swiper('#swiperAdding', {
    direction: 'horizontal',
    loop: true,
    pagination: false,
    navigation: {
      prevEl: '.adding-swiper__btn_prev',
      nextEl: '.adding-swiper__btn_next'
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 1.2
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 2
      },
      993: {
        spaceBetween: 25,
        slidesPerView: 3
      }
    }
  });
  var sliderGallery = new Swiper('#swiperGallery', {
    direction: 'horizontal',
    loop: true,
    pagination: false,
    navigation: {
      prevEl: '.gallery-swiper__btn_prev',
      nextEl: '.gallery-swiper__btn_next'
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesPerView: 0.6,
        freeMode: {
          enabled: true,
          sticky: false,
          momentumBounce: false
        }
      },
      660: {
        spaceBetween: 20,
        slidesPerView: 1,
        freeMode: {
          enabled: false
        }
      }
    }
  });
  var sliderReview = new Swiper('#swiperReview', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
    freeMode: {
      enabled: true,
      sticky: false,
      momentumBounce: false
    },
    centeredSlides: true,
    mousewheel: {
      enabled: true,
      sensitivity: 1
    },
    spaceBetween: 20,
    speed: 500,
    navigation: {
      nextEl: '.review-swiper__btn_next',
      prevEl: '.review-swiper__btn_prev'
    }
  }); // Smooth scroll

  var smoothLink = $('a[data-smooth]');
  smoothLink.on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"); // id цели

    if ($(sc).length) {
      var pad = $(sc).outerHeight() - $(sc).height() - 100,
          // расстояние для позиционирования
      dn = $(sc).offset().top + pad; // положение цели на странице

      $('html, body').animate({
        scrollTop: dn
      }, 1000);
    } else {
      console.log('Нет такой секции!');
    }
  });
});