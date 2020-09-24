$(document).ready(function() {
	// Show menu on click
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

	/***************
	 * Ajax requests
	 ***************/
	let tabs = [$('#tab1'), $('#tab2'), $('#tab3')];
	let endpoints = ['tab1.json', 'tab2.json', 'tab3.json'];
	let content = $('.info-section__content');

	// Chiamata ajax caricamento pagina
	for (let i = tabs.length - 1; i >= 0; i--) {
		ajaxRequest(endpoints[i], tabs[i], content);
	}

	// chiamate ajax click su tabs
	tabs[0].click(() => {
		ajaxOnClick(tabs[0], content, tabs[1], tabs[2], endpoints[0]);
	});
	tabs[1].click(() => {
		ajaxOnClick(tabs[1], content, tabs[0], tabs[2], endpoints[1]);
	});
	tabs[2].click(() => {
		ajaxOnClick(tabs[2], content, tabs[0], tabs[1], endpoints[2]);
	});

	// Validazione form
	const email = $('#email');
	const textarea = $('#message');

	$('.contacts__form').submit(() => {
		email.validity.valid
			? email.validationMessage('')
			: email.validationMessage('Enter an email address');
		textarea.validity.valid
			? textarea.validationMessage('')
			: textare.validationMessage('Enter a message');
	});
	/************
	 * Functions
	 ************/

	// Scorrimento slider in avanti
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

	// Scorrimento slider indietro
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

	// Animate Scroll
	function animateScroll(section) {
		$('html').animate(
			{
				scrollTop: section.offset().top,
			},
			800
		);
	}

	// Ajax request
	function ajaxRequest(endpoint, tab, content) {
		$.ajax({
			method: 'GET',
			url: 'src/assets/ajax/' + endpoint,
		}).done((response) => {
			tab.html(response.item.title);
			content.html(response.item.content);
		});
	}

	// gestione chiamate ajax su click
	function ajaxOnClick(activeTab, content, inactiveTab1, inactiveTab2, endpoint) {
		content.html('');
		$('.loader').show();
		setTimeout(() => {
			$('.loader').hide();
			ajaxRequest(endpoint, activeTab, content);
		}, 800);
		activeTab.addClass('active');
		inactiveTab1.removeClass('active');
		inactiveTab2.removeClass('active');
	}
}); // End Doc Ready
