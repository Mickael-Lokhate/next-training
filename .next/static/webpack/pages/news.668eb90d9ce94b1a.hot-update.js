"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mlokhate_Documents_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_mlokhate_Documents_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mlokhate_Documents_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw1, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw1);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _throw(e) {\n    throw e;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SearchForm() {\n    _s();\n    // const [searchQuery, setSearchQuery] = useState(\"react\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        text: \"react\",\n        coolMsg: \"\"\n    }), ref = ref !== null ? ref : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var handleTextChange = function(e) {\n        setSearchQuery(e.target.value);\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        router.push(\"/news/?searchTerm=\".concat(searchQuery));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: searchQuery,\n                onChange: handleTextChange\n            }, void 0, false, {\n                fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeHolder: \"Write something\"\n            }, void 0, false, {\n                fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchForm, \"qbKjbTxIfjiavT8y59Us6pss0Do=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchForm;\nfunction News(param) {\n    var news = param.news;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        mainTitle: \"News\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"List of news\"\n                }, void 0, false, {\n                    fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchForm, {}, void 0, false, {\n                    fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                news.map(function(n, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: n.url,\n                            target: \"_blank\",\n                            children: n.title\n                        }, void 0, false, {\n                            fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, _this)\n                    }, i, false, {\n                        fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mlokhate/Documents/next-test/pages/news.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_c1 = News;\nNews.getInitialProps = function() {\n    var _ref = _asyncToGenerator(_Users_mlokhate_Documents_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var query, news, res;\n        return _Users_mlokhate_Documents_next_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    query = param.query;\n                    ;\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return fetch(\"http://hn.algolia.com/api/v1/search?query=\".concat(query.searchTerm));\n                case 5:\n                    res = _ctx.sent;\n                    _ctx.next = 8;\n                    return res.json();\n                case 8:\n                    news = _ctx.sent;\n                    _ctx.next = 15;\n                    break;\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    console.log(\"Error : \", _ctx.t0);\n                    news = [];\n                case 15:\n                    return _ctx.abrupt(\"return\", {\n                        news: news.hits\n                    });\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                11\n            ]\n        ]);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c, _c1;\n$RefreshReg$(_c, \"SearchForm\");\n$RefreshReg$(_c1, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy5qcz9iMjhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmZ1bmN0aW9uIFNlYXJjaEZvcm0oKSB7XG4gIC8vIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJyZWFjdFwiKTtcbiAgY29uc3QgW10gPSB1c2VTdGF0ZSh7XG4gICAgdGV4dDogXCJyZWFjdFwiLFxuICAgIGNvb2xNc2c6IFwiXCIsXG4gIH0pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcm91dGVyLnB1c2goYC9uZXdzLz9zZWFyY2hUZXJtPSR7c2VhcmNoUXVlcnl9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZUhvbGRlcj1cIldyaXRlIHNvbWV0aGluZ1wiIC8+XG4gICAgICA8YnV0dG9uPlNlYXJjaDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTmV3cyh7IG5ld3MgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbWFpblRpdGxlPXtcIk5ld3NcIn0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+TGlzdCBvZiBuZXdzPC9oMj5cbiAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIHtuZXdzLm1hcCgobiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cCBrZXk9e2l9PlxuICAgICAgICAgICAgICA8YSBocmVmPXtuLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAge24udGl0bGV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5OZXdzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgbGV0IG5ld3M7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2huLmFsZ29saWEuY29tL2FwaS92MS9zZWFyY2g/cXVlcnk9JHtxdWVyeS5zZWFyY2hUZXJtfWBcbiAgICApO1xuXG4gICAgbmV3cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvciA6IFwiLCBlcnJvcik7XG4gICAgbmV3cyA9IFtdO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmV3czogbmV3cy5oaXRzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIlNlYXJjaEZvcm0iLCJ0ZXh0IiwiY29vbE1zZyIsInJvdXRlciIsImhhbmRsZVRleHRDaGFuZ2UiLCJlIiwic2V0U2VhcmNoUXVlcnkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInNlYXJjaFF1ZXJ5IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZUhvbGRlciIsImJ1dHRvbiIsIk5ld3MiLCJuZXdzIiwibWFpblRpdGxlIiwiZGl2IiwiaDIiLCJociIsIm1hcCIsIm4iLCJpIiwicCIsImEiLCJocmVmIiwidXJsIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInJlcyIsImZldGNoIiwic2VhcmNoVGVybSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaGl0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news.js\n");

/***/ })

});