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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/burger */ \"./src/assets/js/blocks/burger.js\");\n/* harmony import */ var _blocks_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/modal */ \"./src/assets/js/blocks/modal.js\");\n/* harmony import */ var _blocks_subnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/subnav */ \"./src/assets/js/blocks/subnav.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  Object(_blocks_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.burger');\r\n\r\n  Object(_blocks_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('#contactModal', '[data-modal=\"contact-modal\"]');\r\n  Object(_blocks_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('#story-modal', '[data-modal=\"story-modal\"]');\r\n  Object(_blocks_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('#share-modal', '[data-modal=\"share-modal\"]');\r\n\r\n  Object(_blocks_subnav__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.nav--mobile');\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/blocks/burger.js":
/*!****************************************!*\
  !*** ./src/assets/js/blocks/burger.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst burger = (burgetSelector) => {\r\n  const burgerBtn = document.querySelector(burgetSelector),\r\n        body = document.body;\r\n\r\n\r\n  burgerBtn.addEventListener('click', () => {\r\n    (body.classList.contains('show-sidebar')) ? body.classList.remove('show-sidebar') : body.classList.add('show-sidebar');\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (burger);\n\n//# sourceURL=webpack:///./src/assets/js/blocks/burger.js?");

/***/ }),

/***/ "./src/assets/js/blocks/modal.js":
/*!***************************************!*\
  !*** ./src/assets/js/blocks/modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst modal = (modalSelector, btnSelector) => {\r\n  const modalwind = document.querySelector(modalSelector),\r\n        modalClose = document.querySelectorAll('.modal__close'),\r\n        modalContent = document.querySelectorAll('.modal__content'),\r\n        modalBtn = document.querySelectorAll(btnSelector),\r\n        body = document.body;\r\n\r\n\r\n  const openModal = () => {\r\n          modalwind.classList.add('show');\r\n          body.classList.add('no-scroll');\r\n\r\n          setTimeout(() => {\r\n            modalContent.forEach(item => {\r\n              item.style.transform = 'none';\r\n              item.style.opacity = '1';\r\n            });\r\n          }, 200);\r\n        },\r\n        closeModal = () => {\r\n          body.classList.remove('no-scroll');\r\n\r\n          modalContent.forEach(item => {\r\n            item.removeAttribute('style');\r\n          });\r\n\r\n          setTimeout(() => {\r\n            modalwind.classList.remove('show');\r\n          }, 200);\r\n        };\r\n\r\n  modalBtn.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      openModal();\r\n    });\r\n  });\r\n\r\n  modalClose.forEach(close => {\r\n    close.addEventListener('click', () => {\r\n      closeModal();\r\n    });\r\n  });\r\n\r\n  modalwind.addEventListener('click', e => {\r\n    if (e.target == modalwind) {\r\n      closeModal();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./src/assets/js/blocks/modal.js?");

/***/ }),

/***/ "./src/assets/js/blocks/subnav.js":
/*!****************************************!*\
  !*** ./src/assets/js/blocks/subnav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst subnav = (navSelector) => {\r\n  const nav = document.querySelector(navSelector),\r\n        subNav = nav.querySelector('.subnav');\r\n\r\n  nav.addEventListener('click', e => {\r\n    const hasSub = e.currentTarget.querySelector('.has-subnav');\r\n    if (hasSub) {\r\n      if (!subNav.classList.contains('show')) {\r\n        setTimeout(() => {\r\n          subNav.classList.add('show');\r\n          subNav.querySelectorAll('.subnav__item').forEach(item => {\r\n            item.style.display = 'block';\r\n          });\r\n        }, 200);\r\n      }\r\n      else {\r\n        subNav.classList.remove('show');\r\n\r\n        subNav.querySelectorAll('.subnav__item').forEach(item => {\r\n          item.removeAttribute('style');\r\n        });\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (subnav);\n\n//# sourceURL=webpack:///./src/assets/js/blocks/subnav.js?");

/***/ })

/******/ });