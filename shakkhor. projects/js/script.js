var THEMEMASCOT = {};
(function($) {

	"use strict";


	/* ---------------------------------------------------------------------- */
	/* --------------------------- Start Demo Switcher  --------------------- */
	/* ---------------------------------------------------------------------- */
	var showSwitcher = true;
	var $body = $('body');
	var $style_switcher = $('#style-switcher');
	if( !$style_switcher.length && showSwitcher ) {
	      $.ajax({
	          url: "color-switcher/style-switcher.html",
	          success: function (data) { $body.append(data); },
	          dataType: 'html'
	      });
	}

	/* ---------------------------------------------------------------------- */
	/* ----------------------------- En Demo Switcher  ---------------------- */
	/* ---------------------------------------------------------------------- */


	THEMEMASCOT.isRTL = {
	    check: function() {
	      if( $( "html" ).attr("dir") === "rtl" ) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	};

	THEMEMASCOT.isLTR = {
	    check: function() {
	      if( $( "html" ).attr("dir") !== "rtl" ) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	};

    /* ---------------------------------------------------------------------- */
    /* ----------------------------- En Demo Switcher  ---------------------- */
    /* ---------------------------------------------------------------------- */

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
		//Megamenu Toggle
	}

	//Hidder bar
	if ($('.hidden-bar').length){
		//Menu Toggle Btn
		$('.toggle-hidden-bar').on('click', function() {
			$('body').addClass('active-hidden-bar');
		});

		//Menu Toggle Btn
		$('.hidden-bar-back-drop, .hidden-bar .close-btn').on('click', function() {
			$('body').removeClass('active-hidden-bar');
		});
	}

	$(function () {
	  $(document).on('click', '.room-booking-tab .tab-item', function () {
	    var tabId = $(this).data('tab');

	    // Remove 'active' from all tabs and contents
	    $('.room-booking-tab .tab-item').removeClass('active');
	    $('.room-booking-content .tab-content').removeClass('active');

	    // Add 'active' to clicked tab and matching content
	    $(this).addClass('active');
	    $('.room-booking-content .tab-content[data-tab="' + tabId + '"]').addClass('active');
	  });
	});

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){

		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
			$(this).prev('.megamenu').slideToggle(500);
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

	}

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}

	//swiper banner five
	if ($('.banner-slider-style-home5').length) {
		var swiper = new Swiper(".banner-slider-style-home5", {
			slidesPerView: 1,
			spaceBetween: 130,
			loop: "true",
			navigation: false,
			speed: 600,
	        parallax: true,
	        pagination: {
		      el: ".swiper-pagination",
		      clickable: true,
		    },
			breakpoints: {
				320: {
					spaceBetween: 15,
				},
				768: {
					spaceBetween: 30,
				},
				992: {
					spaceBetween: 60,
				},
				1023: {
					spaceBetween: 100,
				},
				1400: {
					spaceBetween: 130,
				},
			},
		});
	}

	//swiper features seven slider
	if ($('.features-seven-slider').length) {
		var swiper = new Swiper(".features-seven-slider", {
			spaceBetween: 30,
	    slidesPerView: 3.95,
	    centeredSlides: true,
			loop: "true",
			navigation: false,
			speed: 600,
      parallax: true,
      pagination: {
	      el: ".swiper-pagination",
	      clickable: true,
	    },
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1023: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3.95,
				},
			},
		});
	}


	if ($('.services-section-eight22 .outer-box').length) {
	  const serviceImage = document.getElementById('service-image');
	  const serviceImage2 = document.getElementById('service-image-2');
	  const serviceItems = document.querySelectorAll('.services-list .service-block-eight');

	  // Set the default active item
	  const defaultItem = document.querySelector('.services-list .service-block-eight.active');
	  if (defaultItem) {
	    const defaultImage = defaultItem.getAttribute('data-image');
	    const defaultImage2 = defaultItem.getAttribute('data-image-2');
	    if (defaultImage) {
	      serviceImage.src = defaultImage;
	      serviceImage.classList.add('active');
	    }
	    if (defaultImage2) {
	      serviceImage2.src = defaultImage2;
	      serviceImage2.classList.add('active');
	    }
	  }

	  // Handle hover effect and active state change
	  serviceItems.forEach(item => {
	    item.addEventListener('mouseover', () => {
	      const newImage = item.getAttribute('data-image');
	      const newImage2 = item.getAttribute('data-image-2');
	      if (newImage) {
	        serviceImage.src = newImage;
	        serviceImage.classList.add('active');
	      }
	      if (newImage2) {
	        serviceImage2.src = newImage2;
	        serviceImage2.classList.add('active');
	      }
	      // Remove active class from all items and add to the hovered one
	      serviceItems.forEach(el => el.classList.remove('active'));
	      item.classList.add('active');
	    });
	  });
	}

	if($('.service-block-eight .inner-box').length) {
	  const $boxes = $('.service-block-eight .inner-box');

	  if ($boxes.length) {
	    // Activate the first box on load
	    // const $firstBox = $boxes.first();
	    // $firstBox.addClass('active');
	    // $firstBox.find('.image-box').addClass('active').slideDown();

	    // Click logic
	    $boxes.on('click', function () {
	      $boxes.removeClass('active');
	      $('.service-block-eight .image-box').removeClass('active');

	      $(this).addClass('active');
	      $(this).find('.image-box').addClass('active');
	    });
	  }
	}




	// var swiper = new Swiper(".banner-slider-home5", {
	// 	loop: "true",
	// 	slidesPerView: 2,
	// 	navigation: true,
	// 	spaceBetween: 0,
	// 	speed: 1000,
	// 	breakpoints: {
	// 		1199: {
	// 			slidesPerView: 2,
	// 		},
	// 		991: {
	// 			slidesPerView: 3,
	// 		},
	// 		320: {
	// 			slidesPerView: 2,
	// 		},
	// 	},
	// 	navigation: {
	// 		nextEl: ".service-two-next",
	// 		prevEl: ".service-two-prev",
	// 	},
	// });

	//slick slider
	$('.banner-slider-home1').slick({
	  autoplay: true,
	  speed: 800,
	  lazyLoad: 'progressive',
	  arrows: true,
	  dots: false,
	}).slickAnimation();

	//slick slider
	$('.banner-slider-home3').slick({
	  autoplay: true,
	  speed: 800,
	  lazyLoad: 'progressive',
	  arrows: true,
	  dots: true,
	}).slickAnimation();

	//slick slider
	$('.banner-slider-home5').slick({
	  autoplay: true,
	  speed: 800,
	  lazyLoad: 'progressive',
	  arrows: true,
	  dots: false,
	}).slickAnimation();

	$('.banner-slider-rtl').slick({
	  autoplay: true,
	  speed: 800,
	  lazyLoad: 'progressive',
	  arrows: true,
	  dots: true,
	  rtl: true,
	}).slickAnimation();

	//slick slider
	$('.feature-slider-style1').slick({
	  autoplay: true,
	  speed: 800,
	  lazyLoad: 'progressive',
	  arrows: true,
	  dots: false,
	}).slickAnimation();


	$('.stories-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	$('.testimonial-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		arrows:false
	}).slickAnimation();

	$('.testimonial-slider-rtl').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:true,
		rtl:true,
		arrows:false
	}).slickAnimation();

	//testimonial-carousel Two
	if ($('.testimonial-carousel-two').length) {
	   $('.testimonial-carousel-two').slick({
		    infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 1,
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
			]
		});
	}

	//service-carousel Three
	if ($('.room-service-carousel-two').length) {
		var swiper = new Swiper(".room-service-carousel-two", {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
	            nextEl: '.swiper-button-next',
	            prevEl: '.swiper-button-prev',
	        },
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1023: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				},
			},
		});
	}

	//service-carousel Three
	if ($('.news-carousel-two').length) {
		var swiper = new Swiper(".news-carousel-two", {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
	            nextEl: '.swiper-button-next',
	            prevEl: '.swiper-button-prev',
	        },
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1023: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				},
			},
		});
	}

	//service-carousel Three
	if ($('.testimonial-carousel-winter').length) {
		var swiper = new Swiper(".testimonial-carousel-winter", {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
	            nextEl: '.swiper-button-next',
	            prevEl: '.swiper-button-prev',
	        },
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 1,
				},
				1023: {
					slidesPerView: 1,
				},
				1400: {
					slidesPerView: 1,
				},
			},
		});
	}

	$('.client-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots:false,
		arrows:false,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
				breakpoint: 767,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				}
			  },
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	});

	//service-carousel Three
	if ($('.service-three-slider').length) {
		var swiper = new Swiper(".service-three-slider", {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: {
	            nextEl: '.swiper-button-next',
	            prevEl: '.swiper-button-prev',
	        },
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1023: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				},
			},
		});
	}

	// service-carousel Two
	var swiper = new Swiper(".service-two-slider2", {
		loop: "true",
		slidesPerView: 4,
		navigation: true,
		spaceBetween: 0,
		speed: 1000,
		breakpoints: {
			1199: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: ".service-two-next",
			prevEl: ".service-two-prev",
		},
	});

	//service-carousel Two
	if ($('.service-two-slider').length) {
	   $('.service-two-slider').slick({
		    infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 4,
			      }
			    },
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
			]
		});
	}

	//service-carousel Two
	if ($('.clients-carousel').length) {
	   $('.clients-carousel').slick({
		    infinite: true,
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 5,
			      }
			    },
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 4,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 3,
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			      }
			    }
			]
		});
	}

	$('.room-section-four .room-block-four').hover(function() {
		$(this).siblings('.room-block-four').removeClass('active'), $(this).addClass('active')
	})
	

	//Service Block Hover
	if ($('.image-service-block').length) {
		var $service_block = $('.image-service-block .inner-box');
		$($service_block).on('mouseenter', function (e) {
			$(this).find('.content-box .inner .text').stop().slideDown(300);
			return false;
		});
		$($service_block).on('mouseleave', function (e) {
			$(this).find('.content-box .inner .text').stop().slideUp(300);
			return false;
		});
	}

	// Testimonial Carousel
	if ($('.testimonial-carousel-one').length) {
		$('.testimonial-carousel-one').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			navText: ['<span class="icon-arrow-left"></span>', '<span class="icon-arrow-right"></span>'],
		});
	}

	//testimonial-carousel Single
	if ($('.testimonial-single-slider').length) {
	   $('.testimonial-single-slider').slick({
		    infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000,
			fade: false,
			fadeSpeed: 1000
		});
	}

	// Testinomials Carousel
	if ($('.testimonial-slider-content').length) {
		var slider = new Swiper ('.testimonial-slider-content', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: true,
			centeredSlides: true,
			loop: true,
			loopedSlides: 6,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		var thumbs = new Swiper ('.testimonial-thumbs', {
			slidesPerView: 'auto',
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			slideToClickedSlide: true,
		});
		slider.controller.control = thumbs;
		thumbs.controller.control = slider;
	}

	// Testinomials Carousel
	if ($('.testimonial-slider-beach').length) {
		var slider = new Swiper ('.testimonial-slider-beach', {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: false,
			loop: true,
			loopedSlides: 6,
			pagination: {
		      el: ".swiper-pagination",
		      clickable: true,
		    },
		});
	}

	//product bxslider
	if ($('.product-details .bxslider').length) {
		$('.product-details .bxslider').bxSlider({
        nextSelector: '.product-details #slider-next',
        prevSelector: '.product-details #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.product-details .slider-pager .thumb-box'
	    });
	};

	
  //Service Block Hover
  if ($('.room-block-two').length) {
    var $service_block = $('.room-block-two .inner-box');
    $($service_block).on('mouseenter', function (e) {
      $(this).find('.content-box .bx-links').stop().slideDown(400);
      return false;
    });
    $($service_block).on('mouseleave', function (e) {
      $(this).find('.content-box .bx-links').stop().slideUp(400);
      return false;
    });
  }

	//MixItup Gallery
	if ($('.filter-list').length) {
		$('.filter-list').mixItUp({});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($('.dial').length) {
		$('.dial').appear(function () {
			var elm = $(this);
			var color = elm.attr('data-fgColor');
			var perc = elm.attr('value');

			elm.knob({
				'value': 0,
				'min': 0,
				'max': 100,
				'skin': 'tron',
				'readOnly': true,
				'thickness': 0.15,
				'dynamicDraw': true,
				'displayInput': false
			});
			$({ value: 0 }).animate({ value: perc }, {
				duration: 2000,
				easing: 'swing',
				progress: function () {
					elm.val(Math.ceil(this.value)).trigger('change');
				}
			});
			//circular progress bar color
			$(this).append(function () {
				// elm.parent().parent().find('.circular-bar-content').css('color',color);
				//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
			});

		}, { accY: 20 });
	}


	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
		},{accY: 0});
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}
	// Testinomials Carousel
	// if ($('.testimonial-slider').length) {
	// 	var slider = new Swiper ('.testimonial-slider', {
	// 		slidesPerView: 1,
	// 		navigation: true,
	// 		centeredSlides: true,
	// 		loop: true,
	// 		loopedSlides: 6,
	// 		navigation: {
	// 			nextEl: '.swiper-button-next',
	// 			prevEl: '.swiper-button-prev',
	// 		},
	// 	});
	// 	var thumbs = new Swiper ('.testimonial-thumbs', {
	// 		slidesPerView: 'auto',
	// 		spaceBetween: 0,
	// 		centeredSlides: true,
	// 		loop: true,
	// 		slideToClickedSlide: true,
	// 	});
	// 	slider.controller.control = thumbs;
	// 	thumbs.controller.control = slider;
	// }

	//product bxslider
	if ($('.product-details .bxslider').length) {
		$('.product-details .bxslider').bxSlider({
        nextSelector: '.product-details #slider-next',
        prevSelector: '.product-details #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.product-details .slider-pager .thumb-box'
	    });
	};

	//Quantity box
   $(".quantity-box .add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
   });
   $(".quantity-box .sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
   });

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 99,
			values: [ 10, 60 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}

    // count Bar
    if ($(".count-bar").length) {
        $(".count-bar").appear(
            function () {
                    var el = $(this);
                    var percent = el.data("percent");
                    $(el).css("width", percent).addClass("counted");
                }, {
                    accY: -50
            }
        );
    }

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}


	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 0);

		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	// Flatpicker Custom Code
	$(function() {
	  $(".datepicker").datepicker({
	    dateFormat: 'yy-mm-dd'
	  });
	});

  /* ---------------------------------------------------------------------- */
  /* ----------- Activate Menu Item on Reaching Different Sections ---------- */
  /* ---------------------------------------------------------------------- */
  var $onepage_nav = $('.onepage-nav');
  var $sections = $('section');
  var $window = $(window);
  function TM_activateMenuItemOnReach() {
	  if( $onepage_nav.length > 0 ) {
	    var cur_pos = $window.scrollTop() + 2;
	    var nav_height = $onepage_nav.outerHeight();
	    $sections.each(function() {
	      var top = $(this).offset().top - nav_height - 80,
	        bottom = top + $(this).outerHeight();

	      if (cur_pos >= top && cur_pos <= bottom) {
	        $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
	        $sections.removeClass('current').removeClass('active');
	        $onepage_nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
	      }

	      if (cur_pos <= nav_height && cur_pos >= 0) {
	        $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
	        $onepage_nav.find('a[href="#header"]').parent().addClass('current').addClass('active');
	      }
	    });
	  }
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
		TM_activateMenuItemOnReach();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
	});

})(window.jQuery);