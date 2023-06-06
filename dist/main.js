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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n\r\n(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.createSideBar)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSideBar: () => (/* binding */ createSideBar)\n/* harmony export */ });\nfunction createSideBar() {\r\n    const stickSideBar = document.getElementById('stick-but');\r\n    const stickSvg = document.querySelector('.stick');\r\n    const sideBar = document.querySelector('.side-bar');\r\n    const userInfo = document.querySelector('.user-info');\r\n    const tasks = document.querySelector('.tasks');\r\n\r\n  let isBlue = false;\r\n\r\n \r\n\r\n  stickSideBar.addEventListener('click', ()=>{\r\n      \r\n      if (isBlue) {\r\n          stickSvg.style.color = ''; \r\n          isTrue();\r\n  \r\n        } else {\r\n          stickSvg.style.color = 'blue';\r\n          isTrue();\r\n  \r\n        }\r\n        isBlue = !isBlue; // Toggle the color state\r\n        console.log(isBlue)\r\n  \r\n  });\r\n  \r\n  sideBar.addEventListener('mouseenter', function() {\r\n      userInfo.style.display = 'flex';\r\n      tasks.style.display = 'flex';\r\n      sideBar.style.backgroundColor = '#fff';\r\n      sideBar.style.transition = 'width 0.5s ease-in-out, background-color 0.3s ease-in-out';\r\n    });\r\n  \r\n    sideBar.addEventListener('mouseleave', function() {\r\n      if (isBlue === true){\r\n          userInfo.style.display = 'flex';\r\n          tasks.style.display = 'flex';\r\n          sideBar.style.backgroundColor = '#fff';\r\n      }else{\r\n      userInfo.style.display = 'none';\r\n          tasks.style.display = 'none';\r\n          sideBar.style.backgroundColor = 'transparent'\r\n          sideBar.style.transition = 'width 0.5s ease-in-out, background-color 0.3s ease-in-out';\r\n  \r\n      }\r\n    });\r\n  \r\n    function isTrue(){\r\n      if (isBlue === true){\r\n          userInfo.style.display = 'flex';\r\n          tasks.style.display = 'flex';\r\n      }\r\n    }\r\n\r\n    return createSideBar\r\n  }\r\n\r\nconst currentDate = new Date();\r\n\r\n// Get the day, date, and month\r\nconst days = [\"SUN\", \"MON\", \"TUE\", \"WED\", \"THU\", \"FRI\", \"SAT\"];\r\nconst day = days[currentDate.getDay()];\r\nconst date = currentDate.getDate();\r\nconst month = currentDate.toLocaleString(\"en-US\", { month: \"long\" });\r\n\r\n// Update the date section\r\nconst dateDay = document.querySelector(\".date-day\");\r\nconst dateNum = document.querySelector(\".date-num\");\r\nconst dateMon = document.querySelector(\".date-mon\");\r\n\r\ndateDay.textContent = day;\r\ndateNum.textContent = '\\u00A0\\u00A0' + date;\r\ndateMon.textContent = month;\r\n\r\nconst dayTime = document.querySelector('.day-time');\r\nconst currentTime = new Date();\r\nconst currentHour = currentTime.getHours();\r\n\r\nlet greeting;\r\n\r\nif (currentHour < 12) {\r\n  greeting = 'Good Morning';\r\n} else if (currentHour < 18) {\r\n  greeting = 'Good Afternoon';\r\n} else {\r\n  greeting = 'Good Evening';\r\n}\r\ndayTime.textContent = `${greeting}, Samuuuuuuuuuuur`;\r\n\r\nconst textArea = document.getElementById('myTextArea');\r\nconst uploadButton = document.getElementById('up-arrow');\r\nconst taskContainer = document.querySelector('.task-container');\r\nconst dateContainer = document.querySelector('.date-date');\r\n\r\nuploadButton.addEventListener('click', addTask);\r\ntextArea.addEventListener('keydown', function(event) {\r\n  if (event.keyCode === 13) {\r\n    event.preventDefault(); \r\n    addTask();\r\n  }\r\n});\r\n\r\nfunction addTask() {\r\n  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\r\n  svg.setAttribute('width', '24');\r\n  svg.setAttribute('height', '24');\r\n\r\n  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');\r\n  circle.setAttribute('cx', '12');\r\n  circle.setAttribute('cy', '12');\r\n  circle.setAttribute('r', '10');\r\n  circle.setAttribute('fill', 'white');\r\n  circle.setAttribute('stroke', 'black');\r\n  circle.setAttribute('stroke-width', '2');\r\n\r\n  circle.addEventListener('click', () => {\r\n    addedTask.classList.toggle('done');\r\n  });\r\n\r\n  const button1 = document.createElement('button');\r\n  button1.id = 'stick-but';\r\n\r\n  const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\r\n  svg1.classList.add('stick');\r\n  svg1.setAttribute('width', '24');\r\n  svg1.setAttribute('height', '24');\r\n  svg1.setAttribute('viewBox', '0 0 24 24');\r\n\r\n  const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');\r\n  path1.setAttribute('fill', 'currentColor');\r\n  path1.setAttribute('d', 'M21.407 10.779a.8.8 0 01-1.131 1.131l-.19-.19-4.87 4.468-1.21 3.538a1 1 0 01-1.653.383l-3.391-3.39-3.677 3.677a.8.8 0 01-1.131-1.132l3.676-3.677-3.1-3.1a1 1 0 01.39-1.655l3.552-1.189 4.446-4.892-.196-.195a.799.799 0 111.131-1.131l7.354 7.354zm-2.454-.192L14.25 5.884l-4.675 5.144-3.029 1.012 6.258 6.258 1.03-3.013 5.119-4.698z');\r\n\r\n  svg1.appendChild(path1);\r\n  button1.appendChild(svg1);\r\n\r\n  const button2 = document.createElement('button');\r\n  button2.id = 'stick-but';\r\n\r\n  const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\r\n  svg2.setAttribute('width', '24');\r\n  svg2.setAttribute('height', '24');\r\n  svg2.setAttribute('viewBox', '0 0 24 24');\r\n  svg2.setAttribute('fill', 'none');\r\n\r\n  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');\r\n  path2.setAttribute('d', 'M16.4 6.8l-9.6 9.6M6.8 6.8l9.6 9.6');\r\n  path2.setAttribute('stroke', 'currentColor');\r\n  path2.setAttribute('stroke-width', '1.6');\r\n  path2.setAttribute('stroke-linecap', 'round');\r\n  path2.setAttribute('stroke-linejoin', 'round');\r\n\r\n  svg2.appendChild(path2);\r\n  button2.appendChild(svg2);\r\n\r\n  svg.appendChild(circle);\r\n  const inputText = textArea.value.trim();\r\n\r\n  if (inputText === '') {\r\n    return;\r\n  }\r\n\r\n  const addedTask = document.createElement('div');\r\n  addedTask.classList.add('added-task');\r\n\r\n  const listItem = document.createElement('p');\r\n  listItem.classList.add('copy-p');\r\n  listItem.textContent = inputText;\r\n\r\n  listItem.addEventListener('click', () => {\r\n    if (!addedTask.classList.contains('done')) {\r\n      listItem.contentEditable = true;\r\n      listItem.focus();\r\n    }\r\n  });\r\n\r\n  listItem.addEventListener('blur', () => {\r\n    listItem.contentEditable = false;\r\n  });\r\n\r\n  addedTask.appendChild(svg);\r\n  addedTask.appendChild(listItem);\r\n\r\n  taskContainer.appendChild(addedTask);\r\n  addedTask.appendChild(button1);\r\n  addedTask.appendChild(button2);\r\n\r\n  textArea.value = '';\r\n\r\n  button2.addEventListener('click', () => {\r\n    addedTask.remove();\r\n  });\r\n\r\n  button1.addEventListener('click', () => {\r\n    taskContainer.insertBefore(addedTask, dateContainer.nextSibling);\r\n    button1.classList.toggle('pinned');\r\n  });\r\n}\r\n   \n\n//# sourceURL=webpack://to-do-list/./src/sidebar.js?");

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