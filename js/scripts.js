/**
  Theme Name: Samrtweb
  Theme URL : http://edgebootstrap.com/themeforest/smartweb
  Author    : Createuiux
  Author URI: http://edgebootstrap.com
  developed : edgebootstrap
  Version   : 1.0.1
  **/

  $(document).ready(function(){

  	"use strict";

	// fixed header
	if($(window).width()>974)
	{
		var stk_header = $('.header');
		var winSelector = $(window);
		$(window).on('scroll', function() {
			if (winSelector.scrollTop() > 70) {
				stk_header.addClass('is-sticky');
			} else {
				stk_header.removeClass('is-sticky');
			}
		});
		if (winSelector.scrollTop() > 70) {
			stk_header.addClass('is-sticky');
		} else {
			stk_header.removeClass('is-sticky');
		}
	}
	if($(window).width()<974)
	{
		$('.arrow').on('click', function(){
			$(this).next().toggleClass('active');
		})
	}




	// page-loader
	$(window).on('load', function() {
		$('#page-loader').delay(350).fadeOut('slow', function() {
			$(this).remove();
		});
	});



	// magnificPopup

	// Initialize popup as usual

	$('.image-link').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});

	$('.image-zoom').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});

	$('.gallery').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled:true
			}
		});
	});

	/// Scroll to top
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('.scroll-top.active').removeClass('active');
			$('.scroll-top').addClass('active');    // Fade in the arrow
		} else {
			$('.scroll-top').removeClass('active');   // Else fade out the arrow
		}
	});
	$('.scroll-top').on('click', function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 2000);
	});


	if ($.fn.sliderPro) {
		if ($('#index-slider2').length >= 0) {
			$('#index-slider2').sliderPro({
				width: 1920,
				height: 630,
				visibleSize: '100%',
				forceSize: 'fullWidth',
				arrows: true,
				buttons: false,
				autoplayDelay: 8500,
				autoplayOnHover: 'none',
				waitForLayers: true,
				thumbnailWidth: 292,
				thumbnailHeight: 120,
				thumbnailPointer: true,
				autoScaleLayers: false,
				breakpoints: {
					1200: {
						thumbnailWidth: 252,
						thumbnailHeight: 120
					},
					1024: {
						thumbnailWidth: 212,
						thumbnailHeight: 120
					},
					500: {
						thumbnailWidth: 120,
						thumbnailHeight: 120
					}
				}
			});
		};
	}

	if ($("#main-contact-form").length) {
		$("#main-contact-form").validate({
			rules: {
				name: {
					required: true
				},
				subject: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			},
			messages: {
				name: {
					required: "Ingrese su nombre"
				},
				subject: {
					required: "Ingrese el asunto"
				},
				email: {
					required: "Ingrese el correo electrónico",
					email: "Ingrese un correo electrónico valido"
				},
				phone: {
					required: "Ingrese su número de telefono"
				},
				message: {
					required: "Ingrese su mensaje"
				}
			},
			submitHandler: function(form){
				$("#btnEnviar").attr('value','ENVIANDO...');
				$(form).ajaxSubmit({
					success: function(data) {
						$("#main-contact-form:input").attr('disabled', 'disabled');
						$("#main-contact-form").fadeTo("slow", 1, function() {
							$(this).find(':input').attr('disabled', 'disabled');
							$(this).find('label').css('cursor', 'default');
							$('#alert-success').show();
						});
						$("#btnEnviar").attr('value','ENVIAR MENSAJE');
						$("#alert-success").removeClass('hidden');
					},
					error: function() {
						$("#main-contact-form").fadeTo("slow", 1, function() {
							$('#alert-error').show();
						});
						$("#btnEnviar").attr('value','ENVIAR MENSAJE');
						$("#alert-error").removeClass('hidden');
					}
				});
			}
		});
	}

	// Popup Inicio
	$('#modalPopup').modal('show');






	var Core = {

		initialized: false,

		initialize: function() {

			if (this.initialized) return;
			this.initialized = true;

			this.build();

		},

		build: function() {

			// Owl Carousel

			this.initOwlCarousel();
		},
		initOwlCarousel: function(options) {

			$(".carousel-slider").each(function(i) {
				var $owl = $(this);

				var itemsData = $owl.data('items');
				var navigationData = $owl.data('navigation');
				var paginationData = $owl.data('pagination');
				var singleItemData = $owl.data('single-item');
				var autoPlayData = $owl.data('auto-play');
				var transitionStyleData = $owl.data('transition-style');
				var mainSliderData = $owl.data('main-text-animation');
				var afterInitDelay = $owl.data('after-init-delay');
				var stopOnHoverData = $owl.data('stop-on-hover');
				var margingap = $owl.data('margin');
				var loop = $owl.data('loop');
				var video = $owl.data('video');
				var autoplayTimeout = $owl.data('autoplay-Timeout');
				var centeritem = $owl.data('center');
				var min480 = $owl.data('min480');
				var min768 = $owl.data('min768');
				var min992 = $owl.data('min992');
				var min1200 = $owl.data('min1200');
				var autoWidth = $owl.data('autowidth');

				$owl.owlCarousel({
					loop: loop,
					video: video,
					items: itemsData,
					margin: margingap,
					center: centeritem,
					autoplay: autoPlayData,
					autoplayTimeout: autoplayTimeout,
					dots: paginationData,
					nav: navigationData,
					navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
					smartSpeed: 450,
					autoWidth: autoWidth,
					responsive: {
						0: {
							items: min480
						},
						768: {
							items: min768
						},
						975: {
							items: min992
						},
						1170: {
							items: min1200
						}
					}
				});
			});
		},

	};

	Core.initialize();



	if ($("header").hasClass("home2")) {
		var offsetHeight = document.getElementById('main-footer').offsetHeight;
		$('.content-wrap').css('margin-bottom', offsetHeight);
		$('#main-footer').addClass('sticky-footer');
	}





	/* ==================================================================
	 Parallax Stellar
	 ================================================================== */




	// var isMobile = {
	//     Android: function () {
	//         return navigator.userAgent.match(/Android/i);
	//     },
	//     BlackBerry: function () {
	//         return navigator.userAgent.match(/BlackBerry/i);
	//     },
	//     iOS: function () {
	//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	//     },
	//     Opera: function () {
	//         return navigator.userAgent.match(/Opera Mini/i);
	//     },
	//     Windows: function () {
	//         return navigator.userAgent.match(/IEMobile/i);
	//     },
	//     any: function () {
	//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	//     }
	// };

	// jQuery(window).stellar({
	//     horizontalScrolling: false,
	//     hideDistantElements: true,
	//     verticalScrolling: !isMobile.any(),
	//     scrollProperty: 'scroll',
	//     responsive: true
	// });



	// if ($('#portfolio-grid').length > 0) {
	// 	/* initialize shuffle plugin */
	// 	var $grid = $('#portfolio-grid');

	// 	$grid.shuffle({
	// 		itemSelector: '.portfolio-item' // the selector for the items in the grid
	// 	});

	// 	/* reshuffle when user clicks a filter item */
	// 	$('#portfolio-filter li').on('click', function (e) {
	// 		e.preventDefault();

	// 		// set active class
	// 		$('#portfolio-filter li').removeClass('active');
	// 		$(this).addClass('active');

	// 		// get group name from clicked item
	// 		var groupName = $(this).attr('data-group');

	// 		// reshuffle grid
	// 		$grid.shuffle('shuffle', groupName );
	// 	});
	// }


});

jQuery(document).ready(function(){

	jQuery('.skill-progress-bar').each(function() {
		jQuery(this).find('.progress-content').animate({
			width:jQuery(this).attr('data-percentage')
		},2000);

		jQuery(this).find('.progress-number-mark').animate(
			{text:jQuery(this).attr('data-percentage')},
			{
				duration: 2000,
				step: function(now, fx) {
					var data = Math.round(now);
					jQuery(this).find('.percent').html(data + '%');
				}
			});  
	});
  // var $grid = $('#portfolio-grid');
  // $grid.shuffle('shuffle', 'all');
  if (! localStorage.justOnce) {
  	localStorage.setItem("justOnce", "true");
  	window.location.reload();
  }
});