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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mdb_react_ui_kit_dist_css_mdb_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdb-react-ui-kit/dist/css/mdb.min.css */ \"./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css\");\n/* harmony import */ var mdb_react_ui_kit_dist_css_mdb_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdb_react_ui_kit_dist_css_mdb_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_css_flickity_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/flickity.min.css */ \"./public/css/flickity.min.css\");\n/* harmony import */ var _public_css_flickity_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_flickity_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_fonts_hezareh_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/fonts-hezareh.css */ \"./public/css/fonts-hezareh.css\");\n/* harmony import */ var _public_css_fonts_hezareh_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_fonts_hezareh_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../server/apollo */ \"./server/apollo.js\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _src_createEmotionCache__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/createEmotionCache */ \"./src/createEmotionCache.ts\");\n/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! stylis-plugin-rtl */ \"stylis-plugin-rtl\");\n/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\n/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/theme */ \"./src/theme.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Client-side cache, shared for the whole session of the user in the browser.\nconst clientSideEmotionCache = (0,_src_createEmotionCache__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\nconst cacheRtl = _emotion_cache__WEBPACK_IMPORTED_MODULE_12___default()({\n    key: 'muirtl',\n    stylisPlugins: [\n        (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_14___default())\n    ]\n});\nfunction MyApp(props) {\n    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_9__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n        __source: {\n            fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {\n            client: _server_apollo__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n            __source: {\n                fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.CacheProvider, {\n                value: cacheRtl,\n                __source: {\n                    fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.CacheProvider, {\n                    value: emotionCache,\n                    __source: {\n                        fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            __source: {\n                                fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                                    __source: {\n                                        fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: \"My page\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                                    name: \"viewport\",\n                                    content: \"initial-scale=1, width=device-width\",\n                                    __source: {\n                                        fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {\n                            theme: _src_theme__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n                            __source: {\n                                fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    __source: {\n                                        fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                                    ...pageProps,\n                                    __source: {\n                                        fileName: \"/home/mordad/Documents/Programming/React/test/MUI-TypeScript-NextJS/pages/_app.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNQO0FBQ0M7QUFFVjtBQUU4QjtBQUViO0FBRUk7QUFDdkI7QUFDVTtBQUNjO0FBQ2Y7QUFDRztBQUNrQjtBQUNqQjtBQUNQO0FBQ0Y7QUFFaEMsRUFBOEU7QUFDOUUsS0FBSyxDQUFDYSxzQkFBc0IsR0FBR0osb0VBQWtCO0FBS2pELEtBQUssQ0FBQ0ssUUFBUSxHQUFHTixzREFBVyxDQUFDLENBQUM7SUFDNUJPLEdBQUcsRUFBRSxDQUFRO0lBQ2JDLGFBQWEsRUFBRSxDQUFDTjtRQUFBQSwyREFBUztJQUFBLENBQUM7QUFDNUIsQ0FBQztBQUNjLFFBQVEsQ0FBQ08sS0FBSyxDQUFDQyxLQUFpQixFQUFFLENBQUM7SUFDaEQsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxZQUFZLEVBQUdQLHNCQUFzQixHQUFFUSxTQUFTLEVBQUMsQ0FBQyxHQUFHSCxLQUFLO0lBQzdFLE1BQU0sc0VBQ0hiLGlEQUFRO1FBQUNNLEtBQUssRUFBRUEscURBQUs7Ozs7Ozs7dUZBQ25CVCwwREFBYztZQUFDSyxNQUFNLEVBQUVBLHVEQUFNOzs7Ozs7OzJGQUM3Qk4seURBQWE7Z0JBQUNxQixLQUFLLEVBQUVSLFFBQVE7Ozs7Ozs7Z0dBQzNCYix5REFBYTtvQkFBQ3FCLEtBQUssRUFBRUYsWUFBWTs7Ozs7Ozs7OEZBQy9CaEIsa0RBQUk7Ozs7Ozs7O3FHQUNGbUIsQ0FBSzs7Ozs7Ozs4Q0FBQyxDQUFPOztxR0FDYkMsQ0FBSTtvQ0FDSEMsSUFBSSxFQUFDLENBQVU7b0NBQ2ZDLE9BQU8sRUFBQyxDQUFxQzs7Ozs7Ozs7Ozs4RkFHaERwQixnRUFBYTs0QkFBQ00sS0FBSyxFQUFFQSxtREFBSzs7Ozs7Ozs7cUdBRXhCVCxrRUFBVzs7Ozs7Ozs7cUdBQ1hnQixTQUFTO3VDQUFLRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUFPcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm1kYi1yZWFjdC11aS1raXQvZGlzdC9jc3MvbWRiLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9jc3MvZmxpY2tpdHkubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9mb250cy1oZXphcmVoLmNzc1wiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciwgRW1vdGlvbkNhY2hlIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vc2VydmVyL2Fwb2xsb1wiO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSBcIi4uL3NyYy9jcmVhdGVFbW90aW9uQ2FjaGVcIjtcbmltcG9ydCBydGxQbHVnaW4gZnJvbSAnc3R5bGlzLXBsdWdpbi1ydGwnO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zcmMvdGhlbWVcIjtcblxuLy8gQ2xpZW50LXNpZGUgY2FjaGUsIHNoYXJlZCBmb3IgdGhlIHdob2xlIHNlc3Npb24gb2YgdGhlIHVzZXIgaW4gdGhlIGJyb3dzZXIuXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cbmludGVyZmFjZSBNeUFwcFByb3BzIGV4dGVuZHMgQXBwUHJvcHMge1xuICBlbW90aW9uQ2FjaGU/OiBFbW90aW9uQ2FjaGU7XG59XG5jb25zdCBjYWNoZVJ0bCA9IGNyZWF0ZUNhY2hlKHtcbiAga2V5OiAnbXVpcnRsJyxcbiAgc3R5bGlzUGx1Z2luczogW3J0bFBsdWdpbl0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzOiBNeUFwcFByb3BzKSB7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBlbW90aW9uQ2FjaGUgPSBjbGllbnRTaWRlRW1vdGlvbkNhY2hlLCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtjYWNoZVJ0bH0+XG4gICAgICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtlbW90aW9uQ2FjaGV9PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPk15IHBhZ2U8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgICAgICAgPC9DYWNoZVByb3ZpZGVyPlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FjaGVQcm92aWRlciIsIkFwb2xsb1Byb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJIZWFkIiwiUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiY2xpZW50IiwiY3JlYXRlQ2FjaGUiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJydGxQbHVnaW4iLCJzdG9yZSIsInRoZW1lIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsImNhY2hlUnRsIiwia2V5Iiwic3R5bGlzUGx1Z2lucyIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJlbW90aW9uQ2FjaGUiLCJwYWdlUHJvcHMiLCJ2YWx1ZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./server/apollo.js":
/*!**************************!*\
  !*** ./server/apollo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst API_URI = `${\"http://localhost:5000\"}/graphql`;\nconst apolloClient = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: API_URI,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apolloClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvYXBvbGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwRDtBQUUxRCxLQUFLLENBQUNFLE9BQU8sTUFBTUMsdUJBQWtDLENBQUMsUUFBUTtBQUU5RCxLQUFLLENBQUNHLFlBQVksR0FBRyxHQUFHLENBQUNOLHdEQUFZLENBQUMsQ0FBQztJQUNyQ08sR0FBRyxFQUFFTCxPQUFPO0lBQ1pNLEtBQUssRUFBRSxHQUFHLENBQUNQLHlEQUFhO0FBQzFCLENBQUM7QUFFRCxpRUFBZUssWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXdpdGgtdHlwZXNjcmlwdC8uL3NlcnZlci9hcG9sbG8uanM/ZmM3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZX0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5jb25zdCBBUElfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VSVkVSX1VSTH0vZ3JhcGhxbGA7XHJcblxyXG5jb25zdCBhcG9sbG9DbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICB1cmk6IEFQSV9VUkksXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBvbGxvQ2xpZW50O1xyXG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIkFQSV9VUkkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0VSVkVSX1VSTCIsImFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/apollo.js\n");

/***/ }),

/***/ "./src/createEmotionCache.ts":
/*!***********************************!*\
  !*** ./src/createEmotionCache.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-plugin-rtl */ \"stylis-plugin-rtl\");\n/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction createEmotionCache() {\n    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n        key: \"muirtl\",\n        stylisPlugins: [\n            (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_1___default())\n        ]\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ0M7QUFDMUIsUUFBUSxDQUFDRSxrQkFBa0IsR0FBRyxDQUFDO0lBQzVDLE1BQU0sQ0FBQ0YscURBQVcsQ0FBQyxDQUFDO1FBQUNHLEdBQUcsRUFBRSxDQUFRO1FBQUVDLGFBQWEsRUFBRSxDQUFDSDtZQUFBQSwwREFBUztRQUFBLENBQUM7SUFBQyxDQUFDO0FBQ2xFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NyZWF0ZUVtb3Rpb25DYWNoZS50cz85MTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tIFwiQGVtb3Rpb24vY2FjaGVcIjtcbmltcG9ydCBydGxQbHVnaW4gZnJvbSBcInN0eWxpcy1wbHVnaW4tcnRsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogXCJtdWlydGxcIiwgc3R5bGlzUGx1Z2luczogW3J0bFBsdWdpbl0gfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJydGxQbHVnaW4iLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJrZXkiLCJzdHlsaXNQbHVnaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/createEmotionCache.ts\n");

/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    direction: \"rtl\",\n    typography: {\n        fontFamily: \"Hezareh\",\n        fontSize: 15\n    },\n    palette: {\n        primary: {\n            main: '#556cd6'\n        },\n        secondary: {\n            main: '#19857b'\n        },\n        error: {\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFa0Q7QUFDUjtBQUUxQyxFQUEyQjtBQUMzQixLQUFLLENBQUNFLEtBQUssR0FBR0YsaUVBQVcsQ0FBQyxDQUFDO0lBQ3pCRyxTQUFTLEVBQUUsQ0FBSztJQUNoQkMsVUFBVSxFQUFFLENBQUM7UUFDWEMsVUFBVSxFQUFFLENBQVM7UUFDckJDLFFBQVEsRUFBRSxFQUFFO0lBQ2QsQ0FBQztJQUNEQyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxPQUFPLEVBQUUsQ0FBQztZQUNSQyxJQUFJLEVBQUUsQ0FBUztRQUNqQixDQUFDO1FBQ0RDLFNBQVMsRUFBRSxDQUFDO1lBQ1ZELElBQUksRUFBRSxDQUFTO1FBQ2pCLENBQUM7UUFDREUsS0FBSyxFQUFFLENBQUM7WUFDTkYsSUFBSSxFQUFFUiwwREFBUTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXdpdGgtdHlwZXNjcmlwdC8uL3NyYy90aGVtZS50cz9kYzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHt9IGZyb20gJ0BtdWkvbGFiL3RoZW1lQXVnbWVudGF0aW9uJztcblxuaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycyc7XG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIGRpcmVjdGlvbjogXCJydGxcIixcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFwiSGV6YXJlaFwiLFxuICAgIGZvbnRTaXplOiAxNVxuICB9LFxuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyM1NTZjZDYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzE5ODU3YicsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInJlZCIsInRoZW1lIiwiZGlyZWN0aW9uIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwiQTQwMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.ts\n");

/***/ }),

/***/ "./store/compareSlice.ts":
/*!*******************************!*\
  !*** ./store/compareSlice.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemAdded\": () => (/* binding */ itemAdded),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: [],\n    status: \"idle\",\n    error: \"\"\n};\nconst compareSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"compare\",\n    initialState,\n    reducers: {\n        itemAdded: (state, action)=>{\n            state.items.push(action.payload);\n        },\n        itemRemoved: (state, action)=>{\n            state.items.pop();\n        }\n    }\n});\nconst { itemAdded  } = compareSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jb21wYXJlU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQU83RCxLQUFLLENBQUNDLFlBQVksR0FBWSxDQUFDO0lBQzdCQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ1RDLE1BQU0sRUFBRSxDQUFNO0lBQ2RDLEtBQUssRUFBRSxDQUFFO0FBQ1gsQ0FBQztBQUVELEtBQUssQ0FBQ0MsWUFBWSxHQUFHTCw2REFBVyxDQUFDLENBQUM7SUFDaENNLElBQUksRUFBRSxDQUFTO0lBQ2ZMLFlBQVk7SUFDWk0sUUFBUSxFQUFFLENBQUM7UUFDVEMsU0FBUyxHQUFHQyxLQUFLLEVBQUVDLE1BQTZCLEdBQUssQ0FBQztZQUNwREQsS0FBSyxDQUFDUCxLQUFLLENBQUNTLElBQUksQ0FBQ0QsTUFBTSxDQUFDRSxPQUFPO1FBQ2pDLENBQUM7UUFDREMsV0FBVyxHQUFHSixLQUFLLEVBQUVDLE1BQTZCLEdBQUssQ0FBQztZQUN0REQsS0FBSyxDQUFDUCxLQUFLLENBQUNZLEdBQUc7UUFDakIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxDQUFDLENBQUMsQ0FBQ04sU0FBUyxFQUFDLENBQUMsR0FBR0gsWUFBWSxDQUFDVSxPQUFPO0FBQ2pELGlFQUFlVixZQUFZLENBQUNXLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9zdG9yZS9jb21wYXJlU2xpY2UudHM/NTliMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbnRlcmZhY2UgQ29tcGFyZSB7XG4gIGl0ZW1zOiBvYmplY3RbXTtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIGVycm9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQ29tcGFyZSA9IHtcbiAgaXRlbXM6IFtdLFxuICBzdGF0dXM6IFwiaWRsZVwiLFxuICBlcnJvcjogXCJcIixcbn07XG5cbmNvbnN0IGNvbXBhcmVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjb21wYXJlXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBpdGVtQWRkZWQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG9iamVjdD4pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgIH0sXG4gICAgaXRlbVJlbW92ZWQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG9iamVjdD4pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zLnBvcCgpO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgaXRlbUFkZGVkIH0gPSBjb21wYXJlU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmVTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJzdGF0dXMiLCJlcnJvciIsImNvbXBhcmVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsIml0ZW1BZGRlZCIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJpdGVtUmVtb3ZlZCIsInBvcCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/compareSlice.ts\n");

/***/ }),

/***/ "./store/shopingCartSlice.ts":
/*!***********************************!*\
  !*** ./store/shopingCartSlice.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectProductById\": () => (/* binding */ selectProductById),\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart),\n/* harmony export */   \"removeFromCard\": () => (/* binding */ removeFromCard),\n/* harmony export */   \"selectCart\": () => (/* binding */ selectCart),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: [],\n    status: \"idle\",\n    error: \"\"\n};\nconst shopingCartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"shopingCart\",\n    initialState,\n    reducers: {\n        addToCart: (state, action)=>{\n            state.items.push(action.payload);\n        },\n        removeFromCard: (state, action)=>{\n            state.items = state.items.filter((element)=>element.id != action.payload.id\n            );\n        }\n    }\n});\n// Check Product to be in the shopingCart\nconst selectProductById = (state, productId)=>{\n    if (state.shopingCart.items) {\n        return state.shopingCart.items.find((product)=>product.id === productId\n        );\n    } else {\n        return undefined;\n    }\n};\nconst { addToCart , removeFromCard  } = shopingCartSlice.actions;\n// Other code such as selectors can use the imported `RootState` type\nconst selectCart = (state)=>state\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopingCartSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zaG9waW5nQ2FydFNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkQ7QUFXN0QsS0FBSyxDQUFDQyxZQUFZLEdBQWdCLENBQUM7SUFDakNDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDVEMsTUFBTSxFQUFFLENBQU07SUFDZEMsS0FBSyxFQUFFLENBQUU7QUFDWCxDQUFDO0FBQ0QsS0FBSyxDQUFDQyxnQkFBZ0IsR0FBR0wsNkRBQVcsQ0FBQyxDQUFDO0lBQ3BDTSxJQUFJLEVBQUUsQ0FBYTtJQUNuQkwsWUFBWTtJQUNaTSxRQUFRLEVBQUUsQ0FBQztRQUNUQyxTQUFTLEdBQUdDLEtBQUssRUFBRUMsTUFBa0MsR0FBSyxDQUFDO1lBQ3pERCxLQUFLLENBQUNQLEtBQUssQ0FBQ1MsSUFBSSxDQUFDRCxNQUFNLENBQUNFLE9BQU87UUFDakMsQ0FBQztRQUNEQyxjQUFjLEdBQUdKLEtBQUssRUFBRUMsTUFBa0MsR0FBSyxDQUFDO1lBQzlERCxLQUFLLENBQUNQLEtBQUssR0FBR08sS0FBSyxDQUFDUCxLQUFLLENBQUNZLE1BQU0sRUFBRUMsT0FBTyxHQUFLQSxPQUFPLENBQUNDLEVBQUUsSUFBSU4sTUFBTSxDQUFDRSxPQUFPLENBQUNJLEVBQUU7O1FBQy9FLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQXlDO0FBQ2xDLEtBQUssQ0FBQ0MsaUJBQWlCLElBQUlSLEtBQWdCLEVBQUVTLFNBQWlCLEdBQUssQ0FBQztJQUN6RSxFQUFFLEVBQUVULEtBQUssQ0FBQ1UsV0FBVyxDQUFDakIsS0FBSyxFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDTyxLQUFLLENBQUNVLFdBQVcsQ0FBQ2pCLEtBQUssQ0FBQ2tCLElBQUksRUFBRUMsT0FBTyxHQUFLQSxPQUFPLENBQUNMLEVBQUUsS0FBS0UsU0FBUzs7SUFDM0UsQ0FBQyxNQUFNLENBQUM7UUFDTixNQUFNLENBQUNJLFNBQVM7SUFDbEIsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUMsQ0FBQyxDQUFDZCxTQUFTLEdBQUVLLGNBQWMsRUFBQyxDQUFDLEdBQUdSLGdCQUFnQixDQUFDa0IsT0FBTztBQUVyRSxFQUFxRTtBQUM5RCxLQUFLLENBQUNDLFVBQVUsSUFBSWYsS0FBZ0IsR0FBS0EsS0FBSzs7QUFFckQsaUVBQWVKLGdCQUFnQixDQUFDb0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXdpdGgtdHlwZXNjcmlwdC8uL3N0b3JlL3Nob3BpbmdDYXJ0U2xpY2UudHM/YjZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmltcG9ydCB7IFByb2R1Y3RJbmZvIH0gZnJvbSBcIi4uL1R5cGVzL1R5cGVzXCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuXG5pbnRlcmZhY2UgU2hvcGluZ0NhcnQge1xuICBpdGVtczogUHJvZHVjdEluZm9bXTtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIGVycm9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogU2hvcGluZ0NhcnQgPSB7XG4gIGl0ZW1zOiBbXSxcbiAgc3RhdHVzOiBcImlkbGVcIixcbiAgZXJyb3I6IFwiXCIsXG59O1xuY29uc3Qgc2hvcGluZ0NhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJzaG9waW5nQ2FydFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkVG9DYXJ0OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9kdWN0SW5mbz4pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgIH0sXG4gICAgcmVtb3ZlRnJvbUNhcmQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFByb2R1Y3RJbmZvPikgPT4ge1xuICAgICAgc3RhdGUuaXRlbXMgPSBzdGF0ZS5pdGVtcy5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgIT0gYWN0aW9uLnBheWxvYWQuaWQpO1xuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gQ2hlY2sgUHJvZHVjdCB0byBiZSBpbiB0aGUgc2hvcGluZ0NhcnRcbmV4cG9ydCBjb25zdCBzZWxlY3RQcm9kdWN0QnlJZCA9IChzdGF0ZTogUm9vdFN0YXRlLCBwcm9kdWN0SWQ6IG51bWJlcikgPT4ge1xuICBpZiAoc3RhdGUuc2hvcGluZ0NhcnQuaXRlbXMpIHtcbiAgICByZXR1cm4gc3RhdGUuc2hvcGluZ0NhcnQuaXRlbXMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gcHJvZHVjdElkKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgeyBhZGRUb0NhcnQsIHJlbW92ZUZyb21DYXJkIH0gPSBzaG9waW5nQ2FydFNsaWNlLmFjdGlvbnM7XG5cbi8vIE90aGVyIGNvZGUgc3VjaCBhcyBzZWxlY3RvcnMgY2FuIHVzZSB0aGUgaW1wb3J0ZWQgYFJvb3RTdGF0ZWAgdHlwZVxuZXhwb3J0IGNvbnN0IHNlbGVjdENhcnQgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGU7XG5cbmV4cG9ydCBkZWZhdWx0IHNob3BpbmdDYXJ0U2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwic3RhdHVzIiwiZXJyb3IiLCJzaG9waW5nQ2FydFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9DYXJ0Iiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsInJlbW92ZUZyb21DYXJkIiwiZmlsdGVyIiwiZWxlbWVudCIsImlkIiwic2VsZWN0UHJvZHVjdEJ5SWQiLCJwcm9kdWN0SWQiLCJzaG9waW5nQ2FydCIsImZpbmQiLCJwcm9kdWN0IiwidW5kZWZpbmVkIiwiYWN0aW9ucyIsInNlbGVjdENhcnQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/shopingCartSlice.ts\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _compareSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compareSlice */ \"./store/compareSlice.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopingCartSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopingCartSlice */ \"./store/shopingCartSlice.ts\");\n/* harmony import */ var _wishlistSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlistSlice */ \"./store/wishlistSlice.ts\");\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({\n    reducer: {\n        shopingCart: _shopingCartSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        wishlist: _wishlistSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        compare: _compareSlice__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDTTtBQUNFO0FBQ047QUFDN0MsS0FBSyxDQUFDSSxLQUFLLEdBQUdILGdFQUFjLENBQUMsQ0FBQztJQUM1QkksT0FBTyxFQUFFLENBQUM7UUFDUkMsV0FBVyxFQUFFSix5REFBa0I7UUFDL0JLLFFBQVEsRUFBRUosc0RBQWU7UUFDekJLLE9BQU8sRUFBRVIscURBQWM7SUFDekIsQ0FBQztBQUNILENBQUM7QUFTRCxpRUFBZUksS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXdpdGgtdHlwZXNjcmlwdC8uL3N0b3JlL3N0b3JlLnRzPzEyZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbXBhcmVSZWR1Y2VyIGZyb20gXCIuL2NvbXBhcmVTbGljZVwiXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgc2hvcGluZ0NhcnRSZWR1Y2VyIGZyb20gXCIuL3Nob3BpbmdDYXJ0U2xpY2VcIjtcbmltcG9ydCB3aXNobGlzdFJlZHVjZXIgZnJvbSAnLi93aXNobGlzdFNsaWNlJ1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBzaG9waW5nQ2FydDogc2hvcGluZ0NhcnRSZWR1Y2VyLFxuICAgIHdpc2hsaXN0OiB3aXNobGlzdFJlZHVjZXIsXG4gICAgY29tcGFyZTogY29tcGFyZVJlZHVjZXIsXG4gIH0sXG59KTtcblxuXG5cblxuLy8gSW5mZXIgdGhlIGBSb290U3RhdGVgIGFuZCBgQXBwRGlzcGF0Y2hgIHR5cGVzIGZyb20gdGhlIHN0b3JlIGl0c2VsZlxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuLy8gSW5mZXJyZWQgdHlwZToge3Bvc3RzOiBQb3N0c1N0YXRlLCBjb21tZW50czogQ29tbWVudHNTdGF0ZSwgdXNlcnM6IFVzZXJzU3RhdGV9XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIl0sIm5hbWVzIjpbImNvbXBhcmVSZWR1Y2VyIiwiY29uZmlndXJlU3RvcmUiLCJzaG9waW5nQ2FydFJlZHVjZXIiLCJ3aXNobGlzdFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJzaG9waW5nQ2FydCIsIndpc2hsaXN0IiwiY29tcGFyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.ts\n");

/***/ }),

/***/ "./store/wishlistSlice.ts":
/*!********************************!*\
  !*** ./store/wishlistSlice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectProductById\": () => (/* binding */ selectProductById),\n/* harmony export */   \"itemAdded\": () => (/* binding */ itemAdded),\n/* harmony export */   \"itemRemoved\": () => (/* binding */ itemRemoved),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: [],\n    status: \"idle\",\n    error: \"\"\n};\nconst wishlistSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"wishlist\",\n    initialState,\n    reducers: {\n        itemAdded: (state, action)=>{\n            state.items.push(action.payload);\n        },\n        itemRemoved: (state, action)=>{\n            state.items = state.items.filter((element)=>element.id !== action.payload.id\n            );\n        }\n    }\n});\n// Check Product to be in the wishlist\nconst selectProductById = (state, productId)=>{\n    if (state.shopingCart.items) {\n        if (state.shopingCart.items.find((product)=>product.id === productId\n        )) {\n            return true;\n        } else {\n            return false;\n        }\n    } else {\n        return undefined;\n    }\n};\nconst { itemAdded , itemRemoved  } = wishlistSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishlistSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS93aXNobGlzdFNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2RDtBQVc3RCxLQUFLLENBQUNDLFlBQVksR0FBYSxDQUFDO0lBQzlCQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ1RDLE1BQU0sRUFBRSxDQUFNO0lBQ2RDLEtBQUssRUFBRSxDQUFFO0FBQ1gsQ0FBQztBQUVELEtBQUssQ0FBQ0MsYUFBYSxHQUFHTCw2REFBVyxDQUFDLENBQUM7SUFDakNNLElBQUksRUFBRSxDQUFVO0lBQ2hCTCxZQUFZO0lBQ1pNLFFBQVEsRUFBRSxDQUFDO1FBQ1RDLFNBQVMsR0FBR0MsS0FBSyxFQUFFQyxNQUFrQyxHQUFLLENBQUM7WUFDekRELEtBQUssQ0FBQ1AsS0FBSyxDQUFDUyxJQUFJLENBQUNELE1BQU0sQ0FBQ0UsT0FBTztRQUNqQyxDQUFDO1FBQ0RDLFdBQVcsR0FBR0osS0FBSyxFQUFFQyxNQUFrQyxHQUFLLENBQUM7WUFDM0RELEtBQUssQ0FBQ1AsS0FBSyxHQUFHTyxLQUFLLENBQUNQLEtBQUssQ0FBQ1ksTUFBTSxFQUFFQyxPQUFPLEdBQUtBLE9BQU8sQ0FBQ0MsRUFBRSxLQUFLTixNQUFNLENBQUNFLE9BQU8sQ0FBQ0ksRUFBRTs7UUFDaEYsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsRUFBc0M7QUFDL0IsS0FBSyxDQUFDQyxpQkFBaUIsSUFBSVIsS0FBZ0IsRUFBRVMsU0FBaUIsR0FBSyxDQUFDO0lBQ3pFLEVBQUUsRUFBRVQsS0FBSyxDQUFDVSxXQUFXLENBQUNqQixLQUFLLEVBQUUsQ0FBQztRQUM1QixFQUFFLEVBQUVPLEtBQUssQ0FBQ1UsV0FBVyxDQUFDakIsS0FBSyxDQUFDa0IsSUFBSSxFQUFFQyxPQUFPLEdBQUtBLE9BQU8sQ0FBQ0wsRUFBRSxLQUFLRSxTQUFTO1dBQUcsQ0FBQztZQUN4RSxNQUFNLENBQUMsSUFBSTtRQUNiLENBQUMsTUFBTSxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUs7UUFDZCxDQUFDO0lBQ0gsQ0FBQyxNQUFNLENBQUM7UUFDTixNQUFNLENBQUNJLFNBQVM7SUFDbEIsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUMsQ0FBQyxDQUFDZCxTQUFTLEdBQUVLLFdBQVcsRUFBQyxDQUFDLEdBQUdSLGFBQWEsQ0FBQ2tCLE9BQU87QUFDL0QsaUVBQWVsQixhQUFhLENBQUNtQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vc3RvcmUvd2lzaGxpc3RTbGljZS50cz8yYzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuaW1wb3J0IHsgUHJvZHVjdEluZm8gfSBmcm9tIFwiLi4vVHlwZXMvVHlwZXNcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuL3N0b3JlXCI7XG5cbmludGVyZmFjZSBXaXNobGlzdCB7XG4gIGl0ZW1zOiBQcm9kdWN0SW5mb1tdO1xuICBzdGF0dXM6IHN0cmluZztcbiAgZXJyb3I6IHN0cmluZztcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBXaXNobGlzdCA9IHtcbiAgaXRlbXM6IFtdLFxuICBzdGF0dXM6IFwiaWRsZVwiLFxuICBlcnJvcjogXCJcIixcbn07XG5cbmNvbnN0IHdpc2hsaXN0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwid2lzaGxpc3RcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIGl0ZW1BZGRlZDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UHJvZHVjdEluZm8+KSA9PiB7XG4gICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICB9LFxuICAgIGl0ZW1SZW1vdmVkOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9kdWN0SW5mbz4pID0+IHtcbiAgICAgIHN0YXRlLml0ZW1zID0gc3RhdGUuaXRlbXMuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCk7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vLyBDaGVjayBQcm9kdWN0IHRvIGJlIGluIHRoZSB3aXNobGlzdFxuZXhwb3J0IGNvbnN0IHNlbGVjdFByb2R1Y3RCeUlkID0gKHN0YXRlOiBSb290U3RhdGUsIHByb2R1Y3RJZDogbnVtYmVyKSA9PiB7XG4gIGlmIChzdGF0ZS5zaG9waW5nQ2FydC5pdGVtcykge1xuICAgIGlmIChzdGF0ZS5zaG9waW5nQ2FydC5pdGVtcy5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBwcm9kdWN0SWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgeyBpdGVtQWRkZWQsIGl0ZW1SZW1vdmVkIH0gPSB3aXNobGlzdFNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCB3aXNobGlzdFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsInN0YXR1cyIsImVycm9yIiwid2lzaGxpc3RTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsIml0ZW1BZGRlZCIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJpdGVtUmVtb3ZlZCIsImZpbHRlciIsImVsZW1lbnQiLCJpZCIsInNlbGVjdFByb2R1Y3RCeUlkIiwicHJvZHVjdElkIiwic2hvcGluZ0NhcnQiLCJmaW5kIiwicHJvZHVjdCIsInVuZGVmaW5lZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/wishlistSlice.ts\n");

/***/ }),

/***/ "./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css":
/*!************************************************************!*\
  !*** ./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/flickity.min.css":
/*!*************************************!*\
  !*** ./public/css/flickity.min.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/fonts-hezareh.css":
/*!**************************************!*\
  !*** ./public/css/fonts-hezareh.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stylis-plugin-rtl":
/*!************************************!*\
  !*** external "stylis-plugin-rtl" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("stylis-plugin-rtl");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();