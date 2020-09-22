$(document).ready(function() {
	/**********************
	 * Slider functionality
	 **********************/

	let imgFirst = $('.first');
	let imgLast = $('.last');
	let arrowRight = $('.arrow-right');
	let arrowLeft = $('.arrow-left');
	// let counterFirst = $('.first-counter');
	// let counterLast = $('.last-counter');

	// cambio immagine a click su freccia avanti
	arrowRight.click(forward);

	// cambio immagine a click su freccia indietro
	arrowLeft.click(backwards);

	/************
	 * Functions
	 ************/

	function forward() {
		let activeImage = $('.active');
		// let activeCounter = $('.active-counter')

		// scorrimento immagini
		activeImage.toggleClass('active');
		activeImage.next('img').toggleClass('active');

		if (activeImage.hasClass('last')) {
			imgFirst.toggleClass('active');
		}

		// scorrimento contatore
		// activeCounter.toggleClass('active-counter');
		// activeCounter.next('li').toggleClass('active-counter');

		// if (activeCounter.hasClass('last-counter')) {
		//     counterFirst.toggleClass('active-counter');
		// }
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

		// // scorrimento contatore
		// activeCounter.toggleClass('active-counter');
		// activeCounter.prev('li').toggleClass('active-counter');

		// if (activeCounter.hasClass('first-counter')) {
		//     counterLast.toggleClass('active-counter');
		// }
	}
}); // End Doc Ready
