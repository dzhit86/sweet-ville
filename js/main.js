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
        slidesPerView: "auto",
        centeredSlides: true,
        freeMode: {
          enabled: true,
          sticky: false,
          momentumBounce: false
        }
      },
      990: {
        freeMode: {
          enabled: false
        },
        centeredSlides: false,
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
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true,
        freeMode: {
          enabled: true,
          sticky: false,
          momentumBounce: false
        }
      },
      768: {
        spaceBetween: 20,
        centeredSlides: false,
        freeMode: {
          enabled: false
        },
        slidesPerView: 2
      },
      1260: {
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
        centeredSlides: true,
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
          sticky: false,
          momentumBounce: false
        }
      },
      1240: {
        centeredSlides: false,
        spaceBetween: 15,
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
    var sc = $(this).attr("href"); // id ????????

    if ($(sc).length) {
      var pad = $(sc).outerHeight() - $(sc).height() - 100,
          // ???????????????????? ?????? ????????????????????????????????
      dn = $(sc).offset().top + pad; // ?????????????????? ???????? ???? ????????????????

      $('html, body').animate({
        scrollTop: dn
      }, 1000);
    } else {
      console.log('?????? ?????????? ????????????!');
    }
  });
});