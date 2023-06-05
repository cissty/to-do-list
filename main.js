/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n\r\n(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createSideBar() {\r\n    const stickSideBar = document.getElementById('stick-but');\r\n    const stickSvg = document.querySelector('.stick');\r\n    const sideBar = document.querySelector('.side-bar');\r\n    const userInfo = document.querySelector('.user-info');\r\n    const tasks = document.querySelector('.tasks');\r\n\r\n  let isBlue = false;\r\n\r\n  if (!stickSideBar || !stickSvg || !sideBar || !userInfo || !tasks) {\r\n    console.error('One or more required elements not found.');\r\n    return;\r\n  }\r\n\r\n  stickSideBar.addEventListener('click', ()=>{\r\n      \r\n      if (isBlue) {\r\n          stickSvg.style.color = ''; \r\n          isTrue();\r\n  \r\n        } else {\r\n          stickSvg.style.color = 'blue';\r\n          isTrue();\r\n  \r\n        }\r\n        isBlue = !isBlue; // Toggle the color state\r\n        console.log(isBlue)\r\n  \r\n  });\r\n  \r\n  sideBar.addEventListener('mouseenter', function() {\r\n      userInfo.style.display = 'flex';\r\n      tasks.style.display = 'flex';\r\n      sideBar.style.backgroundColor = '#fff';\r\n      sideBar.style.transition = 'width 0.5s ease-in-out, background-color 0.3s ease-in-out';\r\n    });\r\n  \r\n    sideBar.addEventListener('mouseleave', function() {\r\n      if (isBlue === true){\r\n          userInfo.style.display = 'flex';\r\n          tasks.style.display = 'flex';\r\n          sideBar.style.backgroundColor = '#fff';\r\n      }else{\r\n      userInfo.style.display = 'none';\r\n          tasks.style.display = 'none';\r\n          sideBar.style.backgroundColor = 'transparent'\r\n          sideBar.style.transition = 'width 0.5s ease-in-out, background-color 0.3s ease-in-out';\r\n  \r\n      }\r\n    });\r\n  \r\n    function isTrue(){\r\n      if (isBlue === true){\r\n          userInfo.style.display = 'flex';\r\n          tasks.style.display = 'flex';\r\n      }\r\n    }\r\n\r\n    return createSideBar\r\n  }\r\n  \r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSideBar); \n\n//# sourceURL=webpack://to-do-list/./src/sidebar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;