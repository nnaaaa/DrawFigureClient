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

/***/ "./utils/validation.js":
/*!*****************************!*\
  !*** ./utils/validation.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"figureValidate\": function() { return /* binding */ figureValidate; },\n/* harmony export */   \"loginValidate\": function() { return /* binding */ loginValidate; },\n/* harmony export */   \"registerValidate\": function() { return /* binding */ registerValidate; }\n/* harmony export */ });\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n\nvar loginValidate = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({\n    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(\"Email is required\").email(\"Invalid Email\"),\n    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(\"Password is required\")\n});\nvar registerValidate = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({\n    firstName: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(\"First Name is required\"),\n    lastName: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(\"Last Name is required\"),\n    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(\"Email is required\").email(\"Invalid Email\"),\n    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(\"Password is required\"),\n    confirmPassword: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(\"Confirm Password is required\").oneOf([\n        yup__WEBPACK_IMPORTED_MODULE_0__.ref(\"password\"),\n        null\n    ], \"Passwords must match\")\n});\nvar figureValidate = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({\n    symbol: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(\"Symbol is required\").length(1, \"Symbol must be 1 character\"),\n    measurement: yup__WEBPACK_IMPORTED_MODULE_0__.number().required(\"Measurement is required\").integer(\"Measurement must be an integer\"),\n    color: yup__WEBPACK_IMPORTED_MODULE_0__.string().required(\"Color is required\").matches(/#(?:[0-9a-fA-F]{3,4}){1,2}/g)\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy92YWxpZGF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFFbkIsSUFBTUMsYUFBYSxHQUFHRCx1Q0FBVSxFQUFFLENBQUNHLEtBQUssQ0FBQztJQUM5Q0MsS0FBSyxFQUFFSix1Q0FBVSxFQUFFLENBQUNNLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDRixLQUFLLENBQUMsZUFBZSxDQUFDO0lBQ3hFRyxRQUFRLEVBQUVQLHVDQUFVLEVBQUUsQ0FBQ00sUUFBUSxDQUFDLHNCQUFzQixDQUFDO0NBQ3hELENBQUM7QUFFSyxJQUFNRSxnQkFBZ0IsR0FBR1IsdUNBQVUsRUFBRSxDQUFDRyxLQUFLLENBQUM7SUFDakRNLFNBQVMsRUFBRVQsdUNBQVUsRUFBRSxDQUFDTSxRQUFRLENBQUMsd0JBQXdCLENBQUM7SUFDMURJLFFBQVEsRUFBRVYsdUNBQVUsRUFBRSxDQUFDTSxRQUFRLENBQUMsdUJBQXVCLENBQUM7SUFDeERGLEtBQUssRUFBRUosdUNBQVUsRUFBRSxDQUFDTSxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0YsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUN4RUcsUUFBUSxFQUFFUCx1Q0FBVSxFQUFFLENBQUNNLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztJQUN2REssZUFBZSxFQUFFWCx1Q0FDUixFQUFFLENBQ1JNLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUN4Q00sS0FBSyxDQUFDO1FBQUNaLG9DQUFPLENBQUMsVUFBVSxDQUFDO1FBQUUsSUFBSTtLQUFDLEVBQUUsc0JBQXNCLENBQUM7Q0FDOUQsQ0FBQztBQUdLLElBQU1jLGNBQWMsR0FBR2QsdUNBQVUsRUFBRSxDQUFDRyxLQUFLLENBQUM7SUFDL0NZLE1BQU0sRUFBRWYsdUNBQVUsRUFBRSxDQUFDTSxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQ1UsTUFBTSxDQUFDLENBQUMsRUFBRSw0QkFBNEIsQ0FBQztJQUMzRkMsV0FBVyxFQUFFakIsdUNBQVUsRUFBRSxDQUFDTSxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQ2EsT0FBTyxDQUFDLGdDQUFnQyxDQUFDO0lBQ3ZHQyxLQUFLLEVBQUVwQix1Q0FBVSxFQUFFLENBQUNNLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDZSxPQUFPLCtCQUErQjtDQUN6RixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL3ZhbGlkYXRpb24uanM/ZGU1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiXG5cbmV4cG9ydCBjb25zdCBsb2dpblZhbGlkYXRlID0geXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgZW1haWw6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVtYWlsIGlzIHJlcXVpcmVkXCIpLmVtYWlsKFwiSW52YWxpZCBFbWFpbFwiKSxcbiAgcGFzc3dvcmQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIpLFxufSlcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVmFsaWRhdGUgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICBmaXJzdE5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkZpcnN0IE5hbWUgaXMgcmVxdWlyZWRcIiksXG4gIGxhc3ROYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJMYXN0IE5hbWUgaXMgcmVxdWlyZWRcIiksXG4gIGVtYWlsOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbWFpbCBpcyByZXF1aXJlZFwiKS5lbWFpbChcIkludmFsaWQgRW1haWxcIiksXG4gIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiKSxcbiAgY29uZmlybVBhc3N3b3JkOiB5dXBcbiAgICAuc3RyaW5nKClcbiAgICAucmVxdWlyZWQoXCJDb25maXJtIFBhc3N3b3JkIGlzIHJlcXVpcmVkXCIpXG4gICAgLm9uZU9mKFt5dXAucmVmKFwicGFzc3dvcmRcIiksIG51bGxdLCBcIlBhc3N3b3JkcyBtdXN0IG1hdGNoXCIpLFxufSlcblxuXG5leHBvcnQgY29uc3QgZmlndXJlVmFsaWRhdGUgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICBzeW1ib2w6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlN5bWJvbCBpcyByZXF1aXJlZFwiKS5sZW5ndGgoMSwgXCJTeW1ib2wgbXVzdCBiZSAxIGNoYXJhY3RlclwiKSxcbiAgbWVhc3VyZW1lbnQ6IHl1cC5udW1iZXIoKS5yZXF1aXJlZChcIk1lYXN1cmVtZW50IGlzIHJlcXVpcmVkXCIpLmludGVnZXIoXCJNZWFzdXJlbWVudCBtdXN0IGJlIGFuIGludGVnZXJcIiksXG4gIGNvbG9yOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJDb2xvciBpcyByZXF1aXJlZFwiKS5tYXRjaGVzKC8jKD86WzAtOWEtZkEtRl17Myw0fSl7MSwyfS9nKSxcbn0pXG5cbiJdLCJuYW1lcyI6WyJ5dXAiLCJsb2dpblZhbGlkYXRlIiwib2JqZWN0Iiwic2hhcGUiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJyZWdpc3RlclZhbGlkYXRlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjb25maXJtUGFzc3dvcmQiLCJvbmVPZiIsInJlZiIsImZpZ3VyZVZhbGlkYXRlIiwic3ltYm9sIiwibGVuZ3RoIiwibWVhc3VyZW1lbnQiLCJudW1iZXIiLCJpbnRlZ2VyIiwiY29sb3IiLCJtYXRjaGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/validation.js\n"));

/***/ })

});