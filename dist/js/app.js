/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // Show menu on click
  var hamburger = $('.hamburger');
  var menu = $('.navbar__items');
  hamburger.click(function () {
    menu.toggle();
  }); // Hide link menu on click in modbile mode

  var mediaQuery = window.matchMedia('(min-width: 768px)');

  if (!mediaQuery.matches) {
    $('.navbar__link').click(function () {
      menu.hide();
    });
  } // Scroll to section on click


  $('.we-are-link').click(function () {
    animateScroll($('#we-are'));
  });
  $('.we-do-link').click(function () {
    animateScroll($('#we-do'));
  });
  $('.careers-link').click(function () {
    animateScroll($('#careers'));
  });
  $('.contacts-link').click(function () {
    animateScroll($('#contacts'));
  }); // Cambio visibilità header

  var header = $('.header');
  $(window).scroll(function () {
    var top = $(window).scrollTop();

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

  var imgFirst = $('.first');
  var imgLast = $('.last');
  var arrowRight = $('.arrow-right');
  var arrowLeft = $('.arrow-left');
  var counterFirst = $('.first-counter');
  var counterLast = $('.last-counter'); // cambio immagine a click su freccia avanti

  arrowRight.click(forward); // cambio immagine a click su freccia indietro

  arrowLeft.click(backwards);
  /***************
   * Ajax requests
   ***************/

  var tabs = [$('#tab1'), $('#tab2'), $('#tab3')];
  var endpoints = ['tab1.json', 'tab2.json', 'tab3.json'];
  var content = $('.info-section__content'); // Chiamata ajax caricamento pagina

  for (var i = tabs.length - 1; i >= 0; i--) {
    ajaxRequest(endpoints[i], tabs[i], content);
  } // chiamate ajax click su tabs


  tabs[0].click(function () {
    ajaxOnClick(tabs[0], content, tabs[1], tabs[2], endpoints[0]);
  });
  tabs[1].click(function () {
    ajaxOnClick(tabs[1], content, tabs[0], tabs[2], endpoints[1]);
  });
  tabs[2].click(function () {
    ajaxOnClick(tabs[2], content, tabs[0], tabs[1], endpoints[2]);
  }); // Validazione form

  var email = $('#email');
  var textarea = $('#message');
  $('.contacts__form').submit(function () {
    email.validity.valid ? email.validationMessage('') : email.validationMessage('Enter an email address');
    textarea.validity.valid ? textarea.validationMessage('') : textare.validationMessage('Enter a message');
  }); // Nascondere banner coockie policy

  $('.policy__button').click(function () {
    $(this).parent().hide();
  });
  /************
   * Functions
   ************/
  // Scorrimento slider in avanti

  function forward() {
    var activeImage = $('.active');
    var activeCounter = $('.active-counter'); // scorrimento immagini

    activeImage.toggleClass('active');
    activeImage.next('img').toggleClass('active');

    if (activeImage.hasClass('last')) {
      imgFirst.toggleClass('active');
    } // scorrimento contatore


    activeCounter.toggleClass('active-counter');
    activeCounter.next('li').toggleClass('active-counter');

    if (activeCounter.hasClass('last-counter')) {
      counterFirst.toggleClass('active-counter');
    }
  } // Scorrimento slider indietro


  function backwards() {
    var activeImage = $('.active');
    var activeCounter = $('.active-counter'); // scorrimento immagini

    activeImage.toggleClass('active');
    activeImage.prev('img').toggleClass('active');

    if (activeImage.hasClass('first')) {
      imgLast.toggleClass('active');
    } // scorrimento contatore


    activeCounter.toggleClass('active-counter');
    activeCounter.prev('li').toggleClass('active-counter');

    if (activeCounter.hasClass('first-counter')) {
      counterLast.toggleClass('active-counter');
    }
  } // Animate Scroll


  function animateScroll(section) {
    $('html').animate({
      scrollTop: section.offset().top
    }, 800);
  } // Ajax request


  function ajaxRequest(endpoint, tab, content) {
    $.ajax({
      method: 'GET',
      url: 'src/assets/ajax/' + endpoint
    }).done(function (response) {
      tab.html(response.item.title);
      content.html(response.item.content);
    });
  } // gestione chiamate ajax su click


  function ajaxOnClick(activeTab, content, inactiveTab1, inactiveTab2, endpoint) {
    content.html('');
    $('.loader').show();
    setTimeout(function () {
      $('.loader').hide();
      ajaxRequest(endpoint, activeTab, content);
    }, 800);
    activeTab.addClass('active');
    inactiveTab1.removeClass('active');
    inactiveTab2.removeClass('active');
  }
}); // End Doc Ready

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/riccardo/Documents/PG_test/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/riccardo/Documents/PG_test/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });