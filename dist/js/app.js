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
  /**
   * Show menu on click
   */
  var hamburger = $('.hamburger');
  var menu = $('.navbar__items');
  hamburger.click(function () {
    menu.toggle();
  });
  $('body').on('click', '.navbar__link', function () {
    menu.hide();
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
  /************
   * Functions
   ************/

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
  } // funzione scorrimento indietro


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