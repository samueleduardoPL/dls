/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

jQuery(function ($) {
	'use strict';

	// Mapa de Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtdWVsZXBsIiwiYSI6ImNtN3M3NHVkazBjMGoya3BsMndtdWpwcWMifQ.I04bjszA_PvPUpwSlcf03g';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-81, 35], // Centro inicial aproximado
    zoom: 7
});

// Lista de ubicaciones con número de marcadores por ciudad
const locations = {
    "Mooresville, NC": { coords: [-80.8101, 35.5849], count: 1 },
    "Charlotte, NC": { coords: [-80.8431, 35.2271], count: 1 },
    "Lancaster, SC": { coords: [-80.7704, 34.7212], count: 1 },
    "Glade Valley, NC": { coords: [-81.0295, 36.4493], count: 1 },
    "York, SC": { coords: [-81.2348, 34.9943], count: 1 },
    "Huntersville, NC": { coords: [-80.8428, 35.4107], count: 1 },
    "McConnells, SC": { coords: [-81.2276, 34.8696], count: 1 },
    "Rock Hill, SC": { coords: [-81.0251, 34.9249], count: 1 },
    "Clover, SC": { coords: [-81.2262, 35.1115], count: 1 },
    "Denver, NC": { coords: [-81.0292, 35.5317], count: 1 },
    "Granite Falls, NC": { coords: [-81.4301, 35.7968], count: 1 },
    "Gaffney, SC": { coords: [-81.6497, 35.0718], count: 1 },
    "Sharon, SC": { coords: [-81.3451, 34.8221], count: 1 },
    "Hickory, NC": { coords: [-81.3445, 35.7345], count: 1 },
    "Jonesville, NC": { coords: [-80.8454, 36.2391], count: 1 }
};

// Función para generar un desplazamiento mayor en los marcadores de la misma ciudad
function getRandomOffset(factor = 0.05) {
    return (Math.random() - 0.5) * factor; // Aumentamos el factor para mayor separación
}

// Agregar los marcadores al mapa
Object.entries(locations).forEach(([city, data]) => {
    for (let i = 0; i < data.count; i++) {
        const marker = new mapboxgl.Marker()
            .setLngLat([data.coords[0] + getRandomOffset(0.08), data.coords[1] + getRandomOffset(0.08)]) // Mayor separación
            .addTo(map);

        // Tooltip con el nombre de la ciudad
        const popup = new mapboxgl.Popup({ offset: 10 }).setText(city);

        // Mostrar popup al pasar el mouse
        marker.getElement().addEventListener('mouseenter', () => marker.setPopup(popup).togglePopup());
        marker.getElement().addEventListener('mouseleave', () => popup.remove());
    }
});



	
	const sections = [
		{ name: "1", count: 9, nick: "prueb" },
		{ name: "2", count: 6, nick: "prueb" },
		{ name: "3", count: 4, nick: "prueb" },
		{ name: "4", count: 3, nick: "prueb" },
		{ name: "5", count: 4, nick: "prueb" },
		{ name: "6", count: 4, nick: "prueb" },
		{ name: "7", count: 5, nick: "prueb" },
		// { name: "8", count: 1, nick: "prueb" },
		{ name: "9", count: 7, nick: "prueb" },
		{ name: "10", count: 5, nick: "prueb" },
		{ name: "11", count: 5, nick: "prueb" },
		{ name: "12", count: 4, nick: "prueb" },
		{ name: "13", count: 8, nick: "prueb" },
		{ name: "14", count: 5, nick: "prueb" },
		{ name: "15", count: 10, nick: "prueb" },
		{ name: "16", count: 8, nick: "prueb" },
		{ name: "17", count: 5, nick: "prueb" },
		{ name: "18", count: 6, nick: "prueb" },
		{ name: "19", count: 1, nick: "prueb" },
		{ name: "20", count: 8, nick: "prueb" },
		{ name: "21", count: 4, nick: "prueb" },
		{ name: "22", count: 6, nick: "prueb" },
		{ name: "23", count: 4, nick: "prueb" },
		{ name: "24", count: 7, nick: "prueb" },
		{ name: "25", count: 7, nick: "prueb" },
		{ name: "26", count: 3, nick: "prueb" },
		{ name: "27", count: 14, nick: "prueb" },
		{ name: "28", count: 13, nick: "prueb" },
	];
	
	function generateSectionHTML(section) {
        let html = '';

       // Primer imagen visible
    html += `
	<div class="col-lg-4 col-md-6 shuffle-item" data-groups='["project${section.name}"]'>
		<div class="project-img-container">
			<a class="gallery-popup project${section.name}" href="images/projects/project ${section.name}/1.jpg">
				<img class="img-fluid" src="images/projects/project ${section.name}/1.jpg" alt="Project ${section.name} - Image 1">
				<span class="gallery-icon"><i class="fa fa-plus"></i></span>
			</a>
			<div class="project-item-info">
				<div class="project-item-info-content">
					<h3 class="project-item-title">
						<a href="projects-single.html"></a>
					</h3>
				</div>
			</div>
		</div>
	</div>
`;


// Resto de las imágenes, con el atributo "noshow"
for (let i = 2; i <= section.count; i++) {
	html += `
	<div class="col-lg-4 col-md-6 shuffle-item" data-groups='["project${section.name}"]'>
		<div class="project-img-container">
			<a class="gallery-popup project${section.name}" href="images/projects/project ${section.name}/${i}.jpg">
				<img class="img-fluid noshow" src="images/projects/project ${section.name}/${i}.jpg" alt="Project ${section.name} - Image ${i}" loading="lazy">
				<span class="gallery-icon"><i class="fa fa-plus"></i></span>
			</a>
			<div class="project-item-info">
				<div class="project-item-info-content">
					<h3 class="project-item-title">
						<a href="projects-single.html">${section.name}</a>
					</h3>
				</div>
			</div>
		</div>
	</div>
	`;
        }

        return html;
    }

    // 🔹 Insertar los proyectos en el HTML dentro de `.shuffle-wrapper`
    $(document).ready(function() {
		sections.forEach((section, index) => {
			let projectHTML = generateSectionHTML(section);
	
			if (index < 6) {
				$('.shuffle-wrapper').append(projectHTML); // Se muestran los primeros 6 proyectos
			} else {
				$('.shuffle-wrapper').append($(projectHTML).hide().addClass('hidden-project')); // Se ocultan los demás pero en el orden correcto
			}
		});
	
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			sizer: '.shuffle-sizer',
			buffer: 1
		});
	
		myShuffle.update();
		// mediaPopup(); 
	
		// Evento para mostrar los proyectos ocultos
		$('#view-more-btn').on('click', function() {
			$('.hidden-project').fadeIn().removeClass('hidden-project'); // Muestra los proyectos en el orden correcto
			myShuffle.update(); // Refresca Shuffle.js
			$(this).hide(); // Oculta el botón
		});
    });

	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.top-bar').outerHeight();
			var headerOneTopSpace = $('.header-one .logo-area').outerHeight();

			var headerOneELement = $('.header-one .site-navigation');
			var headerTwoELement = $('.header-two .site-navigation');

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass('navbar-fixed');
				$('.header-one').css('margin-bottom', headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass('navbar-fixed');
				$('.header-one').css('margin-bottom', 0);
			}
			if ($(window).scrollTop() > headerTopBar) {
				$(headerTwoELement).addClass('navbar-fixed');
				$('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
			} else {
				$(headerTwoELement).removeClass('navbar-fixed');
				$('.header-two').css('margin-bottom', 0);
			}
		}
		fixedHeader();


		// Count Up
		function counter() {
			var oTop;
			if ($('.counterUp').length !== 0) {
				oTop = $('.counterUp').offset().top - window.innerHeight;
			}
			if ($(window).scrollTop() > oTop) {
				$('.counterUp').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 1000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
			}
		}
		counter();


		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 50) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});


	$(document).ready(function () {

		// navSearch show/hide
		function navSearch() {
			$('.nav-search').on('click', function () {
				$('.search-block').fadeIn(350);
			});
			$('.search-close').on('click', function () {
				$('.search-block').fadeOut(350);
			});
		}
		navSearch();

		// navbarDropdown
		function navbarDropdown() {
			if ($(window).width() < 992) {
				$('.site-navigation .dropdown-toggle').on('click', function () {
					$(this).siblings('.dropdown-menu').animate({
						height: 'toggle'
					}, 300);
				});

				var navbarHeight = $('.site-navigation').outerHeight();
				$('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
			}
		}
		navbarDropdown();


		// back to top
		function backToTop() {
			$('#back-to-top').on('click', function () {
				$('#back-to-top').tooltip('hide');
				$('body,html').animate({
					scrollTop: 0
				}, 100);
				return false;
			});
		}
		backToTop();


		// banner-carousel
		function bannerCarouselOne() {
			$('.banner-carousel.banner-carousel-1').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 10000, // Cambia cada 5 segundos
				dots: true,
				speed: 600, // Aumenta el tiempo de transición (2 segundos)
				cssEase: 'linear', // Hace la transición más suave y progresiva
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
			$('.banner-carousel.banner-carousel-1').slickAnimation();
		}
		bannerCarouselOne();

		// banner Carousel Two
		function bannerCarouselTwo() {
			$('.banner-carousel.banner-carousel-2').slick({
				fade: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 10000, // Cambia cada 5 segundos
				dots: false,
				speed: 600, // Aumenta el tiempo de transición (2 segundos)
				cssEase: 'linear', // Hace la transición más suave y progresiva
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		bannerCarouselTwo();

		// pageSlider
		function pageSlider() {
			$('.page-slider').slick({
				fade: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 10000, // Cambia cada 10 segundos
			dots: false,
			speed: 600, // Aumenta el tiempo de transición (2 segundos)
			cssEase: 'linear', // Hace la transición más suave y progresiva
			arrows: true,
			prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
		}
		pageSlider();


		// Shuffle js filter and masonry
		function projectShuffle() {
			if ($('.shuffle-wrapper').length !== 0) {
				var Shuffle = window.Shuffle;
				var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
					itemSelector: '.shuffle-item',
					sizer: '.shuffle-sizer',
					buffer: 1
				});
		
				// Evento para cambiar los filtros de Shuffle.js
				$('input[name="shuffle-filter"]').on('change', function (evt) {
					var input = evt.currentTarget;
					if (input.checked) {
						myShuffle.filter(input.value);
					}
				});
		
				$('.shuffle-btn-group label').on('click', function () {
					$('.shuffle-btn-group label').removeClass('active');
					$(this).addClass('active');
				});
			}
		}
		
		// Llamar la función después de generar los proyectos
		$(document).ready(function() {
			projectShuffle();
		});
		


		// testimonial carousel
		function testimonialCarousel() {
			$('.testimonial-slide').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				speed: 1000,
				arrows: false
			});
		}
		testimonialCarousel();


		// team carousel
		function teamCarousel() {
			$('.team-slide').slick({
				dots: false,
				infinite: false,
				speed: 700,
				slidesToShow: 4,
				slidesToScroll: 2,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
				responsive: [{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 481,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
		teamCarousel();


		// media popup
		function mediaPopup() {
			$('.gallery-popup').colorbox({
				rel: function() {
					return $(this).attr('class').split(' ')[1];  // Agrupar por la clase única de cada proyecto
				},
				transition: 'fade',
				maxWidth: '90%',
				maxHeight: '90%'
			});
		}
		
		// Llamar la función después de generar los proyectos
		$(document).ready(function() {
			mediaPopup();
		});
		

	});


});