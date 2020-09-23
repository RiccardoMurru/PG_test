$(document).ready(function() {
	/**
	 * Show menu on click
	 */

	let hamburger = $('.hamburger');
	let menu = $('.navbar__items');

	hamburger.click(function() {
		menu.toggle();
	});

	// Hide link menu on click in modbile mode
	let mediaQuery = window.matchMedia('(min-width: 768px)');
	if (!mediaQuery.matches) {
		$('.navbar__link').click(function() {
			menu.hide();
		});
	}

	// Scroll to section on click
	$('.we-are-link').click(() => {
		animateScroll($('#we-are'));
	});
	$('.we-do-link').click(() => {
		animateScroll($('#we-do'));
	});
	$('.careers-link').click(() => {
		animateScroll($('#careers'));
	});
	$('.contacts-link').click(() => {
		animateScroll($('#contacts'));
	});

	// Cambio visibilità header
	let header = $('.header');
	$(window).scroll(() => {
		let top = $(window).scrollTop();
		if (top < 500) {
			if (header.hasClass('header-visible')) {
				header.removeClass('header-visible');
			}
		} else if (top >= 500 && top <= 1000) {
			header.addClass('header-visible');
		}
	});

	/**********************
	 * Slider functionality
	 **********************/
	let imgFirst = $('.first');
	let imgLast = $('.last');
	let arrowRight = $('.arrow-right');
	let arrowLeft = $('.arrow-left');
	let counterFirst = $('.first-counter');
	let counterLast = $('.last-counter');

	// cambio immagine a click su freccia avanti
	arrowRight.click(forward);

	// cambio immagine a click su freccia indietro
	arrowLeft.click(backwards);

	/************
	 * Functions
	 ************/
	function forward() {
		let activeImage = $('.active');
		let activeCounter = $('.active-counter');

		// scorrimento immagini
		activeImage.toggleClass('active');
		activeImage.next('img').toggleClass('active');

		if (activeImage.hasClass('last')) {
			imgFirst.toggleClass('active');
		}

		// scorrimento contatore
		activeCounter.toggleClass('active-counter');
		activeCounter.next('li').toggleClass('active-counter');

		if (activeCounter.hasClass('last-counter')) {
			counterFirst.toggleClass('active-counter');
		}
	}

	// funzione scorrimento indietro
	function backwards() {
		var activeImage = $('.active');
		var activeCounter = $('.active-counter');

		// scorrimento immagini
		activeImage.toggleClass('active');
		activeImage.prev('img').toggleClass('active');

		if (activeImage.hasClass('first')) {
			imgLast.toggleClass('active');
		}

		// scorrimento contatore
		activeCounter.toggleClass('active-counter');
		activeCounter.prev('li').toggleClass('active-counter');

		if (activeCounter.hasClass('first-counter')) {
			counterLast.toggleClass('active-counter');
		}
	}

	/****************
	 * Animate Scroll
	 ****************/
	function animateScroll(section) {
		$('html').animate(
			{
				scrollTop: section.offset().top,
			},
			800 //speed
		);
	}
}); // End Doc Ready
