"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/input",{

/***/ "./components/table/index.jsx":
/*!************************************!*\
  !*** ./components/table/index.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Table\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ \"./components/table/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Table(param) {\n    var data = param.data, onRowClick = param.onRowClick;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().table),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: Object.keys(data[0]).map(function(key, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().th),\n                            children: key\n                        }, i + key, false, {\n                            fileName: \"E:\\\\Project\\\\DrawFigure\\\\frontend\\\\components\\\\table\\\\index.jsx\",\n                            lineNumber: 9,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\Project\\\\DrawFigure\\\\frontend\\\\components\\\\table\\\\index.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Project\\\\DrawFigure\\\\frontend\\\\components\\\\table\\\\index.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: data.map(function(row, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        onClick: function() {\n                            return nRowClick;\n                        },\n                        children: Object.values(row).map(function(value, j) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().td),\n                                children: value\n                            }, j + value, false, {\n                                fileName: \"E:\\\\Project\\\\DrawFigure\\\\frontend\\\\components\\\\table\\\\index.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, i, false, {\n                        fileName: \"E:\\\\Project\\\\DrawFigure\\\\frontend\\\\components\\\\table\\\\index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\Project\\\\DrawFigure\\\\frontend\\\\components\\\\table\\\\index.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Project\\\\DrawFigure\\\\frontend\\\\components\\\\table\\\\index.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXdDO0FBRWpDLFNBQVNDLEtBQUssQ0FBQyxLQUFtQixFQUFFO1FBQW5CQyxJQUFJLEdBQU4sS0FBbUIsQ0FBakJBLElBQUksRUFBQ0MsVUFBVSxHQUFqQixLQUFtQixDQUFaQSxVQUFVOztJQUNyQyxxQkFDRSw4REFBQ0MsT0FBSztRQUFDQyxTQUFTLEVBQUVMLGlFQUFZOzswQkFDNUIsOERBQUNNLE9BQUs7MEJBQ0osNEVBQUNDLElBQUU7OEJBQ0FDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDUCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLEdBQUcsRUFBRUMsQ0FBQzs2Q0FDL0IsOERBQUNDLElBQUU7NEJBQWVSLFNBQVMsRUFBRUwsOERBQVM7c0NBQ25DVyxHQUFHOzJCQURHQyxDQUFDLEdBQUdELEdBQUc7Ozs7aUNBRVg7cUJBQ04sQ0FBQzs7Ozs7d0JBQ0M7Ozs7O29CQUNDOzBCQUNSLDhEQUFDRyxPQUFLOzBCQUNIWixJQUFJLENBQUNRLEdBQUcsQ0FBQyxTQUFDSyxHQUFHLEVBQUVILENBQUM7eUNBQ2YsOERBQUNMLElBQUU7d0JBQVNTLE9BQU8sRUFBRTttQ0FBSUMsU0FBUzt5QkFBQTtrQ0FDL0JULE1BQU0sQ0FBQ1UsTUFBTSxDQUFDSCxHQUFHLENBQUMsQ0FBQ0wsR0FBRyxDQUFDLFNBQUNTLEtBQUssRUFBRUMsQ0FBQztpREFDL0IsOERBQUNDLElBQUU7Z0NBQWlCaEIsU0FBUyxFQUFFTCw4REFBUzswQ0FDckNtQixLQUFLOytCQURDQyxDQUFDLEdBQUdELEtBQUs7Ozs7cUNBRWI7eUJBQ04sQ0FBQzt1QkFMS1AsQ0FBQzs7Ozs2QkFNTDtpQkFDTixDQUFDOzs7OztvQkFDSTs7Ozs7O1lBQ0YsQ0FDVDtDQUNGO0FBekJlWCxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFibGUvaW5kZXguanN4P2FjODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZSh7IGRhdGEsb25Sb3dDbGljayB9KSB7XG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhWzBdKS5tYXAoKGtleSwgaSkgPT4gKFxuICAgICAgICAgICAgPHRoIGtleT17aSArIGtleX0gY2xhc3NOYW1lPXtzdHlsZXMudGh9PlxuICAgICAgICAgICAgICB7a2V5fVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtkYXRhLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgPHRyIGtleT17aX0gb25DbGljaz17KCk9Pm5Sb3dDbGlja30+XG4gICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhyb3cpLm1hcCgodmFsdWUsIGopID0+IChcbiAgICAgICAgICAgICAgPHRkIGtleT17aiArIHZhbHVlfSBjbGFzc05hbWU9e3N0eWxlcy50ZH0+XG4gICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJUYWJsZSIsImRhdGEiLCJvblJvd0NsaWNrIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImkiLCJ0aCIsInRib2R5Iiwicm93Iiwib25DbGljayIsIm5Sb3dDbGljayIsInZhbHVlcyIsInZhbHVlIiwiaiIsInRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/table/index.jsx\n"));

/***/ })

});