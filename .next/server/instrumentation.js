"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(instrument)/./instrumentation.js":
/*!****************************!*\
  !*** ./instrumentation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(instrument)/./lib/db.js\");\n\nasync function register() {\n    console.log(\"Connecting to database...\");\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRXhCLGVBQWVDO0lBQ3JCQyxRQUFRQyxHQUFHLENBQUM7SUFDWixNQUFNSCxtREFBT0E7QUFDZCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbW9uZ28vLi9pbnN0cnVtZW50YXRpb24uanM/MDdlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdCBmcm9tIFwiQC9saWIvZGJcIjsgXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlcigpIHsgXG4gY29uc29sZS5sb2coXCJDb25uZWN0aW5nIHRvIGRhdGFiYXNlLi4uXCIpOyBcbiBhd2FpdCBjb25uZWN0KCk7IFxufSAiXSwibmFtZXMiOlsiY29ubmVjdCIsInJlZ2lzdGVyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.js\n");

/***/ }),

/***/ "(instrument)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGO_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            console.log(\"DB connected\");\n        // console.debug(mongoose)\n        // return mongoose\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7QUFFekMsSUFBSSxDQUFDSCxhQUFhO0lBQ2QsTUFBTSxJQUFJSSxNQUNOO0FBRVI7QUFFQSxJQUFJQyxTQUFTQyxPQUFPUCxRQUFRO0FBRTVCLElBQUksQ0FBQ00sUUFBUTtJQUNUQSxTQUFTQyxPQUFPUCxRQUFRLEdBQUc7UUFBRVEsTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDM0Q7QUFFQSxlQUFlQztJQUNYLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNiLE9BQU9GLE9BQU9FLElBQUk7SUFDdEI7SUFDQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNqQixNQUFNRSxPQUFPO1lBQ1RDLGdCQUFnQjtRQUNwQjtRQUNBTixPQUFPRyxPQUFPLEdBQUdULHVEQUFnQixDQUFDQyxhQUFhVSxNQUM5Q0csSUFBSSxDQUFDZCxDQUFBQTtZQUNGZSxRQUFRQyxHQUFHLENBQUM7UUFDWiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ3RCO0lBQ0o7SUFDQSxJQUFJO1FBQ0FWLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3RDLEVBQUUsT0FBT1EsR0FBRztRQUNSWCxPQUFPRyxPQUFPLEdBQUc7UUFDakIsTUFBTVE7SUFDVjtJQUVBLE9BQU9YLE9BQU9FLElBQUk7QUFDdEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbW9uZ28vLi9saWIvZGIuanM/M2RjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJXG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudicsXG4gICAgKVxufVxuXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlXG5cbmlmICghY2FjaGVkKSB7XG4gICAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICAgIGlmIChjYWNoZWQuY29ubikge1xuICAgICAgICByZXR1cm4gY2FjaGVkLmNvbm5cbiAgICB9XG4gICAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cylcbiAgICAgICAgLnRoZW4obW9uZ29vc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RCIGNvbm5lY3RlZCcpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmRlYnVnKG1vbmdvb3NlKVxuICAgICAgICAgICAgLy8gcmV0dXJuIG1vbmdvb3NlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2VcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbFxuICAgICAgICB0aHJvdyBlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdCJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./lib/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.js"));
module.exports = __webpack_exports__;

})();